"use client";

import React, { useState } from "react";
import { CheckCircle, Loader2, Phone, Mail } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
  serviceType: string;
  bedrooms: string;
  bathrooms: string;
  notes: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    serviceType: "Deep Clean",
    bedrooms: "3",
    bathrooms: "2",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const serviceTypes = [
    "Essential Clean",
    "Deep Clean",
    "Move-In / Move-Out",
    "Recurring Weekly",
    "Recurring Bi-Weekly",
    "Office / Commercial",
  ];

  const timeSlots = [
    "8:00 AM – 10:00 AM",
    "10:00 AM – 12:00 PM",
    "12:00 PM – 2:00 PM",
    "2:00 PM – 4:00 PM",
    "4:00 PM – 6:00 PM",
  ];

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Please enter a valid phone number";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.address.trim()) newErrors.address = "Please enter your address";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call (ready for real backend or Formspree / Resend)
    // For production: replace this block with a real POST to Formspree or your API route
    await new Promise((resolve) => setTimeout(resolve, 1350));

    setIsSubmitting(false);
    setIsSuccess(true);

    // In production: send to your email / CRM here
    console.log("Booking submitted:", formData);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      date: "",
      time: "",
      serviceType: "Deep Clean",
      bedrooms: "3",
      bathrooms: "2",
      notes: "",
    });
    setErrors({});
  };

  // Get tomorrow as minimum date
  const minDate = new Date(Date.now() + 86400000 * 1).toISOString().split("T")[0];

  if (isSuccess) {
    return (
      <div id="book" className="max-w-2xl mx-auto">
        <div className="card p-12 text-center border-brand-teal/30">
          <div className="success-check mx-auto w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mb-7">
            <CheckCircle className="w-11 h-11 text-brand-teal" />
          </div>
          <h3 className="text-3xl font-bold tracking-tight mb-3">You&apos;re booked!</h3>
          <p className="text-xl text-gray-600 mb-2">
            Thank you, {formData.name.split(" ")[0]}. We’ve received your request.
          </p>
          <p className="text-gray-600 mb-8">
            Our team will call or text you within <span className="font-semibold text-brand-teal">2 hours</span> to confirm the exact time and answer any questions.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left text-sm max-w-sm mx-auto">
            <div className="font-medium mb-2">Your booking summary:</div>
            <div className="space-y-1 text-gray-600">
              <div>{formData.serviceType} • {formData.bedrooms} bed / {formData.bathrooms} bath</div>
              <div>{new Date(formData.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} — {formData.time}</div>
              <div>{formData.address}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:8436534081" className="btn-primary inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call us now
            </a>
            <button onClick={resetForm} className="btn-secondary">
              Book Another Clean
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-8">Questions? Call (843) 653-4081 or email hello@spotlesscleaning.com</p>
        </div>
      </div>
    );
  }

  return (
    <section id="book" className="max-w-3xl mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm tracking-widest mb-4">
          READY WHEN YOU ARE
        </div>
        <h2 className="section-title mb-3">Book your clean in 60 seconds</h2>
        <p className="text-xl text-gray-600">We’ll confirm within 2 hours. Same-week slots available.</p>

        {/* Subtle July 4th Special - Homeaglow inspired */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1 text-sm">
          <span className="font-medium text-brand-teal">July 4th Special</span>
          <span className="text-gray-600">— Limited slots before the holiday</span>
        </div>

        {/* Text option as alternative to the form */}
        <div className="mt-5 text-sm">
          <span className="text-gray-600">Don’t want to fill this out?</span>{" "}
          <a 
            href="sms:8436534081?body=Hi, I'd like a quote for cleaning services." 
            className="font-semibold text-brand-teal hover:underline"
          >
            Text us for a quote → (843) 653-4081
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card p-8 md:p-10 border-brand-teal/20">
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-5">
          {/* Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1.5">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`form-input ${errors.name ? "border-red-400" : ""}`}
              placeholder="Alex Rivera"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone + Email */}
          <div>
            <label className="block text-sm font-semibold mb-1.5">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`form-input ${errors.phone ? "border-red-400" : ""}`}
              placeholder="(301) 555-1234"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`form-input ${errors.email ? "border-red-400" : ""}`}
              placeholder="you@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1.5">Service Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`form-input ${errors.address ? "border-red-400" : ""}`}
              placeholder="123 Main Street, Myrtle Beach, SC 29577"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          {/* Date + Time */}
          <div>
            <label className="block text-sm font-semibold mb-1.5">Preferred Date</label>
            <input
              type="date"
              min={minDate}
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className={`form-input ${errors.date ? "border-red-400" : ""}`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Preferred Time Window</label>
            <select
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
              className={`form-input ${errors.time ? "border-red-400" : ""}`}
            >
              <option value="">Select time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-semibold mb-1.5">Type of Clean</label>
            <select
              value={formData.serviceType}
              onChange={(e) => handleChange("serviceType", e.target.value)}
              className="form-input"
            >
              {serviceTypes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Size quick select */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Bedrooms</label>
              <select value={formData.bedrooms} onChange={(e) => handleChange("bedrooms", e.target.value)} className="form-input">
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Bathrooms</label>
              <select value={formData.bathrooms} onChange={(e) => handleChange("bathrooms", e.target.value)} className="form-input">
                {[1, 1.5, 2, 2.5, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1.5">Anything we should know? (pets, special requests, gate code, etc.)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              rows={3}
              className="form-input resize-y min-h-[96px]"
              placeholder="We have two friendly dogs. Please use the side gate."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full mt-8 py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-80"
        >
          {isSubmitting ? (
            <> <Loader2 className="animate-spin w-5 h-5" /> Submitting your request... </>
          ) : (
            "Request My Booking"
          )}
        </button>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-1 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> <a href="tel:8436534081" className="hover:text-brand-teal">(843) 653-4081</a>
          </div>
          <div className="hidden sm:block text-gray-300">•</div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> hello@spotlesscleaning.com
          </div>
        </div>
        <p className="text-center text-[12px] text-gray-500 mt-4">We respect your time and privacy. Your information is never shared.</p>
      </form>
    </section>
  );
}
