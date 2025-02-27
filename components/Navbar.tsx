'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useCart();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/home-made-food', label: 'Home Made Food' },
    { href: '/home-made-desserts', label: 'Home Made Desserts' },
    { href: '/tiffin-service', label: 'Tiffin Service' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top Banner */}
      <div className="bg-black py-2 px-4 text-center">
        <p className="text-[#FFD700] text-sm">
          🎉 Now serving in Mumbai! Free Delivery for Orders above ₹1,000 🚚
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/TDH Logo.png"
                  alt="The Divine Hands"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-auto"
                />
                <span className="ml-2 text-xl font-bold">The Divine Hands</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-gray-600 font-medium text-base transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              
              {user ? (
                <>
                  <Link
                    href="/cart"
                    className="text-gray-700 hover:text-gray-900 relative"
                  >
                    <FaShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                  
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                        {user.email ? user.email[0].toUpperCase() : 'U'}
                      </div>
                      <span className="hidden sm:inline">{user.email?.split('@')[0]}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Your Profile
                          </Link>
                          <Link
                            href="/orders"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Previous Orders
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-[#FFD700] text-black px-4 py-2 rounded-md hover:bg-[#F7C948] transition-colors font-medium"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFD700]"
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

          {/* Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    href="/cart"
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaShoppingCart className="w-5 h-5 mr-2" />
                    Cart
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Previous Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-gray-50 rounded-md"
                  >
                    Logout
                  </button>
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