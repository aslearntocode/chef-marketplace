'use client';

import Link from 'next/link';
import './styles.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFD700]">
      {/* Header */}
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/home-made-food" className="nav-link">Home Made Food</Link>
            <Link href="/home-made-desserts" className="nav-link">Home Made Desserts</Link>
            <Link href="/tiffin-service" className="nav-link">Tiffin Service</Link>
          </div> */}
        </div>
      </nav>


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
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block"
            >
              Meals
            </Link>
            <Link 
              href="/home-made-desserts"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block"
            >
              Bakery Items
            </Link>
            <Link 
              href="/tiffin-service"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block"
            >
              Tiffin Service
            </Link>
            <Link 
              href="/home-made-food/snacks"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block"
            >
              Packaged Snacks
            </Link>
            
          </div>
        </div>

        {/* Food Showcase Conveyor Belt */}
        <div className="bg-white rounded-lg p-8 mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Most Popular Items</h2>
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button 
              className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-lg transition-all"
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
            <div className="max-w-6xl mx-auto">
              <div className="chef-marketplace">
                <div className="slider">
                  {/* First set of items */}
                  {[
                    { src: '/chefs/Baked Vada Pav.PNG', name: 'Baked Vada Pav by Baker Juhi Kastiya', price: '₹120' },
                    { src: '/chefs/Cinnamon Loaf.PNG', name: 'Cinnamon Loaf by Baker Juhi Kastiya', price: '₹180' },
                    { src: '/chefs/Paneer Tikka Star Pizza.PNG', name: 'Paneer Tikka Star Pizza by Baker Juhi Kastiya', price: '₹250' },
                    { src: '/chefs/Potli Biryani.PNG', name: 'Potli Biryani by Baker Juhi Kastiya', price: '₹200' },
                  ].map((item, index) => (
                    <div key={`first-${index}`} className="slide">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                          <p className="text-yellow-600 font-semibold">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for infinite scroll */}
                  {[
                    { src: '/chefs/Baked Vada Pav.PNG', name: 'Baked Vada Pav by Baker Juhi Kastiya', price: '₹120' },
                    { src: '/chefs/Cinnamon Loaf.PNG', name: 'Cinnamon Loaf by Baker Juhi Kastiya', price: '₹180' },
                    { src: '/chefs/Paneer Tikka Star Pizza.PNG', name: 'Paneer Tikka Star Pizza by Baker Juhi Kastiya', price: '₹250' },
                    { src: '/chefs/Potli Biryani.PNG', name: 'Potli Biryani by Baker Juhi Kastiya', price: '₹200' },
                  ].map((item, index) => (
                    <div key={`second-${index}`} className="slide">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                          <p className="text-yellow-600 font-semibold">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-lg transition-all"
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
      </div>

      {/* How It Works Section */}
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

      {/* Chef Application Section */}
      <section className="py-12 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#FFFBEB] rounded-lg p-12 border-2 border-[#FFD700]">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl">🍽️</span>
              <h2 className="text-4xl font-bold">Calling All Home Chefs & Bakers!</h2>
              <span className="text-4xl">🍰</span>
            </div>
            
            <p className="text-center text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
              Do you have a passion for cooking or baking? We want YOU to join our marketplace! 
              We&apos;re looking for talented home chefs and bakers who pour their love for food into every dish they create.
            </p>

            <div className="bg-white rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                ⭐ Why Join Us?
              </h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="text-lg text-gray-700">
                  • Showcase your culinary skills to a broader audience
                </li>
                <li className="text-lg text-gray-700">
                  • Connect with food lovers who appreciate homemade goodness
                </li>
                <li className="text-lg text-gray-700">
                  • Earn from your passion, while working from your own kitchen
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/chef-application"
                className="bg-[#FFD700] text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-[#F7C948] transition-colors inline-block"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer would go here */}
    </main>
  );
}
