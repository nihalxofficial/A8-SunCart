'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Countdown from 'react-countdown';
import { Sparkles, Timer, ArrowRight } from 'lucide-react';
import ProductCard from '../Shared/ProductCard';
import { getProducts } from '@/lib/data';

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.slice(0, 4));
    };
    fetchProducts();
  }, []);

  const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

  const renderTimer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-stone-700 font-semibold">Offer Expired!</span>;
    }
    return (
      <div className="flex items-center gap-3">
        <div className="text-center">
          <div className="bg-linear-to-r from-sky-500 to-cyan-400 text-white rounded-lg px-3 py-1 min-w-12.5">
            <span className="text-2xl font-bold">{String(hours).padStart(2, '0')}</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">Hours</p>
        </div>
        <span className="text-2xl font-bold text-amber-500">:</span>
        <div className="text-center">
          <div className="bg-linear-to-r from-sky-500 to-cyan-400 text-white rounded-lg px-3 py-1 min-w-12.5">
            <span className="text-2xl font-bold">{String(minutes).padStart(2, '0')}</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">Minutes</p>
        </div>
        <span className="text-2xl font-bold text-amber-500">:</span>
        <div className="text-center">
          <div className="bg-linear-to-r from-sky-500 to-cyan-400 text-white rounded-lg px-3 py-1 min-w-12.5">
            <span className="text-2xl font-bold">{String(seconds).padStart(2, '0')}</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">Seconds</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 bg-linear-to-b from-amber-50/20 to-white">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
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

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 px-6 inline-flex items-center gap-6 border border-sky-100">
            <div className="flex items-center gap-2">
              <Timer size={20} className="text-amber-500" />
              <span className="text-stone-700 font-semibold">Offer ends in:</span>
            </div>
            <Countdown date={endTime} renderer={renderTimer} />
            <div className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
              Flash Sale!
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product, index) => <ProductCard key={index} product={product} popularSale={true} />)}
        </div>

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