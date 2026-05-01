import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({product, popularSale}) => {
    return (
        <div 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-sky-200 group"
            >
              
              {/* Image Section */}
              <div className="relative">
                <Link href={`/product/${product.id}`}>
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-amber-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Link>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {popularSale && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      🔥 Best Seller
                    </div>
                  )}
                  {product.stock < 15 && (
                    <div className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      Only {product.stock} left
                    </div>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-stone-700">{product.rating}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                {/* Brand */}
                <div className="mb-2">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                    {product.brand}
                  </span>
                </div>
                
                {/* Product Name */}
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-base font-bold text-stone-800 mb-2 line-clamp-2 hover:text-sky-600 transition cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

                <h3 className='truncate mb-2 text-sm'>{product.description}</h3>
                
                {/* Category */}
                <p className="text-xs text-stone-400 mb-3 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-sky-400"></span>
                  {product.category}
                </p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                  
                </div>
                
                {/* Action Buttons - Always Visible */}
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/product/${product.id}`}
                    className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white px-3 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    <ShoppingCart size={16} /> Buy Now
                  </Link>
                  
                  <button className="p-2 cursor-pointer rounded-lg bg-white border border-stone-200 text-stone-500 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-500 transition">
                    <Heart size={18} />
                  </button>
                  
                  <button className="p-2 cursor-pointer rounded-lg bg-white border border-stone-200 text-stone-500 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 transition">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
    );
};

export default ProductCard;