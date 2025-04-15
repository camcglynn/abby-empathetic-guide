
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // Get the base URL from the import.meta object to handle both development and production
  const baseUrl = import.meta.env.BASE_URL;

  const routes = [
    { name: 'Home', path: '/' },
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
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 py-4 border-b",
        scrolled ? "bg-white shadow-sm" : "bg-white"
      )}
      style={{ marginTop: '36px' }} // Add space for QuickExit
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="font-serif text-xl font-medium text-black flex items-center gap-2"
        >
          <img 
            src={`${baseUrl}lovable-uploads/5c7322c8-233e-4943-9631-e58ba8ebc4be.png`} 
            alt="Abby Logo" 
            className="h-8 w-auto" 
          />
          Abby
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            {routes.slice(1).map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  location.pathname === route.path
                    ? "text-abby-600"
                    : "text-slate-600 hover:text-abby-600"
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>
          
          <Button asChild 
            className="rounded-full font-medium bg-abby-600 text-white hover:bg-abby-600/90"
            size="sm"
          >
            <a href="http://abby-alb-1572042320.us-east-2.elb.amazonaws.com/" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
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
          "fixed inset-0 z-50 bg-white md:hidden flex flex-col justify-center transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: '36px' }} // Account for QuickExit
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
                "px-5 py-3 text-lg font-medium transition-colors duration-200 w-full text-center",
                location.pathname === route.path
                  ? "text-abby-600"
                  : "text-slate-600 hover:text-abby-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
          <Button asChild 
            className="rounded-full font-medium bg-abby-600 text-white hover:bg-abby-600/90 w-full"
          >
            <a href="http://abby-alb-1572042320.us-east-2.elb.amazonaws.com/" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
