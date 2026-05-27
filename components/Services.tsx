"use client";

import React from "react";
import { Home, Sparkles, Users, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const standardServices = [
  {
    icon: Home,
    title: "Kitchen & Bathrooms",
    desc: "Deep clean sinks, appliances, grout, showers, tubs & toilets. We leave every surface gleaming.",
  },
  {
    icon: Sparkles,
    title: "Living Areas & Bedrooms",
    desc: "Dusting, vacuuming, mopping, baseboards, light fixtures, and detailed surface cleaning throughout.",
  },
  {
    icon: Users,
    title: "Recurring Cleans",
    desc: "Weekly, bi-weekly or monthly visits. Consistent quality from the same trusted cleaners.",
  },
];

const specialtyServices = [
  {
    icon: Home,
    title: "Move-In / Move-Out Cleans",
    desc: "Complete turnovers for rentals and real estate. We leave every property move-in ready.",
  },
  {
    icon: Home,
    title: "Rental & Property Turnovers",
    desc: "Fast, reliable cleans between tenants and vacation rental guests across Horry County.",
  },
  {
    icon: Building2,
    title: "Office Cleanings",
    desc: "Professional recurring cleaning for offices, medical suites, and small businesses.",
  },
  {
    icon: Sparkles,
    title: "Tidy Clean & Deep Cleans",
    desc: "Ask about our Tidy Clean (regular maintenance) and full Spotless Deep Clean options.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-14">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm tracking-widest mb-4">
          OUR SERVICES
        </div>
        <h2 className="section-title mb-4">Keep it Spotless<br />When you don&apos;t have time.</h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Our Difference is in the Details.
        </p>

        {/* SPOTLESS PROMISE - Clean, prominent, flyer-inspired */}
        <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-brand-gold/30 bg-brand-gold/5 px-6 py-2.5">
          <span className="font-bold tracking-[1.5px] text-brand-gold text-sm">THE SPOTLESS PROMISE</span>
          <span className="text-sm text-gray-700">Thorough Inspections • Detailed Cleans</span>
        </div>

        {/* Subtle July 4th Special - Homeaglow-inspired */}
        <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-x-3 gap-y-1 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-5 py-2 text-sm">
          <span className="font-semibold text-brand-teal">July 4th Special</span>
          <span className="text-gray-600">Limited availability for holiday weekend cleans</span>
        </div>
      </div>

      {/* Standard Services */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-6 px-1">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Standard Residential</h3>
            <p className="text-sm text-gray-500 mt-0.5">Kitchen • Bathrooms • Living Areas • Custom Areas</p>
          </div>
          <span className="hidden md:block text-sm text-brand-teal font-medium">Most popular</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {standardServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="service-card flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-5 group-hover:bg-brand-teal/15 transition">
                <service.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h4 className="font-semibold text-xl mb-2.5 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>

              <button
                onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="mt-4 text-sm font-semibold text-brand-teal hover:underline self-start"
              >
                Get a Quote →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specialty Services */}
      <div>
        <div className="flex items-end justify-between mb-6 px-1">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Specialty Services</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {specialtyServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="service-card flex flex-col border-brand-gold/20 hover:border-brand-gold/40"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/15 transition">
                <service.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="font-semibold text-xl mb-2.5 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>

              <button
                onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="mt-4 text-sm font-semibold text-brand-teal hover:underline self-start"
              >
                Get a Quote →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 space-y-3">
        <button
          onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all group"
        >
          See pricing &amp; book your service <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5" />
        </button>

        <div>
          <a 
            href="sms:8436534081?body=Hi, I'd like a quote for cleaning in Horry County." 
            className="text-sm text-gray-600 hover:text-brand-teal underline"
          >
            Or text us for a fast quote: (843) 653-4081
          </a>
        </div>
      </div>

      {/* Real Results Gallery - Using your latest photos */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm tracking-widest mb-3">
            REAL RESULTS
          </div>
          <h3 className="text-3xl font-semibold tracking-tight">Spotless Homes</h3>
          <p className="text-gray-600 mt-2">A look at the homes we’ve transformed across Horry County.</p>
        </div>

        {/* Real customer photos from your gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "/gallery/bathroom-2.JPG",      // stunning navy double vanity + tub
            "/gallery/bathroom-teal.jpg",   // teal bathroom with double sinks
            "/gallery/bathroom-teal2.jpg",  // teal bathroom wide view
            "/gallery/bedroom.jpeg",        // beautiful bedroom
            "/gallery/closet.jpg",          // organized walk-in closet
            "/gallery/floor-after.jpg",     // clean floor after
            "/gallery/floor-before.jpg",    // floor before (pairs with after)
          ].map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl">
              <img 
                src={src} 
                alt="Spotless cleaning result in Horry County" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
