// components/WikipediaProcess.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2, FileText, Search, Edit, Send, ThumbsUp, ChevronRight, ArrowRight, Shield, Clock, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Brief Form Submission",
    description: "Brief form to be filed by the client",
    icon: FileText,
    color: "bg-[#008060]",
    hoverColor: "bg-[#00A37F]",
  },
  {
    number: "02",
    title: "Research and Draft Development",
    description: "The team will conduct research and create the draft Wikipedia content",
    icon: Search,
    color: "bg-[#95BF47]",
    hoverColor: "bg-[#A5D157]",
  },
  {
    number: "03",
    title: "Client Review",
    description: "The client will review the content",
    icon: Edit,
    color: "bg-[#1E3AFF]",
    hoverColor: "bg-[#2E4AFF]",
  },
  {
    number: "04",
    title: "Revisions",
    description: "Once the draft has been written and proofread, it is shared with you for your approval",
    icon: CheckCircle2,
    color: "bg-[#6FD1A6]",
    hoverColor: "bg-[#7FE1B6]",
  },
  {
    number: "05",
    title: "Draft Approved",
    description: "We share the final approved file with Wikipedia and wait for their approval",
    icon: ThumbsUp,
    color: "bg-[#00A37F]",
    hoverColor: "bg-[#10B38F]",
  },
  {
    number: "06",
    title: "Submit to Wikipedia",
    description: "The team will conduct research and create the draft Wikipedia content",
    icon: Send,
    color: "bg-[#008060]",
    hoverColor: "bg-[#00A37F]",
  },
]

const features = [
  {
    icon: Shield,
    title: "Wikipedia Compliance",
    description: "100% compliant with Wikipedia's strict guidelines and policies",
    color: "text-[#00A37F]",
    bgColor: "bg-[#00A37F]/10",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your Wikipedia page live within 4-6 weeks",
    color: "text-[#95BF47]",
    bgColor: "bg-[#95BF47]/10",
  },
  {
    icon: Users,
    title: "Expert Writers",
    description: "Wikipedia-certified editors with 5+ years experience",
    color: "text-[#1E3AFF]",
    bgColor: "bg-[#1E3AFF]/10",
  },
  {
    icon: Target,
    title: "High Approval Rate",
    description: "98% success rate for page approval and maintenance",
    color: "text-[#FF1E2D]",
    bgColor: "bg-[#FF1E2D]/10",
  },
]

export function WikipediaProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0A1414] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#008060]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#00A37F]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#008060]/10 to-[#00A37F]/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[length:50px_50px] bg-grid-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#008060]/20 px-4 py-2 rounded-full mb-6 animate-fade-in border border-[#008060]/30">
            <div className="w-2 h-2 bg-[#00A37F] rounded-full animate-pulse" />
            <span className="text-sm font-bold text-[#00A37F] tracking-wider">WIKIPEDIA SERVICES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-slide-up">
            <span className="text-white">ABOUT OUR WIKIPEDIA</span>
            <br />
            <span className="bg-gradient-to-r from-[#008060] via-[#00A37F] to-[#95BF47] bg-clip-text text-transparent">
              PAGE WRITING SERVICES.
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#6B6B6B] mb-10 leading-relaxed animate-fade-in-delay">
              <span className="font-semibold text-white">Miki Excel</span> is all about enhancing your presence on Wikipedia, and you can make a Wikipedia page for your business or a Wikipedia page about yourself with the assistance of our Wikipedia experts. Our Miki professionals work hard to ensure you great results for long-term credibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button className="rounded-full px-8 py-6 text-lg font-bold bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#008060]/30">
              Start Your Wikipedia Page
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-bold border-2 border-[#6B6B6B] text-white hover:bg-white hover:text-[#0A1414] hover:border-white transition-all duration-300">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative bg-[#0A1414] border border-[#1E1E1E] rounded-2xl p-6 transition-all duration-500 hover:border-[#008060]/50 hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{feature.description}</p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#008060]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            )
          })}
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeStep
            
            return (
              <div
                key={step.number}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`relative bg-[#0A1414] rounded-2xl p-6 h-full border-2 transition-all duration-300 ${
                    isActive 
                      ? "border-[#008060] shadow-2xl shadow-[#008060]/20 transform scale-[1.02]" 
                      : "border-[#1E1E1E] hover:border-[#95BF47]/50 hover:shadow-lg hover:shadow-[#95BF47]/10"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 ml-12 transition-all duration-300 group-hover:rotate-12`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 ${isActive ? "text-white" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008060] to-[#00A37F] rounded-b-2xl animate-pulse" />
                  )}

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="h-5 w-5 text-[#00A37F]" />
                  </div>
                </div>

                {/* Connecting Lines for Desktop */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal Lines */}
                    {(index === 0 || index === 1 || index === 3 || index === 4) && (
                      <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-r from-[#008060]/50 to-transparent translate-x-full" />
                    )}
                    
                    {/* Vertical Lines */}
                    {(index === 0 || index === 1) && (
                      <div className="hidden lg:block absolute bottom-0 left-1/2 w-0.5 h-6 bg-gradient-to-b from-[#95BF47]/50 to-transparent -translate-x-1/2 translate-y-full" />
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>

        {/* Process Visualization */}
        <div className="bg-[#0A1414] border border-[#1E1E1E] rounded-2xl p-8 mb-16">
          <div className="relative mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      index <= activeStep 
                        ? `${step.color} text-white shadow-lg transform scale-110 ring-4 ring-[${step.color}]/20`
                        : "bg-[#1E1E1E] text-[#6B6B6B]"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </button>
                  <span className="text-xs font-semibold mt-3 text-white">
                    {step.title.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="absolute top-7 left-0 right-0 h-1.5 bg-[#1E1E1E] -z-10">
              <div 
                className="h-full bg-gradient-to-r from-[#008060] via-[#00A37F] to-[#95BF47] transition-all duration-500 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Step Details */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 ${steps[activeStep].color} rounded-full animate-pulse`} />
              <span className="text-sm font-bold text-[#00A37F] uppercase tracking-wider">
                Current Step: {steps[activeStep].number}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{steps[activeStep].title}</h3>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">{steps[activeStep].description}</p>
          </div>
        </div>

 
        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#008060]/20 via-[#0A1414] to-[#00A37F]/20 rounded-2xl p-12 border border-[#1E1E1E] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008060]/5 to-transparent animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              Ready to Establish Your Wikipedia Presence?
            </h2>
            <p className="text-[#6B6B6B] mb-8 max-w-2xl mx-auto relative z-10">
              Join hundreds of satisfied clients who have successfully established their credibility on Wikipedia with our expert services.
            </p>
            <div className="relative z-10">
              <Button className="rounded-full px-10 py-7 text-lg font-bold bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#008060]/40">
                Get Started Today
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}