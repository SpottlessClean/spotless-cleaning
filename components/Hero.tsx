"use client";

import React from "react";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function Hero() {
  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-8 items-center px-6 pt-10 pb-14 lg:pb-16">
          {/* Left: Content */}
          <div className="max-w-[620px] lg:pr-6">
            {/* Trust micro badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              <div className="trust-badge">
                <Shield className="w-4 h-4 text-brand-teal" /> Licensed &amp; Insured
              </div>
              <div className="trust-badge">
                <Clock className="w-4 h-4 text-brand-teal" /> Same-Week Availability
              </div>
              <div className="trust-badge">
                <Award className="w-4 h-4 text-brand-teal" /> 5-Star Rated
              </div>
            </div>

            {/* Headline matching reference style */}
            <h1 className="text-6xl md:text-7xl font-bold tracking-[-3.8px] leading-[0.9] text-gray-950 mb-5">
              Leaving Homes<br />Spotless.
            </h1>

            <p className="text-2xl md:text-3xl font-medium tracking-[-1.1px] text-brand-teal-dark mb-3">
              Professional cleaning you can trust.
            </p>

            <p className="text-xl text-gray-600 mb-9">
              Experienced, background-checked cleaners using premium eco-friendly products.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToBook}
                className="btn-primary text-lg flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Book Your Clean Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition" />
              </button>
              <a
                href="tel:8436534081"
                className="btn-secondary text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Call (843) 653-4081
              </a>
            </div>

            {/* Spotless Promise bar */}
            <div className="inline-flex flex-wrap items-center gap-x-7 gap-y-2 bg-[#F8FAFC] border border-brand-gold/20 rounded-2xl px-6 py-3.5 text-sm">
              <div className="font-semibold text-brand-gold tracking-[1.5px]">THE SPOTLESS PROMISE</div>
              <div className="flex flex-wrap gap-x-5 text-gray-700 font-medium">
                <span>✓ On-time</span>
                <span>✓ Trained pros</span>
                <span>✓ Guaranteed</span>
                <span>✓ Premium products</span>
              </div>
            </div>
          </div>

          {/* Right: Hero photo */}
          <div className="relative mt-10 lg:mt-4 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[16/10] lg:aspect-auto lg:h-[520px]">
            <img
              src="/hero-kitchen.jpg"
              alt="Spotless modern kitchen in a Maryland home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-sm font-medium tracking-wider">
              ROCKVILLE, MD
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar inspired by reference */}
      <div className="h-1.5 bg-gradient-to-r from-brand-teal via-brand-teal-bright to-brand-gold" />
    </section>
  );
}
