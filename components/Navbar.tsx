"use client";

import React, { useState } from "react";
import SpotlessLogo from "./SpotlessLogo";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#book", label: "Book Now" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center">
          <SpotlessLogo size={38} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link text-[15px]"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:8436534081"
            className="flex items-center gap-2 text-sm font-medium text-brand-teal-dark hover:text-brand-teal transition-colors"
          >
            <Phone className="w-4 h-4" />
            (843) 653-4081
          </a>
          <button
            onClick={() => handleNavClick("#book")}
            className="btn-primary text-sm py-2.5 px-6"
          >
            Book Your Clean
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mobile-menu bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-2 text-lg font-medium text-gray-700 active:text-brand-teal"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-200 flex flex-col gap-3">
            <a href="tel:8436534081" className="flex items-center gap-2 text-brand-teal-dark font-semibold py-1">
              <Phone className="w-4 h-4" /> (843) 653-4081
            </a>
            <button
              onClick={() => handleNavClick("#book")}
              className="btn-primary w-full justify-center"
            >
              Book Your Clean
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
