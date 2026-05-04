'use client';

import { Description, SearchField } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get('search') || '');

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchField name="search" className="w-70">
        <SearchField.Group className="relative flex items-center">
          <div className="absolute left-3 z-10">
            <SearchField.SearchIcon className="text-stone-400 w-4 h-4" />
          </div>
          <SearchField.Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full pl-9 pr-9 py-2 rounded-xl border border-sky-200 bg-white text-stone-700 placeholder:text-stone-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all duration-200 text-sm"
            placeholder="Search products..."
            style={{ paddingLeft: "2.5rem" }}
          />
          <div className="absolute right-3">
            <SearchField.ClearButton className="text-stone-400 hover:text-amber-500 transition-colors" />
          </div>
        </SearchField.Group>
        <Description className="text-stone-400 text-xs mt-1 ml-1">Enter keywords to search for products</Description>
      </SearchField>
    </form>
  );
};

export default SearchBox;