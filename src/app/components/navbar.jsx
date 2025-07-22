'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo + Name */}
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-12 w-50 mr-2" />
            {/* <span className="text-xl font-bold text-[#EB5721]"> <span className='text-blue-900'>SAANVIKA</span> PROPERTIES</span> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/" className="text-gray-600 hover:text-blue-600">Highlights</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <a
  href="tel:+919966669863"
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition inline-block"
>
  Call Now
</a>

          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-md space-y-2">
          <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Highlights</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
