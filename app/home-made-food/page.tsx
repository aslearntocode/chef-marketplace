'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { chefs } from '@/data/chefs';

export default function HomeMadeFood() {
  const [filters, setFilters] = useState({
    area: 'all',
    specialty: 'all',
    searchQuery: ''
  });

  // Get unique specialties from chefs data
  const specialties = useMemo(() => {
    const uniqueSpecialties = new Set(chefs.map(chef => chef.specialty));
    return Array.from(uniqueSpecialties);
  }, []);

  // Get unique areas from chefs data
  const areas = useMemo(() => {
    const uniqueAreas = new Set(chefs.flatMap(chef => chef.deliveryAreas));
    return Array.from(uniqueAreas);
  }, []);

  // Filter chefs based on all criteria
  const filteredChefs = useMemo(() => {
    return chefs.filter(chef => {
      const matchesArea = filters.area === 'all' || chef.deliveryAreas.includes(filters.area);
      const matchesSpecialty = filters.specialty === 'all' || chef.specialty === filters.specialty;
      const matchesSearch = filters.searchQuery === '' || 
        chef.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        chef.specialty.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return matchesArea && matchesSpecialty && matchesSearch;
    });
  }, [filters]);

  return (
    <main>
      {/* Spacer for navbar */}
      <div className="h-[72px]" />

      {/* Header Section */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Home Made Food</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover authentic home-cooked meals from talented home chefs
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search Input */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search chefs..."
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>

            {/* Area Filter */}
            <div className="w-full sm:w-auto">
              <select 
                value={filters.area}
                onChange={(e) => setFilters(prev => ({ ...prev, area: e.target.value }))}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              >
                <option value="all">All Areas</option>
                {areas.sort().map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* Specialty Filter */}
            <div className="w-full sm:w-auto">
              <select 
                value={filters.specialty}
                onChange={(e) => setFilters(prev => ({ ...prev, specialty: e.target.value }))}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              >
                <option value="all">All Specialties</option>
                {specialties.sort().map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="w-full sm:w-auto text-sm text-gray-600 sm:ml-auto">
              {filteredChefs.length} {filteredChefs.length === 1 ? 'chef' : 'chefs'} found
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="grid-section">
        <div className="max-w-7xl mx-auto px-4">
          {filteredChefs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No chefs found matching your criteria.</p>
              <button 
                onClick={() => setFilters({ area: 'all', specialty: 'all', searchQuery: '' })}
                className="mt-4 text-black underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredChefs.map(chef => (
                <div key={chef.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{chef.name}</h3>
                      <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        ⭐ {chef.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{chef.specialty}</p>
                    <p className="text-gray-500 text-sm mb-4">{chef.location}</p>
                    {/* <p className="text-gray-600 mb-4">{chef.description}</p> */}
                    
                    {/* <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Top Dishes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {chef.topDishes.map(dish => (
                          <span key={dish} className="bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-600">
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div> */}

                    {/* <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Delivery Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {chef.deliveryAreas.map(area => (
                          <span key={area} className="bg-blue-100 px-2 py-1 rounded-full text-sm text-blue-600">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div> */}

                    <Link 
                      href={`/chefs/${chef.id}`}
                      className="block w-full text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 