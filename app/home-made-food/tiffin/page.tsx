'use client';

import { tiffinServices } from '@/data/tiffin-services';
import VendorCard from '@/components/VendorCard';
import PageHeader from '@/components/PageHeader';

export default function TiffinServicesPage() {
  return (
    <main>
      <div className="h-[72px]" />
      <PageHeader
        title="Tiffin Services"
        description="Fresh, home-cooked meals delivered to your doorstep"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiffinServices.map((service) => (
            <VendorCard
              key={service.id}
              id={service.id.toString()}
              image={service.image}
              name={service.name}
              specialty={service.specialty}
              location={service.location}
              href={`/home-made-food/tiffin/${service.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 