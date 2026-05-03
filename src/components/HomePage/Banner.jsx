'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Star, Truck, Shield, Clock } from 'lucide-react';
import heroImg from "@/assets/hero.png"
import { pacifico } from '@/lib/font';

const HeroBanner = () => {
    return (
        <div className="bg-linear-to-r from-amber-50 to-sky-50 overflow-hidden">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mx-auto lg:mx-0">
                            <span>🔥 Hot Deals</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            <span className={`text-sky-600 ${pacifico.className}`}>Summer Sale</span>
                            <br />
                            <span className="text-amber-700">50% OFF</span>
                            <span className="text-amber-500">!</span>
                        </h1>

                        <p className="text-stone-600 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
                            Discover amazing products at unbeatable prices.
                            Get the best deals on your favorite items with free shipping on orders over $50.
                        </p>

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

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/products"
                                className="bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
                            >
                                Shop Now
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                            </Link>
                            <Link
                                href="/products"
                                className="bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-6 sm:px-8 py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                            >
                                View deals 🔥
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full">
                        <div className="absolute inset-0 bg-linear-to-br from-sky-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl hidden sm:block"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl hidden sm:block"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl hidden lg:block"></div>

                        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-112 bg-linear-to-br from-sky-100 to-amber-50 rounded-2xl shadow-2xl overflow-hidden border border-sky-200">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={heroImg}
                                    alt="Shopping Banner"
                                    fill
                                    className="object-contain p-4 sm:p-6 md:p-8"
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 45vw"
                                />
                            </div>
                        </div>

                        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-xl shadow-lg p-2 sm:p-3 border-l-4 border-sky-500 transform rotate-[-5deg] hover:rotate-0 transition">
                            <p className="text-xs text-stone-500">Today&apos;s Deal</p>
                            <p className="text-lg sm:text-xl font-bold bg-linear-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                                50% OFF
                            </p>
                        </div>

                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-lg p-2 sm:p-3 border-r-4 border-amber-500 transform rotate-[5deg] hover:rotate-0 transition">
                            <p className="text-xs text-stone-500">Limited Time</p>
                            <p className="text-base sm:text-lg font-bold text-amber-600">Free Shipping</p>
                        </div>

                        <div className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-2 sm:p-3 border-t-4 border-cyan-400 hidden md:block">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-linear-to-r from-cyan-400 to-sky-500 rounded-full flex items-center justify-center">
                                    <Star size={12} className="text-white fill-white sm:size-14" />
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