// components/MikiFooter.tsx
"use client"

import { useState } from "react"
import { 
  Phone, 
  Mail, 
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

export function MikiFooter() {
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

  // World map SVG as base64 to avoid parsing issues
  const worldMapSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3Cstyle%3E.land%7Bfill:%230A1414;stroke:%23008060;stroke-width:0.5;opacity:0.8%7D.water%7Bfill:%230A1414;opacity:0.1%7D.dot%7Bfill:%23008060;opacity:0.6%7D%3C/style%3E%3C/defs%3E%3Crect width='1200' height='600' fill='%230A1414'/%3E%3Cpath class='water' d='M0 0h1200v600H0z'/%3E%3Cpath class='land' d='M200 150q50-30 100 0 50 30 100 0 50-30 100 0 50 30 100 0v300q-50 30-100 0-50-30-100 0-50 30-100 0-50-30-100 0z'/%3E%3Cpath class='land' d='M400 100q40-20 80 0 40 20 80 0v400q-40 20-80 0-40-20-80 0z'/%3E%3Cpath class='land' d='M600 200q30-15 60 0 30 15 60 0v200q-30 15-60 0-30-15-60 0z'/%3E%3Ccircle class='dot' cx='300' cy='200' r='8'/%3E%3Ccircle class='dot' cx='500' cy='300' r='6'/%3E%3Ccircle class='dot' cx='700' cy='250' r='5'/%3E%3Ccircle class='dot' cx='900' cy='350' r='7'/%3E%3Ccircle class='dot' cx='400' cy='400' r='6'/%3E%3Ccircle class='dot' cx='800' cy='150' r='5'/%3E%3Ctext x='600' y='100' text-anchor='middle' fill='%2300A37F' font-size='24' font-family='Arial' opacity='0.3'%3EGLOBAL%20REACH%3C/text%3E%3Ctext x='600' y='130' text-anchor='middle' fill='%2395BF47' font-size='18' font-family='Arial' opacity='0.3'%3EServing%20Clients%20Worldwide%3C/text%3E%3C/svg%3E`

  return (
    <footer className="relative bg-[#0A1414] overflow-hidden">
      {/* World Map Background - Fixed */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${worldMapSVG}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414] via-transparent to-transparent" />

      <div className="relative z-10">
        {/* Contact Section */}
        <div className="border-t border-b border-[#1E1E1E] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-[#008060] via-[#00A37F] to-[#95BF47] bg-clip-text text-transparent">
                  CONTACT
                </span>
              </h1>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-4 text-2xl font-bold text-white">
                  <Phone className="h-6 w-6 text-[#008060]" />
                  <span>+44 30 7011 9969</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-2xl font-bold text-white">
                  <Mail className="h-6 w-6 text-[#00A37F]" />
                  <span>sales@whitewest.co.uk</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#008060] to-transparent my-12" />

            {/* Mission Statement */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-white mb-8 leading-relaxed">
                <span className="font-bold text-[#00A37F]">Miki Excel</span>: An iconic service provider for Wikipedia recognition. 
                We are determined to provide 100% satisfaction to the customers.
              </p>
              
              {/* Achievements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div
                      key={achievement.label}
                      className="bg-[#0A1414]/80 backdrop-blur-sm border border-[#1E1E1E] rounded-xl p-6 text-center hover:border-[#008060]/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`text-3xl font-black ${achievement.color} mb-2`}>{achievement.value}</div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon className={`h-4 w-4 ${achievement.color}`} />
                        <div className="text-sm text-[#6B6B6B]">{achievement.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-[#008060]/10 via-[#0A1414] to-[#00A37F]/10 rounded-2xl border border-[#1E1E1E] p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-[#6B6B6B] mb-6">
                  Subscribe for Wikipedia tips and exclusive offers
                </p>
                
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B6B6B]" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 pr-4 py-6 bg-[#0A1414] border-2 border-[#1E1E1E] rounded-xl text-white placeholder:text-[#6B6B6B] focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 transition-all"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300 px-8"
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                    {!isSubscribed && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
                
                {isSubscribed && (
                  <div className="mt-4 text-[#00A37F] animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 inline mr-2" />
                    Thank you for subscribing!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

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
                        Wiki<span className="text-[#00A37F]">Crop</span>
                      </div>
                      <div className="text-xs text-[#6B6B6B]">Global Solutions</div>
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

            {/* Copyright Section */}
            <div className="border-t border-[#1E1E1E] pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[#6B6B6B] text-sm flex items-center gap-2">
                  <Copyright className="h-4 w-4" />
                  <span>Foreword by <span className="text-white font-bold">Miki Excel 2024</span>. All rights reserved Will Excel</span>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-[#6B6B6B] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <div className="w-1 h-1 bg-[#6B6B6B] rounded-full" />
                  <Link
                    href="/terms"
                    className="text-sm text-[#6B6B6B] hover:text-white transition-colors"
                  >
                    Terms Of Use
                  </Link>
                  <div className="w-1 h-1 bg-[#6B6B6B] rounded-full" />
                  <span className="text-sm text-[#FF1E2D] flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    WARNING News
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