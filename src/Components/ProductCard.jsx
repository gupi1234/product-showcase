import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const usdToInrRate = 85;
  const inrPrice = product.price * usdToInrRate;

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
      <img
        onClick={() => navigate(`/product/${product.id}`)}
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>

        {/*  Converted and formatted INR price */}
        <p className="text-blue-600 font-bold text-md">{formatINR(inrPrice)}</p>

        <div className="flex items-center text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(product.rating?.rate || 0) ? "" : "opacity-30"
              }
            />
          ))}
          <span className="text-sm ml-2 text-gray-500">
            ({product.rating?.count})
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
        >
          <FiShoppingCart className="text-lg" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
