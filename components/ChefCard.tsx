import Link from 'next/link';
import Image from 'next/image';

interface ChefCardProps {
  id: string;
  name: string;
  description: string;
  image_url: string;
  specialty: string;
  location: string;
}

export default function ChefCard({ id, name, description, image_url, specialty, location }: ChefCardProps) {
  return (
    <Link href={`/chefs/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 w-full">
          <Image 
            src={image_url || '/default-chef.jpg'}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{specialty}</p>
          <div className="flex items-center text-gray-500 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
} 