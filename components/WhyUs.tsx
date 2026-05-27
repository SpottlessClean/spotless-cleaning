"use client";

import React from "react";
import { ShieldCheck, Leaf, Clock3, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

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
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1 text-sm">
            <span className="font-semibold text-brand-gold">SPOTLESS PROMISE</span>
            <span className="text-gray-700">Thorough Inspections • Detailed Cleans</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 border border-white"
            >
              <div className="w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h4 className="font-semibold text-xl tracking-tight mb-2.5">{reason.title}</h4>
              <p className="text-gray-600 leading-snug">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          Proudly serving Myrtle Beach, Conway, Murrells Inlet, Surfside Beach, North Myrtle Beach, and all of Horry County since 2019.
          <span className="block mt-2 text-xs text-gray-500">Locally Owned &amp; Operated</span>
        </div>
      </div>
    </section>
  );
}
