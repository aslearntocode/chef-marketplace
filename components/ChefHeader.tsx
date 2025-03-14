import Image from 'next/image';
import { calculateAverageRating } from '@/utils/ratings';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface ChefHeaderProps {
  image: string;
  name: string;
  specialty: string;
  location: string;
  description: string;
  notes?: string[];
  vendorId: string;
  rating?: number;
}

export default function ChefHeader({
  image,
  name,
  specialty,
  location,
  description,
  notes,
  vendorId
}: ChefHeaderProps) {
  const [rating, setRating] = useState<string>('New');
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchRatings = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('rating')
        .eq('vendor_id', vendorId)
        .not('rating', 'is', null);

      if (error) {
        console.error('Error fetching ratings:', error);
        return;
      }

      const ratings = data.map(order => order.rating);
      setRating(calculateAverageRating(ratings));
    };

    fetchRatings();
  }, [vendorId, supabase]);

  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Basic Info Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image and Info Section */}
          <div className="flex items-start gap-6">
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-full border-2 border-gray-100 shadow-md"
                sizes="(max-width: 768px) 128px, 128px"
                priority
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <span className="flex items-center bg-green-50 text-green-800 px-2 py-1 rounded-full text-sm">
                  ⭐ {rating}
                </span>
              </div>
              <p className="text-gray-600 mb-1">{specialty}</p>
              <p className="text-gray-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </p>
            </div>
          </div>

          {/* Description Section - Hidden on mobile */}
          {description && (
            <div className="hidden md:flex md:flex-1 md:border-l md:border-gray-100 md:pl-6 md:items-center">
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Description Section - Only visible on mobile */}
        {description && (
          <div className="md:hidden mt-6 px-2">
            <p className="text-gray-600 text-sm leading-relaxed italic">
              {description}
            </p>
          </div>
        )}

        {/* Notes Section */}
        {notes && notes.length > 0 && (
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {notes.map((note, index) => (
                <span 
                  key={index}
                  className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm border border-amber-100"
                >
                  {note.replace('*', '•')}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 