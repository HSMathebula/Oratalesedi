import React from "react";
import ModernHeader from "../../components/ModernHeader";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Construction() {
  return (
    <>
      <ModernHeader />
      <main className="min-h-screen bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-white pb-2">
        {/* Banner */}
        <div className="relative w-full h-[400px] flex items-center justify-center mb-8">
          <img src="/images/oratalesedi-hero-img.jpg" alt="Construction Banner" className="absolute inset-0 w-full h-full object-cover object-center" />
          {/* Overlay for both modes */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 dark:from-black/60 dark:via-blue-950/60 dark:to-blue-950/80 transition-colors" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-black text-center mt-10 drop-shadow-lg text-blue-950 dark:text-white">Construction</h1>
            <div className="text-center text-gray-700 dark:text-gray-300 mb-4">Home / Construction</div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Our team of skilled professionals is dedicated to delivering high-quality projects on time and within budget. We specialize in a list of construction services, such as civil works, building construction, and infrastructure development. With a strong focus on safety, sustainability, and innovation, we strive to exceed our clients’ expectations and contribute to the growth and development of the construction sector.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <img src="/images/construction1.jpg" alt="Civil Works" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Civil Works</h2>
              <p>Site Preparation: Clearing, leveling, and grading of construction sites<br />
              Excavation: Trenching, foundation excavation, and mass excavation<br />
              Earthworks: Filling, compaction, and grading of earth materials<br />
              Site Utilities: Installation of water, sewer, and storm drainage systems<br />
              Road Construction: Building roads, highways, and other transportation infrastructure</p>
            </div>
            <img src="/images/construction2.jpg" alt="Civil Works 2" className="object-cover w-full h-64 rounded-xl" />

            {/* Row 2 */}
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Building Construction</h2>
              <p>Residential Construction: Building single-family homes, apartments, and townhouses<br />
              Commercial Construction: Building offices, retail spaces, and industrial facilities<br />
              Institutional Construction: Building schools, hospitals, and government buildings<br />
              Renovations and Remodels: Updating and modernizing existing buildings</p>
            </div>
            <img src="/images/construction3.jpg" alt="Building Construction" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Infrastructure Development</h2>
              <p>Bridges and Tunnels: Designing and constructing bridges and tunnels<br />
              Water and Wastewater Treatment: Building and maintaining water and wastewater treatment facilities<br />
              Power Plants: Constructing power plants and transmission lines<br />
              Railways: Building and maintaining railway tracks and stations</p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-16 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Let's Build Together!</h2>
            <p className="mb-6 text-lg">Contact us today to discuss your construction project or request a custom solution.</p>
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