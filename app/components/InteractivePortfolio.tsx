"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Banknote, User, ExternalLink, MapPin } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

export default function InteractivePortfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Underground Belt Cleaning and Maintenance Services",
      client: "Thungela Greenside Colliery",
      contract: "CW43926",
      type: "Mechanical",
      value: "R13,176,000.00",
      status: "Completed July 2024",
      location: "Mpumalanga, South Africa",
      description:
        "Comprehensive underground belt conveyor cleaning and maintenance services ensuring optimal mining operations at one of South Africa's leading coal mines.",
      contact: {
        name: "Angela Steenkamp",
        position: "Senior Contracts Administrator",
        phone: "013 6915023",
        email: "angela.steenkamp@thungela.com",
      },
    },
    {
      title: "Belt Cleaning and Maintenance Services",
      client: "Mafube Coal Mining Proprietary Limited",
      contract: "CW64942",
      type: "Mechanical",
      value: "R9,000,000.00",
      status: "Completed August 2024",
      location: "Free State, South Africa",
      description: "Advanced belt cleaning systems and maintenance protocols for enhanced mining efficiency at Mafube's operations.",
      contact: {
        name: "Angela Steenkamp",
        position: "Senior Contracts Administrator",
        phone: "013 691 5023",
        email: "angela.steenkamp@thungela.com",
      },
    },
    {
      title: "Mafube SPL Pans Reconstruction (Phase 1 & 2)",
      client: "Mafube Coal",
      contract: "Various POs",
      type: "Civil Engineering",
      value: "R20,000,000+",
      status: "Ongoing - End November 2024",
      location: "Mafube, South Africa",
      description: "Large-scale reconstruction project involving specialized pans and infrastructure development.",
      contact: {
        name: "Kenneth Mulivha",
        position: "Section Engineer",
        phone: "072 855 8046",
        email: "kenny.mulivha@thungela.com",
      },
    },
    {
      title: "Civil and Structural Works, HDPE Piping, Welding, Fencing",
      client: "JEDD Civils",
      contract: "52093JC",
      type: "Multi-Discipline",
      value: "R12,542,287.36",
      status: "Active Contract",
      location: "Gauteng, South Africa",
      description:
        "Comprehensive civil engineering project including structural works, piping systems, and security infrastructure.",
      contact: {
        name: "Bongani Singwane",
        position: "Site Manager",
        phone: "072 845 5235",
        email: "bongani@jedd.co.za",
      },
    },
  ]

  const clientLogos = ["Thungela Operations", "Mafube Coal Mining", "JEDD Civils", "Greenside Colliery"]

  return (
    <section id="portfolio" className="py-24 relative bg-white dark:bg-blue-950">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-black text-black dark:text-white mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent drop-shadow">
            Project Portfolio
          </h2>
          <p className="text-xl text-black dark:text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Showcasing our successful project deliveries across the mining and engineering sectors.
          </p>
        </ScrollReveal>

        {/* Interactive Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 150}
              className="h-full"
            >
              <Card
                className={`group h-full bg-white dark:bg-blue-950/90 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 cursor-pointer overflow-hidden relative ${
                  selectedProject === index ? "ring-4 ring-blue-500/50 shadow-blue-500/20" : ""
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300 drop-shadow"
                    >
                      {project.type}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-black dark:text-blue-100 font-mono bg-white dark:bg-blue-950/90 px-3 py-1 rounded-full drop-shadow">
                        {project.contract}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight font-bold text-black dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-300 drop-shadow">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-900 dark:text-blue-100 font-semibold text-lg drop-shadow group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors duration-300">{project.client}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-6">
                    {/* Value Stat */}
                    <div className="flex items-center text-sm font-bold bg-green-100 dark:bg-green-900/90 p-4 rounded-2xl border border-green-200 dark:border-green-600 shadow group transition-all duration-300 cursor-pointer hover:bg-green-200 dark:hover:bg-green-800 hover:shadow-2xl hover:scale-[1.03]">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 rounded-xl shadow group-hover:from-green-600 group-hover:to-green-800 dark:group-hover:from-green-300 dark:group-hover:to-green-500 mr-3 transition-all duration-300">
                        <Banknote className="h-6 w-6 text-white" />
                      </span>
                      <span className="font-bold text-lg text-green-900 dark:text-green-100 group-hover:text-green-950 dark:group-hover:text-green-50 transition-colors duration-300">{project.value}</span>
                    </div>
                    {/* Status Stat */}
                    <div className="flex items-center text-sm font-semibold bg-blue-100 dark:bg-blue-900/90 p-4 rounded-2xl border border-blue-200 dark:border-blue-600 shadow group transition-all duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 hover:shadow-2xl hover:scale-[1.03]">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-xl shadow group-hover:from-blue-600 group-hover:to-blue-800 dark:group-hover:from-blue-300 dark:group-hover:to-blue-500 mr-3 transition-all duration-300">
                        <Calendar className="h-6 w-6 text-white" />
                      </span>
                      <span className="font-medium text-blue-900 dark:text-blue-100 group-hover:text-blue-950 dark:group-hover:text-blue-50 transition-colors duration-300">{project.status}</span>
                    </div>
                    {/* Contact Stat */}
                    <div className="flex items-center text-sm font-semibold bg-orange-100 dark:bg-orange-900/90 p-4 rounded-2xl border border-orange-200 dark:border-orange-600 shadow group transition-all duration-300 cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-800 hover:shadow-2xl hover:scale-[1.03]">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600 rounded-xl shadow group-hover:from-orange-600 group-hover:to-orange-800 dark:group-hover:from-orange-300 dark:group-hover:to-orange-500 mr-3 transition-all duration-300">
                        <User className="h-6 w-6 text-white" />
                      </span>
                      <span className="font-medium text-orange-900 dark:text-orange-100 group-hover:text-orange-950 dark:group-hover:text-orange-50 transition-colors duration-300">
                        {project.contact.name} - {project.contact.position}
                      </span>
                    </div>
                    {/* Location Stat */}
                    <div className="flex items-center text-sm font-semibold bg-purple-100 dark:bg-purple-900/90 p-4 rounded-2xl border border-purple-200 dark:border-purple-600 shadow group transition-all duration-300 cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-800 hover:shadow-2xl hover:scale-[1.03]">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 rounded-xl shadow group-hover:from-purple-600 group-hover:to-purple-800 dark:group-hover:from-purple-300 dark:group-hover:to-purple-500 mr-3 transition-all duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </span>
                      <span className="font-medium text-purple-900 dark:text-purple-100 group-hover:text-purple-950 dark:group-hover:text-purple-50 transition-colors duration-300">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedProject === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white dark:bg-blue-950/90 p-4 rounded-lg border-l-4 border-blue-500 drop-shadow">
                      <p className="text-black dark:text-blue-100 leading-relaxed drop-shadow">{project.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Animated Client Logos */}
        <ScrollReveal direction="up" delay={800}>
          {/* Trusted by Industry Leaders Section */}
          <section className="py-20 bg-blue-950 dark:bg-blue-900">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-white">Trusted by Industry Leaders</h2>
              <p className="text-center text-lg mb-8 text-blue-100">We are proud to work with some of the most respected names in the mining industry.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/anglo-american.png" alt="Anglo American" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/wbho.png" alt="Eskom Trial" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/g4s-seeklogo-01.png" alt="Caterpillar" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/eskom-seeklogo-01.png" alt="JEDD Civils" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/jedd.png" alt="Anglo American" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/mafube.png" alt="Eskom Trial" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/malahleni-LM.png" alt="Caterpillar" className="h-16 object-contain" />
                </div>
                <div className="bg-blue-900 dark:bg-blue-800 p-6 rounded-xl flex items-center justify-center shadow-md border border-blue-700">
                  <img src="/images/logos/thungela.png" alt="JEDD Civils" className="h-16 object-contain" />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Enhanced Portfolio Summary */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <div className="text-center relative z-10">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Portfolio Summary
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: "R70M+", label: "Total Project Value", color: "from-green-400 to-green-600" },
                  { value: "100%", label: "Delivery Success Rate", color: "from-blue-400 to-blue-600" },
                  { value: "4+", label: "Major Clients", color: "from-purple-400 to-purple-600" },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div
                      className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
