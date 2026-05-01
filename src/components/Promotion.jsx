'use client';

import Link from 'next/link';
import { ArrowRight, Gift, Tag, Clock, Percent, Sparkles, Zap, Shield, Truck, Coffee, Heart } from 'lucide-react';

const PromotionsOffers = () => {
    const mainOffers = [
        {
            id: 1,
            title: "Summer Clearance Sale",
            discount: "50% OFF",
            description: "On all summer essentials",
            validUntil: "Limited Time Only",
            bgGradient: "from-sky-600 to-cyan-500",
            textColor: "text-white",
            icon: <Zap className="text-yellow-300" size={32} />,
            buttonVariant: "white"
        },
        {
            id: 2,
            title: "Buy 1 Get 1 Free",
            discount: "BOGO",
            description: "On selected snack items",
            validUntil: "This week only",
            bgGradient: "from-amber-500 to-orange-500",
            textColor: "text-white",
            icon: <Gift className="text-amber-200" size={32} />,
            buttonVariant: "white"
        },
        {
            id: 3,
            title: "Free Shipping",
            discount: "ON ALL ORDERS",
            description: "Above $50 + No minimum",
            validUntil: "Weekend Special",
            bgGradient: "from-emerald-500 to-teal-500",
            textColor: "text-white",
            icon: <Truck className="text-emerald-200" size={32} />,
            buttonVariant: "white"
        }
    ];

    const smallOffers = [
        {
            id: 4,
            title: "Member Exclusive",
            discount: "20% OFF",
            code: "SUN20",
            icon: <Heart size={20} />,
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200",
            textColor: "text-rose-600"
        },
        {
            id: 5,
            title: "First Order",
            discount: "15% OFF",
            code: "WELCOME15",
            icon: <Sparkles size={20} />,
            bgColor: "bg-sky-50",
            borderColor: "border-sky-200",
            textColor: "text-sky-600"
        },
        {
            id: 6,
            title: "Flash Sale",
            discount: "30% OFF",
            code: "FLASH30",
            icon: <Clock size={20} />,
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
            textColor: "text-amber-600"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-amber-50/30 py-12 md:py-16">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
                        <Percent size={16} className="fill-white" />
                        <span>Limited Time Offers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-sky-600">Exclusive</span>
                        <span className="text-amber-600"> Promotions</span>
                    </h2>
                    <p className="text-stone-600 mt-3 max-w-2xl mx-auto">
                        Don't miss out on these amazing deals! Limited time offers available now.
                    </p>
                </div>

                {/* Main Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {mainOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br ${offer.bgGradient}`}
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -ml-12 -mb-12"></div>
                            
                            <div className="p-6 md:p-8 relative z-10">
                                {/* Icon and Tag */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                        {offer.icon}
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                                        {offer.validUntil}
                                    </div>
                                </div>
                                
                                {/* Discount */}
                                <div className="mb-3">
                                    <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                                        {offer.discount}
                                    </p>
                                    <div className="w-12 h-1 bg-white/40 rounded-full"></div>
                                </div>
                                
                                {/* Title & Description */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    {offer.title}
                                </h3>
                                <p className="text-white/80 text-sm mb-6">
                                    {offer.description}
                                </p>
                                
                                {/* Button */}
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-gray-50 font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group-hover:gap-3"
                                >
                                    Shop Now
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Small Offers Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {smallOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`${offer.bgColor} border ${offer.borderColor} rounded-xl p-4 hover:shadow-lg transition-all duration-300 group`}
                        >
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-3">
                                    <div className={`${offer.textColor}`}>
                                        {offer.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500">{offer.title}</p>
                                        <p className={`text-xl font-bold ${offer.textColor}`}>
                                            {offer.discount}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <code className="bg-white/80 px-3 py-1 rounded-lg text-sm font-mono text-stone-600">
                                        {offer.code}
                                    </code>
                                    <button 
                                        onClick={() => navigator.clipboard.writeText(offer.code)}
                                        className="text-stone-400 hover:text-sky-500 transition text-xs"
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Countdown Timer Banner */}
                <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-6 md:p-8 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                <Clock size={32} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">Flash Sale Ends In:</h3>
                                <p className="text-white/80 text-sm">Hurry up! Limited time offer</p>
                            </div>
                        </div>
                        
                        {/* Countdown Timer */}
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-3 py-2 min-w-[60px]">
                                    <span className="text-2xl font-bold text-sky-600">24</span>
                                </div>
                                <p className="text-white/80 text-xs mt-1">Hours</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-3 py-2 min-w-[60px]">
                                    <span className="text-2xl font-bold text-sky-600">59</span>
                                </div>
                                <p className="text-white/80 text-xs mt-1">Minutes</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-3 py-2 min-w-[60px]">
                                    <span className="text-2xl font-bold text-sky-600">32</span>
                                </div>
                                <p className="text-white/80 text-xs mt-1">Seconds</p>
                            </div>
                        </div>
                        
                        <Link
                            href="/products"
                            className="bg-white text-sky-600 hover:bg-gray-50 font-semibold px-6 py-2.5 rounded-lg transition shadow-md hover:shadow-lg whitespace-nowrap"
                        >
                            Grab Deal →
                        </Link>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    <div className="flex items-center gap-2 text-stone-500">
                        <Shield size={18} className="text-sky-500" />
                        <span className="text-sm">Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                        <Truck size={18} className="text-amber-500" />
                        <span className="text-sm">Fast Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                        <Percent size={18} className="text-sky-500" />
                        <span className="text-sm">Best Price Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                        <Heart size={18} className="text-rose-500" />
                        <span className="text-sm">24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionsOffers;