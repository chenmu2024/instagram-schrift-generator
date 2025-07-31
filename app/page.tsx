import SchriftGenerator from "@/components/SchriftGenerator"
import {
  Heart,
  Type,
  Zap,
  Star,
  Users,
  Sparkles,
  Palette,
  Gamepad2,
  Clock,
  TrendingUp,
  Award,
  Target,
} from "lucide-react"

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Instagram Schrift Generator",
      item: "https://instaschrift.pro",
    },
  ],
}

const faqData = [
  {
    question: "Wie funktioniert der Instagram Schrift Generator mit 45+ Schriftarten?",
    answer:
      "Unser erweiterte Instagram Schrift Generator wandelt deinen normalen Text in über 45 verschiedene Instagram Schriftarten um. Der Schriftarten Generator nutzt Unicode-Zeichen, um coole Instagram Schrift zu erstellen. Neu sind Trending Fonts wie Aesthetic Vaporwave, TikTok Style, Instagram Cursive, Y2K Cyber, Kawaii Cute und viele mehr. Mit einem Klick kopierst du die gewünschte Instagram Schriftart in deine Zwischenablage.",
  },
  {
    question: "Welche neuen Instagram Schriftarten sind aktuell im Trend?",
    answer:
      "Die heißesten Instagram Schriftarten aus unserem Generator sind: Aesthetic Vaporwave (ａｅｓｔｈｅｔｉｃ), Instagram Wavy (ã̃ẽ̃s̃t̃h̃ẽ̃t̃ĩ̃c̃), TikTok Style (𝖆𝖊𝖘𝖙𝖍𝖊𝖙𝖎𝖈), Instagram Cursive (𝒶ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸), Y2K Cyber (ₐₑₛₜₕₑₜᵢc), Kawaii Cute (ᵃᵉˢᵗʰᵉᵗⁱᶜ), Soft Aesthetic, Neon Glow, Pastel Soft und Instagram Trendy. Alle diese Instagram Schriften sind kostenlos und sofort verfügbar.",
  },
  {
    question: "Ist der erweiterte Instagram Schrift Generator mit 45+ Schriftarten kostenlos?",
    answer:
      "Ja, unser Instagram Schrift Generator mit über 45 Schriftarten ist komplett kostenlos! Du kannst unbegrenzt viele Texte mit unserem Schriftarten Generator umwandeln, alle Instagram Schriften nutzen, deine Favoriten speichern, die Historie verwenden und sogar offline arbeiten. Keine Registrierung oder versteckte Kosten - perfekt für Instagram Schrift und Insta Schrift.",
  },
  {
    question: "Funktionieren alle 45+ Instagram Schriftarten auf mobilen Geräten?",
    answer:
      "Ja! Da unser Instagram Schrift Generator Unicode-Zeichen verwendet, funktionieren alle 45+ Instagram Schriften auf allen modernen Geräten und Plattformen - iPhone, Android, Windows, Mac. Die Instagram Schriftarten sind kompatibel mit Instagram, TikTok, Facebook, Twitter, WhatsApp, Discord und allen anderen Social Media Plattformen. Besonders die neuen Trending Fonts sind für mobile Nutzung optimiert.",
  },
  {
    question: "Welche Kategorien von Instagram Schriftarten gibt es?",
    answer:
      "Unser Instagram Schrift Generator bietet 8 optimierte Kategorien: Trending (neueste Instagram Fonts), Aesthetic (Soft Aesthetic, Pastel Soft, Neon Glow), Gaming & Tech (Gaming Pro, Cyber Matrix), Dekorativ (Bubble Text, Sparkle Magic, Heart Kawaii), Modern (Minimalist Clean), Klassisch (bewährte Stile), Vintage (klassische Stile) und Spezial (Zalgo Glitch). Jede Kategorie enthält die beliebtesten Instagram Schriftarten sortiert nach Popularität.",
  },
  {
    question: "Wie kann ich die neuen Trending Instagram Schriftarten am besten nutzen?",
    answer:
      "Die Trending Instagram Schriftarten aus unserem Generator sind perfekt für: Instagram Bio (Aesthetic Vaporwave, Instagram Trendy), Instagram Posts (TikTok Style, Soft Aesthetic), Instagram Stories (Y2K Cyber, Kawaii Cute), Gaming Content (Gaming Pro, Cyber Matrix) und Aesthetic Content (Pastel Soft, Neon Glow). Nutze unser Favoriten-System, um deine Lieblings-Schriftarten zu speichern und schnell darauf zuzugreifen.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Instagram Schrift Generator",
  url: "https://instaschrift.pro",
  logo: "https://instaschrift.pro/android-chrome-512x512.png",
  description:
    "Der beste Instagram Schrift Generator mit über 45 Instagram Schriftarten. Trending Fonts, Aesthetic Schrift, Gaming Schrift und mehr.",
  sameAs: [
    "https://www.instagram.com/instagramschrift",
    "https://twitter.com/instagramschrift",
    "https://www.tiktok.com/@instagramschrift",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@instaschrift.pro",
    availableLanguage: "German",
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <TrendingUp size={16} />
            NEU: 45+ Instagram Schriftarten • Trending Fonts
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Instagram Schrift Generator
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-6 px-4">
          Der beste Schriftarten Generator mit über 45 Instagram Schriftarten. Neue Trending Fonts: Aesthetic Vaporwave,
          TikTok Style, Y2K Cyber, Gaming Pro & mehr. Kostenlos & sofort.
        </h2>
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-4 mb-6">
          <span className="bg-purple-100 dark:bg-purple-900/30 px-2 sm:px-3 py-1 rounded-full flex items-center gap-1">
            <Award size={12} />
            45+ Instagram Schriften
          </span>
          <span className="bg-pink-100 dark:bg-pink-900/30 px-2 sm:px-3 py-1 rounded-full">Trending Fonts</span>
          <span className="bg-green-100 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full">Aesthetic Vaporwave</span>
          <span className="bg-orange-100 dark:bg-orange-900/30 px-2 sm:px-3 py-1 rounded-full">TikTok Style</span>
          <span className="bg-blue-100 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full">Y2K Cyber</span>
          <span className="bg-red-100 dark:bg-red-900/30 px-2 sm:px-3 py-1 rounded-full">Gaming Pro</span>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>500.000+ Nutzer</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} />
            <span>4.9/5 Bewertung</span>
          </div>
          <div className="flex items-center gap-1">
            <Target size={14} />
            <span>100% Kostenlos</span>
          </div>
        </div>
      </div>

      <SchriftGenerator />

      {/* Trending Fonts Showcase */}
      <section className="mt-16 sm:mt-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4 flex items-center justify-center gap-2">
          <TrendingUp className="text-purple-500" size={28} />
          Trending: Neue Instagram Schriftarten
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Entdecke die heißesten Instagram Schrift Trends! Unser erweiterter Instagram Schrift Generator bietet die
          neuesten Aesthetic, Gaming und TikTok-inspirierten Schriftarten.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Aesthetic Vaporwave</h3>
            <p className="text-xl sm:text-2xl mb-2 font-mono">ａｅｓｔｈｅｔｉｃ</p>
            <p className="text-xs sm:text-sm text-slate-500">Beliebtheit: 96%</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Type className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">TikTok Style</h3>
            <p className="text-xl sm:text-2xl mb-2">𝖆𝖊𝖘𝖙𝖍𝖊𝖙𝖎𝖈</p>
            <p className="text-xs sm:text-sm text-slate-500">Beliebtheit: 92%</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gamepad2 className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Y2K Cyber</h3>
            <p className="text-xl sm:text-2xl mb-2">ₐₑₛₜₕₑₜᵢc</p>
            <p className="text-xs sm:text-sm text-slate-500">Beliebtheit: 84%</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Instagram Cursive</h3>
            <p className="text-xl sm:text-2xl mb-2">𝒶ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸</p>
            <p className="text-xs sm:text-sm text-slate-500">Beliebtheit: 90%</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Gaming Pro</h3>
            <p className="text-xl sm:text-2xl mb-2">94м1п9</p>
            <p className="text-xs sm:text-sm text-slate-500">Beliebtheit: 87%</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Palette className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Kawaii Cute</h3>
            <p className="text-xl sm:text-2xl mb-2">ᵃᵉˢᵗʰᵉᵗⁱᶜ</p>
            <p className="text-xs sm:text-sm text-slate-500">Beliebtheit: 83%</p>
          </div>
        </div>
      </section>

      {/* Instagram Schrift Generator Features Section */}
      <section className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">
          Warum unser Instagram Schrift Generator mit 45+ Schriftarten der Beste ist
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Unser Instagram Schrift Generator ist der führende Schriftarten Generator für Instagram Schriftarten in
          Deutschland. Mit den neuesten Trending Fonts und über 45 einzigartigen Stilen für Instagram Bio, Posts und
          Stories.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 shadow-lg">
              45+
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Instagram Schriftarten
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Über 45 einzigartige Instagram Schrift Optionen inklusive Trending Fonts wie Aesthetic Vaporwave, TikTok
              Style, Y2K Cyber und Gaming Pro. Die größte Auswahl an Schriftart Instagram in Deutschland.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Trending Fonts</h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Exklusiv die neuesten Instagram Schriftarten: Aesthetic Vaporwave, Instagram Wavy, TikTok Style, Instagram
              Cursive, Y2K Cyber, Kawaii Cute und viele mehr. Immer up-to-date mit den Instagram Trends.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Echtzeit-Vorschau
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Sieh sofort, wie dein Text in allen 45+ Instagram Schrift Stilen aussieht. Unser Schriftarten Generator
              zeigt alle Instagram Schriften in Echtzeit mit Popularitäts-Ranking.
            </p>
          </div>
        </div>
      </section>

      {/* Erweiterte Vorteile */}
      <section className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-8 sm:mb-12">
          Vorteile unseres erweiterten Instagram Schrift Generators
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Type className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">45+ Trending Schriftarten</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Unser Instagram Schrift Generator bietet die größte Auswahl an Instagram Schriftarten in Deutschland mit
                über 45 einzigartigen Stilen inklusive aller Trending Fonts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Blitzschnell & PWA</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Erstelle Instagram Schrift in Sekunden. Unser Schriftart Generator ist als PWA optimiert für mobile
                Geräte, Desktop und funktioniert sogar offline.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="text-pink-600 dark:text-pink-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">100% Kostenlos</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Alle 45+ Instagram Schriftarten inklusive Trending Fonts sind kostenlos. Keine Limits, keine
                Registrierung, keine versteckten Kosten.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="text-orange-600 dark:text-orange-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Für alle Trends geeignet</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Perfekt für Influencer, TikToker, Gamer, Aesthetic Content, Y2K Style, Kawaii Culture und alle, die
                professionelle Instagram Schrift benötigen.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Smart Favoriten-System</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Speichere deine Lieblings Instagram Schriftarten aus den 45+ Optionen, nutze die Historie und greife mit
                Tastenkürzeln schnell darauf zu.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="text-teal-600 dark:text-teal-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Trending Updates</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Regelmäßige Updates mit den neuesten Instagram Trends. Von Aesthetic Vaporwave bis Gaming Pro - immer
                die aktuellsten Schriftarten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">
          Häufig gestellte Fragen zum Instagram Schrift Generator mit 45+ Schriftarten
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Hier findest du Antworten auf die häufigsten Fragen zu unserem erweiterten Instagram Schrift Generator und den
          über 45 Instagram Schriftarten inklusive Trending Fonts.
        </p>
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Starte jetzt mit über 45 Instagram Schriftarten!</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
          Erstelle coole Instagram Schriftarten mit den neuesten Trending Fonts für deine Bio, Posts und Stories. Unser
          erweiterte Schriftarten Generator mit über 45 Stilen ist kostenlos und sofort einsatzbereit.
        </p>
        <a
          href="#text-input"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          <Sparkles size={20} />
          Instagram Schrift Generator starten
        </a>
      </section>
    </>
  )
}
