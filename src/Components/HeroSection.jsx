import React from "react";

const HeroSection = () => {
  const handleScroll = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover Amazing Products at{" "}
            <span className="text-blue-600">MyShop</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Shop top quality items with great deals. Fast delivery and easy
            checkout.
          </p>
          <button
            onClick={handleScroll}
            className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-full shadow-md cursor-pointer"
          >
            Explore Now
          </button>
        </div>

        <div className="lg:w-1/2">
          <img
            src="src/assets/cart-hero.avif"
            alt="Shopping Hero"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
