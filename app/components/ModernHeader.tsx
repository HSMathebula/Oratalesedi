"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import DarkModeToggle from "./DarkModeToggle"
import { useRouter } from "next/navigation"

export default function ModernHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !(servicesRef.current as HTMLDivElement).contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" }, // Placeholder for dropdown
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-blue-950/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-blue-800/50" 
          : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white py-3 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+27 13 656 0747</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@oratalesedi.co.za</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold border border-white/30">
              100% BWO • BBBEE Level 1
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="relative group">
              <Image
                src="/images/oratalesedi-logo.png"
                alt="Oratalesedi Trading & Projects"
                width={320}
                height={120}
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0">
            {navigation.map((item) => {
              if (item.name === "Services") {
                return (
                  <div
                    key="Services"
                    className="relative"
                    ref={servicesRef}
                  >
                    <button
                      className="relative font-bold text-lg text-oratalesedi-black dark:text-blue-100 hover:text-oratalesedi-blue dark:hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-oratalesedi-blue focus-visible:ring-offset-2"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      tabIndex={0}
                      onClick={() => setServicesOpen((open) => !open)}
                    >
                      Services
                    </button>
                    {servicesOpen && (
                      <div
                        className="absolute left-0 mt-2 w-56 bg-white dark:bg-blue-950 border border-gray-200 dark:border-blue-900 rounded-xl shadow-lg z-50"
                      >
                        <Link href="/services/mining" className="block px-6 py-3 text-left text-oratalesedi-black dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-2xl" onClick={() => setServicesOpen(false)}>Mining Services</Link>
                        <Link href="/services/construction" className="block px-6 py-3 text-left text-oratalesedi-black dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-2xl" onClick={() => setServicesOpen(false)}>Construction</Link>
                        <Link href="/services/renewable-energy" className="block px-6 py-3 text-left text-oratalesedi-black dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-2xl" onClick={() => setServicesOpen(false)}>Renewable Energy</Link>
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-bold text-lg transition-all duration-300 px-6 py-2 rounded-lg
                  ${isScrolled 
                    ? "text-oratalesedi-black dark:text-white" 
                    : "text-oratalesedi-black dark:text-white drop-shadow-lg"
                  }
                  hover:text-oratalesedi-blue dark:hover:text-blue-300
                  hover:bg-blue-50 dark:hover:bg-blue-900
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-oratalesedi-blue focus-visible:ring-offset-2
                  group
                `}
              >
                {item.name}
              </Link>
                );
              }
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/quote#quote-form">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-oratalesedi-blue text-oratalesedi-blue hover:bg-oratalesedi-blue hover:text-white transition-all duration-300 bg-white/90 backdrop-blur-sm font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Quote
              </Button>
            </Link>
            <Link href="/brochure">
              <Button
                size="lg"
                className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white hover:from-oratalesedi-blue-dark hover:to-oratalesedi-blue shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-6 py-3 rounded-xl hover:scale-105"
              >
                Download Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-oratalesedi-black hover:bg-gray-100 bg-white/80 backdrop-blur-sm shadow-lg"
                : "text-white hover:bg-white/10 bg-white/20 backdrop-blur-sm shadow-lg"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200/20 bg-white/95 dark:bg-blue-950/95 backdrop-blur-xl rounded-b-2xl shadow-2xl mt-2">
            <nav className="flex flex-col space-y-4 pt-6 px-4">
              {navigation.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key="Services" className="space-y-2">
                      <button
                        className="w-full text-left font-bold text-lg text-oratalesedi-black dark:text-blue-100 hover:text-oratalesedi-blue dark:hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-oratalesedi-blue focus-visible:ring-offset-2"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        Services
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg p-2">
                          <a
                            href="/services/mining"
                            className="block w-full text-left px-4 py-3 text-oratalesedi-black dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800 active:bg-blue-200 dark:active:bg-blue-700 rounded-lg transition-all duration-200 touch-manipulation"
                            onClick={() => {
                              console.log("Navigating to /services/mining");
                              setServicesOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Mining Services
                          </a>
                          <a
                            href="/services/construction"
                            className="block w-full text-left px-4 py-3 text-oratalesedi-black dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800 active:bg-blue-200 dark:active:bg-blue-700 rounded-lg transition-all duration-200 touch-manipulation"
                            onClick={() => {
                              console.log("Navigating to /services/construction");
                              setServicesOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Construction Services
                          </a>
                          <a
                            href="/services/renewable-energy"
                            className="block w-full text-left px-4 py-3 text-oratalesedi-black dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800 active:bg-blue-200 dark:active:bg-blue-700 rounded-lg transition-all duration-200 touch-manipulation"
                            onClick={() => {
                              console.log("Navigating to /services/renewable-energy");
                              setServicesOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Renewable Energy
                          </a>
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-bold text-lg text-oratalesedi-black dark:text-blue-100 hover:text-oratalesedi-blue dark:hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-oratalesedi-blue focus-visible:ring-offset-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/quote#quote-form">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-oratalesedi-blue text-oratalesedi-blue bg-transparent hover:bg-oratalesedi-blue hover:text-white font-semibold"
                  >
                    Get Quote
                  </Button>
                </Link>
                <Link href="/brochure">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white font-semibold"
                  >
                    Download Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <DarkModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
