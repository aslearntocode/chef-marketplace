'use client';

import { useState } from 'react';
import { chefs } from '@/data/chefs';
import SearchFilters from '@/components/SearchFilters';
import VendorCard from '@/components/VendorCard';

export default function HomeMadeFoodPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  // Get unique areas and specialties for filters
  const areas = ['All Areas', ...new Set(chefs.map(chef => chef.location.split(',')[0]))];
  const specialties = ['All Specialties', ...new Set(chefs.map(chef => chef.specialty))];

  // Filter chefs based on search and filters
  const filteredChefs = chefs.filter(chef => {
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
          <h1 className="text-4xl font-bold text-center mb-4">Home Made Food</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover authentic home-cooked meals from talented home chefs
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
        itemType="chefs"
      />

      {/* Chefs Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChefs.map((chef) => (
            <VendorCard
              key={chef.id}
              id={chef.id}
              image={chef.image}
              name={chef.name}
              specialty={chef.specialty}
              location={chef.location}
              href={`/chefs/${chef.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
} 