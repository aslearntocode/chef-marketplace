'use client';

import { chefs } from '@/data/chefs';
import VendorCard from '@/components/VendorCard';
import PageHeader from '@/components/PageHeader';

export default function HomeMadeFoodPage() {
  return (
    <main>
      <div className="h-[72px]" />
      <PageHeader
        title="Home Made Food"
        description="Discover authentic home-cooked meals from talented home chefs"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef) => (
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
      </div>
    </main>
  );
} 