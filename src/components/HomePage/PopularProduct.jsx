import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Star, 
  Heart,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
  Eye,
  Sparkles
} from 'lucide-react';
import ProductCard from '../Shared/ProductCard';

const PopularProduct = async () => {
  const res = await fetch("http://localhost:3000/products.json");
//   const res = await fetch("https://a8-suncart-pi.vercel.app/products.json");
  const data = await res.json();
  const popularProducts = data.slice(0, 8);
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50/20 to-white">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
            <Sparkles size={16} className="fill-white" />
            <span>Customer Favorites</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-sky-600">Popular</span>
            <span className="text-amber-600"> Products</span>
          </h2>
          <p className="text-stone-600 mt-3 max-w-2xl mx-auto">
            Discover our most loved items that customers can&apos;t get enough of
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {popularProducts.map((product, index) => <ProductCard key={index} product={product} popularSale={true}></ProductCard>)}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 group"
          >
            Browse All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;