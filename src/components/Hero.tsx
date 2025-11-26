import { Crown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#2C3E50] text-white py-20 md:py-32">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758977404372-3b4b8adf7f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2Mzk4MDYzOHww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-20 md:w-32 bg-[#C4A571]" />
            <Crown className="h-8 w-8 text-[#C4A571]" />
            <div className="h-px w-20 md:w-32 bg-[#C4A571]" />
          </div>
        </div>
        
        <h1 className="mb-4 text-white">Dine In Style</h1>
        <p className="text-[#C4A571] mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          LET US BRING STYLE TO YOUR TABLE
        </p>
        <p className="text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base px-4">
          Discover our exquisite collection of premium cutlery, elegant dinnerware, 
          and sophisticated table accessories. Every piece is carefully selected to 
          elevate your dining experience.
        </p>
        
        <Button 
          onClick={scrollToProducts}
          className="bg-[#C4A571] hover:bg-[#B39560] text-white px-6 md:px-8 py-5 md:py-6 touch-manipulation"
        >
          Browse Our Collection
        </Button>
      </div>
    </div>
  );
}