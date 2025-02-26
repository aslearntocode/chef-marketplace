'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { bakers } from '@/data/bakers';

export default function HomeMadeDesserts() {
  const [filters, setFilters] = useState({
    area: 'all',
    specialty: 'all',
    searchQuery: ''
  });

  // Get unique specialties from bakers data
  const specialties = useMemo(() => {
    const uniqueSpecialties = new Set(bakers.map(baker => baker.specialty));
    return Array.from(uniqueSpecialties);
  }, []);

  // Get unique areas from bakers data
  const areas = useMemo(() => {
    const uniqueAreas = new Set(bakers.flatMap(baker => baker.deliveryAreas));
    return Array.from(uniqueAreas);
  }, []);

  // Filter bakers based on all criteria
  const filteredBakers = useMemo(() => {
    return bakers.filter(baker => {
      const matchesArea = filters.area === 'all' || baker.deliveryAreas.includes(filters.area);
      const matchesSpecialty = filters.specialty === 'all' || baker.specialty === filters.specialty;
      const matchesSearch = filters.searchQuery === '' || 
        baker.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        baker.specialty.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
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
          <h1 className="text-4xl font-bold text-center mb-6">Home Made Desserts</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover delicious homemade desserts and sweets from talented home bakers
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by baker name or specialty..."
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Area Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 whitespace-nowrap">Area:</span>
              <select 
                value={filters.area}
                onChange={(e) => setFilters(prev => ({ ...prev, area: e.target.value }))}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="all">All Areas</option>
                {areas.sort().map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* Specialty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 whitespace-nowrap">Specialty:</span>
              <select 
                value={filters.specialty}
                onChange={(e) => setFilters(prev => ({ ...prev, specialty: e.target.value }))}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="all">All Specialties</option>
                {specialties.sort().map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            {filteredBakers.length} {filteredBakers.length === 1 ? 'baker' : 'bakers'} found
          </div>
        </div>
      </section>

      {/* Bakers Grid */}
      <section className="grid-section">
        <div className="max-w-7xl mx-auto px-4">
          {filteredBakers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No bakers found matching your criteria.</p>
              <button 
                onClick={() => setFilters({ area: 'all', specialty: 'all', searchQuery: '' })}
                className="mt-4 text-black underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBakers.map(baker => (
                <div key={baker.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={baker.image}
                      alt={baker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{baker.name}</h3>
                      <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        ⭐ {baker.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{baker.specialty}</p>
                    <p className="text-gray-500 text-sm mb-4">{baker.location}</p>
                    <p className="text-gray-600 mb-4">{baker.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Desserts:</h4>
                      <div className="flex flex-wrap gap-2">
                        {baker.topDishes.map(dish => (
                          <span key={dish} className="bg-pink-100 px-2 py-1 rounded-full text-sm text-pink-600">
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Delivery Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {baker.deliveryAreas.map(area => (
                          <span key={area} className="bg-blue-100 px-2 py-1 rounded-full text-sm text-blue-600">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href={`/bakers/${baker.id}`}
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