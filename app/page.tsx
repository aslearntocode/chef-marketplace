'use client';

import Link from 'next/link';
import './styles.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import { products } from '@/data/whole-foods';
import ProductRating from '@/components/ProductRating';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPopularSlide, setCurrentPopularSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  // For mobile product attributes carousel
  const [mobileAttrSlide, setMobileAttrSlide] = useState(0);
  const attrCards = [
    {
      icon: '🚫',
      title: 'No Artificial Flavors',
      desc: 'Pure, natural taste in every bite',
    },
    {
      icon: '🌿',
      title: 'No Preservatives',
      desc: 'Fresh and natural ingredients only',
    },
    {
      icon: '🇮🇳',
      title: 'Made in India',
      desc: 'Supporting local artisans and traditions',
    },
    {
      icon: '✅',
      title: 'FSSAI Certified',
      desc: 'Highest standards of food safety',
    },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.tags?.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      
      // Find products that match the search query in their tags
      const matchingProducts = products.filter(product => 
        product.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );

      if (matchingProducts.length > 0) {
        // Get the category of the first matching product
        const firstMatchCategory = matchingProducts[0].category.toLowerCase();
        
        // Map category to route
        const categoryRoutes: { [key: string]: string } = {
          'drinks': '/categories/drinks',
          'healthy treats': '/categories/healthier-treats',
          'condiments': '/categories/condiments',
          'healthy bites': '/categories/healthier-bites',
          'spice blends': '/categories/spice-blends',
          'nuts and seeds': '/categories/nuts-and-seeds',
          'healthy breakfast': '/categories/healthier-breakfast',
          'All Natural Pickles': '/categories/condiments',
          'mouth fresheners': '/categories/mouth-fresheners'
        };

        // If we have a matching category route, go there with the search query
        if (categoryRoutes[firstMatchCategory]) {
          router.push(`${categoryRoutes[firstMatchCategory]}?q=${encodeURIComponent(searchQuery.trim())}`);
        } else {
          // If no specific category route, go to main whole foods with search query
          router.push(`/whole-foods?q=${encodeURIComponent(searchQuery.trim())}`);
        }
      } else {
        // If no matches found, go to main whole foods with search query
        router.push(`/whole-foods?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  const handleSuggestionClick = (product: any) => {
    // Determine the correct category route based on product category
    const categoryRoutes: { [key: string]: string } = {
      'drinks': '/categories/drinks',
      'healthy treats': '/categories/healthier-treats',
      'condiments': '/categories/condiments',
      'healthy bites': '/categories/healthier-bites',
      'spice blends': '/categories/spice-blends',
      'nuts and seeds': '/categories/nuts-and-seeds',
      'healthy breakfast': '/categories/healthier-breakfast',
      'All Natural Pickles': '/categories/condiments',
      'mouth fresheners': '/categories/mouth-fresheners'
    };
    
    const productCategory = product.category.toLowerCase();
    const categoryRoute = categoryRoutes[productCategory];
    
    if (categoryRoute) {
      router.push(`${categoryRoute}/${product.id}`);
    } else {
      // Fallback to whole-foods if category not found
      router.push(`/whole-foods/${product.id}`);
    }
    setShowSuggestions(false);
  };

  const slides = [
    {
      title: "Discover Refreshing Healthy Drinks",
      description: "Experience the taste of homemade goodness delivered to your doorstep",
      buttonText: "Explore Now",
      link: "/categories/healthier-beverages"
    },
    {
      title: "Healthier Bites!",
      description: "Discover our nutritious range of healthier bites - perfect for guilt-free snacking!",
      buttonText: "Explore Now",
      link: "/categories/healthier-bites"
    },
    {
      title: "Healthier Cookware!",
      description: "Discover our premium collection of healthier cookware and serveware - perfect for your healthy lifestyle!",
      buttonText: "Explore Now",
      link: "/cooking-accessories"
    },
    {
      title: "All Natural Spice Blends",
      description: "Discover our premium collection of handcrafted spice blends - perfect for elevating your culinary creations!",
      buttonText: "Explore Now",
      link: "/categories/spice-blends"
    }
  ];

  const handleCarouselClick = (link: string) => {
    console.log('Navigating to:', link);
    router.push(link);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const popularTimer = setInterval(() => {
      const slider = document.querySelector('.slider');
      if (slider) {
        const slideWidth = 332;
        slider.scrollLeft += slideWidth;
        
        if (slider.scrollLeft >= slideWidth * 10) {
          slider.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(popularTimer);
  }, []);

  useEffect(() => {
    // Auto-advance mobile attribute carousel every 3s
    const timer = setInterval(() => {
      setMobileAttrSlide((prev) => (prev + 1) % attrCards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0 bg-[#FDBE28]">
      <div className="w-full font-nunito">
        {/* Search Section */}
        <section className="bg-[#FDBE28] py-4 px-4 mt-8 md:mt-4 relative z-50">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="relative flex gap-2 z-20">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border-2 border-[#8B4513] focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-gray-800 bg-white text-sm shadow-sm"
                />
                <FiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#8B4513]" size={16} />
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && searchQuery && (
                  <div className="absolute z-[9999] w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleSuggestionClick(product)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                        >
                          <div className="relative w-12 h-12">
                            <Image
                              src={product.image || '/images/placeholder.png'}
                              alt={product.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.category}</div>
                            {/* Product Rating */}
                            <div className="mt-1">
                              <ProductRating 
                                productId={product.id}
                                showRatingInput={false}
                                showDetailedBreakdown={false}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">No products found</div>
                    )}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#8B4513] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6B3410] transition-colors text-sm shadow-sm flex items-center gap-2"
              >
                <FiSearch size={16} />
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] bg-gray-50">
          {/* Mobile Background Image */}
          <div className="md:hidden absolute inset-0 z-0">
            <Image
              src="/images/dateandnutbites/NNs_80.jpg"
              alt="Delicious date and nut bites"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[600px]">
              {/* Left side - Image */}
              <div className="relative h-[400px] md:h-[600px] order-2 md:order-1 hidden md:block">
                <Image
                  src="/images/dateandnutbites/NNs_80.jpg"
                  alt="Delicious date and nut bites"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              {/* Right side - Text */}
              <div className="text-center md:text-right order-1 md:order-2">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white md:text-[#8B4513] font-['YWFT_Hannah_Narrow'] mb-8">
                  <span className="md:hidden block pt-8">
                    Craving For Healthy<br />Yet Tasty Food?
                  </span>
                  <span className="hidden md:inline">
                    Craving For Healthy<br />Yet Tasty Food?
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white md:text-[#8B4513] mb-8">
                  Our products contain no preservatives, no artificial chemicals and are made of just natural and healthier ingredients
                </p>
                {/* Category Buttons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <Link
                    href="/categories/healthier-treats"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Healthier Treats
                  </Link>
                  <Link
                    href="/categories/healthier-beverages"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Healthier Beverages
                  </Link>
                  <Link
                    href="/categories/healthier-bites"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Healthier Bites
                  </Link>
                  <Link
                    href="/categories/condiments"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Pickles & Chutneys
                  </Link>
                  <Link
                    href="/categories/healthier-breakfast"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Healthier Breakfast
                  </Link>
                  <Link
                    href="/categories/spice-blends"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Spice Blends
                  </Link>
                  <Link
                    href="/categories/nuts-and-seeds"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Nuts & Nut Butters
                  </Link>
                  <Link
                    href="/categories/healthier-cakes"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Healthier Cakes
                  </Link>
                  <Link
                    href="/categories/healthier-premixes"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Healthier Premixes
                  </Link>
                  <Link
                    href="/categories/sauces-and-dressings"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Sauces & Dressings
                  </Link>
                  <Link
                    href="/categories/mouth-fresheners"
                    className="bg-white md:bg-[#8B4513] text-[#8B4513] md:text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-gray-100 md:hover:bg-[#6B3410] transition-colors text-center shadow-lg md:shadow-none"
                  >
                    Mouth Fresheners
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals - Healthier Cookware Section */}
        <section className="bg-[#FDBE28] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['YWFT_Hannah_Narrow'] text-[#8B4513]">
                  Healthier Cookware!
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-[#8B4513]">
                  Discover our premium collection of healthier cookware and serveware - perfect for your healthy lifestyle!
                </p>
                <div className="relative z-10">
                  <Link
                    href="/cooking-accessories"
                    className="bg-[#8B4513] text-white px-10 py-4 rounded-full hover:bg-[#6B3410] transition-colors inline-block text-lg font-medium shadow-lg"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden hidden md:block">
                <Image
                  src="/images/accessories/pinkheartmug/IMG_1.jpeg"
                  alt="Healthier Cookware Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why The Divine Hands Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-stretch">
              {/* Left side - Text */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B4513] font-['YWFT_Hannah_Narrow'] mb-8">
                  Why Us?
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Divine Hands (TDH) is more than a company—it's a passion to inspire better health and true happiness. 
                  Our mission is to connect people with pure, wholesome, chemical-free products curated by talented artisans across India. 
                  These healthful options often go unnoticed—not due to lack of interest, but due to limited access.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TDH bridges this gap, offering an easy way to discover nutritious, delicious foods that nurture both body and soul. After all, health is true wealth—and we're here to help you cultivate it, one mindful choice at a time. Taste, health, and happiness—delivered.
                </p>
                {/* Features Grid */}
                <div className="flex justify-center mt-8">
                  <div className="grid grid-cols-3 gap-12 max-w-3xl">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🌿</div>
                      <h3 className="text-lg font-semibold text-[#8B4513]">No Preservatives</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">
                        <span>❌🧪</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#8B4513]">No Artificial Chemicals</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🌾</div>
                      <h3 className="text-lg font-semibold text-[#8B4513]">Only Natural Ingredients</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Attributes Carousel */}
        <section className="bg-[#FDBE28] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-[#8B4513] font-['YWFT_Hannah_Narrow'] mb-12">Our Commitment to Quality</h2>
            
            {/* Mobile Carousel */}
            <div className="md:hidden overflow-x-hidden" style={{ minHeight: 240 }}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ width: '100vw', transform: `translateX(-${mobileAttrSlide * 100}vw)` }}
              >
                {attrCards.map((card, idx) => (
                  <div key={card.title} className="flex-shrink-0" style={{ width: '100vw', maxWidth: '100vw', paddingLeft: 8, paddingRight: 8 }}>
                    <div className="bg-white rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 shadow-lg flex flex-col items-center justify-center mx-auto" style={{ minHeight: 160, maxWidth: 400 }}>
                      <div className="text-5xl mb-4 text-[#8B4513]">{card.icon}</div>
                      <h3 className="text-xl font-bold text-[#8B4513] mb-2">{card.title}</h3>
                      <p className="text-[#8B4513]">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel Navigation Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {attrCards.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${mobileAttrSlide === index ? 'bg-[#8B4513]' : 'bg-[#8B4513]/30'}`}
                    onClick={() => setMobileAttrSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* No Artificial Flavors */}
              <div className="bg-white rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 shadow-lg">
                <div className="text-5xl mb-4">🚫</div>
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">No Artificial Flavors</h3>
                <p className="text-gray-600">Pure, natural taste in every bite</p>
              </div>

              {/* No Preservatives */}
              <div className="bg-white rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 shadow-lg">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">No Preservatives</h3>
                <p className="text-gray-600">Fresh and natural ingredients only</p>
              </div>

              {/* Made in India */}
              <div className="bg-white rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 shadow-lg">
                <div className="text-5xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">Made in India</h3>
                <p className="text-gray-600">Supporting local artisans and traditions</p>
              </div>

              {/* FSSAI Certified */}
              <div className="bg-white rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 shadow-lg">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">FSSAI Certified</h3>
                <p className="text-gray-600">Highest standards of food safety</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Food Showcase Conveyor Belt */}
        </div>

        {/* Most Popular Items Section - Full Width */}
        <section className="w-full bg-white py-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-[#8B4513] font-['YWFT_Hannah_Narrow'] mb-8">Most Popular Items</h2>
          <div className="flex items-center gap-1 sm:gap-4 relative overflow-hidden">
            <div className="max-w-full w-full px-7 sm:px-0">
              <div className="chef-marketplace">
                <div className="slider flex">
                  {/* First set of items */}
                  {[
                    { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/categories/healthier-treats/date-nut-bites' },
                    // { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/categories/healthier-treats/sugar-free-dates-and-peanut-ladoo' },
                    { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/categories/healthier-treats/sugar-free-dry-fruits-laddoos' },
                    { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/categories/healthier-beverages/paan-e-bahar' },
                    // { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Sauf', price: '₹149', path: '/whole-foods/6' },
                    { src: '/images/milletcookies/can/DSC03949.jpg', name: 'Millet Cookies', price: '₹399', path: '/categories/healthier-bites/millet-cookies-multiple-flavors' },
                    { src: '/images/wholewheatajwainmathri/MZ8_0752.jpg', name: 'Whole Wheat Ajwain Mathri', price: '₹156', path: '/categories/healthier-bites/whole-wheat-ajwain-mathri' },
                    { src: '/images/khakhras2/IMG_10.png', name: 'Mint (Pudina) Khakhra', price: '₹156', path: '/categories/healthier-bites/mint-pudina-khakhra' },
                  ].map((item, index) => (
                    <Link 
                      key={`first-${index}`} 
                      href={item.path}
                      className="slide cursor-pointer block transform transition-transform duration-300 hover:scale-105 min-w-[300px] mx-4"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                        <Image 
                          src={item.src} 
                          alt={item.name} 
                          width={500}
                          height={300}
                          className="w-full h-56 sm:h-48 object-cover rounded-t-xl"
                        />
                        <div className="p-3 sm:p-4">
                          <h3 className="text-xs sm:text-lg font-bold mb-1">{item.name}</h3>
                          <p className="text-yellow-600 font-semibold text-xs sm:text-base">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* Second set - duplicate of first set */}
                  {[
                    { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/categories/healthier-treats/date-nut-bites' },
                    // { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/categories/healthier-treats/sugar-free-dates-and-peanut-ladoo' },
                    { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/categories/healthier-treats/sugar-free-dry-fruits-laddoos' },
                    { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/categories/healthier-beverages/paan-e-bahar' },
                    // { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Sauf', price: '₹149', path: '/whole-foods/6' },
                    { src: '/images/milletcookies/can/DSC03949.jpg', name: 'Millet Cookies', price: '₹399', path: '/categories/healthier-bites/millet-cookies-multiple-flavors' },
                    { src: '/images/wholewheatajwainmathri/MZ8_0752.jpg', name: 'Whole Wheat Ajwain Mathri', price: '₹156', path: '/categories/healthier-bites/whole-wheat-ajwain-mathri' },
                    { src: '/images/khakhras2/IMG_10.png', name: 'Mint (Pudina) Khakhra', price: '₹156', path: '/categories/healthier-bites/mint-pudina-khakhra' },
                  ].map((item, index) => (
                    <Link 
                      key={`second-${index}`} 
                      href={item.path}
                      className="slide cursor-pointer block transform transition-transform duration-300 hover:scale-105 min-w-[300px] mx-4"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                        <Image 
                          src={item.src} 
                          alt={item.name} 
                          width={500}
                          height={300}
                          className="w-full h-56 sm:h-48 object-cover rounded-t-xl"
                        />
                        <div className="p-3 sm:p-4">
                          <h3 className="text-xs sm:text-lg font-bold mb-1">{item.name}</h3>
                          <p className="text-yellow-600 font-semibold text-xs sm:text-base">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* Third set - duplicate of first set for seamless loop */}
                  {[
                    { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/categories/healthier-treats/date-nut-bites' },
                    // { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/categories/healthier-treats/sugar-free-dates-and-peanut-ladoo' },
                    { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/categories/healthier-treats/sugar-free-dry-fruits-laddoos' },
                    { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/categories/healthier-beverages/paan-e-bahar' },
                    // { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Sauf', price: '₹149', path: '/whole-foods/6' },
                    { src: '/images/milletcookies/can/DSC03949.jpg', name: 'Millet Cookies', price: '₹399', path: '/categories/healthier-bites/millet-cookies-multiple-flavors' },
                    { src: '/images/wholewheatajwainmathri/MZ8_0752.jpg', name: 'Whole Wheat Ajwain Mathri', price: '₹156', path: '/categories/healthier-bites/whole-wheat-ajwain-mathri' },
                    { src: '/images/khakhras2/IMG_10.png', name: 'Mint (Pudina) Khakhra', price: '₹156', path: '/categories/healthier-bites/mint-pudina-khakhra' },
                  ].map((item, index) => (
                    <Link 
                      key={`third-${index}`} 
                      href={item.path}
                      className="slide cursor-pointer block transform transition-transform duration-300 hover:scale-105 min-w-[300px] mx-4"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                        <Image 
                          src={item.src} 
                          alt={item.name} 
                          width={500}
                          height={300}
                          className="w-full h-56 sm:h-48 object-cover rounded-t-xl"
                        />
                        <div className="p-3 sm:p-4">
                          <h3 className="text-xs sm:text-lg font-bold mb-1">{item.name}</h3>
                          <p className="text-yellow-600 font-semibold text-xs sm:text-base">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Metrics */}
        <section className="w-full bg-[#FDBE28] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Chefs Metric */}
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">50+</h3>
                <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Healthier Food Curators</p>
              </div>

              {/* Products Metric */}
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">100+</h3>
                <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Products Listed</p>
              </div>

              {/* Customers Metric */}
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">3,000+</h3>
                <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Happy Customers</p>
              </div>

              {/* Areas Metric */}
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">200+</h3>
                <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Areas Currently Being Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Curator Application Section - Full Width */}
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left side - Calling all section */}
                <div className="rounded-lg p-8">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-3xl">🌿</span>
                    <h2 className="text-4xl text-center font-bold text-[#8B4513] font-['YWFT_Hannah_Narrow']">Calling all 'HEALTHIER FOOD' curators!</h2>
                    <span className="text-3xl">🍃</span>
                  </div>
                  
                  <p className="text-center text-lg text-gray-700">
                    Do you have a passion for coming up with nutritious yet delicious food products? If yes, then we would love for you and your expertise to be a part of our platform. So, lets celebrate the blend of 'Healthful and Tasteful' together!
                  </p>
                </div>

                {/* Right side - Why join us section */}
                <div className="rounded-lg p-8">
                  <h3 className="text-4xl font-bold text-center mb-6 text-[#8B4513] font-['YWFT_Hannah_Narrow']">
                    ⭐ Why join us?
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-base text-gray-700">
                      • Showcase your healthier food curatory skills to a broader audience
                    </li>
                    <li className="text-base text-gray-700">
                      • Connect with people who appreciate wholesome food products
                    </li>
                    <li className="text-base text-gray-700">
                      • 'Health being the biggest wealth'- Contribute to the health and happiness of the society
                    </li>
                    <li className="text-base text-gray-700">
                      • Be a part of 'Make in India' and 'Made in India'
                    </li>
                  </ul>
                </div>
              </div>

              {/* Apply Now button centered below both sections */}
              <div className="text-center mt-8">
                <Link 
                  href="/chef-application"
                  className="bg-[#8B4513] text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-[#6B3410] transition-colors inline-block"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
