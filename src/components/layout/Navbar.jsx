import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">BikeElite</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#welcome" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-blue-600"/> : <Menu className="text-blue-600"/>}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#welcome" className="block text-gray-600 hover:text-blue-600 py-2">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 py-2">About</a>
            <a href="#products" className="block text-gray-600 hover:text-blue-600 py-2">Products</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-blue-600 py-2">Testimonials</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;