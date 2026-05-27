"use client";

import React from "react";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToBook}
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-teal text-white px-5 h-14 rounded-2xl shadow-xl active:scale-[0.975] transition font-semibold text-sm"
    >
      <Calendar className="w-4 h-4" />
      Book Now
    </button>
  );
}
