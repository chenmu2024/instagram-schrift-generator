import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"
import { ToastContainer } from "@/components/ui/toast"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Instagram Schrift Generator - Schriftarten Generator für Instagram",
  description:
    "Der beste Instagram Schrift Generator für coole Instagram Schriften. Über 45 Schriftarten Generator für Instagram Bio, Posts & Stories. Kostenlos & sofort.",
  url: "https://instaschrift.pro",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web Browser",
  keywords:
    "Instagram Schrift Generator, Instagram Schrift, Schriftarten Generator, Instagram Schriftarten, Schrift Instagram, Instagram Schriften, Schriftart Generator, Instagram Schriftart, Schreibschrift Generator, Altdeutsche Schrift Generator, Unicode Schriftarten, Aesthetic Schrift, Neon Schrift, Retro Schrift, Gaming Schrift, Vintage Schrift",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  creator: {
    "@type": "Organization",
    name: "Instagram Schrift Generator",
    url: "https://instaschrift.pro",
    logo: "https://instaschrift.pro/android-chrome-512x512.png",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Über 45 Instagram Schriftarten",
    "Kostenloser Schriftarten Generator",
    "Mobile optimiert",
    "Keine Registrierung erforderlich",
    "Favoriten-System",
    "Ein-Klick Kopieren",
    "Download-Funktion",
    "Kategorien-Filter",
    "Suchfunktion",
    "Echtzeit-Vorschau",
    "PWA-Unterstützung",
    "Offline-Funktionalität",
    "Tastenkürzel",
    "Historie-Funktion",
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://instaschrift.pro"),
  title: {
    template: "%s | Instagram Schrift Generator - Über 45 Schriftarten",
    default: "Instagram Schrift Generator - Über 45 Schriftarten • Trending Fonts",
  },
  description:
    "Der beste Instagram Schrift Generator mit über 45 coolen Instagram Schriften. Neue Trending Fonts: Aesthetic Vaporwave, TikTok Style, Y2K Cyber, Gaming Pro. Schriftarten Generator für Instagram Bio, Posts & Stories kostenlos.",
  keywords: [
    "Instagram Schrift Generator",
    "Trending Instagram Schriftarten",
    "Aesthetic Vaporwave Schrift",
    "TikTok Style Schrift Generator",
    "Y2K Cyber Schrift",
    "Instagram Cursive Generator",
    "Gaming Pro Schrift",
    "Kawaii Cute Schrift",
    "Instagram Wavy Schrift",
    "Pastel Soft Schrift Generator",
    "Neon Glow Schrift",
    "Instagram Trendy Schrift",
    "Instagram Schrift Generator",
    "Instagram Schrift",
    "Schriftarten Generator",
    "Instagram Schriftarten",
    "Schrift Instagram",
    "Instagram Schriften",
    "Insta Schrift",
    "Schriftart Generator",
    "Instagram Schriftart",
    "Schreibschrift Generator",
    "Altdeutsche Schrift Generator",
    "Schrift Generator Altdeutsch",
    "Schriftzug erstellen",
    "Schriftart Instagram",
    "Unicode Schriftarten",
    "Instagram Bio Schriften",
    "Coole Schriften Instagram",
    "Instagram Text Generator",
    "Schöne Schriften Instagram",
    "Instagram Stories Schriften",
    "Kostenloser Font Generator",
    "Deutsche Instagram Schriften",
    "Aesthetic Schrift Generator",
    "Neon Schrift Generator",
    "Retro Schrift Generator",
    "Gaming Schrift Generator",
    "Vintage Schrift Generator",
    "Bubble Text Generator",
    "Zalgo Text Generator",
    "Leet Speak Generator",
    "Cyber Schrift Generator",
    "Glitch Schrift Generator",
    "Griechisch Schrift Generator",
    "Spiegelschrift Generator",
    "Unterstrichen Schrift",
    "Durchgestrichen Schrift",
    "Eingekreist Schrift",
    "Quadratisch Schrift",
    "Monospace Schrift",
    "Script Schrift",
    "Fraktur Schrift",
    "Double-struck Schrift",
    "Instagram Schrift kopieren",
    "Instagram Bio Generator",
    "Instagram Text Styles",
    "Social Media Schriftarten",
    "Unicode Text Generator",
    "Fancy Text Generator",
    "Cool Text Generator",
    "Stylish Text Generator",
  ],
  authors: [{ name: "Instagram Schrift Generator Team", url: "https://instaschrift.pro" }],
  creator: "Instagram Schrift Generator",
  publisher: "Instagram Schrift Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://instaschrift.pro",
    siteName: "Instagram Schrift Generator - Über 45 Schriftarten",
    title: "Instagram Schrift Generator - Über 45 Schriftarten • Trending Fonts",
    description:
      "Der beste Instagram Schrift Generator mit über 45 coolen Instagram Schriften. Neue Trending Fonts: Aesthetic Vaporwave, TikTok Style, Y2K Cyber, Gaming Pro kostenlos.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Instagram Schrift Generator Logo - Über 45 Schriftarten für Instagram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Schrift Generator - Über 45 Schriftarten • Trending Fonts",
    description:
      "Der beste Instagram Schrift Generator mit über 45 coolen Instagram Schriften. Trending Fonts: Aesthetic Vaporwave, TikTok Style, Y2K Cyber kostenlos.",
    images: ["/android-chrome-512x512.png"],
    creator: "@instagramschrift",
  },
  alternates: {
    canonical: "https://instaschrift.pro",
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8b5cf6",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Instagram Schrift Generator",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Preload critical resources */}
        <link rel="preload" href="/android-chrome-192x192.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">{children}</main>
        <Footer />
        <BackToTop />
        <ToastContainer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
