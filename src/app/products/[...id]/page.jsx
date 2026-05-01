import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Star,
    ShoppingCart,
    Heart,
    Share2,
    Shield,
    Truck,
    RefreshCw,
    Check,
    Minus,
    Plus,
    Sun,
    Droplet,
    Eye,
    Package,
    ArrowLeft
} from 'lucide-react';
import ProductNotFound from '@/components/ProductNotFound';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/products.json");
    const products = await res.json();


    const product = products.find(product => product.id===Number(id));

    if (!product) {
        return <ProductNotFound/>
    }

    const relatedRes = await fetch("http://localhost:3000/products.json");
    const allProducts = await relatedRes.json();
    const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="bg-linear-to-b from-white to-amber-50/20 min-h-screen">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-6">
                    <Link href="/" className="text-stone-500 hover:text-sky-600 transition">Home</Link>
                    <span className="text-stone-400">/</span>
                    <Link href="/products" className="text-stone-500 hover:text-sky-600 transition">Products</Link>
                    <span className="text-stone-400">/</span>
                    <span className="text-amber-600 font-medium">{product.name}</span>
                </div>

                {/* Back Button */}
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-stone-500 hover:text-sky-600 transition mb-6 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition" />
                    Back to Products
                </Link>

                {/* Product Main Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-sky-100 overflow-hidden mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">

                        {/* Left - Product Image */}
                        <div className="relative">
                            <div className="relative h-80 md:h-96 lg:h-[450px] bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>

                            {/* Stock Badge */}
                            {product.stock < 15 && (
                                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    Only {product.stock} left in stock
                                </div>
                            )}

                            {/* Sale Badge */}
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                -30% OFF
                            </div>
                        </div>

                        {/* Right - Product Info */}
                        <div className="flex flex-col">
                            {/* Brand */}
                            <div className="inline-flex items-center gap-2 mb-3">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-sky-500 to-amber-500"></div>
                                <span className="text-sm font-semibold text-sky-600 uppercase tracking-wide">{product.brand}</span>
                            </div>

                            {/* Product Name */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-3">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-200'}
                                        />
                                    ))}
                                    <span className="text-sm font-semibold text-stone-700 ml-1">{product.rating}</span>
                                </div>
                                <span className="text-stone-400 text-sm">• 1,234 reviews</span>
                                <span className="text-stone-400 text-sm">• 500+ orders</span>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl md:text-4xl font-bold text-amber-600">${product.price}</span>
                                    <span className="text-lg text-stone-400 line-through">${(product.price * 1.3).toFixed(2)}</span>
                                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                        Save 30%
                                    </span>
                                </div>
                                <p className="text-sm text-stone-500 mt-1">Inclusive of all taxes</p>
                            </div>

                            {/* Description */}
                            <div className="border-t border-stone-100 pt-4 mb-4">
                                <h3 className="font-semibold text-stone-800 mb-2">Product Description</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-stone-600">
                                    <Sun size={16} className="text-amber-500" />
                                    <span>UV400 Protection</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-stone-600">
                                    <Droplet size={16} className="text-sky-500" />
                                    <span>Water Resistant</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-stone-600">
                                    <Eye size={16} className="text-amber-500" />
                                    <span>Polarized Lens</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-stone-600">
                                    <Package size={16} className="text-sky-500" />
                                    <span>Premium Case Included</span>
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-sm font-medium text-stone-700">Quantity:</span>
                                <div className="flex items-center border border-stone-200 rounded-lg">
                                    <button className="px-3 py-1.5 hover:bg-stone-50 transition">
                                        <Minus size={14} className="text-stone-600" />
                                    </button>
                                    <span className="px-4 py-1.5 text-sm font-medium text-stone-700">1</span>
                                    <button className="px-3 py-1.5 hover:bg-stone-50 transition">
                                        <Plus size={14} className="text-stone-600" />
                                    </button>
                                </div>
                                <p className="text-xs text-stone-500">{product.stock} items available</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <button className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                    <ShoppingCart size={18} />
                                    Add to Cart
                                </button>
                                <button className="flex-1 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2">
                                    <Heart size={18} />
                                    Wishlist
                                </button>
                                <button className="p-3 border border-stone-200 rounded-xl hover:bg-amber-50 hover:border-amber-200 transition">
                                    <Share2 size={18} className="text-stone-500 hover:text-amber-500" />
                                </button>
                            </div>

                            {/* Delivery Info */}
                            <div className="border-t border-stone-100 pt-4 space-y-2">
                                <div className="flex items-center gap-3 text-sm">
                                    <Truck size={16} className="text-sky-500" />
                                    <span className="text-stone-600">Free delivery on orders above $50</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <RefreshCw size={16} className="text-amber-500" />
                                    <span className="text-stone-600">30-day easy returns</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Shield size={16} className="text-green-500" />
                                    <span className="text-stone-600">2-year warranty included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts.length > 0 && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-sky-500 to-amber-500"></div>
                                    <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">You May Also Like</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold">
                                    <span className="text-sky-600">Related</span>
                                    <span className="text-amber-600"> Products</span>
                                </h2>
                            </div>
                            <Link href="/products" className="text-sm text-sky-600 hover:text-amber-600 transition flex items-center gap-1">
                                View All <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                            {relatedProducts.map((related) => (
                                <Link key={related.id} href={`/product/${related.id}`} className="group">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-amber-200">
                                        <div className="relative h-40 bg-gradient-to-br from-gray-50 to-amber-50">
                                            <Image
                                                src={related.image}
                                                alt={related.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition duration-500 p-2"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <div className="text-[10px] text-sky-600 font-semibold mb-0.5">{related.brand}</div>
                                            <h3 className="text-xs font-medium text-stone-700 mb-1 line-clamp-2 group-hover:text-sky-600">{related.name}</h3>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-sm font-bold text-amber-600">${related.price}</span>
                                                <span className="text-[10px] text-stone-400 line-through">${(related.price * 1.3).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailsPage;