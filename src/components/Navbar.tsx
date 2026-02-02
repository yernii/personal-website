"use client"
import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-lg font-medium text-medium-orange">Yernar Mukayev</div>

      <div className="hidden md:block">
        <a
          href="mailto:ym2098@nyu.com"
          className="text-sm border border-gray-600 px-3 py-1 rounded hover:border-orange-500 transition-colors"
        >
          Contact
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-6 bg-gray-900 border border-gray-700 rounded p-4 md:hidden">
          <a href="mailto:ym2098@nyu.com" className="block py-2">Contact</a>
        </div>
      )}
    </div>
  )
}

export default Navbar
