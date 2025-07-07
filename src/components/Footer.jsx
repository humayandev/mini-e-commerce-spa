import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MiniECommerceSpa</h2>
            <p className="text-gray-400 max-w-xs">
              Your one-stop shop for everything you love. Quality. Trust.
              Delivered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          &copy; {currentYear} MiniECommerceSpa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
