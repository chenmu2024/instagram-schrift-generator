import type { Metadata } from "next"
import { Sparkles, Users, Heart, Award, Zap, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns - Instagram Schrift Generator Team",
  description:
    "Erfahre mehr über das Team hinter dem besten Instagram Schrift Generator. Unsere Mission: Coole Instagram Schriftarten für alle zugänglich machen.",
  robots: {
    index: true,
    follow: true,
  },
}

const teamValues = [
  {
    icon: <Heart className="text-red-500" size={24} />,
    title: "Leidenschaft für Design",
    description:
      "Wir lieben schöne Typografie und möchten jedem helfen, seine Instagram-Präsenz mit coolen Schriftarten zu verbessern.",
  },
  {
    icon: <Users className="text-blue-500" size={24} />,
    title: "Community First",
    description:
      "Unsere Nutzer stehen im Mittelpunkt. Wir entwickeln unseren Instagram Schrift Generator basierend auf eurem Feedback.",
  },
  {
    icon: <Zap className="text-yellow-500" size={24} />,
    title: "Innovation",
    description:
      "Wir arbeiten kontinuierlich daran, neue Instagram Schriftarten hinzuzufügen und die Benutzerfreundlichkeit zu verbessern.",
  },
  {
    icon: <Globe className="text-green-500" size={24} />,
    title: "Kostenlos für alle",
    description:
      "Unser Instagram Schrift Generator bleibt kostenlos, damit jeder Zugang zu professionellen Schriftarten hat.",
  },
]

const milestones = [
  {
    year: "2023",
    title: "Gründung",
    description: "Start des Instagram Schrift Generator Projekts mit 10 Schriftarten",
  },
  {
    year: "2024",
    title: "Wachstum",
    description: "Über 100.000 zufriedene Nutzer und 25+ Instagram Schriftarten",
  },
  {
    year: "2025",
    title: "Innovation",
    description: "Neue Features wie Favoriten-System und erweiterte Schriftarten-Kategorien",
  },
]

export default function UeberUnsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="text-white" size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">Über uns</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Wir sind das Team hinter dem beliebtesten Instagram Schrift Generator in Deutschland. Unsere Mission ist es,
          jedem die Möglichkeit zu geben, mit coolen Instagram Schriftarten aufzufallen.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Unsere Mission</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
          Bei instagramschriftgenerator.pro glauben wir, dass jeder das Recht auf kreative Selbstentfaltung hat. Unser
          Instagram Schrift Generator macht professionelle Typografie für alle zugänglich - kostenlos, einfach und ohne
          technische Hürden.
        </p>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg">
            <Award className="text-yellow-500" size={20} />
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Über 500.000 generierte Instagram Schriftarten
            </span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">Unsere Werte</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{value.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">Unsere Geschichte</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {milestone.year}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{milestone.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Technologie & Innovation
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Unser Instagram Schrift Generator basiert auf modernster Web-Technologie und Unicode-Standards. Wir nutzen:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Unicode-Zeichen für maximale Kompatibilität
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Responsive Design für alle Geräte
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Echtzeit-Vorschau ohne Verzögerung
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Datenschutz-konforme Implementierung
            </li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Hast du Fragen oder Feedback?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Wir freuen uns über deine Nachricht! Kontaktiere uns gerne mit Verbesserungsvorschlägen oder Fragen zu unserem
          Instagram Schrift Generator.
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          <Users size={20} />
          Kontakt aufnehmen
        </a>
      </section>
    </div>
  )
}
