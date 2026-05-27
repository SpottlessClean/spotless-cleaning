"use client";

import React from "react";

export default function Pricing() {
  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cleanTiers = [
    {
      title: "Tidy Clean",
      subtitle: "Great for regular upkeep and busy households",
      inclusions: [
        "All living areas, bedrooms, and common spaces",
        "Kitchen counters, sink & appliance exteriors",
        "Bathroom sanitization (toilets, sinks, showers)",
        "Dusting, vacuuming, mopping & trash removal",
        "Consistent team on recurring visits",
      ],
    },
    {
      title: "Spotless Clean",
      subtitle: "Our most popular option — thorough and reliable",
      inclusions: [
        "Everything in Tidy Clean",
        "Inside oven & refrigerator",
        "Baseboards, door frames & light fixtures",
        "Detailed tile & grout cleaning",
        "Extra attention to high-touch surfaces",
      ],
    },
    {
      title: "Spotless Deep Clean",
      subtitle: "Top-to-bottom intensive cleaning",
      inclusions: [
        "Everything in Spotless Clean",
        "Inside all cabinets and drawers",
        "Windowsills, tracks & interior windows",
        "Deep clean of appliances & fixtures",
        "Closets, baseboards & hard-to-reach areas",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20 md:py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-sm tracking-widest mb-4">
            CUSTOM QUOTES
          </div>
          <h2 className="section-title mb-3">Choose your clean.<br />Get your quote.</h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            No prices shown. Pick the level that fits your needs, see exactly what’s included, then request a custom quote.
          </p>
          <p className="text-sm text-brand-teal font-medium mt-2">Ask about our Tidy Clean for lighter, more frequent visits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cleanTiers.map((tier, idx) => (
            <div key={idx} className="card p-7 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="text-2xl font-semibold tracking-tight mb-1">{tier.title}</h3>
                <p className="text-gray-600 text-sm">{tier.subtitle}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1 text-[15px]">
                {tier.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-brand-teal mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className="btn-primary w-full text-base py-3.5 mt-auto"
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-3">
            Need vacation rental or commercial cleaning instead? Just let us know in the form.
          </p>

          <a
            href="sms:8436534081?body=Hi, I'd like a quote for cleaning services in Horry County."
            className="text-sm text-brand-teal font-semibold hover:underline"
          >
            Or text us for a quote → (843) 653-4081
          </a>
        </div>
      </div>
    </section>
  );
}
