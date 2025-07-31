import type { Metadata } from "next"
import { Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt - Instagram Schrift Generator Support",
  description:
    "Kontaktiere das Instagram Schrift Generator Team. Wir helfen bei Fragen zu Instagram Schriftarten und unserem Schriftarten Generator.",
  robots: {
    index: true,
    follow: true,
  },
}

const contactMethods = [
  {
    icon: <Mail className="text-blue-500" size={24} />,
    title: "E-Mail Support",
    description: "Schreibe uns eine E-Mail für detaillierte Anfragen",
    contact: "info@instaschrift.pro",
    action: "E-Mail senden",
    href: "mailto:info@instaschrift.pro",
  },
  {
    icon: <MessageCircle className="text-green-500" size={24} />,
    title: "Allgemeine Anfragen",
    description: "Fragen zu unserem Instagram Schrift Generator",
    contact: "Antwort innerhalb von 24 Stunden",
    action: "Nachricht schreiben",
    href: "mailto:info@instaschrift.pro?subject=Allgemeine Anfrage - Instagram Schrift Generator",
  },
  {
    icon: <Send className="text-purple-500" size={24} />,
    title: "Feature-Wünsche",
    description: "Schlage neue Instagram Schriftarten vor",
    contact: "Wir freuen uns über deine Ideen",
    action: "Vorschlag senden",
    href: "mailto:info@instaschrift.pro?subject=Feature-Wunsch - Instagram Schriftarten",
  },
]

const faqItems = [
  {
    question: "Wie kann ich neue Instagram Schriftarten vorschlagen?",
    answer:
      "Schreibe uns eine E-Mail an info@instaschrift.pro mit deinem Vorschlag. Wir prüfen alle Anfragen und fügen beliebte Schriftarten zu unserem Instagram Schrift Generator hinzu.",
  },
  {
    question: "Warum funktioniert eine Instagram Schriftart nicht?",
    answer:
      "Manche Instagram Schriftarten werden nicht auf allen Geräten gleich dargestellt. Kontaktiere uns mit Details zu deinem Problem, damit wir helfen können.",
  },
  {
    question: "Kann ich den Instagram Schrift Generator kommerziell nutzen?",
    answer:
      "Ja, unser Instagram Schrift Generator ist kostenlos für private und kommerzielle Nutzung. Alle generierten Instagram Schriftarten basieren auf Unicode-Standards.",
  },
  {
    question: "Wie oft werden neue Instagram Schriftarten hinzugefügt?",
    answer:
      "Wir erweitern unseren Instagram Schrift Generator regelmäßig. Folge uns oder abonniere unseren Newsletter für Updates zu neuen Instagram Schriftarten.",
  },
]

export default function KontaktPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">Kontakt</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Hast du Fragen zu unserem Instagram Schrift Generator oder benötigst Hilfe mit Instagram Schriftarten? Wir
          sind hier, um zu helfen!
        </p>
      </div>

      {/* Contact Methods */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">So erreichst du uns</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200 text-center"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{method.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{method.description}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{method.contact}</p>
              <a
                href={method.href}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Kontaktinformationen</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">E-Mail Adresse</h3>
                <p className="text-slate-600 dark:text-slate-300">info@instagramschriftgenerator.pro</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Antwortzeit</h3>
                <p className="text-slate-600 dark:text-slate-300">Innerhalb von 24 Stunden</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Standort</h3>
                <p className="text-slate-600 dark:text-slate-300">Deutschland</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-orange-600 dark:text-orange-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Sprachen</h3>
                <p className="text-slate-600 dark:text-slate-300">Deutsch, Englisch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">{item.question}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Hours */}
      <section className="text-center bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Support-Zeiten</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Wir bearbeiten E-Mails zu folgenden Zeiten und antworten innerhalb von 24 Stunden:
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <p className="font-semibold text-slate-800 dark:text-slate-100">Montag - Freitag</p>
            <p className="text-slate-600 dark:text-slate-300">9:00 - 18:00 Uhr</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-slate-800 dark:text-slate-100">Wochenende</p>
            <p className="text-slate-600 dark:text-slate-300">Eingeschränkter Support</p>
          </div>
        </div>
      </section>
    </div>
  )
}
