'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sun, Coffee, IceCream, Waves, Flame } from 'lucide-react';

const SummerProducts = () => {
    const products = [
        {
            id: 1,
            title: "Quality eggs at an affordable price",
            subtitle: "Only This Week",
            description: "Eat one every day",
            tag: "Limited Offer",
            image: "/eggs.jpg", // Replace with your image
            icon: <Sun className="text-amber-500" size={24} />,
            bgGradient: "from-amber-50 to-orange-50"
        },
        {
            id: 2,
            title: "Snacks that nourishes our mind and body",
            subtitle: "Only This Week",
            description: "Shine the morning...",
            tag: "Best Seller",
            image: "/snacks.jpg", // Replace with your image
            icon: <Coffee className="text-sky-500" size={24} />,
            bgGradient: "from-sky-50 to-cyan-50"
        },
        {
            id: 3,
            title: "Unbeatable quality, unbeatable prices.",
            subtitle: "Only This Week",
            description: "Only this week. Don't miss...",
            tag: "Hot Deal",
            image: "/products.jpg", // Replace with your image
            icon: <Flame className="text-amber-500" size={24} />,
            bgGradient: "from-amber-50 to-rose-50"
        }
    ];

    return (
        <section className="bg-amber-50/30 py-12 md:py-16">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
                        <Sun size={16} className="fill-white" />
                        <span>Summer Collection 2025</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-sky-600">Summer</span>
                        <span className="text-amber-600"> Essentials</span>
                    </h2>
                    <p className="text-stone-600 mt-3 max-w-2xl mx-auto">
                        Discover our handpicked summer products at unbeatable prices
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className={`group bg-gradient-to-br ${product.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-sky-100 hover:border-amber-200`}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 md:h-56 overflow-hidden bg-white/50">
                                <div className="absolute top-3 left-3 z-10">
                                    <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                        {product.tag}
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
                                    {product.icon}
                                </div>
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Placeholder for image - Replace with actual images */}
                                    <div className="text-center p-6">
                                        <div className="text-6xl mb-2">
                                            {product.id === 1 && '🥚'}
                                            {product.id === 2 && '🍪'}
                                            {product.id === 3 && '🛍️'}
                                        </div>
                                        <p className="text-stone-400 text-sm">Product Image</p>
                                    </div>
                                    
                                    {/* Uncomment for actual images */}
                                    {/* <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-500"
                                    /> */}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-6">
                                {/* Subtitle */}
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-0.5 bg-amber-400"></div>
                                    <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
                                        {product.subtitle}
                                    </p>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2 line-clamp-2">
                                    {product.title}
                                </h3>

                                {/* Description */}
                                <p className="text-stone-600 text-sm mb-4">
                                    {product.description}
                                </p>

                                {/* Shop Now Button */}
                                <Link 
                                    href="/products"
                                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-amber-600 transition group-hover:gap-3"
                                >
                                    Shop Now 
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10 md:mt-12">
                    <Link 
                        href="/products"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl group"
                    >
                        View All Products
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SummerProducts;