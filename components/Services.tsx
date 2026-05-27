"use client";

import React from "react";
import { Home, Sparkles, Users, Building2, ArrowRight } from "lucide-react";

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
    title: "Move-In / Move-Out",
    desc: "Complete turnover cleans for rentals and real estate. Make the new owners fall in love.",
  },
  {
    icon: Building2,
    title: "Office & Commercial",
    desc: "Professional cleaning for small offices, medical suites, and retail spaces in the area.",
  },
  {
    icon: Sparkles,
    title: "Deep Clean & Post-Reno",
    desc: "Construction dust, heavy grime, and neglected homes restored to spotless condition.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-14">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm tracking-widest mb-4">
          OUR SERVICES
        </div>
        <h2 className="section-title mb-4">Everything you need.<br />Nothing you don&apos;t.</h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Thorough, reliable cleaning tailored for homes and businesses.
        </p>
      </div>

      {/* Standard Services */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-6 px-1">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Standard Residential</h3>
          <span className="hidden md:block text-sm text-brand-teal font-medium">Most popular</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {standardServices.map((service, idx) => (
            <div key={idx} className="service-card flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-5 group-hover:bg-brand-teal/15 transition">
                <service.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h4 className="font-semibold text-xl mb-2.5 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty Services */}
      <div>
        <div className="flex items-end justify-between mb-6 px-1">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Specialty &amp; Commercial</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {specialtyServices.map((service, idx) => (
            <div key={idx} className="service-card flex flex-col border-brand-gold/20 hover:border-brand-gold/40">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/15 transition">
                <service.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="font-semibold text-xl mb-2.5 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all group"
        >
          See pricing &amp; book your service <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
