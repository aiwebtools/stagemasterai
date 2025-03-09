
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-stage-dark min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-md mx-auto glass-card p-10 relative">
            <h1 className="headline text-6xl mb-4 text-gold-gradient">404</h1>
            <p className="text-xl text-white/80 mb-6">
              Oops! The page you're looking for has exited stage left.
            </p>
            <a 
              href="/" 
              className="interactive-button bg-gold-gradient inline-flex items-center gap-2"
            >
              <Home size={16} />
              <span className="text-stage-dark font-semibold">Return to Homepage</span>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
