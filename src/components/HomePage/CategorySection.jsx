import React from 'react';
import Link from 'next/link';
import { 
  Footprints, Smartphone, Sparkles, 
  Bike, Mountain, Shirt, Coffee, 
  ArrowRight, Package, Gem, Droplet, Watch
} from 'lucide-react';

const CategorySection = async () => {
  const res = await fetch("https://a8-suncart-pi.vercel.app/category.json");
  const categories = await res.json();
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-amber-50/30">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
            <Sparkles size={16} className="fill-white" />
            <span>Shop by Category</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-sky-600">Browse</span>
            <span className="text-amber-600"> Categories</span>
          </h2>
          <p className="text-stone-600 mt-3 max-w-2xl mx-auto">
            Find exactly what you're looking for in our curated categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            // Get icon and color based on category name
            let IconComponent = Package;
            let gradientColor = "from-sky-500 to-cyan-400";
            
            if (category.name === "Accessories") {
              IconComponent = Gem;
              gradientColor = "from-sky-500 to-cyan-400";
            } else if (category.name === "Footwear") {
              IconComponent = Footprints;
              gradientColor = "from-amber-500 to-orange-500";
            } else if (category.name === "Electronics") {
              IconComponent = Smartphone;
              gradientColor = "from-purple-500 to-indigo-500";
            } else if (category.name === "Essentials") {
              IconComponent = Droplet;
              gradientColor = "from-emerald-500 to-teal-500";
            } else if (category.name === "Skincare") {
              IconComponent = Sparkles;
              gradientColor = "from-rose-500 to-pink-500";
            } else if (category.name === "Sports") {
              IconComponent = Bike;
              gradientColor = "from-blue-500 to-sky-500";
            } else if (category.name === "Outdoor") {
              IconComponent = Mountain;
              gradientColor = "from-green-500 to-emerald-500";
            } else if (category.name === "Clothing") {
              IconComponent = Shirt;
              gradientColor = "from-indigo-500 to-purple-500";
            } else if (category.name === "Appliances") {
              IconComponent = Watch;
              gradientColor = "from-orange-500 to-red-500";
            } else if (category.name === "Beverages") {
              IconComponent = Coffee;
              gradientColor = "from-cyan-500 to-blue-500";
            } else if (category.name === "Bags") {
              IconComponent = Package;
              gradientColor = "from-yellow-500 to-amber-500";
            }
            
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-sky-100 hover:border-amber-200">
                  
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r ${gradientColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-stone-800 font-semibold text-sm md:text-base group-hover:text-sky-600 transition">
                    {category.name}
                  </h3>
                  
                  <div className="w-0 group-hover:w-8 h-0.5 bg-amber-400 mx-auto mt-2 transition-all duration-300"></div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl group"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;