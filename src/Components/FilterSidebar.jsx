import React, { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";

const FilterSidebar = ({ onFilterChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [usdMaxPrice, setUsdMaxPrice] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const usdToInrRate = 85;

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Fetch products to determine max price
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        const maxPrice = Math.ceil(Math.max(...products.map((p) => p.price)));
        setUsdMaxPrice(maxPrice);
        setSliderValue(maxPrice);
      });
  }, []);

  // Trigger filter change
  useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      priceRange: [0, sliderValue],
    });
  }, [selectedCategory, sliderValue]);

  const formatINR = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val * usdToInrRate);

  return (
    <div className="p-4 bg-white text-black border border-gray-200 shadow-md rounded-md w-full max-w-xs">
      <h3 className="text-xl flex items-center gap-1 font-semibold mb-4">
        <FiFilter />
        Filters
      </h3>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block font-medium mb-1">Max Price</label>
        <input
          type="range"
          min={1}
          max={usdMaxPrice}
          step={1}
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-700 mt-1">
          Up to <span className="font-semibold">{formatINR(sliderValue)}</span>
        </p>
      </div>
    </div>
  );
};

export default FilterSidebar;
