import React from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, ChevronRight, Filter, Grid3x3, List } from 'lucide-react';
import ProductCard from '@/components/Shared/ProductCard';

const ProductsPage = async ({ searchParams }) => {
    const { category } = await searchParams;

    const res = await fetch("http://localhost:3000//products.json");
    const products = await res.json();

    const catRes = await fetch("http://localhost:3000//category.json");
    const categories = await catRes.json();

    const filteredProducts = category ? products.filter(product => product.category.toLowerCase() === category.toLowerCase()) : products;

    return (
        <div className="bg-linear-to-b from-white to-amber-50/20 min-h-screen">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-0.5 bg-linear-to-r from-sky-500 to-amber-500"></div>
                        <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">Shop Collection</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="text-sky-600">All</span>
                        <span className="text-amber-600"> Products</span>
                    </h1>
                    <p className="text-stone-500 text-sm mt-2">Browse our complete collection of summer essentials</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6">

                    <aside className="md:w-64 lg:w-72 shrink-0">
                        <div className="bg-white rounded-xl shadow-md border border-sky-100 sticky top-20 overflow-hidden">

                            <div className="p-4 bg-linear-to-r from-sky-50 to-amber-50 border-b border-sky-100">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-stone-800 flex items-center gap-2">
                                        <Filter size={16} className="text-sky-500" />
                                        Categories
                                    </h2>
                                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{categories.length} categories</span>
                                </div>
                            </div>

                            <div className="p-3">
                                <Link
                                    href="/products"
                                    className={`flex  items-center justify-between px-3 py-2.5 rounded-lg bg-linear-to-r ${!category ? "from-sky-500 to-cyan-400 text-white font-semibold" : "hover:bg-amber-50 text-stone-600 hover:text-sky-600 text-sm transition group"} `}
                                >
                                    <span className="flex items-center gap-2">
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition text-amber-500" />
                                        All Products
                                    </span>
                                    <span className="text-xs pl-5  py-0.5 rounded-full">{products.length}</span>
                                </Link>

                                {categories.map((cat) => {
                                    const productCount = products.filter(p => p.category === cat.name).length;
                                    return (
                                        <Link
                                            key={cat.id}
                                            href={`/products?category=${cat.name.toLowerCase()}`}
                                            className={`flex items-center justify-between px-3 py-2 rounded-lg bg-linear-to-r ${category?.toLowerCase() === cat.name.toLowerCase() ? "from-sky-500 to-cyan-400 text-white font-semibold" : "hover:bg-amber-50 text-stone-600 hover:text-sky-600 text-sm transition group"}`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition text-amber-500" />
                                                {cat.name}
                                            </span>
                                            <span className="text-xs group-hover:text-sky-500">{productCount}</span>
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="p-4 border-t border-sky-100 bg-linear-to-r from-amber-50/50 to-sky-50/50">
                                <p className="text-xs text-stone-500 text-center">
                                    Showing <span className="font-semibold text-sky-600">{products.length}</span> products
                                </p>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1">
                        <div className="bg-white rounded-xl shadow-md border border-sky-100 p-4 mb-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm text-stone-600">
                                        <span className="font-semibold text-sky-600">{filteredProducts.length}</span> products found
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-stone-500">Sort by:</span>
                                    <select className="text-sm border border-sky-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-sky-400 bg-white text-stone-600">
                                        <option>Featured</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Best Rating</option>
                                    </select>
                                    <div className="flex gap-1 border-l border-sky-200 pl-3">
                                        <button className="p-1.5 cursor-pointer rounded bg-sky-50 text-sky-600">
                                            <Grid3x3 size={16} />
                                        </button>
                                        <button className="p-1.5 cursor-pointer rounded text-stone-400 hover:bg-amber-50 hover:text-amber-600 transition">
                                            <List size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="bg-white rounded-xl shadow-md p-12 text-center border border-sky-100">
                                <p className="text-stone-500">No products found</p>
                            </div>
                        )}

                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;