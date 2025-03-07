'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { snacksChefs } from '@/data/snacks';
import SearchFilters from '@/components/SearchFilters';

export default function SnacksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  // Get unique areas and specialties for filters
  const areas = ['All Areas', ...new Set(snacksChefs.map(chef => chef.location.split(',')[0]))];
  const specialties = ['All Specialties', ...new Set(snacksChefs.map(chef => chef.specialty))];

  // Filter snacks chefs based on search and filters
  const filteredChefs = snacksChefs.filter(chef => {
    const matchesSearch = chef.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chef.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = selectedArea === 'All Areas' || chef.location.includes(selectedArea);
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || chef.specialty === selectedSpecialty;

    return matchesSearch && matchesArea && matchesSpecialty;
  });

  return (
    <main className="min-h-screen">
      <div className="h-[72px]" />

      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Packaged Snacks</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover delicious homemade snacks from talented home chefs
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
        selectedSpecialty={selectedSpecialty}
        setSelectedSpecialty={setSelectedSpecialty}
        areas={areas}
        specialties={specialties}
        totalResults={filteredChefs.length}
        itemType="snack chefs"
      />

      {/* Snacks Chefs Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{chef.name}</h2>
                  <span className="bg-green-50 text-green-800 px-2 py-1 rounded-full text-sm">
                    ⭐ {chef.rating}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{chef.specialty}</p>
                <p className="text-gray-500 text-sm flex items-center mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {chef.location}
                </p>
                <Link
                  href={`/home-made-food/snacks/${chef.id}`}
                  className="block w-full text-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  View Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 