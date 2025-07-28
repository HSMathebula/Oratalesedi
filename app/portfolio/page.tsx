import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import InteractivePortfolio from "../components/InteractivePortfolio"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative" style={{
        backgroundImage: `url('/images/oratalesedi-hero-img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/40 dark:bg-blue-950/80 pointer-events-none transition-colors duration-500"></div>
        {/* Bottom gradient for light mode only */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 dark:hidden pointer-events-none"
          style={{
            background: 'linear-gradient(to top, white 10%, rgba(255, 255, 255, 0) 45%)'
          }}
        ></div>
        {/* Bottom gradient for dark mode only */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 hidden dark:block pointer-events-none"
          style={{
            background: 'linear-gradient(to top,rgb(23, 37, 84) 15%, rgba(23,36,79,0) 50%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-oratalesedi-blue rounded-full"></div>
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-blue-400">Our Portfolio</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6 drop-shadow">
              Project
              <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">Across South Africa</span>
            </h1>
            <p className="text-xl text-black dark:text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Showcasing our successful project deliveries across the South African mining, construction, and renewable
              energy sectors.
            </p>
          </div>

          {/* Portfolio Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white dark:bg-blue-950/90 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-oratalesedi-blue dark:text-blue-400 mb-2">R70M+</div>
              <p className="text-gray-700 dark:text-blue-200">Total Project Value</p>
            </div>
            <div className="bg-white dark:bg-blue-950/90 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-oratalesedi-blue dark:text-blue-400 mb-2">100%</div>
              <p className="text-gray-700 dark:text-blue-200">Delivery Success Rate</p>
            </div>
            <div className="bg-white dark:bg-blue-950/90 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-oratalesedi-blue dark:text-blue-400 mb-2">6+</div>
              <p className="text-gray-700 dark:text-blue-200">Major Clients</p>
            </div>
            <div className="bg-white dark:bg-blue-950/90 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-oratalesedi-blue dark:text-blue-400 mb-2">9</div>
              <p className="text-gray-700 dark:text-blue-200">Provinces Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Component */}
      <InteractivePortfolio />

      <Footer />
    </main>
  )
}
