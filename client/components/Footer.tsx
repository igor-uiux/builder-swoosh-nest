import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ThreadCo</h3>
            <p className="text-gray-400 text-sm">
              Premium quality T-shirts crafted with care. Sustainable fashion for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/shop" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Shop All
              </Link>
              <Link to="/collections" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Collections
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="space-y-2">
              <Link to="/shipping" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Returns & Exchanges
              </Link>
              <Link to="/size-guide" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Size Guide
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">hello@threadco.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ThreadCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
