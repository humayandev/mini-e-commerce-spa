import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();

  // Total items in cart (sum of all quantities)
  const cartItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">MiniECommerceSpa</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart" className="relative text-gray-700 hover:text-gray-900 text-xl">
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link to="/account" className="text-gray-700 hover:text-gray-900 text-xl">
            <FaUser />
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/shop" className="block text-gray-700 hover:text-gray-900">Shop</Link>
          <Link to="/about" className="block text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
