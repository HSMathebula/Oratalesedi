import React from "react";
import ModernHeader from "../../components/ModernHeader";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function RenewableEnergy() {
  return (
    <>
      <ModernHeader />
      <main className="min-h-screen bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-white pb-2">
        {/* Banner */}
        <div className="relative w-full h-[400px] flex items-center justify-center mb-8">
          <img src="/images/oratalesedi-hero-img.jpg" alt="Renewable Energy Banner" className="absolute inset-0 w-full h-full object-cover object-center" />
          {/* Overlay for both modes */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-black/50 dark:from-black/60 dark:via-blue-950/60 dark:to-blue-950/80 transition-colors" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-black text-center mt-10 drop-shadow-lg text-white dark:text-white">Renewable Energy</h1>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            As a company committed to sustainability, we specialize in renewable energy solutions that harness the power of nature. Our expertise lies in solar power, wind power, and energy storage. By leveraging cutting-edge technology and sustainable practices, we help businesses and individuals reduce their carbon footprint, lower energy costs, and contribute to a cleaner and greener future.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <img src="/images/grid battery.jpg" alt="Solar Panel Array" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Solar Panel Installations</h2>
              <p>Grid-tied Solar PV solutions<br />Solar Panel supplies</p>
            </div>
            <img src="/images/solar.jpg" alt="Large Scale Solar Farm" className="object-cover w-full h-64 rounded-xl" />

            {/* Row 2 */}
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Battery Storage Installations</h2>
              <p>Battery backup and grid-tied solutions<br />ESS supplies</p>
            </div>
            <img src="/images/whatsApp Image 2025-06-04 at 15.33.21 (1).jpeg" alt="Battery Storage" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Ground Mount Structures</h2>
              <p>cost-effective alternative, where roof space isn't sufficient in large-scale solar plants<br />Foundation drilling and post ramming</p>
            </div>

            {/* Row 3 */}
            <img src="/images/show1.jpeg" alt="Solar Carport Structure" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Shaded Parking</h2>
              <p>unique combination of shading and a power producing structures customized to the clients' requirements</p>
            </div>
            <img src="/images/container.jpg" alt="Containerised Energy Unit" className="object-cover w-full h-64 rounded-xl" />

            {/* Row 4 */}
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Containerised Solutions</h2>
              <p>battery storage solutions can be customised and portable, ideal for remote areas or limited time-frame projects requiring energy solutions.</p>
            </div>
            <img src="/images/ground.jpg" alt="Energy Infrastructure Installation" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Inspections and Maintenance</h2>
              <p>We offer assessments, suggesting new energy installation solutions or identifying ways of optimising existing renewable energy set-ups. We monitor and maintain systems in order to get maximum return on your renewable energy investment</p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-16 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Go Green?</h2>
            <p className="mb-6 text-lg">Contact us today to discuss your renewable energy needs or request a custom solution.</p>
            <Link href="/contact">
              <button className="bg-oratalesedi-blue hover:bg-oratalesedi-blue-dark text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all duration-300">Contact Us</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 