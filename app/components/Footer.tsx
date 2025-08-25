import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, FileText, Award } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const services = ["Mining Services", "Construction", "Renewable Energy", "Project Management"]

  const certifications = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "CIDB Grade 4"]

  return (
    <footer className="bg-oratalesedi-black dark:bg-background text-white dark:text-blue-100 border-t-4 border-oratalesedi-blue dark:border-blue-500/60 shadow-modern dark:shadow-colored relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 blur-sm opacity-70 dark:from-blue-700 dark:via-blue-500 dark:to-blue-400 dark:opacity-90"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="/images/oratalesedi-logo.png"
                alt="Oratalesedi Trading & Projects"
                width={220}
                height={80}
                className="h-14 w-auto mb-6 brightness-110 contrast-125"
              />
              <p className="text-white dark:text-blue-100 text-base leading-relaxed drop-shadow">
                100% Black Woman Owned Level 1 BBBEE company specializing in mining, construction, and renewable energy
                services.
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-oratalesedi-blue" />
                  <span className="text-white dark:text-blue-200 drop-shadow">Business Park, 8 Corridor Cres, Ben Fleur, eMalahleni, 1049, Mpumalanga, South Africa</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-oratalesedi-blue" />
                  <span className="text-white dark:text-blue-200 drop-shadow">+27 76 996 3322</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-oratalesedi-blue" />
                <span className="text-white dark:text-blue-200 drop-shadow">info@oratalesedi.co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white dark:text-blue-200 hover:text-oratalesedi-blue dark:hover:text-blue-400 transition-colors text-sm drop-shadow focus:outline-2 focus:outline-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white dark:text-blue-200 text-sm drop-shadow">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow">Certifications</h3>
            <ul className="space-y-2 mb-6">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Award className="h-3 w-3 mr-2 text-oratalesedi-blue dark:text-blue-400" />
                  <span className="text-white dark:text-blue-200 drop-shadow">{cert}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center text-sm text-white dark:text-blue-200 hover:text-oratalesedi-blue dark:hover:text-blue-400 transition-colors drop-shadow focus:outline-2 focus:outline-blue-600"
              >
                <FileText className="h-4 w-4 mr-2 dark:text-blue-400" />
                Download Company Profile
              </Link>
              <Link
                href="#"
                className="flex items-center text-sm text-white dark:text-blue-200 hover:text-oratalesedi-blue dark:hover:text-blue-400 transition-colors drop-shadow focus:outline-2 focus:outline-blue-600"
              >
                <Linkedin className="h-4 w-4 mr-2 dark:text-blue-400" />
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-blue-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white dark:text-blue-200 mb-4 md:mb-0 drop-shadow">
              <p>© {new Date().getFullYear()} Oratalesedi Trading & Projects (Pty) Ltd. All rights reserved.</p>
              <p className="mt-1">Registration: 2012/207614/07 | CSD: MAAA0174654 | VAT: 4210274264</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-white dark:text-blue-200 hover:text-oratalesedi-blue dark:hover:text-blue-400 transition-colors text-sm drop-shadow focus:outline-2 focus:outline-blue-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white dark:text-blue-200 hover:text-oratalesedi-blue dark:hover:text-blue-400 transition-colors text-sm drop-shadow focus:outline-2 focus:outline-blue-600">
                Terms of Service
              </Link>
              <Link href="#" className="text-white dark:text-blue-200 hover:text-oratalesedi-blue dark:hover:text-blue-400 transition-colors text-sm drop-shadow focus:outline-2 focus:outline-blue-600">
                BBBEE Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
