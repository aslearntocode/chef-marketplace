import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { calculateAverageRating } from '@/utils/ratings';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface VendorCardProps {
  id: string;
  image: string;
  name: string;
  specialty: string;
  location: string;
  href: string;
}

export default function VendorCard({ id, image, name, specialty, location, href }: VendorCardProps) {
  const [rating, setRating] = useState<string>('New');
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchRatings = async () => {
      console.log('Fetching ratings for vendor:', id);
      
      const { data, error } = await supabase
        .from('orders')
        .select('rating, id, vendor_id')  // Added id and vendor_id for debugging
        .eq('vendor_id', id.toString())
        .not('rating', 'is', null);

      if (error) {
        console.error('Error fetching ratings:', error);
        return;
      }

      console.log('Found orders with ratings:', data);

      const ratings = data.map(order => order.rating).filter(Boolean);
      console.log('Filtered ratings:', ratings);
      
      const averageRating = calculateAverageRating(ratings);
      console.log('Calculated average:', averageRating);
      
      setRating(averageRating);
    };

    fetchRatings();
  }, [id, supabase]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-gray-600 text-sm mb-1">{specialty}</p>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-800 flex items-center justify-end gap-1">
              {rating}
              {rating !== 'New' && <FaStar className="text-yellow-400" />}
            </div>
            <div className="text-xs text-gray-500">
              {rating === 'New' ? 'Rating' : 'Rating'}
            </div>
          </div>
        </div>
        <Link 
          href={href}
          className="block w-full text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
} 