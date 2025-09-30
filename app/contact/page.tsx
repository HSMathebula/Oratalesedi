"use client"

import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ModernHeader />
      
      {/* Banner */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <Image 
          src="/images/oratalesedi-hero-img.jpg" 
          alt="Contact Us Banner" 
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for both modes */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-black/50 dark:from-black/70 dark:via-blue-950/60 dark:to-blue-950/80 transition-colors" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl font-black text-center mt-10 drop-shadow-lg text-white dark:text-white">Contact Us</h1>
          <p className="text-white text-lg mt-4 text-center max-w-2xl px-4 drop-shadow-lg">
            Ready to discuss your next project? Get in touch with our team for expert consultation and competitive quotes.
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
