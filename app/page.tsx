import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function SpotlessCleaning() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <Testimonials />
      <BookingForm />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
