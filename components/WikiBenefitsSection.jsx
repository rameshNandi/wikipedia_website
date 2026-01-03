"use client";
import { motion } from "framer-motion";
import { CheckCircle, DollarSign, Star, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function WikiBenefitsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother loading
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const cards = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "AFFORDABLE",
      text: "You won't find a guarantee on low cost, high standards, and dependability anywhere else.",
      color: "from-[#008060] to-[#00A37F]",
      iconColor: "#008060",
      textColor: "text-white",
      descColor: "text-[#95BF47]",
      borderColor: "border-[#F5F5F7]",
      index: 1
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "SATISFACTION",
      text: "There are no complaints, and unlimited revisions are available. Alternatively, you might get a full refund.",
      color: "from-[#1E3AFF] to-[#008060]",
      iconColor: "#1E3AFF",
      textColor: "text-white",
      descColor: "text-[#95BF47]",
      borderColor: "border-[#00A37F]/30",
      index: 2
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "VAST EXPERIENCE",
      text: "We employ professional authors who produce one-of-a-kind and exclusive content.",
      color: "from-[#00A37F] to-[#95BF47]",
      iconColor: "#00A37F",
      textColor: "text-white",
      descColor: "text-[#95BF47]",
      borderColor: "border-[#00A37F]/50",
      highlight: true,
      index: 3
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "SERVICES",
      text: "Complete anonymity, as well as adherence to Wikipedia's standards and policies.",
      color: "from-[#95BF47] to-[#6FD1A6]",
      iconColor: "#95BF47",
      textColor: "text-white",
      descColor: "text-[#95BF47]",
      borderColor: "border-[#F5F5F7]",
      index: 4
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0A1414] text-white overflow-hidden">
      {/* Optimized background - Remove heavy blur effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1414]" />
        <div 
          className="absolute top-1/4 -left-40 h-80 w-80 rounded-full opacity-[0.03]"
          style={{background: "linear-gradient(135deg, #008060 0%, #00A37F 100%)"}}
        />
        <div 
          className="absolute bottom-1/4 -right-40 h-80 w-80 rounded-full opacity-[0.02]"
          style={{background: "linear-gradient(135deg, #1E3AFF 0%, #008060 100%)"}}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Use transform-gpu for hardware acceleration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          style={{ transform: 'translateZ(0)' }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-[#008060]/10 text-[#95BF47] border border-[#008060]/20">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 px-4">
            <span className="text-white">ACHIEVE YOUR </span>
            <span className="relative inline-block">
              <span className="text-[#00A37F]">MILESTONES</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00A37F] to-transparent opacity-50" />
            </span>
            <br />
            <span className="text-white">WITH WIKI</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#95BF47] max-w-3xl mx-auto px-4">
            Providing compelling content written by professional Wikipedia writers that meets all essential requirements
          </p>
        </motion.div>

        {/* Cards Grid - Optimized with will-change and transform-gpu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          style={{ willChange: 'transform, opacity' }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              custom={i}
              whileHover="hover"
              initial="rest"
              animate="rest"
              style={{ 
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity'
              }}
              className={`relative group rounded-2xl bg-gradient-to-br from-[#0A1A1A] to-[#0A1414] ${card.borderColor} border shadow-lg p-6 md:p-8 h-full flex flex-col transition-all duration-200`}
            >
              {/* Number indicator - simplified */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#008060] to-[#00A37F] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">{card.index}</span>
              </div>
              
              {/* Highlight badge - simplified */}
              {card.highlight && (
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1E2D] to-[#FF4D5D] shadow-md z-10">
                  <span className="text-white font-semibold text-xs tracking-wide">POPULAR</span>
                </div>
              )}
              
              {/* Icon section - remove blur effect */}
              <div className="mb-6">
                <div className="relative inline-flex">
                  <div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-200`}
                  />
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#0A1414]/50 to-[#1A2A2A]/50 border border-[#00A37F]/10">
                    <div style={{ color: card.iconColor }}>
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${card.descColor} transition-colors duration-200`}>
                  {card.text}
                </p>
              </div>
              
              {/* Bottom accent - simplified animation */}
              <div className="mt-6 pt-5 border-t border-[#00A37F]/10">
                <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${card.color} transition-all duration-200 group-hover:w-16`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}