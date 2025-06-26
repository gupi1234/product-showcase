import React, { useState, useEffect } from "react";

import HeroSection from "../Components/HeroSection";

import { FiFilter } from "react-icons/fi";
import ProductCard from "../Components/ProductCard";
import SortOptions from "../Components/SortOptions";
import FilterSidebar from "../Components/FilterSidebar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    category: "all",
    priceRange: [0, 1000],
  });
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const productsPerPage = 10;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let updated = [...products];

    if (filterOptions.category !== "all") {
      updated = updated.filter(
        (product) => product.category === filterOptions.category
      );
    }

    updated = updated.filter(
      (product) => product.price <= filterOptions.priceRange[1]
    );

    if (sortOption === "price-asc") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name") {
      updated.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "popularity") {
      updated.sort((a, b) => b.rating.count - a.rating.count);
    }

    setFiltered(updated);
    setCurrentPage(1);
  }, [filterOptions, sortOption, products]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="flex justify-center items-center mt-10 py-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
          🛍️ Our Products
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 relative" id="products">
        {/*  Mobile Filter Button */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-md shadow-md text-sm font-medium"
          >
            <FiFilter size={18} />
            Filter
          </button>
        </div>

        {/*  Floating Filter Overlay (Mobile Only) */}
        {showFilter && (
          <div className="absolute  top-20 left-0 right-0 z-50 bg-white text-black p-4 rounded-md shadow-lg border border-gray-200 lg:hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold"></h3>
              <button
                onClick={() => setShowFilter(false)}
                className="text-black font-bold cursor-pointer text-2xl"
              >
                &times;
              </button>
            </div>
            <FilterSidebar onFilterChange={setFilterOptions} />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/*  Sidebar for desktop */}
          <div className="hidden lg:block">
            <FilterSidebar onFilterChange={setFilterOptions} />
          </div>

          {/*  Product Listing */}
          <div className="flex-1">
            <SortOptions onSortChange={setSortOption} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/*  Pagination */}
            <div className="flex justify-center mt-8 flex-wrap ">
              {Array.from(
                { length: Math.ceil(filtered.length / productsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 px-4 py-2 rounded-full font-semibold shadow-sm cursor-pointer transition duration-300 ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-blue-200 hover:bg-blue-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
