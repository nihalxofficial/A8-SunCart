'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SortSelect() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort') || '';

    const handleSort = (e) => {
        const updatedParams = new URLSearchParams(searchParams.toString());
        if (e.target.value) {
            updatedParams.set('sort', e.target.value);
        } else {
            updatedParams.delete("sort")
        }
        router.push(`?${updatedParams.toString()}`);
    };

    return (
        <select
            value={currentSort}
            onChange={handleSort}
            className="text-sm border border-sky-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-sky-400 bg-white text-stone-600"
        >
            <option value="">All Products</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Best Rating</option>
        </select>
    );
}