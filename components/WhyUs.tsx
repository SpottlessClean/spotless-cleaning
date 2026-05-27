"use client";

import React from "react";
import { ShieldCheck, Leaf, Clock3, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Vetted Team",
    desc: "Every cleaner is background-checked, drug-tested, and trained to our 47-point checklist. Licensed & fully insured.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use only premium, pet-safe, and family-safe products. No harsh chemicals. Your home will smell clean, not chemical.",
  },
  {
    icon: Clock3,
    title: "Always On Time",
    desc: "We respect your schedule. Our team arrives in the exact window you choose or we credit your next clean.",
  },
  {
    icon: HeartHandshake,
    title: "100% Satisfaction",
    desc: "Not happy with any area? We return within 24 hours at no charge. The Spotless Promise is real.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#F0FDFA] py-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-brand-gold font-semibold tracking-[2px] text-sm mb-3">THE SPOTLESS DIFFERENCE</div>
          <h2 className="section-title">Why families choose Spotless</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-7 border border-white">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h4 className="font-semibold text-xl tracking-tight mb-2.5">{reason.title}</h4>
              <p className="text-gray-600 leading-snug">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          Proudly serving Rockville, North Bethesda, Potomac, Gaithersburg, and all of Montgomery County since 2019.
        </div>
      </div>
    </section>
  );
}
