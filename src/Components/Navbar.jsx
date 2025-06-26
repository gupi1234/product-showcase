import React from "react";
import {
  FaShoppingBag,
  FaHome,
  FaFilter,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/cart";

  return (
    <header className="bg-white shadow-md px-4 py-3 sticky top-0 z-50 border-b sm:px-6 xl:px-32     border-gray-100">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaShoppingBag className="text-blue-500" /> MyShop
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => navigate("/")}
            className={`focus:outline-none ${
              isHome ? "text-blue-600" : "text-gray-700 cursor-pointer"
            }`}
          >
            <FaHome size={20} />
          </button>

          <button
            onClick={() => navigate("/cart")}
            className={`focus:outline-none relative ${
              isCart ? "text-blue-600" : "text-gray-700 cursor-pointer"
            }`}
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-4 -right-3 text-xs bg-red-500 text-white px-1 py-0.5 rounded-full cursor-pointer shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-base font-medium">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
              isHome ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <FaHome /> Home
          </button>

          <button
            onClick={() => navigate("/cart")}
            className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 relative ${
              isCart ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <FaShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 text-xs bg-red-500 text-white px-1 cursor-pointer py-0.5 rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
