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
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-lg">
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#machines" onClick={() => setOpen(false)}>Machines</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}