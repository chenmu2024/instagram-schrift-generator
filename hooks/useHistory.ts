"use client"

import { useState, useCallback, useEffect } from "react"

interface HistoryItem {
  id: string
  text: string
  timestamp: number
  favoriteFont?: string
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  // 从localStorage加载历史记录
  useEffect(() => {
    try {
      const saved = localStorage.getItem("instagram-schrift-history")
      if (saved) {
        const parsed = JSON.parse(saved)
        setHistory(parsed.slice(0, 50)) // 限制最多50条记录
      }
    } catch (error) {
      console.error("Failed to load history:", error)
    }
  }, [])

  // 保存到localStorage
  const saveHistory = useCallback((newHistory: HistoryItem[]) => {
    try {
      localStorage.setItem("instagram-schrift-history", JSON.stringify(newHistory))
    } catch (error) {
      console.error("Failed to save history:", error)
    }
  }, [])

  const addToHistory = useCallback(
    (text: string, favoriteFont?: string) => {
      if (!text.trim()) return

      const newItem: HistoryItem = {
        id: Date.now().toString(),
        text: text.trim(),
        timestamp: Date.now(),
        favoriteFont,
      }

      setHistory((prev) => {
        // 避免重复项
        const filtered = prev.filter((item) => item.text !== text.trim())
        const newHistory = [newItem, ...filtered].slice(0, 50)
        saveHistory(newHistory)
        return newHistory
      })
    },
    [saveHistory],
  )

  const removeFromHistory = useCallback(
    (id: string) => {
      setHistory((prev) => {
        const newHistory = prev.filter((item) => item.id !== id)
        saveHistory(newHistory)
        return newHistory
      })
    },
    [saveHistory],
  )

  const clearHistory = useCallback(() => {
    setHistory([])
    localStorage.removeItem("instagram-schrift-history")
  }, [])

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  }
}
