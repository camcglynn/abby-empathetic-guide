
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const QuickExit = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        variant="destructive" 
        size="sm"
        className="rounded-full gap-1 items-center shadow-soft hover:shadow-md transition-all duration-300 hover:scale-105"
        onClick={handleExit}
      >
        <X size={16} />
        <span>Quick Exit</span>
      </Button>
    </div>
  );
};

export default QuickExit;
