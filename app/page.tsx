'use client';

import Link from 'next/link';
import './styles.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isPicklesPopupVisible, setIsPicklesPopupVisible] = useState(false);
  const [isHealthyBitesPopupVisible, setIsHealthyBitesPopupVisible] = useState(false);

  useEffect(() => {
    // Show pickles popup after 1.5s
    const picklesTimer = setTimeout(() => {
      setIsPicklesPopupVisible(true);
    }, 1500);

    // Show healthy bites popup after 2.5s
    const healthyBitesTimer = setTimeout(() => {
      setIsHealthyBitesPopupVisible(true);
    }, 2500);

    return () => {
      clearTimeout(picklesTimer);
      clearTimeout(healthyBitesTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FFD700]">
      {/* Pickles Popup (bottom position) */}
      <div 
        className={`fixed right-0 bottom-24 transition-transform duration-300 ease-in-out transform ${isPicklesPopupVisible ? 'translate-x-0' : 'translate-x-[calc(100%-40px)]'} z-50`}
        onClick={() => setIsPicklesPopupVisible(!isPicklesPopupVisible)}
      >
        <div className="bg-white rounded-l-lg shadow-lg p-4 w-64 relative border-l-4 border-[#FFD700]">
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 bg-[#FFD700] p-2 rounded-md text-black">New Arrivals! 🌶️</h3>
            <p className="text-sm text-gray-600 mb-3">
              Check out our newly added spicy, tangy yet healthy pickles and chutneys!
            </p>
            <Link 
              href="/whole-foods" 
              className="block bg-[#FFD700] text-black text-center py-2 px-4 rounded-md hover:bg-[#F7C948] transition-colors text-sm font-semibold"
            >
              Order Now
            </Link>
          </div>

          {/* Vertical text for minimized state */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-180 whitespace-nowrap text-center" 
               style={{ writingMode: 'vertical-rl' }}>
            <span className="bg-[#FFD700] text-black py-2 px-1 rounded-b-md text-sm font-semibold">
              Pickles & Chutneys! 🌶️
            </span>
          </div>
        </div>
      </div>

      {/* Healthy Bites Popup (modified position) */}
      <div 
        className={`fixed right-0 bottom-[calc(24rem)] transition-transform duration-300 ease-in-out transform ${isHealthyBitesPopupVisible ? 'translate-x-0' : 'translate-x-[calc(100%-40px)]'} z-50`}
        onClick={() => setIsHealthyBitesPopupVisible(!isHealthyBitesPopupVisible)}
      >
        <div className="bg-white rounded-l-lg shadow-lg p-4 w-64 relative border-l-4 border-[#FFD700]">
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 bg-[#FFD700] p-2 rounded-md text-black">Healthy Bites! 🌿</h3>
            <p className="text-sm text-gray-600 mb-3">
              Discover our nutritious range of healthy bites - perfect for guilt-free snacking!
            </p>
            <Link 
              href="/whole-foods" 
              className="block bg-[#FFD700] text-black text-center py-2 px-4 rounded-md hover:bg-[#F7C948] transition-colors text-sm font-semibold"
            >
              Explore Now
            </Link>
          </div>

          {/* Vertical text for minimized state */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-180 whitespace-nowrap text-center" 
               style={{ writingMode: 'vertical-rl' }}>
            <span className="bg-[#FFD700] text-black py-2 px-1 rounded-b-md text-sm font-semibold">
              Healthy Bites! 🌿
            </span>
          </div>
        </div>
      </div>

      {/* Header
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/home-made-food" className="nav-link">Home Made Food</Link>
            <Link href="/home-made-desserts" className="nav-link">Home Made Desserts</Link>
            <Link href="/tiffin-service" className="nav-link">Tiffin Service</Link>
          </div> */}

          {/* <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/home-made-food" className="nav-link">Home Made Food</Link>
            <Link href="/home-made-desserts" className="nav-link">Home Made Desserts</Link>
            <Link href="/tiffin-service" className="nav-link">Tiffin Service</Link>
            <Link href="/whole-foods" className="nav-link">Whole Foods</Link>
          </div> */}
        {/* </div>
      </nav> */}


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* White Container */}
        <div className="bg-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Discover Authentic Home-Cooked Food
          </h2>

          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Link 
              href="/home-made-food"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block text-center"
            >
              <div className="text-base font-medium">Meals</div>
              <div className="text-[11px] mt-0.5">Next Day Delivery</div>
            </Link>
            <Link 
              href="/home-made-desserts"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block text-center"
            >
              <div className="text-base font-medium">Desserts</div>
              <div className="text-[11px] mt-0.5">Next Day Delivery</div>
            </Link>
            <Link 
              href="/home-made-food/tiffin"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block text-center"
            >
              <div className="text-base font-medium">Tiffin Service</div>
              <div className="text-[11px] mt-0.5">Next Day Delivery</div>
            </Link>
            <Link 
              href="/home-made-food/snacks"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block text-center"
            >
              <div className="text-base font-medium">Packaged Snacks</div>
              <div className="text-[11px] mt-0.5">Same Day Delivery</div>
            </Link>
            <Link 
              href="/whole-foods"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block text-center"
            >
              <div className="text-base font-medium">Whole Foods</div>
              <div className="text-[11px] mt-0.5">Same Day Delivery</div>
            </Link>
          </div>
        </div>

        {/* Food Showcase Conveyor Belt */}
        <div className="bg-white rounded-lg p-8 mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Most Popular Items</h2>
          <div className="flex items-center gap-1 sm:gap-4 relative">
            {/* Left Arrow */}
            <button 
              className="slider-nav-button left absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 sm:p-4 rounded-lg transition-all text-xs sm:text-base w-6 sm:w-auto"
              onClick={() => {
                const slider = document.querySelector('.slider');
                if (slider) {
                  const slideWidth = window.innerWidth > 640 ? 350 : slider.clientWidth;
                  if (slider.scrollLeft === 0) {
                    slider.scrollLeft = slider.scrollWidth / 2;
                  }
                  slider.scrollLeft -= slideWidth + 32; // width + gap
                }
              }}
            >
              ←
            </button>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto w-full sm:w-auto px-7 sm:px-0">
              <div className="chef-marketplace">
                <div className="slider">
                  {/* First set of items */}
                  {[
                    { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/whole-foods/9' },
                    { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/whole-foods/3' },
                    { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/whole-foods/4' },
                    { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/whole-foods/6' },
                    { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Saffron', price: '₹149', path: '/whole-foods/7' },
                  ].map((item, index) => (
                    <Link 
                      key={`first-${index}`} 
                      href={item.path}
                      className="slide cursor-pointer block"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                        <Image 
                          src={item.src} 
                          alt={item.name} 
                          width={500}
                          height={300}
                          className="w-full h-56 sm:h-48 object-cover"
                        />
                        <div className="p-3 sm:p-4">
                          <h3 className="text-xs sm:text-lg font-bold mb-1">{item.name}</h3>
                          <p className="text-yellow-600 font-semibold text-xs sm:text-base">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* Second set - Update with the same paths */}
                  {[
                    { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/whole-foods/9' },
                    { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/whole-foods/3' },
                    { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/whole-foods/4' },
                    { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/whole-foods/6' },
                    { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Saffron', price: '₹149', path: '/whole-foods/7' },
                  ].map((item, index) => (
                    <Link 
                      key={`second-${index}`} 
                      href={item.path}
                      className="slide cursor-pointer block"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                        <Image 
                          src={item.src} 
                          alt={item.name} 
                          width={500}
                          height={300}
                          className="w-full h-56 sm:h-48 object-cover"
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

            {/* Right Arrow */}
            <button 
              className="slider-nav-button absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 sm:p-4 rounded-lg transition-all text-xs sm:text-base w-6 sm:w-auto"
              onClick={() => {
                const slider = document.querySelector('.slider');
                if (slider) {
                  const slideWidth = window.innerWidth > 640 ? 350 : slider.clientWidth;
                  if (slider.scrollLeft >= (slider.scrollWidth / 2) - slider.clientWidth) {
                    slider.scrollLeft = 0;
                  }
                  slider.scrollLeft += slideWidth + 32; // width + gap
                }
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Marketing Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Chefs Metric */}
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-600 text-lg">Home Chefs</p>
          </div>

          {/* Customers Metric */}
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-4xl font-bold mb-2">1,000+</h3>
            <p className="text-gray-600 text-lg">Happy Customers</p>
          </div>

          {/* Areas Metric */}
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p className="text-gray-600 text-lg">Areas Currently Being Served</p>
          </div>
        </div>

        {/* Two Column Layout for Chefs Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Recently Joined Chefs Section */}
          <section className="bg-white rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Meet Our Newest Chefs & Bakers</h2>
              <p className="text-gray-600 text-sm">Discover the latest talented additions to our culinary family</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  id: 'chef_1',
                  name: 'Chef Anjali Broor',
                  specialty: 'North Indian Cuisine',
                  image: '/chefs/Chef Anjali Broor.png',
                  rating: '4.8',
                  path: '/chefs/chef_1'
                },
                {
                  id: 'baker_1',
                  name: 'Baker Juhi Kastiya',
                  specialty: 'Artisanal Breads & Pastries',
                  image: '/chefs/Chef Juhi Kastiya.png',
                  rating: '4.9',
                  path: '/bakers/baker_1'
                }
              ].map((chef) => (
                <Link 
                  href={chef.path}
                  key={chef.id}
                  className="block group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 h-full">
                    <div className="relative h-36">
                      <Image
                        src={chef.image}
                        alt={chef.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <h3 className="text-white font-bold text-base">{chef.name}</h3>
                        <p className="text-white/90 text-xs">{chef.specialty}</p>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-sm font-medium">{chef.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Chef Application Section */}
          <section className="bg-[#FFFBEB] rounded-lg p-8 border-2 border-[#FFD700]">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-3xl">🍽️</span>
              <h2 className="text-2xl font-bold">Calling All Home Chefs & Bakers!</h2>
              <span className="text-3xl">🍰</span>
            </div>
            
            <p className="text-center text-lg text-gray-700 mb-8">
              Do you have a passion for cooking or baking? We want YOU to join our marketplace! 
              We&apos;re looking for talented home chefs and bakers who pour their love for food into every dish they create.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-center mb-6">
                ⭐ Why Join Us?
              </h3>
              <ul className="space-y-4">
                <li className="text-base text-gray-700">
                  • Showcase your culinary skills to a broader audience
                </li>
                <li className="text-base text-gray-700">
                  • Connect with food lovers who appreciate homemade goodness
                </li>
                <li className="text-base text-gray-700">
                  • Earn from your passion, while working from your own kitchen
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/chef-application"
                className="bg-[#FFD700] text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-[#F7C948] transition-colors inline-block"
              >
                Apply Now
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* How It Works Section - Commented Out
      <section className="py-12 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#FFFBEB] rounded-lg p-12">
            <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="relative">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Browse Local Chefs</h3>
                <p className="text-gray-600">
                  Explore menus from talented home chefs in your area
                </p>
              </div>

              <div className="relative">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Place Your Order for Your Favorite Dish</h3>
                <p className="text-gray-600">
                  Select your favorite dishes and place your order
                </p>
              </div>

              <div className="relative">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Enjoy Home Cooked Food</h3>
                <p className="text-gray-600">
                  Receive fresh, home-cooked meals delivered to your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Footer would go here */}
    </main>
  );
}
