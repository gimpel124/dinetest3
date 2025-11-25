import { useState, useEffect } from 'react';
import { MessageCircle, Mail, Crown } from 'lucide-react';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled down more than 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`bg-[#2C3E50] text-white py-4 sticky top-0 z-50 shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <Crown className="h-8 w-8 md:h-10 md:w-10 text-[#C4A571]" />
              <span className="text-xl md:text-2xl text-[#C4A571]">Dine In Style</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="mailto:dineinstyle2021@gmail.com" 
              className="hidden md:flex items-center gap-2 hover:text-[#C4A571] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">dineinstyle2021@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/447308886291" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] px-3 md:px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">07308 886 291</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}