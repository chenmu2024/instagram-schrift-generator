import type React from "react"
import type { Metadata, Viewport } from "next"
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
  name: "Dein Instagram Schrift Generator", // Geändert
  description:
    "Wandle Text in coole Instagram-Schriften um. Einfach Stil wählen, kopieren und in deiner Bio einfügen. Kostenlos & sofort.", // Geändert
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
    template: "%s | Dein Instagram Schrift Generator", // Geändert
    default: "Dein Instagram Schrift Generator", // Geändert
  },
  description:
    "Wandle Text in coole Instagram-Schriften um. Einfach Stil wählen, kopieren und in deiner Bio einfügen. Kostenlos & sofort.", // Geändert
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
    siteName: "Dein Instagram Schrift Generator", // Geändert
    title: "Dein Instagram Schrift Generator", // Geändert
    description:
      "Wandle Text in coole Instagram-Schriften um. Einfach Stil wählen, kopieren und in deiner Bio einfügen. Kostenlos & sofort.", // Geändert
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Instagram Schrift Generator Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dein Instagram Schrift Generator", // Geändert
    description:
      "Wandle Text in coole Instagram-Schriften um. Einfach Stil wählen, kopieren und in deiner Bio einfügen. Kostenlos & sofort.", // Geändert
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
      { url: "/favicon.ico", sizes: "any" },
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Instagram Schrift Generator",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className} suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 min-h-screen flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) { console.log('SW registered: ', registration); },
                    function(registrationError) { console.log('SW registration failed: ', registrationError); }
                  );
                });
              }
            `,
          }}
        />
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
