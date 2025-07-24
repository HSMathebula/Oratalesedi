import { User, Users, Settings, Shield, Calculator, Briefcase } from "lucide-react"

export default function TeamStructure() {
  const orgStructure = [
    {
      level: 1,
      positions: [
        {
          title: "Director",
          name: "Mrs. Nkoadi Thelma Ngcobo",
          icon: User,
          color: "bg-blue-500",
        },
      ],
    },
    {
      level: 2,
      positions: [
        {
          title: "General Manager",
          name: "Management Team",
          icon: Briefcase,
          color: "bg-blue-500",
        },
      ],
    },
    {
      level: 3,
      positions: [
        {
          title: "Project Delivery Manager",
          name: "Project Management",
          icon: Settings,
          color: "bg-green-500",
        },
        {
          title: "Accounts & Finance Manager",
          name: "Financial Management",
          icon: Calculator,
          color: "bg-purple-500",
        },
        {
          title: "SHEQ Manager",
          name: "Safety & Quality",
          icon: Shield,
          color: "bg-red-500",
        },
      ],
    },
    {
      level: 4,
      positions: [
        {
          title: "Site Managers (4)",
          name: "Site Management",
          icon: Users,
          color: "bg-indigo-500",
        },
        {
          title: "Site Supervisors (4)",
          name: "Site Supervision",
          icon: Users,
          color: "bg-teal-500",
        },
      ],
    },
  ]

  const siteTeam = [
    "Technicians",
    "Artisans",
    "Operators",
    "Safety Officers",
    "Semi-skilled Workers",
    "General Workers (Assistants)",
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Team Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our organizational structure ensures efficient project delivery with clear lines of responsibility and
            expertise at every level.
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="space-y-8">
            {orgStructure.map((level, levelIndex) => (
              <div key={levelIndex} className="flex flex-wrap justify-center gap-6">
                {level.positions.map((position, posIndex) => (
                  <div key={posIndex} className="text-center">
                    <div className={`${position.color} p-4 rounded-full w-fit mx-auto mb-3`}>
                      <position.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{position.title}</h3>
                    <p className="text-sm text-gray-600">{position.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Connection Lines Visual Representation */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Site Project Teams (98 Members)</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {siteTeam.map((role, index) => (
                  <div key={index} className="bg-slate-100 p-3 rounded-lg text-center">
                    <Users className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-slate-700">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Growth Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">6→80+</div>
            <h3 className="text-xl font-semibold mb-2">Team Growth</h3>
            <p className="text-gray-300">Staff members in under 10 years</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">98</div>
            <h3 className="text-xl font-semibold mb-2">Site Team</h3>
            <p className="text-gray-300">Skilled professionals on-site</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">Years of leadership expertise</p>
          </div>
        </div>

        {/* Leadership Highlight */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Leadership Excellence</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                Under the leadership of Mrs. Nkoadi Thelma Ngcobo, our team combines corporate experience with technical
                expertise. Our management structure ensures effective project delivery while maintaining the highest
                standards of safety, quality, and environmental compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Project Management
                </span>
                <span className="bg-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Contract Management
                </span>
                <span className="bg-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Customer Service
                </span>
                <span className="bg-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Industry Networks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
