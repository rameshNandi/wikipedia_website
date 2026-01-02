"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { ContactForm } from "./contact-form"
import { WorldGlobe } from "./world-globe"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const words = ["Professional", "Wikipedia", "Page", "Creation", "Services"]

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (charIndex < word.length) {
        setText(prev => prev + word[charIndex])
        setCharIndex(prev => prev + 1)
      } else if (currentWordIndex < words.length - 1) {
        setTimeout(() => {
          setText(prev => prev + " ")
          setCurrentWordIndex(prev => prev + 1)
          setCharIndex(0)
        }, 100)
      }
    }, 80)

    return () => clearTimeout(timeout)
  }, [charIndex, currentWordIndex])

  return (
    <section className="relative min-h-[780px] md:min-h-[880px] lg:min-h-[940px] flex items-center pt-18 lg:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#0A1414]">
        <WorldGlobe />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1414] via-[#0A1414]/95 to-[#008060]/15" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#00A37F]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#95BF47]/8 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        {/* Left */}
        <div className="max-w-xl lg:max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EDEDED] to-[#F5F5F7] px-4 py-2 rounded-full mb-8 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <span className="text-[#000000] text-sm font-semibold">
              4.9/5.0 Five-star reviews
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-[1.12] text-[#FFFFFF]">
              <span className="block">Establish Your</span>
              <span className="block">Legacy with</span>
            </h1>

            <div className="min-h-[3.8rem] sm:min-h-[4.2rem] md:min-h-[4.6rem] flex items-start">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#008060] via-[#00A37F] to-[#6FD1A6]">
                {text}
              </span>
            </div>
          </div>

          <p className="text-lg text-white font-semibold max-w-lg mb-7 leading-relaxed">
            Professional and Wikipedia-Compliant Pages. We rely on verified sources
            to boost credibility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Professional and Wikipedia-Compliant",
              "Verified Sources for Credibility",
              "Personalized Services for All Needs",
              "Fast Turnaround Times",
              "100% Money-Back Guarantee",
              "Ongoing Page Maintenance",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-[#00A37F]/20 p-1 rounded-full">
                  <CheckCircle className="h-3.5 w-3.5 text-[#00A37F]" />
                </div>
                <span className="text-white font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button className="rounded-full px-7 h-12 text-sm bg-gradient-to-r from-[#008060] to-[#00A37F] hover:from-[#00A37F] hover:to-[#6FD1A6] text-white font-bold shadow-lg hover:shadow-[#008060]/40">
              Create My Wikipedia Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-7 h-12 text-sm border-2 border-[#00A37F] text-[#00A37F] hover:bg-[#00A37F]/10 font-semibold backdrop-blur-sm"
            >
              Book FREE Consultation
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-sm lg:max-w-md mt-4 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
