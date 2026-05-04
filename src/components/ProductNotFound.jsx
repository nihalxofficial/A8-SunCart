import Link from 'next/link';
import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

const ProductNotFound = () => {
    return (
        <div className="min-h-[60vh] my-20 flex items-center justify-center bg-linear-to-b from-white to-amber-50/20">
            <div className="text-center max-w-md mx-auto px-6">
                <div className="mb-6">
                    <div className="w-24 h-24 mx-auto bg-linear-to-br from-amber-100 to-sky-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    <span className="text-amber-600">Product</span>
                    <span className="text-stone-800"> Not Found</span>
                </h2>

                <div className="w-16 h-0.5 bg-linear-to-r from-sky-500 to-amber-500 mx-auto mb-4"></div>
                <p className="text-stone-500 mb-6">
                    Oops! The product you&apos;re looking for doesn&apos;t exist or has been removed.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-6 py-2.5 rounded-lg transition shadow-md hover:shadow-lg"
                    >
                        <FaShoppingBasket className="text-white text-lg" />
                        Browse Products
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold px-6 py-2.5 rounded-lg transition"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductNotFound;