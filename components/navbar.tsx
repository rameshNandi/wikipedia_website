"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Hire", href: "/why-hire" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1414]/90 backdrop-blur-xl border-b border-gray-800 py-2" : "bg-transparent py-4"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(10, 20, 20, 0.95)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#008060] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white">
              DEV<span className="text-[#00A37F]">CORP</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4">
              <Button className="rounded-full px-6 font-bold bg-[#008060] text-white hover:bg-[#00A37F] transition-colors">
                Join Now
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Opens from right side */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-[#0A1414] border-l border-gray-800 shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="w-10 h-10 bg-[#008060] rounded-xl flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-black text-xl tracking-tighter text-white">
                  DEV<span className="text-[#00A37F]">CORP</span>
                </span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <Button 
                className="w-full bg-[#008060] text-white hover:bg-[#00A37F] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Button>
            </div>

            {/* Optional: Additional info or social links */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm text-[#6B6B6B]">
                © {new Date().getFullYear()} DevCorp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}