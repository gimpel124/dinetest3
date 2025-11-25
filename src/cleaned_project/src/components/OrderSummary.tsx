import { Product } from '../data/products';
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface OrderSummaryProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function OrderSummary({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}: OrderSummaryProps) {
  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';
    
    let message = '🛒 *New Order from Dine In Style Website*\n\n';
    message += '*Order Details:*\n';
    message += '─────────────────\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Item #: ${item.product.itemNumber}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${item.product.price} each\n\n`;
    });
    
    message += '─────────────────\n';
    message += `Total Items: ${cartItems.reduce((sum, item) => sum + item.quantity, 0)}\n\n`;
    message += '📱 Please confirm availability and total price.\n';
    message += 'Thank you!';
    
    return message;
  };

  const handleSendOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappLink = `https://wa.me/447308886291?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-[#2C3E50] flex items-center justify-between">
            Your Order
            <Button variant="ghost" size="sm" onClick={onClose} className="touch-manipulation">
              <X className="h-5 w-5" />
            </Button>
          </SheetTitle>
          <SheetDescription>
            Review your order and send it via WhatsApp
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Your order is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add items to get started</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div 
                  key={item.product.id} 
                  className="border rounded-lg p-3 md:p-4 space-y-3"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm md:text-base truncate">{item.product.name}</h4>
                      <p className="text-xs text-gray-500">{item.product.itemNumber}</p>
                      <p className="text-[#C4A571] mt-1">{item.product.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 p-0 touch-manipulation"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm min-w-[2.5rem] text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 p-0 touch-manipulation"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 touch-manipulation"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Total Items:</span>
                  <span>{totalItems}</span>
                </div>
                
                <Button
                  onClick={handleSendOrder}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 touch-manipulation"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Order via WhatsApp
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  You'll be redirected to WhatsApp with your order details
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}