import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false); // Track cart state
  const dispatch = useDispatch();
  const usdToInrRate = 85;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddOrView = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      setIsInCart(true);
    }
  };

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  if (!product) {
    return (
      <div className="text-center mt-20 text-lg font-semibold">Loading...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4">
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white text-base md:text-lg font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-neutral-600/50 transition-all duration-200 cursor-pointer"
        >
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-10 p-6">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[400px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-5 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-600">
              {formatINR(product.price * usdToInrRate)}
            </div>

            <div className="flex items-center gap-2 text-yellow-500">
              <AiFillStar className="text-xl" />
              <span className="text-sm font-medium">
                {product.rating?.rate}
                <span className="text-gray-600 ml-1">
                  ({product.rating?.count} reviews)
                </span>
              </span>
            </div>

            <button
              onClick={handleAddOrView}
              className={`mt-2 w-full flex items-center justify-center gap-2 text-white py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition duration-200 ease-in-out cursor-pointer
    ${
      isInCart
        ? "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
        : "bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
    }
  `}
            >
              <FiShoppingCart className="text-lg" />
              {isInCart ? "View Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
