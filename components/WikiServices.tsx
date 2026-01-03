"use client";

import { FC, useState, useEffect, useCallback } from "react";
import { 
  FileText, 
  RefreshCcw, 
  Search, 
  CheckCircle, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const WikiServices: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      id: 1,
      icon: FileText,
      title: "PAGE CREATION",
      description: "A page crafted to comply with all Wikipedia guidelines and add value to your brand or individual profile.",
      color: "#008060",
      bgColor: "#FFFFFF"
    },
    {
      id: 2,
      icon: RefreshCcw,
      title: "PAGE UPDATES",
      description: "We ensure your Wikipedia page stays accurate and updated regularly with flawless information.",
      color: "#00A37F",
      bgColor: "#FFFFFF"
    },
    {
      id: 3,
      icon: Search,
      title: "RESEARCH & COPYWRITING",
      description: "Our research team gathers verified data and writes professionally formatted Wikipedia content.",
      color: "#95BF47",
      bgColor: "#FFFFFF"
    },
    {
      id: 4,
      icon: CheckCircle,
      title: "QUALITY ASSURANCE",
      description: "Multiple rounds of review to ensure compliance with Wikipedia's policies and standards.",
      color: "#6FD1A6",
      bgColor: "#FFFFFF"
    },
    {
      id: 5,
      icon: Shield,
      title: "PAGE PROTECTION",
      description: "Protect your Wikipedia page from vandalism and unauthorized edits with our monitoring service.",
      color: "#1E3AFF",
      bgColor: "#FFFFFF"
    },
    {
      id: 6,
      icon: Users,
      title: "EXPERT CONSULTATION",
      description: "Consult with our Wikipedia experts to understand the process and requirements.",
      color: "#008060",
      bgColor: "#FFFFFF"
    },
    {
      id: 7,
      icon: TrendingUp,
      title: "NOTABILITY ANALYSIS",
      description: "Comprehensive analysis to determine if your subject meets Wikipedia's notability guidelines.",
      color: "#00A37F",
      bgColor: "#FFFFFF"
    },
    {
      id: 8,
      icon: Globe,
      title: "MULTI-LINGUAL SUPPORT",
      description: "Create and manage Wikipedia pages in multiple languages for global reach.",
      color: "#95BF47",
      bgColor: "#FFFFFF"
    }
  ];

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Smooth scroll function
  const smoothScroll = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isAnimating) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isMobile, isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    
    smoothScroll();
    if (isMobile) {
      setCurrentIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
    } else {
      // For desktop, calculate next index with circular navigation
      const nextIndex = (currentIndex + 1) % services.length;
      setCurrentIndex(nextIndex > services.length - 3 ? 0 : nextIndex);
    }
  }, [currentIndex, isMobile, services.length, isAnimating, smoothScroll]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    
    smoothScroll();
    if (isMobile) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
    } else {
      // For desktop, calculate previous index with circular navigation
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex < 0 ? services.length - 3 : prevIndex);
    }
  }, [currentIndex, isMobile, services.length, isAnimating, smoothScroll]);

  const getVisibleServices = useCallback(() => {
    if (isMobile) {
      return [services[currentIndex]];
    } else {
      // Desktop: Always show exactly 3 boxes with smooth circular transition
      const visible = [];
      const totalServices = services.length;
      
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % totalServices;
        visible.push(services[index]);
      }
      
      return visible;
    }
  }, [currentIndex, isMobile]);

  const visibleServices = getVisibleServices();

  return (
    <section className="py-20" style={{ backgroundColor: "#0A1414" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#0A1414" }}>
            START A WIKI PAGE BY TRUSTING OUR FLAWLESS{" "}
            <span style={{ color: "#008060" }}>WIKIPEDIA</span> SERVICES
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "#6B6B6B" }}>
            We support your online credibility and take it to new heights with our comprehensive Wikipedia solutions.
          </p>
        </div>

        {/* Services Container with Navigation */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              backgroundColor: "#FFFFFF",
              border: "2px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 128, 96, 0.15)"
            }}
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: "#008060" }} />
          </button>

          {/* Services Grid */}
          <div className={`overflow-hidden px-4 md:px-0`}>
            <div 
              className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'} gap-6 md:gap-8 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'}`}
            >
              {visibleServices.map((service) => (
                <div 
                  key={service.id}
                  className="rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: service.bgColor,
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    minHeight: "420px"
                  }}
                >
                  {/* Icon Container */}
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 hover:scale-110 hover:rotate-3"
                    style={{ 
                      backgroundColor: `${service.color}10`,
                      boxShadow: `0 8px 25px ${service.color}25`,
                      border: `1px solid ${service.color}20`
                    }}
                  >
                    <service.icon 
                      className="w-10 h-10 transition-transform duration-300" 
                      style={{ color: service.color }} 
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-6"
                    style={{ color: "#000000" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base md:text-lg leading-relaxed mb-8"
                    style={{ color: "#6B6B6B" }}
                  >
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <button 
                    className="px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                    style={{ 
                      backgroundColor: service.color,
                      color: "#FFFFFF",
                      boxShadow: `0 4px 15px ${service.color}40`
                    }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              backgroundColor: "#FFFFFF",
              border: "2px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 128, 96, 0.15)"
            }}
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6" style={{ color: "#008060" }} />
          </button>
        </div>

        {/* Navigation Dots - Mobile */}
        {isMobile && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  smoothScroll();
                  setCurrentIndex(index);
                }}
                className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
                style={{ 
                  backgroundColor: currentIndex === index ? "#008060" : "#D1D5DB",
                  transform: currentIndex === index ? "scale(1.2)" : "scale(1)"
                }}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Navigation Dots - Desktop */}
        {!isMobile && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  smoothScroll();
                  setCurrentIndex(index * 3);
                }}
                className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
                style={{ 
                  backgroundColor: Math.floor(currentIndex / 3) === index ? "#008060" : "#D1D5DB",
                  transform: Math.floor(currentIndex / 3) === index ? "scale(1.2)" : "scale(1)"
                }}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Show All Services Button */}
        <div className="mt-20">
          <button 
            className="px-12 py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 active:translate-y-0"
            style={{ 
              backgroundColor: "#FFFFFF",
              color: "#008060",
              border: "2px solid #008060",
              boxShadow: "0 8px 25px rgba(0, 128, 96, 0.15)"
            }}
          >
            View All {services.length} Services
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#008060" }}>500+</div>
            <h4 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>Successful Pages</h4>
            <p style={{ color: "#6B6B6B" }}>Wikipedia pages created and maintained</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#00A37F" }}>98%</div>
            <h4 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>Approval Rate</h4>
            <p style={{ color: "#6B6B6B" }}>Of our created pages get approved</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#95BF47" }}>24/7</div>
            <h4 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>Support</h4>
            <p style={{ color: "#6B6B6B" }}>Monitoring and maintenance service</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .service-item {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Smooth transitions */
        * {
          scroll-behavior: smooth;
        }
        
        /* Better button transitions */
        button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Card hover effects */
        .hover-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
};

export default WikiServices;