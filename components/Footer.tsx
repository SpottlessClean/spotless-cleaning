import React from "react";
import SpotlessLogo from "./SpotlessLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 pt-14 pb-9">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
        <div className="md:col-span-5">
          <SpotlessLogo className="mb-4" />
          <p className="max-w-xs text-[15px] text-gray-500">
            Professional house cleaning services for homes in Rockville and Montgomery County. Trusted since 2019.
          </p>
          <div className="mt-6 text-xs tracking-widest text-gray-600">LICENSED • INSURED • BACKGROUND CHECKED</div>
        </div>

        <div className="md:col-span-3 text-sm">
          <div className="font-semibold text-white mb-4 tracking-wider text-xs">COMPANY</div>
          <div className="space-y-[9px]">
            <a href="#services" className="block hover:text-white transition">Services</a>
            <a href="#pricing" className="block hover:text-white transition">Pricing</a>
            <a href="#testimonials" className="block hover:text-white transition">Reviews</a>
            <a href="#book" className="block hover:text-white transition">Book Now</a>
          </div>
        </div>

        <div className="md:col-span-4 text-sm">
          <div className="font-semibold text-white mb-4 tracking-wider text-xs">GET IN TOUCH</div>
          <a href="tel:8436534081" className="block text-xl font-semibold text-white hover:text-brand-teal transition tracking-tighter mb-1">
            (843) 653-4081
          </a>
          <a href="mailto:hello@spotlesscleaning.com" className="block hover:text-white transition mb-4">hello@spotlesscleaning.com</a>

          <div className="text-xs leading-relaxed text-gray-500">
            Serving Rockville, North Bethesda,<br />
            Potomac, Gaithersburg, and all of<br />
            Montgomery County, Maryland
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8 text-xs flex flex-col md:flex-row gap-y-1 items-center justify-between text-gray-500 max-w-7xl mx-auto px-6">
        <div>© {year} Spotless Cleaning LLC. All rights reserved.</div>
        <div className="flex gap-5">
          <span>Privacy</span>
          <span>Terms</span>
          <span className="hidden sm:inline">The Spotless Promise</span>
        </div>
      </div>
    </footer>
  );
}
