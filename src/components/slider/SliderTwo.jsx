import Lottie from 'lottie-react';
import { ArrowRight, Clock, Shield, Star, Truck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import animationData from "@/assets/lottie-slide-2";
import { pacifico } from '@/lib/font';

const SliderTwo = () => {
    return (
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md mx-auto lg:mx-0">
                        <span>⚡ Limited Time</span>
                    </div>

                    <div>
                        <h2 className="text-amber-600 text-sm font-semibold uppercase tracking-wide mb-2">Mega Deal</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            <span className={`text-sky-600 ${pacifico.className}`}>Flash Sale</span>
                            <br />
                            <span className="text-amber-600">Buy 1 Get 1</span>
                            <span className="text-amber-500"> Free</span>
                        </h1>
                    </div>

                    <div className="border-l-4 border-amber-400 pl-4 mx-auto lg:mx-0 max-w-lg">
                        <p className="text-stone-600 text-base sm:text-lg">
                            Shop now and get double the value. Limited stock available on selected items.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <div className="flex items-center gap-2 bg-white shadow-sm rounded-lg px-3 py-2">
                            <div className="bg-sky-100 p-1 rounded-full">
                                <Truck size={16} className="text-sky-600" />
                            </div>
                            <span className="text-sm text-stone-600">Free Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white shadow-sm rounded-lg px-3 py-2">
                            <div className="bg-amber-100 p-1 rounded-full">
                                <Shield size={16} className="text-amber-600" />
                            </div>
                            <span className="text-sm text-stone-600">Secure Checkout</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white shadow-sm rounded-lg px-3 py-2">
                            <div className="bg-sky-100 p-1 rounded-full">
                                <Clock size={16} className="text-sky-600" />
                            </div>
                            <span className="text-sm text-stone-600">Fast Support</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="/products"
                            className="bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
                        >
                            Grab Deal
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                        </Link>
                        <Link
                            href="/cart"
                            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                        >
                            View Cart 🛒
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
                            <Lottie
                                animationData={animationData}
                                loop
                                autoplay
                                className="object-cover bg-linear-to-r bg-sky-500 via-sky-400 to-sky-300 h-full"
                            />
                        </div>
                    </div>

                    <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-xl shadow-lg p-2 sm:p-3 border-l-4 border-sky-500 transform rotate-[-5deg] hover:rotate-0 transition">
                        <p className="text-xs text-stone-500">Limited Offer</p>
                        <p className="text-lg sm:text-xl font-bold bg-linear-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                            BOGO Free
                        </p>
                    </div>

                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-lg p-2 sm:p-3 border-r-4 border-amber-500 transform rotate-[5deg] hover:rotate-0 transition">
                        <p className="text-xs text-stone-500">While Stocks Last</p>
                        <p className="text-base sm:text-lg font-bold text-amber-600">Limited Time</p>
                    </div>

                    <div className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-2 sm:p-3 border-t-4 border-cyan-400 hidden md:block">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-linear-to-r from-cyan-400 to-sky-500 rounded-full flex items-center justify-center">
                                <Star size={12} className="text-white fill-white" />
                            </div>
                            <div>
                                <p className="text-xs text-stone-500">Customer Rating</p>
                                <p className="text-sm font-bold text-stone-700">4.8/5.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderTwo;