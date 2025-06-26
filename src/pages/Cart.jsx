import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const formattedTotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(total * 85);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <img
            src="src/assets/cart-empty.png"
            alt="Empty cart"
            className="w-24 h-24 opacity-70 mb-4 mx-auto"
          />
          <p className="text-xl font-semibold text-gray-600">
            Your cart is empty.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Looks like you haven’t added anything yet!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
      inline-flex items-center gap-2
      bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900
      text-white text-base md:text-lg font-medium
      px-4 py-2 rounded-full
      shadow-md hover:shadow-lg
      hover:scale-105 active:scale-95
      focus:outline-none focus:ring-4 focus:ring-neutral-600/50
      transition-all duration-200 cursor-pointer
    "
        >
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Shopping Cart
          </h1>

          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item.price * 85)}
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <button
                    onClick={() => dispatch(decrementQty(item.id))}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQty(item.id))}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm text-red-600 hover:underline cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="w-full md:w-auto bg-red-600 text-white cursor-pointer px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <h2 className="text-xl font-semibold text-gray-800 text-center md:text-left">
                Total: {formattedTotal}
              </h2>
              <button
                onClick={() => alert("Purchase successful! (dummy logic)")}
                className="w-full md:w-auto bg-green-600 text-white cursor-pointer px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
