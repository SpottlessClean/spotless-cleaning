"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Spotless Cleaning has been cleaning our home in Carolina Forest for over a year. They are always on time, incredibly thorough, and our house actually smells fresh and clean. Highly recommend!",
    name: "Priya & Michael S.",
    location: "Carolina Forest, Myrtle Beach",
    rating: 5,
  },
  {
    quote: "We used them for our move-out clean in Murrells Inlet. The landlord gave us back our full security deposit because the place looked brand new. Worth every penny. Will use again for sure.",
    name: "David Chen",
    location: "Murrells Inlet",
    rating: 5,
  },
  {
    quote: "Best cleaning service we’ve tried on the Grand Strand. The team is professional, respectful of our home, and never cuts corners. My kids have allergies and they use great non-toxic products.",
    name: "Elena R.",
    location: "Surfside Beach",
    rating: 5,
  },
  {
    quote: "I book recurring bi-weekly cleans and it has been a game changer for our busy family. The same two cleaners come every time and they know exactly what we like. Thank you Spotless!",
    name: "The Patel Family",
    location: "Conway",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm tracking-widest mb-4">
          REAL FAMILIES. REAL RESULTS.
        </div>
        <h2 className="section-title mb-4">Our clients love Spotless.</h2>
        <p className="text-xl text-gray-600">4.98 average rating from 240+ local reviews</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="testimonial-card"
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-brand-gold text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-[17px] leading-relaxed text-gray-800 mb-8">
              “{t.quote}”
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-bright flex items-center justify-center text-white font-bold text-sm">
                {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        Reviews collected from Google, Nextdoor, and direct client feedback.
      </div>
    </section>
  );
}
