import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import { Building, Settings, Zap, CheckCircle, ArrowRight, Shield, Clock, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      category: "Mining Services",
      icon: Settings,
      color: "from-oratalesedi-blue to-oratalesedi-blue-light",
      description: "Comprehensive mining solutions for optimal operational efficiency across South African mines",
      services: [
        "Underground & Above ground Belt Conveyor Cleaning",
        "Mining Equipment Maintenance & Repair",
        "Industrial Cleaning & Maintenance Services",
        "HP Jetting and ACC Fins Cleaning",
        "Equipment Installation & Commissioning",
        "Mine Safety Compliance Services",
        "Conveyor System Optimization",
        "Emergency Maintenance Response",
      ],
      features: ["24/7 Support", "Certified Technicians", "Safety Compliant", "Cost Effective"],
    },
    {
      category: "Construction",
      icon: Building,
      color: "from-oratalesedi-blue-light to-blue-400",
      description: "Modern construction solutions with sustainable practices for South African infrastructure",
      services: [
        "Civil Engineering Projects",
        "Building Maintenance & Renovation",
        "Wastewater Treatment Infrastructure",
        "Construction Project Management",
        "Structural Engineering Solutions",
        "Road and Bridge Construction",
        "Water Treatment Facilities",
        "Industrial Building Construction",
      ],
      features: ["CIDB Grade 4", "Project Management", "Quality Assured", "Timely Delivery"],
    },
    {
      category: "Renewable Energy",
      icon: Zap,
      color: "from-oratalesedi-blue-dark to-oratalesedi-blue",
      description: "Leading South Africa's transition to clean energy with innovative solar and renewable technology",
      services: [
        "Solar Energy System Design & Installation",
        "Renewable Energy Infrastructure Development",
        "Energy Efficiency Consulting",
        "Sustainable Technology Implementation",
        "Grid Integration Solutions",
        "Solar Farm Development",
        "Energy Storage Systems",
        "Green Building Solutions",
      ],
      features: ["Green Technology", "Energy Savings", "Sustainable", "Future Ready"],
    },
  ]

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "100% Delivery Record",
      description: "Perfect track record of project completion across South Africa",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Fast response times and efficient project execution",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "100% committed to health and safety standards",
    },
    {
      icon: Award,
      title: "BBBEE Level 1",
      description: "100% Black Woman Owned enterprise",
    },
  ]

  return (
    <main className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-oratalesedi-blue rounded-full"></div>
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-blue-400">Our Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">Across South Africa</span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From mining operations to renewable energy, we deliver excellence across multiple industries with
              innovative solutions and proven expertise throughout South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group h-full bg-white dark:bg-blue-950/90 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div
                    className={`bg-gradient-to-r ${service.color} p-6 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-black dark:text-white font-bold group-hover:text-oratalesedi-blue transition-colors duration-300">
                    {service.category}
                  </CardTitle>
                  <p className="text-gray-700 dark:text-blue-200 mt-4">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start group/item transform transition-transform duration-300 hover:translate-x-2"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-blue-200 font-medium leading-relaxed text-sm group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-oratalesedi-blue dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-xl transition-all duration-300 group`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Why Choose Oratalesedi?</h2>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto">
              Our commitment to excellence, combined with our expertise and values, makes us the preferred partner for
              engineering and mining projects across South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-white dark:hover:bg-blue-950/90 transition-colors duration-300 group"
              >
                <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-700 dark:text-blue-200 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-oratalesedi-black via-oratalesedi-blue-dark to-oratalesedi-black rounded-3xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation and discover how we can help bring your project to life with our
              comprehensive engineering solutions across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-oratalesedi-blue text-white hover:bg-oratalesedi-blue-dark">
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-oratalesedi-black bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
