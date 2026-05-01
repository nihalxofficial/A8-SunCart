import Link from 'next/link';
import { Home, ShoppingBag, ArrowRight, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/20 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        
        <div className="mb-8">
          <div className="text-8xl mb-4">🔍</div>
          <div className="text-7xl md:text-8xl font-bold bg-linear-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">
            404
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-2">
          Page not found
        </h2>
        <p className="text-stone-500 mb-6">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition"
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-sky-500 text-sky-600 px-6 py-2.5 rounded-lg font-medium hover:bg-sky-50 transition"
          >
            <ShoppingBag size={16} />
            Shop Now
          </Link>
        </div>

        <p className="text-sm text-stone-500">
          Or try searching for something else
        </p>
      </div>
    </div>
  );
}