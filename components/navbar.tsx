"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
        scrolled ? "bg-[#0A1414]/95 backdrop-blur-xl border-b border-gray-800 py-2" : "bg-transparent py-4"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(10, 20, 20, 0.98)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section with new logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Logo Container with subtle animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#008060] to-[#00A37F] rounded-xl transform group-hover:rotate-3 transition-transform duration-300" />
              
              {/* Logo Image */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center">
                {/* Wikipedia/W styled logo */}
                <div className="relative">
                  {/* W shape */}
                  <div className="w-8 h-8 relative">
                    <div className="absolute left-0 top-0 w-3 h-8 bg-white rounded-tl-lg rounded-bl-lg"></div>
                    <div className="absolute right-0 top-0 w-3 h-8 bg-white rounded-tr-lg rounded-br-lg"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-3 h-8 bg-white rounded-lg"></div>
                    
                    {/* Connecting lines */}
                    <div className="absolute left-1.5 top-3 w-3 h-2 bg-gradient-to-r from-white to-transparent transform -rotate-45"></div>
                    <div className="absolute right-1.5 top-3 w-3 h-2 bg-gradient-to-l from-white to-transparent transform rotate-45"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-[#00A37F]/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute -inset-1 rounded-xl border border-[#00A37F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Text logo */}
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter text-white leading-none">
                Wiki<span className="text-[#00A37F]">Corp</span>
              </span>
              <span className="text-[10px] text-[#6FD1A6] font-medium tracking-widest uppercase mt-0.5">
                Global Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold text-gray-300 hover:text-white rounded-full transition-all group/nav"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#008060] to-[#00A37F] group-hover/nav:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
            <div className="pl-4">
              <Button className="relative rounded-full px-6 font-bold bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300 hover:shadow-lg hover:shadow-[#008060]/20 overflow-hidden group/btn">
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A37F] to-[#008060] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00A37F] to-[#008060] rounded-full blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors group/menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#008060] to-[#00A37F] rounded-lg blur opacity-0 group-hover/menu:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Opens from right side */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        {/* Backdrop with blur */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-b from-[#0A1414] to-[#000000] border-l border-gray-800/50 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full flex flex-col p-6">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#008060] to-[#00A37F] rounded-lg" />
                  <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 relative">
                        <div className="absolute left-0 top-0 w-2 h-6 bg-white rounded-tl rounded-bl"></div>
                        <div className="absolute right-0 top-0 w-2 h-6 bg-white rounded-tr rounded-br"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2 h-6 bg-white rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tighter text-white leading-none">
                    Wiki<span className="text-[#00A37F]">Corp</span>
                  </span>
                  <span className="text-[9px] text-[#6FD1A6] font-medium tracking-widest uppercase mt-0.5">
                    Global Solutions
                  </span>
                </div>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#008060]/10 hover:to-[#00A37F]/10 rounded-lg transition-all group/mobile"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-1 h-6 bg-gradient-to-b from-[#008060] to-[#00A37F] rounded-full mr-3 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"></div>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button and Footer */}
            <div className="space-y-6 pt-6 border-t border-gray-800/50">
              <Button 
                className="w-full bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Button>
              
        
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}