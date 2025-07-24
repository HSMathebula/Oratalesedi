import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Banknote, User, MapPin, Building, Settings, Zap } from "lucide-react"

export default function PortfolioPage() {
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
      category: "mining",
    },
    {
      title: "Belt Cleaning and Maintenance Services",
      client: "Mafube Coal Mining Proprietary Limited",
      contract: "CW64942",
      type: "Mechanical",
      value: "R9,000,000.00",
      status: "Completed August 2024",
      location: "Free State, South Africa",
      description:
        "Advanced belt cleaning systems and maintenance protocols for enhanced mining efficiency at Mafube's operations.",
      contact: {
        name: "Angela Steenkamp",
        position: "Senior Contracts Administrator",
        phone: "013 691 5023",
        email: "angela.steenkamp@thungela.com",
      },
      category: "mining",
    },
    {
      title: "Mafube SPL Pans Reconstruction (Phase 1 & 2)",
      client: "Mafube Coal",
      contract: "Various POs",
      type: "Civil Engineering",
      value: "R20,000,000+",
      status: "Ongoing - End November 2024",
      location: "Free State, South Africa",
      description:
        "Large-scale reconstruction project involving specialized pans and infrastructure development for improved coal processing efficiency.",
      contact: {
        name: "Kenneth Mulivha",
        position: "Section Engineer",
        phone: "072 855 8046",
        email: "kenny.mulivha@thungela.com",
      },
      category: "construction",
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
        "Comprehensive civil engineering project including structural works, piping systems, and security infrastructure for industrial facilities.",
      contact: {
        name: "Bongani Singwane",
        position: "Site Manager",
        phone: "072 845 5235",
        email: "bongani@jedd.co.za",
      },
      category: "construction",
    },
    {
      title: "Solar Energy Installation Project",
      client: "Renewable Energy Solutions SA",
      contract: "RE2024-001",
      type: "Renewable Energy",
      value: "R8,500,000.00",
      status: "Completed March 2024",
      location: "Northern Cape, South Africa",
      description:
        "Design and installation of a 2MW solar energy system contributing to South Africa's renewable energy goals.",
      contact: {
        name: "Sarah Mitchell",
        position: "Project Manager",
        phone: "021 555 0123",
        email: "s.mitchell@renewablesa.co.za",
      },
      category: "renewable",
    },
    {
      title: "Industrial Cleaning and Maintenance",
      client: "Sasol Secunda Operations",
      contract: "SAS-2024-MC",
      type: "Industrial Services",
      value: "R6,200,000.00",
      status: "Ongoing Contract",
      location: "Mpumalanga, South Africa",
      description:
        "Comprehensive industrial cleaning and maintenance services for petrochemical facilities ensuring operational efficiency and safety compliance.",
      contact: {
        name: "David Nkomo",
        position: "Maintenance Coordinator",
        phone: "017 632 8900",
        email: "david.nkomo@sasol.com",
      },
      category: "mining",
    },
  ]

  const clientLogos = [
    "Thungela Operations",
    "Mafube Coal Mining",
    "JEDD Civils",
    "Greenside Colliery",
    "Sasol",
    "Renewable Energy Solutions SA",
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "mining":
        return Settings
      case "construction":
        return Building
      case "renewable":
        return Zap
      default:
        return Building
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "mining":
        return "from-oratalesedi-blue to-oratalesedi-blue-light"
      case "construction":
        return "from-oratalesedi-blue-light to-blue-400"
      case "renewable":
        return "from-oratalesedi-blue-dark to-oratalesedi-blue"
      default:
        return "from-oratalesedi-blue to-oratalesedi-blue-light"
    }
  }

  return (
    <main className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-oratalesedi-blue rounded-full"></div>
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-blue-400">Our Portfolio</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
              Project
              <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">Across South Africa</span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto leading-relaxed">
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

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              return (
                <Card
                  key={index}
                  className="group h-full bg-white dark:bg-blue-950/90 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-4 py-2 rounded-full font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <CategoryIcon className="h-4 w-4 mr-2" />
                        {project.type}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                        {project.contract}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight font-bold text-black dark:text-white group-hover:text-oratalesedi-blue transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-oratalesedi-blue dark:text-blue-400 font-semibold text-lg">
                      {project.client}
                    </CardDescription>
                    <p className="text-gray-700 dark:text-blue-200 text-sm mt-2">{project.description}</p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-sm text-gray-700 dark:text-blue-200 bg-green-50 dark:bg-blue-950/40 p-3 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                        <Banknote className="h-5 w-5 mr-3 text-green-600" />
                        <span className="font-bold text-lg">{project.value}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                        <Calendar className="h-5 w-5 mr-3 text-oratalesedi-blue" />
                        <span className="font-medium">{project.status}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 dark:text-blue-200 bg-purple-50 dark:bg-blue-950/40 p-3 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
                        <MapPin className="h-5 w-5 mr-3 text-purple-600" />
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 dark:text-blue-200 bg-orange-50 dark:bg-blue-950/40 p-3 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                        <User className="h-5 w-5 mr-3 text-orange-600" />
                        <span className="font-medium">
                          {project.contact.name} - {project.contact.position}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-blue-950/90 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-blue-800">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Trusted by Industry Leaders</h3>
              <p className="text-gray-700 dark:text-blue-200 text-lg">
                We are proud to work with some of the most respected names in South African industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="text-center p-6 border border-gray-200 dark:border-blue-800 rounded-xl hover:shadow-lg hover:border-oratalesedi-blue/30 transition-all duration-500 transform hover:scale-105 group cursor-pointer"
                >
                  <div className="h-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg mb-3 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 dark:group-hover:from-blue-800 dark:group-hover:to-blue-700 transition-all duration-300">
                    <span className="text-sm text-gray-700 dark:text-blue-200 font-bold group-hover:text-oratalesedi-blue transition-colors duration-300 text-center px-2">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
