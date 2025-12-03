import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  darkMode: boolean;
  onNavigate: (page: string) => void;
}

export default function Footer({ darkMode, onNavigate }: FooterProps) {
  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo variant={darkMode ? 'gradient' : 'gradient'} size="md" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Flavora Bistro
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Crafted flavors. Modern dining.
                </p>
              </div>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 max-w-md`}>
              Experience culinary excellence with fresh ingredients, expert chefs, and a modern ambiance. Your perfect dining destination.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Us</h4>
            <ul className="space-y-3">
              <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin size={18} className="text-pink-500" />
                <span className="text-sm">123 Culinary Street, Food City</span>
              </li>
              <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Phone size={18} className="text-purple-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Mail size={18} className="text-orange-500" />
                <span className="text-sm">hello@flavorabistro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-center ${darkMode ? 'text-gray-500' : 'text-gray-600'} text-sm`}>
            © 2024 Flavora Bistro. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
