'use client';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
  areas: string[];
  specialties: string[];
  totalResults: number;
  itemType?: string;
}

export default function SearchFilters({
  searchQuery,
  setSearchQuery,
  selectedArea,
  setSelectedArea,
  selectedSpecialty,
  setSelectedSpecialty,
  areas,
  specialties,
  totalResults,
  itemType = 'chefs'
}: SearchFiltersProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 items-center">
        {/* Search Input */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder={`Search ${itemType}...`}
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
          {totalResults} {totalResults === 1 ? itemType.slice(0, -1) : itemType} found
        </div>
      </div>
    </section>
  );
} 