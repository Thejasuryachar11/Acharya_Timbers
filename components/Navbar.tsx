"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-lg md:text-4xl font-bold text-primary">
          Acharya Timbers & Furnitures
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <a href="#products" className="hover:text-primary">Products</a>
          <a href="#machines" className="hover:text-primary">Machines</a>
          <a href="#gallery" className="hover:text-primary">Gallery</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div className="md:hidden bg-white px-6 pb-6 pt-2 space-y-4 shadow-lg border-t">

    <a 
      href="#products" 
      onClick={() => setOpen(false)} 
      className="block text-lg font-medium py-2 border-b"
    >
      Products
    </a>

    <a 
      href="#machines" 
      onClick={() => setOpen(false)} 
      className="block text-lg font-medium py-2 border-b"
    >
      Machines
    </a>

    <a 
      href="#gallery" 
      onClick={() => setOpen(false)} 
      className="block text-lg font-medium py-2 border-b"
    >
      Gallery
    </a>

    <a 
      href="#contact" 
      onClick={() => setOpen(false)} 
      className="block text-lg font-medium py-2"
    >
      Contact
    </a>

  </div>
)}
    </header>
  );
}