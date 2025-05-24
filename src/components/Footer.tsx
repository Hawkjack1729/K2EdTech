import React from 'react';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-xl">EdTech AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming education through intelligent solutions that enhance learning 
              experiences and outcomes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Outcomes', 'Technology', 'Team', 'Research', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">contact@edtechai.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Education Lane, Innovation District, CA 94103
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest research and developments.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EdTech AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;