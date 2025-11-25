import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { OrderCart } from './components/OrderCart';
import { OrderSummary, CartItem } from './components/OrderSummary';
import { products, categories, Product } from './data/products';
import { Mail, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        // Add new item
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productId)
    );
  };

  const totalItemsInCart = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section id="products">
          <div className="text-center mb-12">
            <h2 className="text-[#2C3E50] mb-4">Our Collection</h2>
            <p className="text-gray-600 mb-8">
              Browse through our carefully curated selection of premium dining essentials
            </p>
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[#C4A571] mb-4">Dine In Style</h3>
              <p className="text-gray-300 text-sm">
                Bringing elegance and sophistication to your dining table with our premium collection of cutlery and tableware.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#C4A571] mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:dineinstyle2021@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  dineinstyle2021@gmail.com
                </a>
                <a 
                  href="https://wa.me/447308886291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  +44 7308 886 291
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[#C4A571] mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== 'All').map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        setActiveCategory(category);
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Dine In Style. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <OrderCart 
        itemCount={totalItemsInCart}
        onClick={() => setIsOrderSummaryOpen(true)}
      />

      <OrderSummary 
        isOpen={isOrderSummaryOpen}
        onClose={() => setIsOrderSummaryOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
