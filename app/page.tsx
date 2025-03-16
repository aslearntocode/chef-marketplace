'use client';

import Link from 'next/link';
import './styles.css';
import Image from 'next/image';

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
          </div>
        </div>

        {/* Food Showcase Conveyor Belt */}
        <div className="bg-white rounded-lg p-8 mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Most Popular Items</h2>
          <div className="flex items-center gap-1 sm:gap-4 relative">
            {/* Left Arrow */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 sm:p-4 rounded-lg transition-all text-xs sm:text-base w-6 sm:w-auto"
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
                    { src: '/chefs/Baked Vada Pav.PNG', name: 'Baked Vada Pav by Chef Juhi Kastiya', price: '₹120', path: '/chefs/chef_5' },
                    { src: '/chefs/Cinnamon Loaf.PNG', name: 'Cinnamon Loaf by Chef Juhi Kastiya', price: '₹180', path: '/bakers/baker_1' },
                    { src: '/chefs/Paneer Tikka Star Pizza.PNG', name: 'Paneer Tikka Star Pizza by Chef Juhi Kastiya', price: '₹250', path: '/chefs/chef_5' },
                    { src: '/chefs/Potli Biryani.PNG', name: 'Potli Biryani by Chef  Juhi Kastiya', price: '₹200', path: '/chefs/chef_5' },
                    { src: '/chefs/Rajasthani Thali.jpeg', name: 'Rajasthani Thali by Chef Payal Agarwal', price: '₹340', path: '/home-made-food/tiffin/tiffin_1' },
                    { src: '/chefs/Home Like Thali.jpeg', name: 'Home Like Thali by Chef Payal Agarwal', price: '₹340', path: '/home-made-food/tiffin/tiffin_1' },
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
                    { src: '/chefs/Baked Vada Pav.PNG', name: 'Baked Vada Pav by Baker Juhi Kastiya', price: '₹120', path: '/bakers/baker_1' },
                    { src: '/chefs/Cinnamon Loaf.PNG', name: 'Cinnamon Loaf by Baker Juhi Kastiya', price: '₹180', path: '/bakers/baker_1' },
                    { src: '/chefs/Paneer Tikka Star Pizza.PNG', name: 'Paneer Tikka Star Pizza by Baker Juhi Kastiya', price: '₹250', path: '/home-made-desserts/baker_1' },
                    { src: '/chefs/Potli Biryani.PNG', name: 'Potli Biryani by Baker Juhi Kastiya', price: '₹200', path: '/bakers/baker_1' },
                    { src: '/chefs/Rajasthani Thali.jpeg', name: 'Rajasthani Thali by Chef Payal Agarwal', price: '₹340', path: '/home-made-food/tiffin/tiffin_1' },
                    { src: '/chefs/Home Like Thali.jpeg', name: 'Home Like Thali by Chef Payal Agarwal', price: '₹340', path: '/home-made-food/tiffin/tiffin_1' },
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 sm:p-4 rounded-lg transition-all text-xs sm:text-base w-6 sm:w-auto"
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
