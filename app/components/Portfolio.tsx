import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, User, MapPin } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Underground Belt Cleaning and Maintenance Services",
      client: "Thungela Greenside Colliery",
      contract: "CW43926",
      type: "Mechanical",
      value: "R13,176,000.00",
      status: "Completed July 2024",
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
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-blue-100 max-w-3xl mx-auto">
            Showcasing our successful project deliveries across the mining and engineering sectors.
          </p>
        </div>

        {/* Key Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-blue-950/90 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold"
                  >
                    {project.type}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                    {project.contract}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-blue-300 font-semibold text-lg">{project.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {/* Value */}
                  <Card className="group bg-green-700 dark:bg-green-900 text-white border border-green-800 dark:border-green-950 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-800 dark:hover:bg-green-950">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-800 dark:bg-green-950 rounded-xl mb-4 group-hover:bg-green-900 dark:group-hover:bg-green-950 transition-colors duration-300 shadow">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 drop-shadow">{project.value}</div>
                      <div className="text-sm text-white drop-shadow">Total Project Value</div>
                    </CardContent>
                  </Card>
                  {/* Status */}
                  <Card className="group bg-blue-800 dark:bg-blue-950 text-white border border-blue-900 dark:border-blue-950 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-blue-900 dark:hover:bg-blue-950">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 dark:bg-blue-950 rounded-xl mb-4 group-hover:bg-blue-950 dark:group-hover:bg-blue-950 transition-colors duration-300 shadow">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 drop-shadow">{project.status}</div>
                      <div className="text-sm text-white drop-shadow">Delivery Status</div>
                    </CardContent>
                  </Card>
                  {/* Contact */}
                  <Card className="group bg-purple-800 dark:bg-purple-950 text-white border border-purple-900 dark:border-purple-950 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-purple-900 dark:hover:bg-purple-950">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-900 dark:bg-purple-950 rounded-xl mb-4 group-hover:bg-purple-950 dark:group-hover:bg-purple-950 transition-colors duration-300 shadow">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 drop-shadow">{project.contact.name}</div>
                      <div className="text-sm text-white drop-shadow">{project.contact.position}</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="bg-white dark:bg-blue-950/90 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 dark:text-blue-200">
              We are proud to work with some of the most respected names in the mining industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="text-center p-4 border border-gray-200 dark:border-blue-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="h-16 bg-gray-100 dark:bg-blue-900/50 rounded mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500 dark:text-blue-300 font-medium">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="mt-12 bg-slate-900 dark:bg-blue-950 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Portfolio Summary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">R50M+</div>
                <p className="text-gray-300">Total Project Value</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <p className="text-gray-300">Delivery Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">4+</div>
                <p className="text-gray-300">Major Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
