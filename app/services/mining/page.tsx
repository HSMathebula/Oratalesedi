import React from "react";
import ModernHeader from "../../components/ModernHeader";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function MiningServices() {
  return (
    <>
      <ModernHeader />
      <main className="min-h-screen bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-white pb-2">
        {/* Banner */}
        <div className="relative w-full h-[400px] flex items-center justify-center mb-8">
          <img src="/images/oratalesedi-hero-img.jpg" alt="Mining Banner" className="absolute inset-0 w-full h-full object-cover object-center" />
          {/* Overlay for both modes */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-black/50 dark:from-black/70 dark:via-blue-950/60 dark:to-blue-950/80 transition-colors" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-black text-center mt-10 drop-shadow-lg text-white dark:text-white">Mining</h1>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            As a QSE and Black Woman-Owned company, we have a deep-rooted understanding of the mining industry and its unique challenges. We have grown and thrived within this environment, gaining valuable experience and expertise. Our commitment to excellence and innovation has enabled us to deliver exceptional services to several mining companies within the Mpumalanga province, with Mafube Coal and Thungela being our biggest clients. We are dedicated to partnering with mines to optimize their operations, improve safety, and enhance sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <img src="/images/mining1.jpg" alt="Conveyor Belt Cleaning" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Conveyor Belt Cleaning & Maintenance</h2>
              <p>Our core services include both open cast and underground conveyor belt maintenance and cleaning, including management and supervision.</p>
            </div>
            <img src="/images/mining2.jpg" alt="General Building Maintenance" className="object-cover w-full h-64 rounded-xl" />

            {/* Row 2 */}
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Geospatial & Surveying Services</h2>
              <p>Through our extensive partnership model, we offer specialized geospatial and surveying services such as: 3D Terrestrial, UAV LiDAR Scanning and 3D Modelling, Drone Thermal Aerial Imaging, Engineering & Construction Survey, Bathymetric Surveys, Underground Utility Mapping, Cadastral Survey as well as Geospatial Intelligence and Geographic Information System.</p>
            </div>
            <img src="/images/mining3.jpg" alt="Surveying" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">General Building Maintenance</h2>
              <p>As part of planned and unplanned maintenance, we offer general building maintenance services for existing buildings and mining infrastructure.</p>
            </div>

            {/* Row 3 */}
            <img src="/images/mining4.jpg" alt="Welding" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Welding, Fabrications, Repairs & Installation</h2>
              <p>We provide state-of-the-art technology to provide forward-thinking welding engineering solutions for fabricating or joining any metal infrastructure, all executed to world-class quality control, safety and assurance standards.</p>
            </div>
            <img src="/images/mining5.jpg" alt="Construction" className="object-cover w-full h-64 rounded-xl" />

            {/* Row 4 */}
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">Shutdown & Maintenance Works</h2>
              <p>Our experienced team of qualified artisans are key to delivering plant shutdown, repairs and maintenance services. We ensure the minimum reduced downtime and overtime, whilst swiftly getting the plant up-to-speed for maximum operational efficiency, at minimal cost.</p>
            </div>
            <img src="/images/mining6.jpg" alt="HDPE piping" className="object-cover w-full h-64 rounded-xl" />
            <div className="bg-white dark:bg-blue-900 text-blue-950 dark:text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="text-2xl font-bold mb-2">HDPE piping & Installation</h2>
              <p>We offer plastic welding: heat sealing, extrusion welding, spin welding, vibration welding as well as laser welding.</p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-16 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="mb-6 text-lg">Contact us today to discuss your mining project or request a custom solution.</p>
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