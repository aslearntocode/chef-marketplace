'use client';

import { bakers } from '@/data/bakers';
import VendorCard from '@/components/VendorCard';
import PageHeader from '@/components/PageHeader';

export default function BakersPage() {
  return (
    <main>
      <div className="h-[72px]" />
      <PageHeader
        title="Home-made Desserts"
        description="Discover delicious home-made desserts from talented bakers in your area"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bakers.map((baker) => (
            <VendorCard
              key={baker.id}
              id={baker.id}
              image={baker.image}
              name={baker.name}
              specialty={baker.specialty}
              location={baker.location}
              href={`/bakers/${baker.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 