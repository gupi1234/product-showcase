import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaShoppingBag,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <div
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text cursor-pointer mb-4"
            onClick={() => navigate("/")}
          >
            <FaShoppingBag className="text-blue-500" /> MyShop
          </div>

          <p className="text-sm">
            Your trusted destination for quality tech products. We bring you the
            best gadgets at unbeatable prices.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-1">Quick Links</h3>
          <a href="#products" className="hover:text-white transition">
            Products
          </a>
          <a href="#" className="hover:text-white transition">
            About Us
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-1">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
