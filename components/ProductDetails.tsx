'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

interface ProductDetailsProps {
  description: string;
  size?: string;
  ingredients_benefits?: Record<string, string[]>;
  benefits?: string[];
}

export default function ProductDetails({ description, size, ingredients_benefits, benefits }: ProductDetailsProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Size Section */}
      <div className="border rounded-lg">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full p-4 text-left"
        >
          <span className="font-medium">Size</span>
          {openSection === 'size' ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {openSection === 'size' && (
          <div className="px-4 pb-4 text-gray-600">
            {size || 'Size information not available'}
          </div>
        )}
      </div>

      {/* Product Description Section */}
      <div className="border rounded-lg">
        <button
          onClick={() => toggleSection('description')}
          className="flex items-center justify-between w-full p-4 text-left"
        >
          <span className="font-medium">Product Description</span>
          {openSection === 'description' ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {openSection === 'description' && (
          <div className="px-4 pb-4 text-gray-600">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Product Ingredients & Benefits Section */}
      <div className="border rounded-lg">
        <button
          onClick={() => toggleSection('ingredients')}
          className="flex items-center justify-between w-full p-4 text-left"
        >
          <span className="font-medium">Product Ingredients & Benefits</span>
          {openSection === 'ingredients' ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {openSection === 'ingredients' && (
          <div className="px-4 pb-4">
            {(ingredients_benefits && Object.keys(ingredients_benefits).length > 0) || (benefits && benefits.length > 0) ? (
              <div className="space-y-4">
                {ingredients_benefits && Object.keys(ingredients_benefits).length > 0 && (
                  <div>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1 font-bold">
                      {Object.entries(ingredients_benefits).map(([ingredient, benefits], index) => (
                        <li key={index}>
                          <span className="font-bold">{ingredient}</span>
                          {benefits && benefits.length > 0 && (
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 font-normal">
                              {benefits.map((benefit, bIndex) => (
                                <li key={bIndex}>{benefit}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {benefits && benefits.length > 0 && (
                  <div>
                    {/* <h4 className="font-medium mb-2">Benefits:</h4> */}
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-600">Ingredients and benefits information not available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 