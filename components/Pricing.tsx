"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essential Clean",
    price: 129,
    desc: "Perfect for regular upkeep",
    features: [
      "All living areas & bedrooms",
      "Kitchen counters & sink",
      "Bathroom sanitization",
      "Dusting + vacuum/mop",
      "Trash removal",
    ],
    popular: false,
  },
  {
    name: "Deep Clean",
    price: 199,
    desc: "Top-to-bottom refresh",
    features: [
      "Everything in Essential",
      "Inside oven & fridge",
      "Baseboards & door frames",
      "Light fixtures & vents",
      "Detailed tile & grout",
    ],
    popular: true,
  },
  {
    name: "Move-In / Move-Out",
    price: 279,
    desc: "Complete turnover service",
    features: [
      "Everything in Deep Clean",
      "Inside all cabinets",
      "Windowsills & tracks",
      "Appliance deep clean",
      "Closets & storage areas",
    ],
    popular: false,
  },
];

interface QuoteState {
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  addons: string[];
}

export default function Pricing() {
  const [quote, setQuote] = useState<QuoteState>({
    bedrooms: 2,
    bathrooms: 2,
    frequency: "biweekly",
    addons: [],
  });

  const addonsList = [
    { id: "oven", label: "Inside Oven", price: 35 },
    { id: "fridge", label: "Inside Fridge", price: 30 },
    { id: "windows", label: "Interior Windows", price: 45 },
    { id: "cabinets", label: "Inside Cabinets", price: 40 },
  ];

  const toggleAddon = (id: string) => {
    setQuote((prev) => ({
      ...prev,
      addons: prev.addons.includes(id)
        ? prev.addons.filter((a) => a !== id)
        : [...prev.addons, id],
    }));
  };

  // Smart price estimator (realistic for the local market)
  const calculateEstimate = () => {
    const base = 85 + quote.bedrooms * 28 + quote.bathrooms * 32;
    const addonTotal = quote.addons.reduce((sum, id) => {
      const addon = addonsList.find((a) => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);

    let freqDiscount = 1;
    if (quote.frequency === "weekly") freqDiscount = 0.88;
    if (quote.frequency === "biweekly") freqDiscount = 0.94;
    if (quote.frequency === "monthly") freqDiscount = 1.05;

    const estimate = Math.round((base + addonTotal) * freqDiscount);
    return Math.max(estimate, 99);
  };

  const estimate = calculateEstimate();

  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="pricing" className="bg-white py-20 md:py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-sm tracking-widest mb-4">
            TRANSPARENT PRICING
          </div>
          <h2 className="section-title mb-3">Fair prices. Exceptional results.</h2>
          <p className="text-xl text-gray-600">No hidden fees. No surprises.</p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`price-card ${pkg.popular ? "featured" : ""}`}>
              {pkg.popular && (
                <div className="absolute -top-3 right-8 bg-brand-teal text-white text-xs font-bold tracking-widest px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div>
                <div className="text-sm tracking-[1px] font-semibold text-brand-teal mb-1">{pkg.name.toUpperCase()}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="price-number text-6xl font-bold tracking-[-2px]">${pkg.price}</span>
                  <span className="text-gray-500">starting</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-[15px]">
                    <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={scrollToBooking} className={pkg.popular ? "btn-primary w-full" : "btn-secondary w-full"}>
                Choose {pkg.name.split(" ")[0]}
              </button>
            </div>
          ))}
        </div>

        {/* Live Quote Estimator */}
        <div className="max-w-3xl mx-auto">
          <div className="card p-8 md:p-10 border-brand-teal/30">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
              <div>
                <div className="font-semibold tracking-widest text-xs text-brand-teal mb-1">INSTANT QUOTE CALCULATOR</div>
                <h3 className="text-3xl font-bold tracking-tight">Get your custom price</h3>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Estimated total</div>
                <div className="text-5xl font-bold text-brand-teal tracking-[-1.5px] tabular-nums">
                  ${estimate}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Bedrooms</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setQuote({ ...quote, bedrooms: n })}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition ${quote.bedrooms === n ? "bg-brand-teal text-white border-brand-teal" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Bathrooms</label>
                <div className="flex gap-2">
                  {[1, 1.5, 2, 2.5, 3].map((n) => (
                    <button
                      key={n}
                      onClick={() => setQuote({ ...quote, bathrooms: n })}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition ${quote.bathrooms === n ? "bg-brand-teal text-white border-brand-teal" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Cleaning Frequency</label>
                <select
                  value={quote.frequency}
                  onChange={(e) => setQuote({ ...quote, frequency: e.target.value })}
                  className="form-input"
                >
                  <option value="one-time">One-time clean</option>
                  <option value="weekly">Weekly (save 12%)</option>
                  <option value="biweekly">Every 2 weeks (save 6%)</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Optional Add-ons</label>
                <div className="grid grid-cols-2 gap-2">
                  {addonsList.map((addon) => (
                    <label
                      key={addon.id}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition text-sm ${quote.addons.includes(addon.id) ? "border-brand-teal bg-brand-teal/5" : "border-gray-200 hover:bg-gray-50"}`}
                    >
                      <input
                        type="checkbox"
                        checked={quote.addons.includes(addon.id)}
                        onChange={() => toggleAddon(addon.id)}
                        className="accent-brand-teal w-4 h-4"
                      />
                      <span>{addon.label} <span className="text-brand-teal font-medium">+${addon.price}</span></span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <p className="text-gray-600">Prices shown for standard local homes. Final quote confirmed on booking.</p>
              <button onClick={scrollToBooking} className="btn-gold text-sm py-3 px-7 whitespace-nowrap">
                Book This Clean
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
