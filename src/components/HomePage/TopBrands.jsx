import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
    ArrowRight,
    Star,
    TrendingUp,
    Award,
    Shield,
    Truck,
    Heart,
    ChevronRight
} from 'lucide-react';

const TopBrands = () => {
    const brands = [
        {
            id: 1,
            name: "Nike",
            category: "Sports & Footwear",
            products: 1240,
            rating: 4.8,
            reviews: "2.3k",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            logoAlt: "Nike Logo",
            offer: "Up to 40% OFF",
            bgGradient: "from-sky-500 to-cyan-400",
            iconBg: "bg-sky-100",
            textColor: "text-sky-600",
            badgeColor: "bg-sky-50 text-sky-600"
        },
        {
            id: 2,
            name: "Apple",
            category: "Electronics",
            products: 856,
            rating: 4.9,
            reviews: "3.1k",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            logoAlt: "Apple Logo",
            offer: "Special Deals",
            bgGradient: "from-purple-500 to-indigo-500",
            iconBg: "bg-purple-100",
            textColor: "text-purple-600",
            badgeColor: "bg-purple-50 text-purple-600"
        },
        {
            id: 3,
            name: "Adidas",
            category: "Sports & Fashion",
            products: 1120,
            rating: 4.7,
            reviews: "1.8k",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
            logoAlt: "Adidas Logo",
            offer: "Buy 1 Get 1",
            bgGradient: "from-amber-500 to-orange-500",
            iconBg: "bg-amber-100",
            textColor: "text-amber-600",
            badgeColor: "bg-amber-50 text-amber-600"
        },
        {
            id: 4,
            name: "Samsung",
            category: "Electronics",
            products: 980,
            rating: 4.8,
            reviews: "2.1k",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Samsung_old_logo_before_year_2015.svg/3840px-Samsung_old_logo_before_year_2015.svg.png",
            logoAlt: "Samsung Logo",
            offer: "Exchange Bonus",
            bgGradient: "from-blue-500 to-sky-500",
            iconBg: "bg-blue-100",
            textColor: "text-blue-600",
            badgeColor: "bg-blue-50 text-blue-600"
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-linear-to-b from-amber-50/20 to-white">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
                        <Award size={16} className="fill-white" />
                        <span>Premium Partners</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-sky-600">Top</span>
                        <span className="text-amber-600"> Brands</span>
                    </h2>
                    <p className="text-stone-600 mt-3 max-w-2xl mx-auto">
                        Shop from the world&apos;s most trusted and popular brands
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {brands.map((brand) => (
                        <Link
                            key={brand.id}
                            href={`/products?brand=${brand.name.toLowerCase()}`}
                            className="group block"
                        >
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">

                                <div className={`h-2 bg-linear-to-r ${brand.bgGradient}`}></div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-16 h-16 rounded-xl ${brand.iconBg} flex items-center justify-center group-hover:scale-110 transition duration-300 p-2`}>
                                            <Image
                                                src={brand.logo}
                                                alt={brand.logoAlt}
                                                width={70}
                                                height={70}
                                                className="object-fit"
                                                unoptimized={brand.logo.includes('wikimedia')}
                                            />
                                        </div>
                                        <div className={`${brand.badgeColor} text-xs font-bold px-2 py-1 rounded-full`}>
                                            {brand.offer}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-stone-800 mb-1 group-hover:text-sky-600 transition">
                                        {brand.name}
                                    </h3>

                                    <p className="text-stone-400 text-xs mb-3">{brand.category}</p>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-0.5">
                                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-semibold text-stone-700">{brand.rating}</span>
                                        </div>
                                        <span className="text-stone-300 text-xs">•</span>
                                        <span className="text-xs text-stone-500">{brand.reviews} reviews</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                                        <div className="flex items-center gap-1">
                                            <Shield size={14} className="text-sky-400" />
                                            <span className="text-xs text-stone-500">Authentic</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Truck size={14} className="text-amber-400" />
                                            <span className="text-xs text-stone-500">Fast Ship</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Heart size={14} className="text-rose-400" />
                                            <span className="text-xs text-stone-500">{brand.products}+</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs text-stone-400">Shop Collection</span>
                                        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-linear-to-r group-hover:from-sky-500 group-hover:to-cyan-400 transition">
                                            <ChevronRight size={16} className="text-stone-400 group-hover:text-white transition" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-stone-800">Trending This Week</h3>
                        <Link href="/products" className="text-sm text-sky-600 hover:text-amber-600 flex items-center gap-1">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {brands.slice(0, 4).map((brand) => (
                            <Link key={`trending-${brand.id}`} href={`/products?brand=${brand.name.toLowerCase()}`}>
                                <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition border border-stone-100 hover:border-sky-200 group">
                                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${brand.iconBg}  flex items-center justify-center group-hover:scale-110 transition p-1`}>
                                        <Image
                                            src={brand.logo}
                                            alt={brand.logoAlt}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        //   unoptimized={brand.logo.includes('wikimedia')}
                                        />
                                    </div>
                                    <p className="font-semibold text-stone-700 text-sm group-hover:text-sky-600">{brand.name}</p>
                                    <p className="text-xs text-stone-400">{brand.products}+ items</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-sky-600 to-cyan-500 p-8 shadow-xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                <TrendingUp size={28} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">100% Authentic Brands</h3>
                                <p className="text-white/80 text-sm">Direct partnerships with top brands</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">50+</p>
                                <p className="text-white/80 text-xs">Premium Brands</p>
                            </div>
                            <div className="w-px h-10 bg-white/30 hidden md:block"></div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">10k+</p>
                                <p className="text-white/80 text-xs">Happy Customers</p>
                            </div>
                            <div className="w-px h-10 bg-white/30 hidden md:block"></div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">24/7</p>
                                <p className="text-white/80 text-xs">Support</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    <div className="flex items-center gap-2 text-stone-500 hover:text-sky-600 transition cursor-pointer">
                        <Shield size={18} className="text-sky-500" />
                        <span className="text-sm font-medium">Genuine Products</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition cursor-pointer">
                        <Truck size={18} className="text-amber-500" />
                        <span className="text-sm font-medium">Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 hover:text-yellow-600 transition cursor-pointer">
                        <Star size={18} className="text-yellow-500" />
                        <span className="text-sm font-medium">Top Rated Brands</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 hover:text-rose-600 transition cursor-pointer">
                        <Heart size={18} className="text-rose-500" />
                        <span className="text-sm font-medium">Trusted by Millions</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBrands;