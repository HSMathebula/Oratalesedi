import { Award, Users, MapPin, Calendar, Target, Compass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ModernAbout() {
  const achievements = [
    { icon: Calendar, value: "2012", label: "Founded", color: "blue" },
    { icon: Users, value: "80+", label: "Team Members", color: "blue-light" },
    { icon: Award, value: "56+", label: "Projects Completed", color: "blue-dark" },
    { icon: MapPin, value: "4", label: "CIDB Grade", color: "blue" },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To preserve our company brand as reputable, sustainable and profitable supplier and employer enterprise that contributes to the socio-economic agenda of South Africa.",
      color: "blue",
    },
    {
      icon: Compass,
      title: "Our Mission",
      description:
        "To conduct all our operations in a safe manner with consideration for best practices in the industry while providing excellent service consistently & cost effectively.",
      color: "blue-light",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-oratalesedi-blue to-oratalesedi-blue-light",
      "blue-light": "from-oratalesedi-blue-light to-blue-400",
      "blue-dark": "from-oratalesedi-blue-dark to-oratalesedi-blue",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="about" className="py-24 relative" style={{
      backgroundImage: `url('/images/hero-excavator.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-blue-950/80 pointer-events-none transition-colors duration-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-blue-200 dark:bg-purple-900/60 dark:border-purple-700 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-oratalesedi-blue dark:bg-purple-400 rounded-full"></div>
            <span className="text-sm font-medium text-oratalesedi-blue dark:text-purple-300">About Oratalesedi</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-black dark:text-blue-100 mb-6 drop-shadow">
            Engineering
            <span className="bg-gradient-to-r from-oratalesedi-blue to-oratalesedi-blue-light dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Excellence
            </span>
          </h2>
          <p className="text-xl text-black dark:text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
            A proud Qualifying Small Enterprise (QSE) and BBBEE Level 1 contributor, founded and registered with CIPC on
            November 21st, 2012.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:shadow-[0_0_24px_4px_rgba(139,92,246,0.2)]"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getColorClasses(achievement.color)} dark:from-purple-500 dark:to-cyan-400 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-black dark:text-blue-100 mb-1 drop-shadow">{achievement.value}</div>
                <div className="text-sm text-gray-900 dark:text-blue-100 drop-shadow">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black dark:text-blue-100 mb-6 drop-shadow">Our Foundation</h3>
              <div className="space-y-4 text-gray-900 dark:text-blue-100 leading-relaxed drop-shadow">
                <p>
                  Oratalesedi Trading & Projects (Pty) Ltd is fully compliant with ISO 9001, 14001, and 45001
                  international standards as well as Tax and Department of Labour local requirements.
                </p>
                <p>
                  We are a service-focused and customer-centric enterprise driven by high service standards and complete
                  customer satisfaction. Our focus is primarily on providing services to the mining & petrochemical
                  industries.
                </p>
                <p>
                  We have strategically positioned our offices in the mining centers of Witbank and Middelburg,
                  Mpumalanga province to better serve our clients.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-purple-900/60 p-4 rounded-xl border border-blue-200 dark:border-purple-700">
                <h4 className="font-semibold text-oratalesedi-blue dark:text-purple-300 mb-2 drop-shadow">ISO Certified</h4>
                <p className="text-sm text-oratalesedi-blue dark:text-purple-200 drop-shadow">9001, 14001, 45001</p>
              </div>
              <div className="bg-white dark:bg-cyan-900/60 p-4 rounded-xl border border-blue-300 dark:border-cyan-700">
                <h4 className="font-semibold text-oratalesedi-blue-dark dark:text-cyan-300 mb-2 drop-shadow">BBBEE Level 1</h4>
                <p className="text-sm text-oratalesedi-blue-dark dark:text-cyan-200 drop-shadow">100% BWO Enterprise</p>
              </div>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="relative">
            <Card className="bg-white dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900/80 backdrop-blur-xl border-0 shadow-2xl dark:shadow-[0_0_24px_4px_rgba(139,92,246,0.2)]">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-oratalesedi-blue to-oratalesedi-blue-light dark:from-purple-500 dark:to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-[0_0_24px_4px_rgba(139,92,246,0.2)]">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-pink-400 dark:to-yellow-300 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-black dark:text-blue-100 mb-2 drop-shadow">Mrs. Nkoadi Thelma Ngcobo</h4>
                    <p className="text-oratalesedi-blue dark:text-purple-300 font-semibold mb-4 drop-shadow">Managing Director</p>
                    <p className="text-gray-900 dark:text-blue-100 text-sm leading-relaxed drop-shadow">
                      Over fifteen years of corporate experience spanning administration, customer services, and
                      contract management. An astute project manager with extensive networks in the power generation and
                      mining sectors.
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4">
                    <span className="bg-white dark:bg-purple-900/60 text-oratalesedi-blue dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium drop-shadow">
                      Project Management
                    </span>
                    <span className="bg-white dark:bg-cyan-900/60 text-oratalesedi-blue-light dark:text-cyan-200 px-3 py-1 rounded-full text-xs font-medium drop-shadow">
                      Industry Networks
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-[0_0_24px_4px_rgba(139,92,246,0.2)]"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getColorClasses(value.color)} dark:from-purple-500 dark:to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-blue-100 mb-3 drop-shadow">{value.title}</h3>
                    <p className="text-gray-900 dark:text-blue-100 leading-relaxed drop-shadow">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
