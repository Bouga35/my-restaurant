import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-serif text-2xl">
            Gusto
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-orange-600 transition-colors">Home</a>
              <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
              <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                Reserve Table
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:text-orange-600">Home</a>
            <a href="#menu" className="block px-3 py-2 hover:text-orange-600">Menu</a>
            <a href="#about" className="block px-3 py-2 hover:text-orange-600">About</a>
            <a href="#contact" className="block px-3 py-2 hover:text-orange-600">Contact</a>
            <button className="w-full text-center bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}