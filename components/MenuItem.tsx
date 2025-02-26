import Image from 'next/image';

interface MenuItemProps {
  item_name: string;
  description: string;
  price: number;
  category: string;
  availability: string;
  image_url?: string;
}

export default function MenuItem({ item_name, description, price, category, availability, image_url }: MenuItemProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {image_url && (
        <div className="relative h-48 w-full mb-4">
          <Image 
            src={image_url}
            alt={item_name}
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{item_name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-lg font-bold mb-2">₹{price}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{category}</span>
        <span className={`px-2 py-1 rounded-full text-sm ${
          availability === 'Available' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {availability}
        </span>
      </div>
    </div>
  );
} 