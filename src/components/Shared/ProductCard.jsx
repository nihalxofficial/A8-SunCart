import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product, popularSale }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-sky-200 group">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="relative h-56 overflow-hidden bg-linear-to-br from-gray-50 to-amber-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500 border-b-2 border-gray-100 shadow-sm"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </div>
        </Link>

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {popularSale && (
            <div className="bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              🔥 Best Seller
            </div>
          )}
          {product.stock < 15 && (
            <div className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Only {product.stock} left
            </div>
          )}
        </div>

        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                className={`${star <= Math.round(product.rating || 0)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                  }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-stone-700 ml-1">
            ({product.rating?.toFixed(1) || '0.0'})
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
            {product.brand}
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-base font-bold text-stone-800 mb-2 line-clamp-2 hover:text-sky-600 transition cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <h3 className='truncate mb-2 text-sm'>{product.description}</h3>

        <p className="text-xs text-stone-400 mb-3 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-sky-400"></span>
          {product.category}
        </p>

        <div className="mb-4 flex gap-2 items-center">
          <span className="text-2xl font-bold text-amber-600">${product.price}</span>
          <span className="text-sm text-stone-400 line-through">${(product.price * 2).toFixed(2)}</span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white px-3 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <ShoppingCart size={16} /> View Details
          </Link>

          <button className="p-2 cursor-pointer rounded-lg bg-white border border-stone-200 text-stone-500 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-500 transition">
            <Heart size={18} />
          </button>

          <button className="p-2 cursor-pointer rounded-lg bg-white border border-stone-200 text-stone-500 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 transition">
            <Link href={`/products/${product.id}`}><Eye size={18} /></Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;