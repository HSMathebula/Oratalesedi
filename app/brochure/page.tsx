import ModernHeader from "../components/ModernHeader"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Download,
  FileText,
  Award,
  Users,
  MapPin,
  Calendar,
  Building,
  Settings,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react"

export default function BrochurePage() {
  const companyHighlights = [
    { icon: Award, title: "BBBEE Level 1", description: "100% Black Woman Owned Enterprise" },
    { icon: Calendar, title: "Since 2012", description: "Over 12 years of excellence" },
    { icon: Users, title: "80+ Team Members", description: "Skilled professionals" },
    { icon: MapPin, title: "CIDB Grade 4", description: "Certified contractor" },
  ]

  const services = [
    {
      icon: Settings,
      title: "Mining Services",
      items: ["Belt Conveyor Cleaning", "Equipment Maintenance", "Industrial Cleaning", "HP Jetting Services"],
    },
    {
      icon: Building,
      title: "Construction",
      items: ["Civil Engineering", "Building Maintenance", "Infrastructure Development", "Project Management"],
    },
    {
      icon: Zap,
      title: "Renewable Energy",
      items: ["Solar Installations", "Energy Efficiency", "Grid Integration", "Sustainable Solutions"],
    },
  ]

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "ISO 45001:2018 - Occupational Health & Safety",
    "CIDB Grade 4 Certification",
    "Tax & Department of Labour Compliance",
  ]

  const projects = [
    { client: "Thungela Greenside Colliery", value: "R13.2M", type: "Mining Services" },
    { client: "Mafube Coal Mining", value: "R20M+", type: "Civil Engineering" },
    { client: "JEDD Civils", value: "R12.5M", type: "Multi-Discipline" },
    { client: "Sasol Operations", value: "R6.2M", type: "Industrial Services" },
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
              <span className="text-sm font-medium text-oratalesedi-blue dark:text-blue-400">Company Brochure</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
              Download Our
              <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light bg-clip-text text-transparent">
                {" "}
                Company
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">Brochure</span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get comprehensive information about Oratalesedi Trading & Projects, our services, capabilities, and track
              record across South Africa.
            </p>
          </div>

          {/* Download CTA */}
          <div className="text-center mb-16">
            <a href="/company-brochure.pdf.pdf" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light text-white hover:from-oratalesedi-blue-dark hover:to-oratalesedi-blue shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-bold"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Company Brochure (PDF)
              </Button>
            </a>
            <p className="text-sm text-gray-600 dark:text-blue-300 mt-3">Free download • No registration required • 2.5MB PDF</p>
          </div>
        </div>
      </section>

      {/* Brochure Preview */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">What's Inside Our Brochure</h2>
            <p className="text-xl text-gray-800 dark:text-blue-100 max-w-3xl mx-auto">
              A comprehensive overview of our company, services, and achievements in South Africa
            </p>
          </div>

          {/* Company Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {companyHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="group bg-white dark:bg-blue-950/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-blue-200">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-white dark:bg-blue-950/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-700 dark:text-blue-200">
                        <div className="w-2 h-2 bg-oratalesedi-blue rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700 dark:text-blue-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Projects */}
          <div className="bg-gray-50 dark:bg-blue-900/50 rounded-3xl p-10 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Recent Project Highlights</h3>
              <p className="text-gray-700 dark:text-blue-200">Major projects completed across South Africa</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-blue-950/90 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-black dark:text-white mb-2">{project.client}</h4>
                  <p className="text-2xl font-bold text-oratalesedi-blue dark:text-blue-400 mb-1">{project.value}</p>
                  <p className="text-sm text-gray-700 dark:text-blue-200">{project.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-oratalesedi-black rounded-3xl p-10 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Certifications & Compliance</h3>
              <p className="text-gray-300">Maintaining the highest standards across all operations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <Shield className="h-5 w-5 text-oratalesedi-blue mr-3 flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Contents */}
      <section className="py-20 bg-gray-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Brochure Contents</h2>
              <p className="text-xl text-gray-800 dark:text-blue-100">Detailed sections covering all aspects of our business</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white dark:bg-blue-950/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-black dark:text-white">
                    <FileText className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                    Company Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 dark:text-blue-200">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Company history and milestones</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Leadership team profiles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Vision, mission, and values</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">BBBEE credentials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-blue-950/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-black dark:text-white">
                    <Settings className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                    Services & Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 dark:text-blue-200">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Detailed service descriptions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Technical capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Equipment and resources</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Quality assurance processes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-blue-950/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-black dark:text-white">
                    <Award className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                    Project Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 dark:text-blue-200">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Case studies and success stories</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Client testimonials</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Project timelines and outcomes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Before and after photos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-blue-950/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-black dark:text-white">
                    <Shield className="h-5 w-5 mr-2 text-oratalesedi-blue" />
                    Safety & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 dark:text-blue-200">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Safety policies and procedures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">ISO certifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Environmental compliance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-700 dark:text-blue-200">Training and development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light rounded-3xl p-10 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Download?</h3>
                <p className="text-xl mb-8 opacity-90">Get instant access to our comprehensive company brochure</p>
                <a href="/company-brochure.pdf.pdf" download>
                  <Button
                    size="lg"
                    className="bg-white dark:bg-blue-950/90 text-oratalesedi-blue dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-blue-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-bold"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download Now (PDF - 2.5MB)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
