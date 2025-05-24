import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              K2EdTech
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Courses', 'Features', 'Pricing', 'Resources', 'Community'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <Button variant="primary" size="sm">Sign In</Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {['Courses', 'Features', 'Pricing', 'Resources', 'Community'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 font-medium hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="primary" size="sm" className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar