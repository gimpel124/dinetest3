import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from '../data/products';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Badge className="absolute top-2 left-2 z-10 bg-[#2C3E50] text-white">
          {product.itemNumber}
        </Badge>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-3 md:p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="flex-1 text-sm md:text-base">{product.name}</h3>
          <span className="text-[#C4A571] shrink-0">{product.price}</span>
        </div>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs md:text-sm text-gray-700">
          {product.category}
        </span>
      </CardContent>
      <CardFooter className="p-3 md:p-4 pt-0 flex-col gap-3">
        <div className="flex items-center justify-center gap-3 w-full">
          <Button
            variant="outline"
            size="sm"
            onClick={decrementQuantity}
            className="h-9 w-9 p-0 touch-manipulation"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-lg min-w-[3rem] text-center">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={incrementQuantity}
            className="h-9 w-9 p-0 touch-manipulation"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          onClick={handleAddToCart}
          className={`w-full touch-manipulation transition-colors ${
            isAdded 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-[#2C3E50] hover:bg-[#34495E]'
          }`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isAdded ? 'Added!' : 'Add to Order'}
        </Button>
      </CardFooter>
    </Card>
  );
}
