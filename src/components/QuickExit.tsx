
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
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-2 flex justify-between items-center">
      <div className="text-sm">Press ESC or click the button to quickly leave this page.</div>
      <Button 
        variant="destructive" 
        size="sm"
        className="rounded-md bg-red-500 hover:bg-red-600 flex items-center gap-1"
        onClick={handleExit}
      >
        <X size={14} />
        <span>Exit Now</span>
      </Button>
    </div>
  );
};

export default QuickExit;
