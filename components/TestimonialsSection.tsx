// components/TestimonialsSection.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  User,
  Award,
  ThumbsUp,
  TrendingUp,
  MessageSquare,
  Shield,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechSolutions Inc.",
    company: "Fortune 500 Company",
    content: "DevCorp transformed our Wikipedia presence completely. Their team was professional, thorough, and delivered beyond expectations. Our page has been featured on Wikipedia's main page!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
    projectType: "Corporate Wikipedia Page",
    duration: "Completed in 5 weeks",
    verified: true,
    color: "border-[#008060]",
    bgColor: "bg-[#008060]/10",
    stats: { traffic: "+300%", approval: "Featured" }
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Best-selling Author",
    company: "Penguin Publishing",
    content: "As an author, having a Wikipedia page was crucial for my credibility. DevCorp handled everything perfectly - from research to final approval. The process was seamless!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
    projectType: "Author Biography",
    duration: "Completed in 4 weeks",
    verified: true,
    color: "border-[#00A37F]",
    bgColor: "bg-[#00A37F]/10",
    stats: { traffic: "+150%", approval: "Verified" }
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Founder, GreenTech Innovations",
    company: "Startup Founder",
    content: "Our startup needed credibility fast. DevCorp created a comprehensive Wikipedia page that highlighted our innovations and achievements. Investors now reference it in meetings!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
    projectType: "Startup Company Page",
    duration: "Completed in 6 weeks",
    verified: true,
    color: "border-[#95BF47]",
    bgColor: "bg-[#95BF47]/10",
    stats: { traffic: "+250%", approval: "Approved" }
  },
  {
    id: 4,
    name: "Dr. Robert Chen",
    role: "Medical Researcher",
    company: "Harvard Medical School",
    content: "Scientific credibility is everything. DevCorp's team understood the nuances of academic Wikipedia pages. They cited all my publications correctly and followed strict guidelines.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
    projectType: "Academic Profile",
    duration: "Completed in 5 weeks",
    verified: true,
    color: "border-[#1E3AFF]",
    bgColor: "bg-[#1E3AFF]/10",
    stats: { traffic: "+180%", approval: "Peer-reviewed" }
  },
  {
    id: 5,
    name: "Amanda Williams",
    role: "Award-winning Filmmaker",
    company: "Independent Film Director",
    content: "My Wikipedia page has opened so many doors professionally. DevCorp captured my career journey beautifully while maintaining Wikipedia's neutral tone. Absolutely brilliant work!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
    projectType: "Artist Profile",
    duration: "Completed in 4 weeks",
    verified: true,
    color: "border-[#6FD1A6]",
    bgColor: "bg-[#6FD1A6]/10",
    stats: { traffic: "+220%", approval: "Featured" }
  },
  {
    id: 6,
    name: "David Park",
    role: "Tech Entrepreneur",
    company: "Silicon Valley Investor",
    content: "I've worked with many Wikipedia services, but DevCorp stands out. Their attention to detail, communication, and results are unparalleled. Worth every penny!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
    projectType: "Entrepreneur Profile",
    duration: "Completed in 5 weeks",
    verified: true,
    color: "border-[#FF1E2D]",
    bgColor: "bg-[#FF1E2D]/10",
    stats: { traffic: "+400%", approval: "Verified" }
  }
]



export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0A1414] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008060]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A37F]/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating Quote Marks */}
        <div className="absolute top-20 left-10 opacity-10">
          <Quote className="h-40 w-40 text-[#008060]" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Quote className="h-40 w-40 text-[#00A37F] transform rotate-180" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008060]/20 to-[#95BF47]/20 px-6 py-3 rounded-full mb-6 animate-fade-in border border-[#008060]/30">
            <MessageSquare className="h-5 w-5 text-[#00A37F]" />
            <span className="text-sm font-bold text-[#00A37F] tracking-wider">CLIENT TESTIMONIALS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-slide-up">
            <span className="text-white">Customer</span>
            <span className="bg-gradient-to-r from-[#008060] via-[#00A37F] to-[#95BF47] bg-clip-text text-transparent">
              {" "}Feedbacks
            </span>
          </h1>
          
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-delay">
            Discover what our clients say about their Wikipedia journey with DevCorp. 
            Real stories from real people who achieved remarkable online presence.
          </p>

        
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          {/* Large Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-br from-[#0A1414] to-[#0A1414] rounded-3xl border-2 ${testimonials[currentIndex].color} p-8 md:p-12 shadow-2xl shadow-[#008060]/10 transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-12 w-12 text-[#008060]/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "text-[#FFD700] fill-[#FFD700]" : "text-gray-700"}`}
                  />
                ))}
                <span className="ml-2 text-sm text-[#6B6B6B]">Perfect 5.0</span>
              </div>

              {/* Content */}
              <p className="text-xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#008060] to-[#00A37F] rounded-2xl flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    {testimonials[currentIndex].verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#008060] rounded-full flex items-center justify-center border-2 border-[#0A1414]">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h3>
                      {testimonials[currentIndex].verified && (
                        <span className="text-xs bg-[#008060]/20 text-[#00A37F] px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-[#00A37F] font-medium">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-[#6B6B6B]">{testimonials[currentIndex].company}</p>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="hidden md:block text-right">
                  <div className={`inline-flex items-center gap-2 ${testimonials[currentIndex].bgColor} px-4 py-2 rounded-xl`}>
                    <TrendingUp className="h-4 w-4 text-[#00A37F]" />
                    <span className="text-sm text-white font-medium">
                      {testimonials[currentIndex].stats.traffic} Traffic Increase
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-[#6B6B6B]">
                    {testimonials[currentIndex].projectType}
                  </div>
                </div>
              </div>

              {/* Project Details - Mobile */}
              <div className="md:hidden mt-6 pt-6 border-t border-[#1E1E1E]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#6B6B6B]">Project Type</div>
                    <div className="text-white font-medium">{testimonials[currentIndex].projectType}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#6B6B6B]">Duration</div>
                    <div className="text-[#00A37F] font-medium">{testimonials[currentIndex].duration}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0A1414] border border-[#1E1E1E] rounded-full flex items-center justify-center text-white hover:bg-[#008060] hover:border-[#008060] transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0A1414] border border-[#1E1E1E] rounded-full flex items-center justify-center text-white hover:bg-[#008060] hover:border-[#008060] transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#6B6B6B]">
                Testimonial {currentIndex + 1} of {testimonials.length}
              </div>
              <div className="flex-1 mx-6 h-1 bg-[#1E1E1E] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#008060] to-[#00A37F] transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                />
              </div>
              <div className="text-sm text-[#00A37F] font-medium">
                {Math.round(((currentIndex + 1) / testimonials.length) * 100)}% Viewed
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`relative group transition-all duration-300 ${
                  currentIndex === index ? "scale-105" : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className={`bg-[#0A1414] border rounded-2xl p-4 h-full transition-all duration-300 ${
                  currentIndex === index 
                    ? `border-2 ${testimonial.color} shadow-lg shadow-[${testimonial.color}]/20`
                    : "border-[#1E1E1E] hover:border-[#008060]/50"
                }`}>
                  {/* Client Avatar */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#008060] to-[#00A37F] rounded-xl flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-white truncate">{testimonial.name.split(" ")[0]}</div>
                      <div className="text-xs text-[#6B6B6B] truncate">{testimonial.role.split(",")[0]}</div>
                    </div>
                  </div>

                  {/* Preview Content */}
                  <p className="text-xs text-[#6B6B6B] line-clamp-2 text-left">
                    "{testimonial.content.substring(0, 60)}..."
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < testimonial.rating ? "text-[#FFD700] fill-[#FFD700]" : "text-gray-700"}`}
                      />
                    ))}
                  </div>

                  {/* Active Indicator */}
                  {currentIndex === index && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#008060] rounded-full animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Video Testimonials</h2>
            <p className="text-[#6B6B6B]">Watch our clients share their experiences</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Video Placeholder 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#1E1E1E] hover:border-[#008060] transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#008060]/20 to-[#00A37F]/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#008060] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1414] to-transparent p-4">
                <div className="text-white font-medium">Sarah's Success Story</div>
                <div className="text-sm text-[#6B6B6B]">CEO, TechSolutions Inc.</div>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#1E1E1E] hover:border-[#00A37F] transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#95BF47]/20 to-[#6FD1A6]/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#00A37F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1414] to-transparent p-4">
                <div className="text-white font-medium">Michael's Journey</div>
                <div className="text-sm text-[#6B6B6B]">Best-selling Author</div>
              </div>
            </div>
          </div>
        </div>

     
      
      </div>
    </section>
  )
}