
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import QuickExit from './QuickExit';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <QuickExit />
      <Navigation />
      <main className="flex-grow pt-20 animate-fade-in">
        {children}
      </main>
      <footer className="bg-slate-50 border-t border-slate-100 py-6 px-6">
        <div className="max-w-7xl mx-auto text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Abby • All rights reserved</div>
          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-abby-600 transition-colors">Privacy Policy</a>
            <a href="/faq" className="hover:text-abby-600 transition-colors">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
