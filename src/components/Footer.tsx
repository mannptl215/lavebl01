
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-blue-600/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
               <img 
              src="/lovable-uploads/84003fdb-4481-45db-89c7-ef29b876e71200.png" 
              alt="VIZMORA" 
              className="h-8 w-auto"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering creators with cutting-edge AI technology. Transform your ideas into reality with our comprehensive suite of AI-powered tools.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Image Enhancement</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Text to Image</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Background Removal</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Video Generation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-blue-400 transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-600/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VIZMORA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


