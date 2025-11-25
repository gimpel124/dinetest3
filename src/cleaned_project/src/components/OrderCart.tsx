import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface OrderCartProps {
  itemCount: number;
  onClick: () => void;
}

export function OrderCart({ itemCount, onClick }: OrderCartProps) {
  if (itemCount === 0) return null;

  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all z-40 p-0 touch-manipulation"
      aria-label="View cart"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6 md:h-7 md:w-7" />
        <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
          {itemCount}
        </Badge>
      </div>
    </Button>
  );
}
