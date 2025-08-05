
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-sm border-b border-blue-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
                 <img 
              src="/lovable-uploads/84003fdb-4481-45db-89c7-ef29b876e71200.png" 
              alt="VIZMORA" 
              className="h-8 w-auto"
            />
          </Link>
        

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-blue-600/10">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-blue-600/20">
                <Link to="/login">
                  <Button variant="ghost" className="w-full text-gray-300 hover:text-blue-400 hover:bg-blue-600/10">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


