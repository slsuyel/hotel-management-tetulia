import React from 'react';
import { HotelResults } from './_components/search-result';
import { SearchFilters } from './_components/search-filters';

const page = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
      {/* <SearchHeader /> */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-80 flex-shrink-0">
            <SearchFilters />
          </aside>
          <div className="flex-1">
            <HotelResults />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;