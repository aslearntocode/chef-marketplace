'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tiffinServices } from '@/data/tiffin-services';

export default function TiffinServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  // Get unique areas and specialties for filters
  const areas = ['All Areas', ...new Set(tiffinServices.map(service => service.location.split(',')[0]))];
  const specialties = ['All Specialties', ...new Set(tiffinServices.map(service => service.specialty))];

  // Filter tiffin services based on search and filters
  const filteredServices = tiffinServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = selectedArea === 'All Areas' || service.location.includes(selectedArea);
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || service.specialty === selectedSpecialty;

    return matchesSearch && matchesArea && matchesSpecialty;
  });

  return (
    <main className="min-h-screen">
      <div className="h-[72px]" /> {/* Spacer for fixed navbar */}

      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Home Made Food</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover authentic home-cooked meals from talented home chefs
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Search Input */}
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search chefs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Area Filter */}
          <div className="min-w-[150px]">
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Specialty Filter */}
          <div className="min-w-[200px]">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="text-gray-600">
            {filteredServices.length} {filteredServices.length === 1 ? 'chef' : 'chefs'} found
          </div>
        </div>
      </section>

      {/* Tiffin Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{service.name}</h2>
                  <span className="bg-green-50 text-green-800 px-2 py-1 rounded-full text-sm">
                    ⭐ {service.rating}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{service.specialty}</p>
                <p className="text-gray-500 text-sm flex items-center mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {service.location}
                </p>
                <Link
                  href={`/home-made-food/tiffin/${service.id}`}
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