import ModernHeader from "./components/ModernHeader"
import ModernHero from "./components/ModernHero"
import ModernServices from "./components/ModernServices"
import ModernAbout from "./components/ModernAbout"
import InteractivePortfolio from "./components/InteractivePortfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingElements from "./components/FloatingElements"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ModernHeader />
      <ModernHero />
      <ModernServices />
      <ModernAbout />
      <InteractivePortfolio />
      <Contact />
      <Footer />
      <FloatingElements />
    </main>
  )
}
