import Link from "next/link"
import { FileText, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/android-chrome-192x192.png"
                  alt="Instagram Schrift Generator Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Instagram Schrift Generator
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
              Der beste Instagram Schrift Generator für Deutschland. Wandle Text in coole Instagram Schriftarten um.
              Kostenlos & sofort auf instaschrift.pro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <div className="w-5 h-5 relative">
                <Image src="/favicon-32x32.png" alt="Logo" width={20} height={20} className="rounded" />
              </div>
              Schnellzugriff
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Instagram Schrift Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <Users size={14} />
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <Users size={14} />
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Shield size={18} className="text-green-500" />
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/datenschutz"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <Shield size={14} />
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  href="/nutzungsbedingungen"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <FileText size={14} />
                  Nutzungsbedingungen
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8">
          <div className="text-center">
            <div className="text-slate-600 dark:text-slate-400">
              © {currentYear} instaschrift.pro - Alle Rechte vorbehalten
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
