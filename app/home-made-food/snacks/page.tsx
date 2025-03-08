'use client';

import { snacksChefs } from '@/data/snacks';
import VendorCard from '@/components/VendorCard';
import PageHeader from '@/components/PageHeader';

export default function SnacksPage() {
  return (
    <main>
      <div className="h-[72px]" />
      <PageHeader
        title="Home-made Snacks"
        description="Delicious snacks made with love by home chefs"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snacksChefs.map((chef) => (
            <VendorCard
              key={chef.id}
              id={chef.id}
              image={chef.image}
              name={chef.name}
              specialty={chef.specialty}
              location={chef.location}
              href={`/home-made-food/snacks/${chef.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 