import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">MiniECommerceSpa</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="/shop" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="/cart" className="text-gray-700 hover:text-gray-900 text-xl">
            <FaShoppingCart />
          </a>
          <a href="/account" className="text-gray-700 hover:text-gray-900 text-xl">
            <FaUser />
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-gray-900">Home</a>
          <a href="/shop" className="block text-gray-700 hover:text-gray-900">Shop</a>
          <a href="/about" className="block text-gray-700 hover:text-gray-900">About</a>
          <a href="/contact" className="block text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
