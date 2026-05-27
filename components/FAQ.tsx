"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical clean take?",
    a: "A standard 3-bedroom / 2-bath home takes about 3–3.5 hours with our two-person team. Deep cleans and larger homes take longer.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Most clients give us a key or garage code and go about their day. We’re happy to clean while you’re home too — whatever you prefer.",
  },
  {
    q: "What if I’m not happy with the clean?",
    a: "Just let us know within 24 hours. We’ll return at no charge to make it right. Your satisfaction is guaranteed.",
  },
  {
    q: "Are your products safe for pets and kids?",
    a: "Yes. We use only EPA Safer Choice and Green Seal certified products that are non-toxic once dry. Your pets can return immediately.",
  },
  {
    q: "Can I book same week?",
    a: "Yes — we often have availability within 1–3 days. Use the booking form or call us for last-minute needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Frequently asked questions</h2>
        <p className="text-gray-600">Everything you need to know before booking.</p>
      </div>

      <div className="divide-y divide-gray-200 border-y border-gray-200">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-1">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center gap-6 py-5 text-left group"
              >
                <span className="font-medium pr-4 text-lg tracking-tight">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-brand-teal transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="pb-6 pr-10 text-gray-600 text-[15px] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        Still have questions? <a href="tel:8436534081" className="text-brand-teal font-medium hover:underline">Call us anytime.</a>
      </div>
    </section>
  );
}
