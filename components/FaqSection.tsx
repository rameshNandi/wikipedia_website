// components/FaqSection.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import { 
  ChevronDown, 
  MessageSquare, 
  Search, 
  Mail, 
  Phone, 
  Clock, 
  Users, 
  CheckCircle2, 
  X, 
  Send,
  FileText,
  Shield,
  Star,
  RefreshCw,
  Edit
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const faqs = [
  {
    question: "How long does it take to create a Wikipedia page?",
    answer: "Our standard timeline for creating and publishing a Wikipedia page is 4-6 weeks. This includes research, content creation, review, revisions, and the submission process. We ensure every page meets Wikipedia's strict guidelines before submission.",
    category: "Process",
    icon: Clock,
    color: "text-[#008060]",
    bgColor: "bg-[#008060]/10",
  },
  {
    question: "What are Wikipedia's notability guidelines?",
    answer: "Wikipedia requires subjects to have significant coverage in reliable, independent sources. We thoroughly research and compile evidence of notability from reputable publications, ensuring your page meets all Wikipedia criteria before submission.",
    category: "Guidelines",
    icon: CheckCircle2,
    color: "text-[#95BF47]",
    bgColor: "bg-[#95BF47]/10",
  },
  {
    question: "Can I edit my Wikipedia page after it's published?",
    answer: "Yes, you can suggest edits, but all changes must comply with Wikipedia's policies. We provide 30 days of post-publication support and can handle ongoing maintenance to keep your page accurate and up-to-date.",
    category: "Maintenance",
    icon: Edit,
    color: "text-[#1E3AFF]",
    bgColor: "bg-[#1E3AFF]/10",
  },
  {
    question: "What information do you need from me to start?",
    answer: "We'll need your biography, achievements, media coverage, awards, publications, and any other notable information. Our team conducts additional research to ensure comprehensive coverage that meets Wikipedia's standards.",
    category: "Requirements",
    icon: FileText,
    color: "text-[#00A37F]",
    bgColor: "bg-[#00A37F]/10",
  },
  {
    question: "How do you ensure my page won't get deleted?",
    answer: "We follow Wikipedia's guidelines meticulously, provide proper citations, maintain neutral point of view, and ensure all content is verifiable. Our 98% approval rate reflects our expertise in creating compliant pages.",
    category: "Quality",
    icon: Shield,
    color: "text-[#FF1E2D]",
    bgColor: "bg-[#FF1E2D]/10",
  },
  {
    question: "What if my page gets rejected by Wikipedia?",
    answer: "In the rare case of rejection, we provide a detailed analysis of the reasons and work with you to address any issues. Our package includes revisions until your page is successfully published.",
    category: "Support",
    icon: Users,
    color: "text-[#6FD1A6]",
    bgColor: "bg-[#6FD1A6]/10",
  },
  {
    question: "Do you handle ongoing page maintenance?",
    answer: "Yes, we offer maintenance packages to monitor your page, update information, address vandalism, and ensure ongoing compliance with Wikipedia's evolving guidelines.",
    category: "Maintenance",
    icon: RefreshCw,
    color: "text-[#008060]",
    bgColor: "bg-[#008060]/10",
  },
  {
    question: "What makes your service different from others?",
    answer: "Our team consists of Wikipedia-certified editors with 5+ years experience. We provide transparent communication, 24/7 support, and follow a proven 6-step process that guarantees results.",
    category: "Service",
    icon: Star,
    color: "text-[#95BF47]",
    bgColor: "bg-[#95BF47]/10",
  },
]

const categories = [
  { name: "All", count: 8 },
  { name: "Process", count: 2 },
  { name: "Guidelines", count: 2 },
  { name: "Requirements", count: 1 },
  { name: "Maintenance", count: 2 },
  { name: "Quality", count: 1 },
]

// SVG pattern for background - এটাকে আলাদা ভ্যারিয়েবল হিসেবে নিলাম
const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008060' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", question: "" })
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setIsFormVisible(false)
    setFormData({ name: "", email: "", question: "" })
  }

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0A1414] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#008060]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00A37F]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("${svgPattern}")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008060]/20 to-[#00A37F]/20 px-6 py-3 rounded-full mb-6 animate-fade-in border border-[#008060]/30">
            <MessageSquare className="h-5 w-5 text-[#00A37F]" />
            <span className="text-sm font-bold text-[#00A37F] tracking-wider">FAQ SECTION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-slide-up">
            <span className="text-white">GOT QUESTIONS?</span>
            <br />
            <span className="bg-gradient-to-r from-[#008060] via-[#00A37F] to-[#95BF47] bg-clip-text text-transparent">
              LET US ANSWER!
            </span>
          </h1>
          
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-delay">
            Find quick answers to common questions about our Wikipedia page creation services. 
            Can't find what you're looking for? Ask our experts directly.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B6B6B]" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 bg-[#0A1414] border-2 border-[#1E1E1E] rounded-2xl text-white placeholder:text-[#6B6B6B] focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-[#008060] to-[#00A37F] text-white shadow-lg shadow-[#008060]/20"
                    : "bg-[#0A1414] border border-[#1E1E1E] text-[#6B6B6B] hover:border-[#008060]/50 hover:text-white"
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.name
                    ? "bg-white/20"
                    : "bg-[#1E1E1E]"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const Icon = faq.icon
              const isOpen = openIndex === index
              
              return (
                <div
                  key={index}
                  className={`bg-[#0A1414] border-2 rounded-2xl overflow-hidden transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } ${
                    isOpen
                      ? "border-[#008060] shadow-xl shadow-[#008060]/10"
                      : "border-[#1E1E1E] hover:border-[#008060]/50"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${faq.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 ${faq.color}`} />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${faq.bgColor} ${faq.color}`}>
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-4 flex-shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#008060]/20 rotate-180"
                        : "bg-[#1E1E1E] group-hover:bg-[#008060]/10"
                    }`}>
                      <ChevronDown className={`h-5 w-5 ${
                        isOpen ? "text-[#00A37F]" : "text-[#6B6B6B]"
                      }`} />
                    </div>
                  </button>
                  
                  <div className={`px-6 overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}>
                    <div className="pl-16 border-l-2 border-[#008060]">
                      <p className="text-[#6B6B6B] leading-relaxed">{faq.answer}</p>
                      {index === 0 && (
                        <div className="mt-4 pt-4 border-t border-[#1E1E1E]">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-[#00A37F]" />
                            <span className="text-[#6B6B6B]">Average timeline: <span className="text-white font-semibold">4-6 weeks</span></span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Ask Question Section */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`bg-gradient-to-br from-[#0A1414] to-[#008060]/10 rounded-2xl p-8 border border-[#1E1E1E] transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-2xl font-bold text-white mb-6">Still Have Questions?</h3>
            <p className="text-[#6B6B6B] mb-8">
              Our team of Wikipedia experts is here to help. Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-[#0A1414]/50 rounded-xl border border-[#1E1E1E] hover:border-[#008060]/50 transition-colors">
                <div className="w-12 h-12 bg-[#008060]/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#00A37F]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B]">Email Us</div>
                  <div className="text-white font-semibold">support@devcorp.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#0A1414]/50 rounded-xl border border-[#1E1E1E] hover:border-[#95BF47]/50 transition-colors">
                <div className="w-12 h-12 bg-[#95BF47]/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#95BF47]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B]">Call Us</div>
                  <div className="text-white font-semibold">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#0A1414]/50 rounded-xl border border-[#1E1E1E] hover:border-[#1E3AFF]/50 transition-colors">
                <div className="w-12 h-12 bg-[#1E3AFF]/20 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#1E3AFF]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B]">Response Time</div>
                  <div className="text-white font-semibold">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Form */}
          <div className={`relative transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{ transitionDelay: "200ms" }}>
            {isFormVisible ? (
              <div className="bg-[#0A1414] rounded-2xl p-8 border-2 border-[#008060] shadow-xl shadow-[#008060]/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Ask Your Question</h3>
                  <button
                    onClick={() => setIsFormVisible(false)}
                    className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#FF1E2D]/20 hover:text-[#FF1E2D] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#0A1414] border-2 border-[#1E1E1E] rounded-xl text-white p-3 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0A1414] border-2 border-[#1E1E1E] rounded-xl text-white p-3 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2">Your Question</label>
                    <textarea
                      required
                      value={formData.question}
                      onChange={(e) => setFormData({...formData, question: e.target.value})}
                      className="w-full h-32 bg-[#0A1414] border-2 border-[#1E1E1E] rounded-xl text-white p-3 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 transition-all resize-none"
                      placeholder="Type your question here..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300"
                  >
                    Submit Question
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#0A1414] to-[#00A37F]/10 rounded-2xl p-12 border-2 border-[#00A37F] text-center h-full flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-[#00A37F]/10 transition-all duration-300">
                <div className="w-20 h-20 bg-[#00A37F]/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="h-10 w-10 text-[#00A37F]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Can't Find Your Answer?</h3>
                <p className="text-[#6B6B6B] mb-8 max-w-md">
                  Our Wikipedia experts are ready to answer any specific questions you have about the process, pricing, or requirements.
                </p>
                <Button
                  onClick={() => setIsFormVisible(true)}
                  className="bg-gradient-to-r from-[#008060] to-[#00A37F] text-white hover:from-[#00A37F] hover:to-[#008060] transition-all duration-300 hover:scale-105"
                >
                  Ask a Question
                  <ChevronDown className="ml-2 h-4 w-4 rotate-90" />
                </Button>
              </div>
            )}
          </div>
        </div>

       
      </div>
    </section>
  )
}