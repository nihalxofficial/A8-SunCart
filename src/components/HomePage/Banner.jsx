'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Star, Truck, Shield, Clock } from 'lucide-react';
import heroImg from "@/assets/hero.png"

const HeroBanner = () => {
    return (
        <div className="bg-gradient-to-r from-amber-50 to-sky-50 overflow-hidden">
            <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Side - Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        {/* Badge - Amber/Gold Accent */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mx-auto lg:mx-0">
                            <Star size={16} className="fill-white" />
                            <span>Limited Time Offer</span>
                        </div>
                        
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            <span className="text-sky-600">Shop Smart,</span>
                            <br />
                            <span className="text-amber-700">Live Bright</span>
                            <span className="text-amber-500">!</span>
                        </h1>
                        
                        {/* Description */}
                        <p className="text-stone-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
                            Discover amazing products at unbeatable prices. 
                            Get the best deals on your favorite items with free shipping on orders over $50.
                        </p>
                        
                        {/* Features - Sky Blue & Amber */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                                <div className="bg-sky-100 p-1 rounded-full">
                                    <Truck size={16} className="text-sky-600" />
                                </div>
                                <span className="text-sm text-stone-600">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                                <div className="bg-amber-100 p-1 rounded-full">
                                    <Shield size={16} className="text-amber-600" />
                                </div>
                                <span className="text-sm text-stone-600">Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                                <div className="bg-sky-100 p-1 rounded-full">
                                    <Clock size={16} className="text-sky-600" />
                                </div>
                                <span className="text-sm text-stone-600">24/7 Support</span>
                            </div>
                        </div>
                        
                        {/* Buttons - Sky Blue & Amber */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link 
                                href="/products"
                                className="bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
                            >
                                Shop Now
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                            </Link>
                            <Link 
                                href="/products"
                                className="bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                            >
                                View Offers
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right Side - Image with Theme Colors */}
                    <div className="flex-1 relative">
                        {/* Decorative Background - Sky Blue & Amber */}
                        <div className="absolute inset-0 bg-linear-to-br from-sky-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>
                        
                        {/* Image Container */}
                        <div className="relative w-full h-80 md:h-96 lg:h-112.5 bg-linear-to-br from-sky-100 to-amber-50 rounded-2xl shadow-2xl overflow-hidden border border-sky-200">
                            {/* Image - Replace with your actual image */}
                            <div className="relative w-full h-full flex items-center justify-center p-8">
                                <div className="text-center">
                                    <ShoppingBag size={100} className="text-sky-300 mx-auto mb-4" />
                                    <p className="text-stone-400 font-medium">Add your image here</p>
                                    <p className="text-xs text-stone-400 mt-2">Recommended: 800x800px</p>
                                </div>
                                
                                {/* Uncomment for actual image */}
                                <Image
                                    src={heroImg}
                                    alt="Shopping Banner"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        
                        {/* Floating Cards - Sky Blue & Amber */}
                        {/* Sky Blue Card */}
                        <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-3 border-l-4 border-sky-500 transform rotate-[-5deg] hover:rotate-0 transition">
                            <p className="text-xs text-stone-500">Today's Deal</p>
                            <p className="text-xl font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                                30% OFF
                            </p>
                        </div>
                        
                        {/* Amber/Gold Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-3 border-r-4 border-amber-500 transform rotate-[5deg] hover:rotate-0 transition">
                            <p className="text-xs text-stone-500">Limited Time</p>
                            <p className="text-lg font-bold text-amber-600">Free Shipping</p>
                        </div>
                        
                        {/* Aqua Card */}
                        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 border-t-4 border-cyan-400 hidden lg:block">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full flex items-center justify-center">
                                    <Star size={14} className="text-white fill-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-stone-500">Customer Rating</p>
                                    <p className="text-sm font-bold text-stone-700">4.9/5.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;