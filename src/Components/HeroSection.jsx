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
            src="https://images.unsplash.com/photo-1660840042045-e1a24d860810?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shopping Hero"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
