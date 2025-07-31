"use client"

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { convertText, getFontsByCategory, searchFonts, FONT_CATEGORIES } from "@/lib/fontConverter"
import {
  Copy,
  Check,
  Heart,
  Search,
  Filter,
  Sparkles,
  Download,
  History,
  Trash2,
  Clock,
  Keyboard,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useHistory } from "@/hooks/useHistory"
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts"
import { useDebouncedCallback } from "use-debounce"

interface ResultCardProps {
  name: string
  value: string
  popularity: number
  isFavorite: boolean
  onToggleFavorite: () => void
  onCopy: () => void
  index: number
  isLoading?: boolean
}

function ResultCard({
  name,
  value,
  popularity,
  isFavorite,
  onToggleFavorite,
  onCopy,
  index,
  isLoading,
}: ResultCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      onCopy()

      // 显示Toast通知
      if (typeof window !== "undefined" && (window as any).showToast) {
        ;(window as any).showToast({
          type: "success",
          title: "Instagram Schrift kopiert!",
          description: `${name} wurde in die Zwischenablage kopiert.`,
          duration: 3000,
        })
      }

      setTimeout(() => setCopied(false), 2000)

      // Analytics tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "instagram_schrift_copied", {
          font_name: name,
          font_value: value,
          popularity: popularity,
          event_category: "Instagram Schrift Generator",
          event_label: "Instagram Schriftart kopiert",
        })
      }
    } catch (err) {
      console.error("Failed to copy Instagram Schrift: ", err)
      if (typeof window !== "undefined" && (window as any).showToast) {
        ;(window as any).showToast({
          type: "error",
          title: "Kopieren fehlgeschlagen",
          description: "Die Instagram Schrift konnte nicht kopiert werden.",
        })
      }
    }
  }, [value, name, onCopy, popularity])

  const handleDownload = useCallback(() => {
    const blob = new Blob([value], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `instagram-schrift-${name.replace(/[^a-zA-Z0-9]/g, "_")}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    if (typeof window !== "undefined" && (window as any).showToast) {
      ;(window as any).showToast({
        type: "success",
        title: "Download gestartet",
        description: `${name} wird heruntergeladen.`,
      })
    }
  }, [value, name])

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return "text-red-500"
    if (popularity >= 85) return "text-orange-500"
    if (popularity >= 80) return "text-yellow-500"
    return "text-slate-500"
  }

  const getPopularityLabel = (popularity: number) => {
    if (popularity >= 95) return "🔥 Trending"
    if (popularity >= 90) return "⭐ Sehr beliebt"
    if (popularity >= 85) return "👍 Beliebt"
    if (popularity >= 80) return "✨ Gut"
    return "📝 Standard"
  }

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-grow space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-3 w-24" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-8 w-20 rounded-lg" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-700/60 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Trending Badge */}
      {popularity >= 95 && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
          <TrendingUp size={10} />
          HOT
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">{name}</h3>
            <Badge variant="secondary" className="text-xs">
              {value.length} Zeichen
            </Badge>
            <Badge variant="outline" className={`text-xs ${getPopularityColor(popularity)} border-current`}>
              {popularity}%
            </Badge>
          </div>
          <p className="text-xl sm:text-2xl font-medium text-slate-800 dark:text-slate-100 break-all leading-relaxed selection:bg-blue-200 dark:selection:bg-blue-800 mb-2">
            {value}
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Instagram Schriftart • Schrift Instagram</span>
            <span className={getPopularityColor(popularity)}>{getPopularityLabel(popularity)}</span>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col gap-2 justify-end">
          <button
            onClick={onToggleFavorite}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isFavorite
                ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-500 dark:hover:bg-slate-600"
            }`}
            aria-label={
              isFavorite
                ? "Instagram Schriftart aus Favoriten entfernen"
                : "Instagram Schriftart zu Favoriten hinzufügen"
            }
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>

          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 transition-all duration-200"
            aria-label="Instagram Schrift als Textdatei herunterladen"
          >
            <Download size={16} />
          </button>

          <Button
            onClick={handleCopy}
            size="sm"
            className={`transition-all duration-300 ${
              copied
                ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25"
                : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-500/25"
            }`}
            aria-label={`Instagram Schrift kopieren: ${name}`}
          >
            {copied ? (
              <>
                <Check size={16} className="mr-1" />
                <span className="hidden sm:inline">Kopiert!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="mr-1" />
                <span className="hidden sm:inline">Kopieren</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function SchriftGenerator() {
  const [inputText, setInputText] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle") // 默认显示所有字体
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false)

  const { history, addToHistory, removeFromHistory, clearHistory } = useHistory()
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // 防抖搜索
  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchQuery(value)
  }, 300)

  // 键盘快捷键
  const shortcuts = useKeyboardShortcuts([
    {
      key: "k",
      ctrlKey: true,
      callback: () => {
        inputRef.current?.focus()
      },
      description: "Fokus auf Eingabefeld",
    },
    {
      key: "h",
      ctrlKey: true,
      callback: () => {
        setShowHistory(!showHistory)
      },
      description: "Historie anzeigen/verstecken",
    },
    {
      key: "f",
      ctrlKey: true,
      callback: () => {
        setShowOnlyFavorites(!showOnlyFavorites)
      },
      description: "Nur Favoriten anzeigen",
    },
    {
      key: "t",
      ctrlKey: true,
      callback: () => {
        setSelectedCategory("Trending")
      },
      description: "Trending Fonts anzeigen",
    },
    {
      key: "/",
      callback: () => {
        setShowKeyboardHelp(!showKeyboardHelp)
      },
      description: "Tastenkürzel anzeigen",
    },
  ])

  const fontResults = useMemo(() => {
    if (!inputText.trim()) return []

    let fonts = convertText(inputText)

    // Apply category filter
    if (selectedCategory !== "Alle") {
      const categoryFonts = getFontsByCategory(selectedCategory)
      const categoryNames = categoryFonts.map((f) => f.name)
      fonts = fonts.filter((font) => categoryNames.includes(font.name))
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const searchResults = searchFonts(searchQuery)
      const searchNames = searchResults.map((f) => f.name)
      fonts = fonts.filter((font) => searchNames.includes(font.name))
    }

    // Apply favorites filter
    if (showOnlyFavorites) {
      fonts = fonts.filter((font) => favorites.has(font.name))
    }

    // Sort by popularity (already sorted in convertText)
    return fonts
  }, [inputText, selectedCategory, searchQuery, favorites, showOnlyFavorites])

  const toggleFavorite = useCallback((fontName: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(fontName)) {
        newFavorites.delete(fontName)
      } else {
        newFavorites.add(fontName)
      }

      // 保存到localStorage
      try {
        localStorage.setItem("instagram-schrift-favorites", JSON.stringify([...newFavorites]))
      } catch (error) {
        console.error("Failed to save favorites:", error)
      }

      return newFavorites
    })
  }, [])

  const copyAllFavorites = useCallback(async () => {
    const favoriteResults = fontResults.filter((font) => favorites.has(font.name))
    const allText = favoriteResults.map((font) => `${font.name}: ${font.value}`).join("\n\n")

    try {
      await navigator.clipboard.writeText(allText)
      if (typeof window !== "undefined" && (window as any).showToast) {
        ;(window as any).showToast({
          type: "success",
          title: "Alle Favoriten kopiert!",
          description: `${favoriteResults.length} Instagram Schriftarten wurden kopiert.`,
        })
      }
    } catch (err) {
      console.error("Failed to copy all favorite Instagram Schriftarten: ", err)
    }
  }, [fontResults, favorites])

  const handleInputChange = useCallback(
    (value: string) => {
      setInputText(value)
      if (value.trim()) {
        setIsLoading(true)
        // 模拟加载延迟
        setTimeout(() => setIsLoading(false), 300)
        addToHistory(value)
      }
    },
    [addToHistory],
  )

  const handleHistorySelect = useCallback((text: string) => {
    setInputText(text)
    setShowHistory(false)
    inputRef.current?.focus()
  }, [])

  // 从localStorage加载收藏夹
  useEffect(() => {
    try {
      const saved = localStorage.getItem("instagram-schrift-favorites")
      if (saved) {
        setFavorites(new Set(JSON.parse(saved)))
      }
    } catch (error) {
      console.error("Failed to load favorites:", error)
    }
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 键盘快捷键帮助 */}
      {showKeyboardHelp && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Keyboard size={20} />
                Tastenkürzel
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setShowKeyboardHelp(false)}>
                ×
              </Button>
            </div>
            <div className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{shortcut.description}</span>
                  <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">
                    {shortcut.ctrlKey && "Ctrl + "}
                    {shortcut.key.toUpperCase()}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Input Area */}
      <div className="mb-6 sm:mb-8">
        <div className="relative">
          <label
            htmlFor="text-input"
            className="block text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
          >
            <Sparkles className="text-blue-500" size={20} />
            Instagram Schrift Generator - Text eingeben:
            <Button variant="ghost" size="sm" onClick={() => setShowKeyboardHelp(true)} className="ml-auto text-xs">
              <Keyboard size={14} className="mr-1" />
              Tastenkürzel
            </Button>
          </label>
          <textarea
            ref={inputRef}
            id="text-input"
            rows={3}
            value={inputText}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Schreibe hier deinen Text für Instagram Schriftarten... ✨ (Ctrl+K zum Fokussieren, Ctrl+T für Trending)"
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 dark:border-slate-700 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none shadow-lg"
          />
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowHistory(!showHistory)} className="text-xs">
              <History size={14} className="mr-1" />
              Historie
            </Button>
            <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-500">{inputText.length} Zeichen</div>
          </div>
        </div>

        {/* Historie Panel */}
        {showHistory && history.length > 0 && (
          <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Clock size={16} />
                Letzte Eingaben
              </h4>
              <Button variant="ghost" size="sm" onClick={clearHistory} className="text-red-500 hover:text-red-600">
                <Trash2 size={14} className="mr-1" />
                Löschen
              </Button>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {history.slice(0, 10).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleHistorySelect(item.text)}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="text-sm text-slate-800 dark:text-slate-100 truncate">{item.text}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(item.timestamp).toLocaleString("de-DE")}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
          Unser Instagram Schrift Generator wandelt deinen Text in über 45 verschiedene Instagram Schriftarten um.
          Perfekt für Instagram Bio, Posts und Stories. Nutze Ctrl+K zum schnellen Fokussieren, Ctrl+T für Trending
          Fonts.
        </p>
      </div>

      {/* Filters and Search */}
      {inputText.length > 0 && (
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                type="text"
                placeholder="Instagram Schriftarten durchsuchen..."
                onChange={(e) => debouncedSearch(e.target.value)}
                className="pl-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 rounded-xl h-12"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant={showOnlyFavorites ? "default" : "outline"}
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                className="flex items-center gap-2 h-12"
                size="sm"
              >
                <Heart size={16} fill={showOnlyFavorites ? "currentColor" : "none"} />
                <span className="hidden sm:inline">Favoriten ({favorites.size})</span>
                <span className="sm:hidden">({favorites.size})</span>
              </Button>

              {favorites.size > 0 && (
                <Button
                  onClick={copyAllFavorites}
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent h-12"
                  size="sm"
                >
                  <Copy size={16} />
                  <span className="hidden sm:inline">Alle kopieren</span>
                </Button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <Filter className="text-slate-500" size={18} />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Kategorien:</span>
            </div>
            {Object.keys(FONT_CATEGORIES).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full text-xs sm:text-sm h-8 px-3 ${
                  category === "Trending"
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                    : ""
                }`}
              >
                {category === "Trending" && <TrendingUp size={12} className="mr-1" />}
                {category}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Results Area */}
      {inputText.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Deine Instagram Schriftarten
              </span>
              <Badge variant="secondary" className="text-sm sm:text-lg px-2 sm:px-3 py-1">
                {isLoading ? "..." : fontResults.length}
              </Badge>
              {selectedCategory === "Trending" && (
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  <TrendingUp size={12} className="mr-1" />
                  HOT
                </Badge>
              )}
            </h2>

            {!isLoading && fontResults.length === 0 && (
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                Keine Instagram Schriftarten gefunden. Versuche andere Filter für den Schriftarten Generator.
              </p>
            )}
          </div>

          <div className="grid gap-3 sm:gap-4 animate-in fade-in duration-500">
            {isLoading
              ? // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <ResultCard
                    key={`skeleton-${index}`}
                    name=""
                    value=""
                    popularity={0}
                    isFavorite={false}
                    onToggleFavorite={() => {}}
                    onCopy={() => {}}
                    index={index}
                    isLoading={true}
                  />
                ))
              : fontResults.map((result, index) => (
                  <ResultCard
                    key={`${result.name}-${index}`}
                    name={result.name}
                    value={result.value}
                    popularity={result.popularity}
                    isFavorite={favorites.has(result.name)}
                    onToggleFavorite={() => toggleFavorite(result.name)}
                    onCopy={() => {
                      // 可以在这里添加额外的复制逻辑
                    }}
                    index={index}
                  />
                ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {inputText.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Sparkles className="text-white" size={28} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Bereit für coole Instagram Schriftarten?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm sm:text-base px-4 mb-4">
            Gib deinen Text oben ein und entdecke über 45 verschiedene Instagram Schriftarten mit unserem Instagram
            Schrift Generator. Inklusive Trending Fonts wie Aesthetic Vaporwave, TikTok Style und Y2K Cyber.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
            <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Ctrl + K</kbd>
            <span>Eingabefeld fokussieren</span>
            <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Ctrl + T</kbd>
            <span>Trending</span>
            <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Ctrl + H</kbd>
            <span>Historie</span>
            <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">/</kbd>
            <span>Hilfe</span>
          </div>

          {/* Trending Preview */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="text-red-500" size={20} />
              <span className="font-semibold text-slate-800 dark:text-slate-100">Trending Fonts Vorschau</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Aesthetic Vaporwave</p>
                <p className="text-lg font-mono">ａｅｓｔｈｅｔｉｃ</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">TikTok Style</p>
                <p className="text-lg">𝖆𝖊𝖘𝖙𝖍𝖊𝖙𝖎𝖈</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Y2K Cyber</p>
                <p className="text-lg">ₐₑₛₜₕₑₜᵢc</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Instagram Cursive</p>
                <p className="text-lg">𝒶ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
