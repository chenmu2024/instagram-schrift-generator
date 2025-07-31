import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { Home } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-100 hover:opacity-80 transition-all duration-300"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/android-chrome-192x192.png"
                  alt="Instagram Schrift Generator Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  priority
                />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Instagram Schrift Generator
              </span>
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              <Home size={18} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              href="/faq"
              className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              <span className="hidden sm:inline">FAQ</span>
              <span className="sm:hidden">?</span>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
