// components/Footer.tsx
"use client"

import { useState } from "react"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Shield, 
  FileText, 
  Newspaper, 
  ChevronRight,
  Send,
  Copyright,
  CheckCircle2,
  Users,
  Award,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const footerLinks = {
  services: [
    { name: "Wikipedia Page Creation", href: "/services/wikipedia" },
    { name: "Page Maintenance", href: "/services/maintenance" },
    { name: "Content Research", href: "/services/research" },
    { name: "Citation & References", href: "/services/citations" },
    { name: "Notability Assessment", href: "/services/notability" },
    { name: "Page Monitoring", href: "/services/monitoring" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Wikipedia Guidelines", href: "/resources/guidelines" },
    { name: "Blog & Articles", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Support Center", href: "/support" },
    { name: "Webinars", href: "/webinars" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
    { name: "GDPR Compliance", href: "/gdpr" },
  ]
}

const achievements = [
  { value: "500+", label: "Wikipedia Pages Created", icon: Award, color: "text-[#008060]" },
  { value: "98%", label: "Approval Rate", icon: CheckCircle2, color: "text-[#00A37F]" },
  { value: "24/7", label: "Client Support", icon: Clock, color: "text-[#95BF47]" },
  { value: "100%", label: "Satisfaction Guarantee", icon: Users, color: "text-[#1E3AFF]" }
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribed:", email)
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative bg-[#0A1414] overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 400%22%3E%3Cpath d=%22M400,200 Q450,150 500,200 T600,200%22 stroke=%22%23008060%22 fill=%22none%22 stroke-width=%222%22/%3E%3Cpath d=%22M200,300 Q250,250 300,300 T400,300%22 stroke=%22%2300A37F%22 fill=%22none%22 stroke-width=%222%22/%3E%3Ccircle cx=%22500%22 cy=%22150%22 r=%228%22 fill=%22%2395BF47%22/%3E%3Ccircle cx=%22300%22 cy=%22250%22 r=%226%22 fill=%22%231E3AFF%22/%3E%3Ccircle cx=%22150%22 cy=%22100%22 r=%225%22 fill=%22%236FD1A6%22/%3E%3Ccircle cx=%22600%22 cy=%22300%22 r=%227%22 fill=%22%23FF1E2D%22/%3E%3C/svg%3E')] bg-center bg-no-repeat bg-contain" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414] via-transparent to-transparent" />

      <div className="relative z-10">
     

        {/* Mission Statement */}
      

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <Link href="/" className="inline-block mb-6">
                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#008060] to-[#00A37F] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-black text-2xl tracking-tighter text-white">
                        MIKI<span className="text-[#00A37F]">EXCEL</span>
                      </div>
                      <div className="text-xs text-[#6B6B6B]">Wikipedia Experts Since 2024</div>
                    </div>
                  </div>
                </Link>
                
                <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                  Professional Wikipedia page creation, editing, and maintenance services. 
                  Trusted by businesses, individuals, and organizations worldwide.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#008060]/20 rounded-lg flex items-center justify-center hover:bg-[#008060]/30 transition-colors cursor-pointer">
                    <div className="text-white font-bold">W</div>
                  </div>
                  <div className="text-sm text-[#6B6B6B]">
                    <div className="text-white font-medium">Verified Wikipedia Editor</div>
                    <div>Official partner since 2024</div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#008060]" />
                  Services
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[#6B6B6B] hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-[#008060] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#00A37F]" />
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[#6B6B6B] hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-[#00A37F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#95BF47]" />
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[#6B6B6B] hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-[#95BF47] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              {footerLinks.legal.map((link, index) => {
                const icons = [Shield, FileText, Newspaper]
                const Icon = icons[index] || Shield
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 text-[#6B6B6B] hover:text-white transition-colors group"
                  >
                    <Icon className="h-4 w-4 group-hover:text-[#008060] transition-colors" />
                    {link.name}
                  </Link>
                )
              })}
            </div>

            {/* Copyright Section */}
            <div className="border-t border-[#1E1E1E] pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[#6B6B6B] text-sm flex items-center gap-2">
                  <Copyright className="h-4 w-4" />
                  <span>Foreword by <span className="text-white font-bold">Miki Excel 2024</span>. All rights reserved Will Excel</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#FF1E2D] flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    WARNING: Wikipedia compliance is crucial
                  </span>
                  <div className="w-1 h-1 bg-[#6B6B6B] rounded-full" />
                  <span className="text-sm text-[#6B6B6B]">
                    Official Wikipedia Editor ID: WE2024
                  </span>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="mt-8 text-center">
              <p className="text-xs text-[#6B6B6B] max-w-2xl mx-auto">
                Miki Excel is not affiliated with or endorsed by Wikipedia or the Wikimedia Foundation. 
                We are an independent service provider specializing in Wikipedia page creation and maintenance.
                All trademarks belong to their respective owners.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="border-t border-[#1E1E1E] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                variant="ghost"
                className="text-[#6B6B6B] hover:text-white hover:bg-[#008060]/10 transition-colors"
              >
                Back to Top
                <ChevronRight className="h-4 w-4 ml-2 rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}