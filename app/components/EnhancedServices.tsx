"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Settings, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./ScrollReveal"

export default function EnhancedServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      category: "Mining Services",
      icon: Settings,
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
      services: [
        "Underground & Above ground Belt Conveyor Cleaning",
        "Mining Equipment Maintenance",
        "Industrial Cleaning Services",
        "HP Jetting and ACC Fins Cleaning",
      ],
    },
    {
      category: "Construction",
      icon: Building,
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-600 to-green-700",
      services: [
        "Civil Engineering Projects",
        "Building Maintenance Services",
        "Wastewater Treatment Works Infrastructure",
        "Construction Procurement",
      ],
    },
    {
      category: "Renewable Energy",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-600 to-purple-700",
      services: [
        "Solar Energy Solutions",
        "Renewable Energy Infrastructure",
        "Energy Efficiency Projects",
        "Sustainable Technology Implementation",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering and industrial solutions tailored for the mining and petrochemical industries.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200} className="h-full">
              <Card
                className="group h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div
                    className={`bg-gradient-to-r ${hoveredCard === index ? service.hoverColor : service.color} p-6 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900 font-bold group-hover:text-blue-600 transition-colors duration-300">
                    {service.category}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-4">
                    {service.services.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start group/item transform transition-transform duration-300 hover:translate-x-2"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm group-hover/item:shadow-md transition-all duration-300 group-hover/item:scale-125"></div>
                        <span className="text-gray-700 font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal direction="up" delay={600}>
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Specialized Expertise
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Our qualified associates bring extensive experience across various functional areas of the Mining and
                  Engineering sectors, available on a contractual basis to ensure project success.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Mining Operations", "Petrochemical", "Power Generation"].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Link href="/quote#quote-form">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                  >
                    Request Detailed Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <p className="text-sm text-gray-400 mt-4">Custom solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
