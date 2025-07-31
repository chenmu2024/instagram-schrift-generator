import type { Metadata } from "next"
import { Search, ChevronDown, MessageCircle, Lightbulb, Zap, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "FAQ - Häufige Fragen zum Instagram Schrift Generator mit 35+ Schriftarten",
  description:
    "Alle Antworten zu unserem Instagram Schrift Generator. Über 50 häufige Fragen zu Instagram Schriftarten, Schriftart Generator, Aesthetic Schrift, Gaming Schrift und mehr.",
  keywords: [
    "Instagram Schrift Generator FAQ",
    "Instagram Schriftarten Fragen",
    "Schriftarten Generator Hilfe",
    "Instagram Schrift Anleitung",
    "Aesthetic Schrift FAQ",
    "Gaming Schrift Hilfe",
    "Unicode Schriftarten Fragen",
    "Instagram Bio Schrift FAQ",
  ],
  robots: {
    index: true,
    follow: true,
  },
}

const faqCategories = [
  {
    id: "grundlagen",
    title: "Grundlagen & Erste Schritte",
    icon: <Lightbulb className="text-blue-500" size={20} />,
    questions: [
      {
        question: "Was ist der Instagram Schrift Generator und wie funktioniert er?",
        answer:
          "Unser Instagram Schrift Generator ist ein kostenloses Online-Tool, das normalen Text in über 35 verschiedene Instagram Schriftarten umwandelt. Der Schriftarten Generator nutzt Unicode-Zeichen, um coole Instagram Schrift zu erstellen. Du gibst einfach deinen Text ein und erhältst sofort alle verfügbaren Instagram Schriftarten zur Auswahl. Mit einem Klick kopierst du die gewünschte Schriftart Instagram in deine Zwischenablage.",
      },
      {
        question: "Wie viele Instagram Schriftarten bietet euer Generator?",
        answer:
          "Unser Instagram Schrift Generator bietet über 35 einzigartige Instagram Schriftarten in 7 verschiedenen Kategorien: Fett, Kursiv, Dekorativ, Modern, Spezial, Gaming und Vintage. Dazu gehören beliebte Stile wie Aesthetic, Neon Style, Retro Wave, Bubble Text, Zalgo Text, Leet Speak, Cyber Style, Glitch Style, Griechisch Style, Vintage Style und viele mehr. Wir erweitern regelmäßig unsere Sammlung an Instagram Schriften.",
      },
      {
        question: "Ist der Instagram Schrift Generator mit über 35 Schriftarten kostenlos?",
        answer:
          "Ja, unser Instagram Schrift Generator ist komplett kostenlos! Du kannst unbegrenzt viele Texte mit unserem Schriftarten Generator umwandeln, alle 35+ Instagram Schriftarten nutzen, deine Favoriten speichern und sogar die Historie deiner Eingaben verwenden. Es gibt keine versteckten Kosten, keine Registrierung erforderlich und keine Limits bei der Nutzung unserer Instagram Schrift.",
      },
      {
        question: "Wie kopiere ich Instagram Schriftarten aus dem Generator?",
        answer:
          "Das Kopieren von Instagram Schriftarten ist sehr einfach: 1) Gib deinen Text in das Eingabefeld ein, 2) Wähle aus den über 35 generierten Instagram Schriften deine Lieblings-Schriftart aus, 3) Klicke auf den 'Kopieren' Button neben der gewünschten Instagram Schriftart, 4) Die Schrift Instagram wird automatisch in deine Zwischenablage kopiert und du erhältst eine Bestätigung. Du kannst auch mehrere Favoriten auf einmal kopieren.",
      },
      {
        question: "Funktionieren alle Instagram Schriftarten auf allen Geräten?",
        answer:
          "Ja! Da unser Instagram Schrift Generator Unicode-Zeichen verwendet, funktionieren alle 35+ Instagram Schriftarten auf allen modernen Geräten und Plattformen - iPhone, Android, Windows, Mac, Linux. Die Instagram Schriften sind kompatibel mit Instagram, TikTok, Facebook, Twitter, WhatsApp, Discord und praktisch allen anderen Social Media Plattformen und Messaging-Apps.",
      },
    ],
  },
  {
    id: "kategorien",
    title: "Schriftarten-Kategorien & Stile",
    icon: <MessageCircle className="text-green-500" size={20} />,
    questions: [
      {
        question: "Welche Kategorien von Instagram Schriftarten gibt es?",
        answer:
          "Unser Instagram Schrift Generator bietet 7 Hauptkategorien: 1) Fett (verschiedene fette Stile wie Bold Sans, Bold Serif), 2) Kursiv (elegante kursive Schriften), 3) Dekorativ (Script, Fraktur, Bubble Text, Eingekreist), 4) Modern (Aesthetic, Neon Style, Retro Wave, Monospace), 5) Spezial (Zalgo Text, Spiegelschrift, Unterstrichen, Durchgestrichen), 6) Gaming (Leet Speak, Cyber Style, Glitch Style), 7) Vintage (klassische und historische Stile). Jede Kategorie enthält mehrere einzigartige Instagram Schriftarten.",
      },
      {
        question: "Was sind Aesthetic Instagram Schriftarten?",
        answer:
          "Aesthetic Instagram Schriftarten sind moderne, stilvolle Schriften, die besonders bei jungen Nutzern beliebt sind. Unser Instagram Schrift Generator bietet verschiedene Aesthetic Stile wie die klassische Aesthetic Schrift (ａｅｓｔｈｅｔｉｃ), Neon Style (ɴ̲ᴇ̲ᴏ̲ɴ̲), Retro Wave und andere moderne Varianten. Diese Instagram Schriftarten eignen sich perfekt für Instagram Bio, Posts und Stories mit einem modernen, trendigen Look.",
      },
      {
        question: "Welche Gaming Schriftarten bietet der Generator?",
        answer:
          "Unser Instagram Schrift Generator hat eine spezielle Gaming-Kategorie mit Schriftarten wie Leet Speak (94м1п9), Cyber Style (ᶜʸᵇᵉʳ), Glitch Style (ḡḷḭṫċḧ) und anderen Gaming-inspirierten Instagram Schriften. Diese Schriftart Instagram Optionen sind perfekt für Gamer, Streamer und alle, die einen technischen oder futuristischen Look für ihre Instagram Profile wollen.",
      },
      {
        question: "Was ist der Unterschied zwischen Script und Fraktur Schriftarten?",
        answer:
          "Script Instagram Schriftarten (𝒮𝒸𝓇𝒾𝓅𝓉) sind elegante, handschriftähnliche Schriften, die fließend und kalligrafisch aussehen. Fraktur Schriftarten (𝔉𝔯𝔞𝔨𝔱𝔲𝔯) sind gotische, mittelalterliche Schriften mit kantigen, gebrochenen Linien. Beide sind in unserem Instagram Schrift Generator verfügbar und eignen sich für verschiedene Anlässe - Script für elegante, romantische Posts und Fraktur für historische oder mystische Inhalte.",
      },
      {
        question: "Wie funktionieren Bubble Text und Eingekreiste Schriftarten?",
        answer:
          "Bubble Text (ⓑⓤⓑⓑⓛⓔ) und Eingekreiste Schriftarten (Ⓔⓘⓝⓖⓔⓚⓡⓔⓘⓢⓣ) sind spezielle Unicode-Zeichen, die Buchstaben in Kreisen oder Blasen darstellen. Unser Instagram Schrift Generator bietet beide Varianten - normale eingekreiste Buchstaben und gefüllte Bubble-Versionen. Diese Instagram Schriftarten sind besonders beliebt für Listen, Highlights oder um bestimmte Wörter hervorzuheben.",
      },
    ],
  },
  {
    id: "technisch",
    title: "Technische Fragen & Kompatibilität",
    icon: <Zap className="text-purple-500" size={20} />,
    questions: [
      {
        question: "Warum werden manche Instagram Schriftarten nicht richtig angezeigt?",
        answer:
          "Gelegentlich können Instagram Schriftarten auf verschiedenen Geräten unterschiedlich dargestellt werden. Das liegt daran, dass nicht alle Geräte die gleichen Unicode-Zeichen unterstützen. Unser Instagram Schrift Generator verwendet standardisierte Unicode-Zeichen, aber ältere Geräte oder spezielle Apps könnten manche Schriftart Instagram nicht vollständig darstellen. Wir empfehlen, die Instagram Schrift vor der Veröffentlichung zu testen.",
      },
      {
        question: "Funktioniert der Instagram Schrift Generator offline?",
        answer:
          "Ja! Unser Instagram Schrift Generator funktioniert teilweise offline dank PWA-Technologie (Progressive Web App). Einmal geladen, kannst du den Schriftarten Generator auch ohne Internetverbindung nutzen. Alle 35+ Instagram Schriftarten werden lokal in deinem Browser verarbeitet, sodass du auch offline coole Instagram Schrift erstellen kannst. Nur für Updates und neue Features benötigst du eine Internetverbindung.",
      },
      {
        question: "Speichert der Instagram Schrift Generator meine Daten?",
        answer:
          "Unser Instagram Schrift Generator respektiert deine Privatsphäre. Alle Texte werden nur lokal in deinem Browser verarbeitet und nicht an unsere Server gesendet. Deine Favoriten, Historie und Einstellungen werden nur in deinem Browser gespeichert (localStorage). Wir sammeln keine persönlichen Daten oder Texte. Du kannst jederzeit deine lokalen Daten löschen, indem du den Browser-Cache leerst.",
      },
      {
        question: "Kann ich den Instagram Schrift Generator auf dem Handy nutzen?",
        answer:
          "Absolut! Unser Instagram Schrift Generator ist vollständig für mobile Geräte optimiert. Die Website funktioniert perfekt auf iPhone, Android und allen anderen Smartphones und Tablets. Du kannst alle 35+ Instagram Schriftarten mobil nutzen, kopieren und in deine Instagram App einfügen. Die Touch-Bedienung ist optimiert und alle Funktionen sind auch auf kleinen Bildschirmen verfügbar.",
      },
      {
        question: "Gibt es Tastenkürzel für den Instagram Schrift Generator?",
        answer:
          "Ja! Unser Instagram Schrift Generator bietet praktische Tastenkürzel: Ctrl+K (Eingabefeld fokussieren), Ctrl+H (Historie anzeigen/verstecken), Ctrl+F (Nur Favoriten anzeigen), / (Tastenkürzel-Hilfe anzeigen). Diese Shortcuts machen die Arbeit mit unserem Schriftarten Generator noch effizienter, besonders wenn du häufig Instagram Schriftarten erstellst.",
      },
    ],
  },
  {
    id: "verwendung",
    title: "Verwendung & Best Practices",
    icon: <Shield className="text-orange-500" size={20} />,
    questions: [
      {
        question: "Wie verwende ich Instagram Schriftarten in meiner Bio?",
        answer:
          "Instagram Schriftarten in der Bio zu verwenden ist einfach: 1) Erstelle deinen Bio-Text mit unserem Instagram Schrift Generator, 2) Wähle aus den 35+ verfügbaren Instagram Schriftarten deine Lieblings-Schriftart, 3) Kopiere die generierte Instagram Schrift, 4) Öffne Instagram und gehe zu 'Profil bearbeiten', 5) Füge die Schriftart Instagram in dein Bio-Feld ein. Tipp: Kombiniere verschiedene Instagram Schriften für einen einzigartigen Look!",
      },
      {
        question: "Welche Instagram Schriftarten eignen sich am besten für Posts?",
        answer:
          "Für Instagram Posts empfehlen wir gut lesbare Instagram Schriftarten aus unserem Generator: Aesthetic (ａｅｓｔｈｅｔｉｃ) für moderne Posts, Bold Sans (𝗯𝗼𝗹𝗱) für wichtige Ankündigungen, Script (𝒮𝒸𝓇𝒾𝓅𝓉) für elegante Inhalte, oder Bubble Text (ⓑⓤⓑⓑⓛⓔ) für verspielte Posts. Vermeide zu komplexe Schriftart Instagram Optionen wie Zalgo Text in längeren Texten, da sie schwer lesbar sein können.",
      },
      {
        question: "Kann ich Instagram Schriftarten kommerziell nutzen?",
        answer:
          "Ja! Alle Instagram Schriftarten aus unserem Generator basieren auf Unicode-Standards und können frei für private und kommerzielle Zwecke verwendet werden. Du kannst die Instagram Schrift für Unternehmensposts, Marketing, Werbung und alle anderen geschäftlichen Aktivitäten nutzen. Es gibt keine Lizenzgebühren oder Einschränkungen bei der kommerziellen Nutzung unserer Schriftarten Generator Ergebnisse.",
      },
      {
        question: "Wie kombiniere ich verschiedene Instagram Schriftarten?",
        answer:
          "Das Kombinieren verschiedener Instagram Schriftarten kann sehr effektiv sein: 1) Verwende maximal 2-3 verschiedene Schriftart Instagram Stile pro Post, 2) Nutze fette Schriften (𝗯𝗼𝗹𝗱) für Überschriften und normale für Text, 3) Kombiniere ähnliche Stile (z.B. verschiedene Aesthetic Schriften), 4) Teste die Kombination vorher in unserem Instagram Schrift Generator. Unser Favoriten-System hilft dir, gut funktionierende Kombinationen zu speichern.",
      },
      {
        question: "Welche Instagram Schriftarten sind 2024/2025 im Trend?",
        answer:
          "Die aktuell beliebtesten Instagram Schriftarten aus unserem Generator sind: Aesthetic (ａｅｓｔｈｅｔｉｃ), Neon Style (ɴ̲ᴇ̲ᴏ̲ɴ̲), Retro Wave (Ａ̲ｅ̲ｓ̲ｔ̲ｈ̲ｅ̲ｔ̲ｉ̲ｃ̲), Gaming/Leet Speak (94м1п9), Bubble Text (ⓑⓤⓑⓑⓛⓔ) und Glitch Style (ḡḷḭṫċḧ). Diese Instagram Schrift Trends ändern sich regelmäßig, aber unser Schriftarten Generator wird kontinuierlich mit neuen, trendigen Instagram Schriftarten aktualisiert.",
      },
    ],
  },
  {
    id: "probleme",
    title: "Problembehebung & Support",
    icon: <Shield className="text-red-500" size={20} />,
    questions: [
      {
        question: "Was mache ich, wenn das Kopieren nicht funktioniert?",
        answer:
          "Wenn das Kopieren von Instagram Schriftarten nicht funktioniert: 1) Stelle sicher, dass dein Browser das Clipboard API unterstützt, 2) Erlaube der Website Zugriff auf die Zwischenablage, 3) Versuche es mit einem anderen Browser (Chrome, Firefox, Safari), 4) Bei mobilen Geräten: Halte den Text gedrückt und wähle 'Kopieren', 5) Als Alternative kannst du die Instagram Schrift manuell markieren und mit Ctrl+C kopieren. Unser Instagram Schrift Generator zeigt dir eine Bestätigung, wenn das Kopieren erfolgreich war.",
      },
      {
        question: "Warum lädt der Instagram Schrift Generator langsam?",
        answer:
          "Unser Instagram Schrift Generator ist für schnelle Performance optimiert. Langsame Ladezeiten können folgende Ursachen haben: 1) Schwache Internetverbindung, 2) Veralteter Browser, 3) Zu viele offene Tabs, 4) Gerät mit wenig Arbeitsspeicher. Lösungen: Browser aktualisieren, Cache leeren, andere Tabs schließen. Der Schriftarten Generator funktioniert auch offline, sobald er einmal geladen wurde.",
      },
      {
        question: "Kann ich neue Instagram Schriftarten vorschlagen?",
        answer:
          "Ja, gerne! Wir freuen uns über Vorschläge für neue Instagram Schriftarten. Schreibe uns eine E-Mail an info@instagramschriftgenerator.pro mit deinem Schriftart-Wunsch. Wir prüfen alle Anfragen und fügen beliebte Instagram Schriften zu unserem Generator hinzu. Besonders interessiert sind wir an neuen Trend-Schriftarten, speziellen Unicode-Stilen oder Schriftart Instagram Varianten, die noch nicht in unserer Sammlung von 35+ Schriftarten enthalten sind.",
      },
      {
        question: "Wie melde ich Bugs oder Probleme mit dem Generator?",
        answer:
          "Bei Problemen mit unserem Instagram Schrift Generator: 1) Beschreibe das Problem detailliert, 2) Gib deinen Browser und Gerätetyp an, 3) Sende Screenshots wenn möglich, 4) Kontaktiere uns per E-Mail: info@instagramschriftgenerator.pro. Wir antworten normalerweise innerhalb von 24 Stunden und arbeiten schnell an Lösungen. Dein Feedback hilft uns, den Schriftarten Generator für alle Nutzer zu verbessern.",
      },
      {
        question: "Gibt es eine App für den Instagram Schrift Generator?",
        answer:
          "Aktuell gibt es keine separate App, aber unser Instagram Schrift Generator ist als Progressive Web App (PWA) optimiert. Das bedeutet: Du kannst die Website zu deinem Homescreen hinzufügen und sie wie eine native App nutzen. Sie funktioniert offline, lädt schnell und bietet alle 35+ Instagram Schriftarten. Eine dedizierte App ist für die Zukunft geplant, aber die Web-Version bietet bereits alle Funktionen einer App.",
      },
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  ),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            FAQ - Häufige Fragen
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Alle Antworten zu unserem Instagram Schrift Generator mit über 35 Instagram Schriftarten. Finde schnell
            Hilfe zu Schriftarten Generator, Aesthetic Schrift, Gaming Schrift und mehr.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <Input type="text" placeholder="FAQ durchsuchen..." className="pl-10 h-12 text-lg" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">35+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Instagram Schriftarten</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Kategorien</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">FAQ Antworten</div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">24h</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Support Antwort</div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                  {category.icon}
                  {category.title}
                </h2>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {category.questions.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 pr-4">{faq.question}</h3>
                      <ChevronDown
                        className="text-slate-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                        size={20}
                      />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Weitere Fragen zum Instagram Schrift Generator?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Hast du eine Frage, die hier nicht beantwortet wurde? Kontaktiere uns gerne - wir helfen dir bei allem rund
            um Instagram Schriftarten und unseren Schriftarten Generator.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <MessageCircle size={20} />
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </>
  )
}
