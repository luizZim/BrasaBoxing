"use client"

import { useState, useEffect } from "react"
import { Monitor, Tablet, Smartphone } from "lucide-react"

export function ResponsiveTest() {
  const [screenSize, setScreenSize] = useState("")

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize("Mobile")
      else if (width < 1024) setScreenSize("Tablet")
      else setScreenSize("Desktop")
    }

    updateScreenSize()
    window.addEventListener("resize", updateScreenSize)
    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

  const getIcon = () => {
    switch (screenSize) {
      case "Mobile":
        return <Smartphone className="w-4 h-4" />
      case "Tablet":
        return <Tablet className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  return (
    <div className="fixed top-20 left-4 bg-black/80 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2 z-40 backdrop-blur-sm border border-gray-700">
      {getIcon()}
      <span>{screenSize}</span>
      <span className="text-gray-400">({window?.innerWidth}px)</span>
    </div>
  )
}
