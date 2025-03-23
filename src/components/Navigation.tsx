
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Chat', path: '/chat' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy', path: '/privacy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display text-xl font-semibold text-abby-700"
        >
          <div className="w-8 h-8 rounded-full bg-abby-100 flex items-center justify-center text-abby-600 overflow-hidden">
            <span className="animate-fade-in">A</span>
          </div>
          <span className="animate-fade-in">Abby</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                location.pathname === route.path
                  ? "text-abby-700 bg-abby-50"
                  : "text-slate-600 hover:text-abby-700 hover:bg-abby-50/50"
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white/95 backdrop-blur-sm md:hidden flex flex-col justify-center transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </Button>
        <div className="flex flex-col items-center space-y-6 p-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "px-5 py-3 text-lg font-medium transition-colors duration-200 rounded-xl w-full text-center",
                location.pathname === route.path
                  ? "text-abby-700 bg-abby-50"
                  : "text-slate-600 hover:text-abby-700 hover:bg-abby-50/50"
              )}
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
