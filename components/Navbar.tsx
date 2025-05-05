'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

interface NavLink {
  href?: string;
  id?: string;
  label: string;
  dropdown?: {
    href: string;
    label: string;
  }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const navDropdownRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useCart();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
      id: 'shop-now',
      label: 'Shop Now',
      dropdown: [
        { href: '/whole-foods/categories/healthy-treats', label: 'Healthy Treats' },
        { href: '/whole-foods/categories/drinks', label: 'Drinks' },
        { href: '/whole-foods/categories/healthy-bites', label: 'Healthy Bites' },
        { href: '/whole-foods/categories/pickles', label: 'Pickles & Condiments' },
        { href: '/whole-foods/categories/healthy-breakfast', label: 'Healthy Breakfast' },
        { href: '/whole-foods/categories/spice-blends', label: 'Spice Blends' },
      ]
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      setActiveDropdown(null);
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  // Modify the useEffect to only handle mobile clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Only handle click-outside for mobile view
      if (window.innerWidth < 768) {
        if (
          (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) &&
          (navDropdownRef.current && !navDropdownRef.current.contains(event.target as Node))
        ) {
          setActiveDropdown(null);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top Banner */}
      <div className="bg-black py-2 px-4 text-center font-bold">
        <p className="text-[#FDBE28] text-lg">
          🎉 Now serving in Mumbai! Free Delivery for Orders above ₹749 🚚
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 min-w-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/TDH Logo.png"
                  alt="The Divine Hands"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-auto"
                />
                <span className="ml-2 text-xl font-bold truncate font-itc-souvenir">The Divine Hands</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              {navLinks.map((link) => (
                <div key={link.id || link.href} className="relative flex-shrink-0">
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => link.id && toggleDropdown(link.id)}
                        className="text-gray-900 hover:text-gray-600 text-xl font-bold transition-colors duration-200 font-itc-souvenir flex items-center"
                      >
                        {link.label}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === link.id && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="text-gray-900 hover:text-gray-600 text-xl font-bold transition-colors duration-200 font-itc-souvenir"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {user ? (
                <>
                  <Link
                    href="/cart"
                    className="text-gray-700 hover:text-gray-900 relative"
                  >
                    <FaShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-itc-souvenir">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                  
                  <div className="hidden md:block relative flex-shrink-0">
                    <button
                      onClick={() => toggleDropdown('user')}
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 whitespace-nowrap w-[120px] justify-between font-itc-souvenir"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FDBE28] flex items-center justify-center flex-shrink-0">
                        {user.email ? user.email[0].toUpperCase() : 'U'}
                      </div>
                      <span className="hidden sm:inline">{user.email?.split('@')[0]}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${activeDropdown === 'user' ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === 'user' && (
                      <div 
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 font-itc-souvenir"
                        style={{ zIndex: 9999 }}
                      >
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Your Profile
                        </Link>
                        <Link
                          href="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Previous Orders
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-[#FDBE28] text-black px-4 py-2 rounded-md hover:bg-[#E5AB14] transition-colors font-medium font-itc-souvenir"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Cart and Menu Button */}
            <div className="flex items-center space-x-4 md:hidden flex-shrink-0">
              {user && (
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-gray-900 relative"
                >
                  <FaShoppingCart className="w-6 h-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-itc-souvenir">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FDBE28]"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full`}>
            <div className="px-2 pt-2 pb-3 space-y-1 font-itc-souvenir">
              {navLinks.map((link) => (
                <div key={link.id || link.href}>
                  {link.dropdown ? (
                    <div className="relative" ref={navDropdownRef}>
                      <button
                        onClick={() => link.id && toggleDropdown(link.id)}
                        className="w-full text-left px-3 py-2 text-xl font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === link.id && (
                        <div className="pl-4">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="block px-3 py-2 text-xl font-bold text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {user ? (
                <>
                  <div className="relative" ref={userDropdownRef}>
                    <button
                      onClick={() => toggleDropdown('user-mobile')}
                      className="w-full text-left px-3 py-2 text-xl font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#FDBE28] flex items-center justify-center flex-shrink-0">
                          {user.email ? user.email[0].toUpperCase() : 'U'}
                        </div>
                        <span>{user.email?.split('@')[0]}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'user-mobile' ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === 'user-mobile' && (
                      <div className="pl-4">
                        <Link
                          href="/profile"
                          className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          Your Profile
                        </Link>
                        <Link
                          href="/orders"
                          className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          Previous Orders
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-base font-bold text-red-600 hover:bg-gray-50"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}