
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-slate-900">404</h1>
        <p className="text-xl text-slate-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="rounded-full font-medium bg-abby-600 hover:bg-abby-600/90">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
