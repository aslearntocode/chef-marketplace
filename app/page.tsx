'use client';

import Link from 'next/link';
import './styles.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPopularSlide, setCurrentPopularSlide] = useState(0);
  const slides = [
    {
      title: "Discover Refreshing Healthy Drinks",
      description: "Experience the taste of homemade goodness delivered to your doorstep",
      buttonText: "Explore Now",
      link: "/whole-foods/categories/drinks"
    },
    {
      title: "Healthy Bites!",
      description: "Discover our nutritious range of healthy bites - perfect for guilt-free snacking!",
      buttonText: "Explore Now",
      link: "/whole-foods/categories/healthy-bites"
    },
    {
      title: "New Arrivals!",
      description: "Check out our newly added spicy, tangy yet healthy pickles and chutneys!",
      buttonText: "Explore Now",
      link: "/whole-foods/categories/pickles"
    }
  ];

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[72px]">
      <div className="w-full font-nunito">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[600px]">
              {/* Left side - Image */}
              <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B4513] font-['YWFT_Hannah_Narrow'] mb-8">
                  CRAVING FOR<br />HEALTHY<br />YET TASTY<br />SNACKS OR DESSERTS?
                </h1>
                <Link
                  href="/whole-foods/"
                  className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#6B3410] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why The Divine Hands Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
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
              
              {/* Right side - Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/wholewheatjaggery-gurpaara/NNs_44.jpg"
                  alt="The Divine Hands Story"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Carousel */}
        <div className="relative h-[400px] overflow-hidden bg-[#FFD700]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center max-w-4xl px-4 relative pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['YWFT_Hannah_Narrow'] text-[#8B4513]">{slide.title}</h2>
                    <p className="text-xl md:text-2xl mb-8 text-[#8B4513]">{slide.description}</p>
                    <Link
                      href={slide.link}
                      className="bg-[#8B4513] text-white px-10 py-4 rounded-full hover:bg-[#6B3410] transition-colors inline-block text-lg font-medium shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {slide.buttonText}
                    </Link>
                    {/* Carousel Navigation Dots */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-4 h-4 rounded-full transition-colors ${
                            currentSlide === idx ? 'bg-[#8B4513]' : 'bg-[#8B4513]/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Food Showcase Conveyor Belt */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-[#8B4513] font-['YWFT_Hannah_Narrow'] mb-8">Most Popular Items</h2>
            <div className="flex items-center gap-1 sm:gap-4 relative overflow-hidden">
              <div className="max-w-6xl mx-auto w-full sm:w-auto px-7 sm:px-0">
                <div className="chef-marketplace">
                  <div className="slider flex">
                    {/* First set of items */}
                    {[
                      { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/whole-foods/8' },
                      { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/whole-foods/3' },
                      { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/whole-foods/4' },
                      { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/whole-foods/5' },
                      { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Sauf', price: '₹149', path: '/whole-foods/6' },
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
                      { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/whole-foods/8' },
                      { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/whole-foods/3' },
                      { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/whole-foods/4' },
                      { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/whole-foods/5' },
                      { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Sauf', price: '₹149', path: '/whole-foods/6' },
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
                      { src: '/images/dateandnutbites/NNs_80.jpg', name: 'Date and Nut Bites', price: '₹299', path: '/whole-foods/8' },
                      { src: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg', name: 'Sugar Free Dates and Peanut Ladoo', price: '₹399', path: '/whole-foods/3' },
                      { src: '/images/Sugar Free Dryfruits laddoo.jpeg', name: 'Sugar Free Dryfruits Ladoo', price: '₹349', path: '/whole-foods/4' },
                      { src: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg', name: 'Paan-e-bahar', price: '₹149', path: '/whole-foods/5' },
                      { src: '/images/images-drinks/Soothing Sauf/amazon-11.jpg', name: 'Soothing Sauf', price: '₹149', path: '/whole-foods/6' },
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
          </div>

          {/* Marketing Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Chefs Metric */}
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">50+</h3>
              <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Healthier Food Curators</p>
            </div>

            {/* Customers Metric */}
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">2,000+</h3>
              <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Happy Customers</p>
            </div>

            {/* Areas Metric */}
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-4xl font-bold mb-2 text-[#8B4513] font-['YWFT_Hannah_Narrow']">100+</h3>
              <p className="text-gray-600 text-lg text-[#8B4513] font-['YWFT_Hannah_Narrow']">Areas Currently Being Served</p>
            </div>
          </div>

          {/* Two Column Layout for Chefs Sections */}
          <div className="mt-16">
            {/* Curator Application Section */}
            <section className="bg-[#FFFBEB] rounded-lg p-8 border-2 border-[#FFD700]">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-3xl">🌿</span>
                <h2 className="text-4xl text-center font-bold text-[#8B4513] font-['YWFT_Hannah_Narrow']">Calling all 'HEALTHIER FOOD' curators!</h2>
                <span className="text-3xl">🍃</span>
              </div>
              
              <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Do you have a passion for coming up with nutritious yet delicious food products? If yes, then we would love for you and your expertise to be a part of our platform. So, lets celebrate the blend of 'Healthful and Tasteful' together!
              </p>

              <div className="bg-white rounded-lg p-6 mb-8 max-w-3xl mx-auto">
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

              <div className="text-center">
                <Link 
                  href="/chef-application"
                  className="bg-[#8B4513] text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-[#6B3410] transition-colors inline-block"
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
      </div>
    </main>
  );
}
