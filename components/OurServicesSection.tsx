'use client';

import { useState } from 'react';

const services = [
  {
    title: "Research & Copy writing",
    desc: "Before we start working on Wikipedia pages, our research team analyzes all there is to know about your brand, ensuring accurate and comprehensive content.",
    icon: "📚",
    features: ["Deep Market Analysis", "Competitor Research", "Content Strategy", "SEO Optimization"],
    gradient: "from-[#0A1414] via-[#121212] to-[#0A1414]",
    accentColor: "#008060",
    badgeColor: "bg-gradient-to-r from-[#008060] to-[#00A37F]"
  },
  {
    title: "Page Translation",
    desc: "Get your page translated to several languages from our language experts. We ensure precise translation with complete quality assurance.",
    icon: "🌍",
    features: ["30+ Languages", "Native Translators", "Cultural Adaptation", "Quality Checks"],
    gradient: "from-[#0A1414] via-[#121212] to-[#0A1414]",
    accentColor: "#00A37F",
    badgeColor: "bg-gradient-to-r from-[#00A37F] to-[#95BF47]"
  },
  {
    title: "Page Creation",
    desc: "Our page creation complies with all Wikipedia guidelines and is bound to add value to the brand/individual with proper citation and referencing.",
    icon: "📄",
    features: ["Wikipedia Guidelines", "Proper Citations", "Neutral Tone", "Quick Approval"],
    gradient: "from-[#0A1414] via-[#121212] to-[#0A1414]",
    accentColor: "#95BF47",
    badgeColor: "bg-gradient-to-r from-[#95BF47] to-[#6FD1A6]"
  },
  {
    title: "Maintenance & Monitoring",
    desc: "Our team monitors and maintains the page regularly to keep you safe from any unknown and illicit alterations on your Wikipedia page.",
    icon: "⚙️",
    features: ["24/7 Monitoring", "Edit Protection", "Update Alerts", "Backup Systems"],
    gradient: "from-[#0A1414] via-[#121212] to-[#0A1414]",
    accentColor: "#1E3AFF",
    badgeColor: "bg-gradient-to-r from-[#1E3AFF] to-[#008060]"
  },
  {
    title: "Page Editing",
    desc: "We ensure the best writing in the least time possible, saving you time and money without compromising quality.",
    icon: "✏️",
    features: ["Professional Editors", "Quick Turnaround", "Quality Assurance", "Feedback Integration"],
    gradient: "from-[#0A1414] via-[#121212] to-[#0A1414]",
    accentColor: "#FF1E2D",
    badgeColor: "bg-gradient-to-r from-[#FF1E2D] to-[#95BF47]"
  },
  {
    title: "Page Updates",
    desc: "We guarantee that you will have faultless information on your Wikipedia page, and we will maintain it and keep it up-to-date with regular revisions.",
    icon: "🔄",
    features: ["Regular Updates", "Fact Checking", "Trend Integration", "Performance Reports"],
    gradient: "from-[#0A1414] via-[#121212] to-[#0A1414]",
    accentColor: "#6FD1A6",
    badgeColor: "bg-gradient-to-r from-[#6FD1A6] to-[#00A37F]"
  },
];

export default function OurServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0A1414] via-[#121212] to-[#0A1414] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #95BF47 1px, transparent 1px),
                          linear-gradient(to bottom, #95BF47 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating Glow Effects */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#008060]/10 to-[#00A37F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#95BF47]/10 to-[#6FD1A6]/10 rounded-full blur-3xl" />
        
        {/* Animated Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#95BF47] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#00A37F] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#008060] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-6 py-2 rounded-full mb-4 md:mb-6">
            <span className="w-2 h-2 bg-[#0A1414] rounded-full animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider">Our Expertise</span>
            <span className="w-2 h-2 bg-[#0A1414] rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-[#95BF47]">Wikipedia Services</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#F5F5F7] max-w-3xl mx-auto">
            Professional Wikipedia solutions with complete compliance, expert research, and ongoing support 
            to establish your authoritative digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
              />
            ))}
          </div>

          {/* Center Globe */}
          <div className="flex justify-center items-center py-8 lg:py-0 order-first lg:order-none">
            <div className="relative w-64 md:w-80 lg:w-[380px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#95BF47] via-[#00A37F] to-[#008060] rounded-full opacity-10 blur-2xl animate-pulse" />
              
              {/* Animated Rings */}
              <div className="absolute inset-0 border border-[#95BF47]/20 rounded-full animate-spin-slow">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#95BF47] to-[#00A37F] rounded-full" />
              </div>
              <div className="absolute inset-8 border border-[#00A37F]/10 rounded-full animate-spin-slower">
                <div className="absolute -bottom-4 right-1/4 w-3 h-3 bg-gradient-to-r from-[#00A37F] to-[#008060] rounded-full" />
              </div>
              
              {/* Globe Container */}
              <div className="relative bg-gradient-to-br from-[#0A1414] to-[#121212] rounded-full p-8 shadow-2xl border border-[#95BF47]/10">
                {/* Inner Glow */}
                <div className="absolute inset-4 bg-gradient-to-br from-[#95BF47]/5 via-[#00A37F]/5 to-[#008060]/5 rounded-full blur-lg" />
                
                {/* Globe Image */}
                <img
                  src="/world-globe.png"
                  alt="Global Reach"
                  className="relative w-full h-auto drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 md:-right-4 bg-gradient-to-br from-[#0A1414] to-[#121212] border-2 border-[#95BF47] rounded-full p-2 md:p-3 shadow-lg animate-float">
                <div className="text-sm md:text-base font-bold text-[#95BF47]">🌍</div>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-left-4 bg-gradient-to-br from-[#0A1414] to-[#121212] border-2 border-[#008060] rounded-full p-2 md:p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm md:text-base font-bold text-[#008060]">✨</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index + 3}
                service={service}
                index={index + 3}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
              />
            ))}
          </div>

        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatItem 
            number="100%" 
            label="Client Satisfaction" 
            icon="😊"
            gradient="from-[#95BF47] to-[#00A37F]"
          />
          <StatItem 
            number="24/7" 
            label="Support Available" 
            icon="🛡️"
            gradient="from-[#00A37F] to-[#008060]"
          />
          <StatItem 
            number="500+" 
            label="Projects Completed" 
            icon="🚀"
            gradient="from-[#008060] to-[#1E3AFF]"
          />
          <StatItem 
            number="30+" 
            label="Languages Supported" 
            icon="🌐"
            gradient="from-[#1E3AFF] to-[#95BF47]"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20">
          <div className="relative bg-gradient-to-r from-[#0A1414] to-[#121212] rounded-2xl p-6 md:p-8 border border-[#95BF47]/20 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #95BF47 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            {/* Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-[#95BF47] rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-[#95BF47] uppercase tracking-wider">Limited Time Offer</span>
                  <span className="w-2 h-2 bg-[#95BF47] rounded-full animate-pulse" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Start Your Wikipedia Journey Today
                </h3>
                <p className="text-[#F5F5F7] text-sm md:text-base">
                  Get a free consultation and receive 20% off your first project.
                </p>
              </div>
              <button className="group bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#95BF47]/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0">
                <span className="group-hover:scale-105 transition-transform">Get Free Quote</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-5deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .card-glow {
          position: relative;
          overflow: hidden;
        }
        
        .card-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--glow-color, rgba(149, 191, 71, 0.1)) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .card-glow:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

/* ---------- SERVICE CARD COMPONENT ---------- */
function ServiceCard({ 
  service, 
  index, 
  hoveredCard, 
  onHover 
}: { 
  service: any;
  index: number;
  hoveredCard: number | null;
  onHover: (index: number | null) => void;
}) {
  const isHovered = hoveredCard === index;

  return (
    <div
      className={`
        group relative bg-gradient-to-br ${service.gradient} 
        rounded-2xl p-6 md:p-8 border border-[#95BF47]/10
        transition-all duration-500 hover:-translate-y-2 card-glow
        ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-xl'}
      `}
      style={{
        '--glow-color': `${service.accentColor}20`,
      } as React.CSSProperties}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Hover Border Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, ${service.accentColor}15, transparent)`,
          border: `1px solid ${service.accentColor}30`
        }}
      />
      
      {/* Corner Accents */}
      <div 
        className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#95BF47]/30 rounded-tl-2xl"
      />
      <div 
        className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#95BF47]/30 rounded-br-2xl"
      />

      {/* Icon Badge */}
      <div className="relative mb-6">
        <div 
          className={`absolute -inset-3 rounded-xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500 ${service.badgeColor}`}
        />
        <div 
          className={`relative w-14 h-14 rounded-xl flex items-center justify-center text-2xl border ${service.badgeColor}`}
          style={{ 
            borderColor: `${service.accentColor}40`,
            background: `linear-gradient(135deg, ${service.accentColor}15, ${service.accentColor}05)`
          }}
        >
          <span>{service.icon}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#95BF47] transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#F5F5F7] mb-6 leading-relaxed">
        {service.desc}
      </p>

      {/* Features List */}
      <div className="space-y-2 mb-6">
        {service.features.map((feature: string, i: number) => (
          <div key={i} className="flex items-center gap-3">
            <div 
              className={`w-2 h-2 rounded-full flex-shrink-0 ${service.badgeColor}`}
            />
            <span className="text-sm text-[#F5F5F7] font-medium">{feature}</span>
          </div>
        ))}
      </div>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer group/link">
        <span 
          className="transition-all duration-300 group-hover/link:underline group-hover/link:tracking-wider"
          style={{ color: service.accentColor }}
        >
          Learn More
        </span>
        <div 
          className="w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-110"
          style={{ 
            backgroundColor: `${service.accentColor}20`,
            border: `1px solid ${service.accentColor}40`
          }}
        >
          <svg 
            className="w-3 h-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: service.accentColor }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------- STAT ITEM COMPONENT ---------- */
function StatItem({ number, label, icon, gradient }: { 
  number: string; 
  label: string; 
  icon: string;
  gradient: string;
}) {
  return (
    <div className="group relative bg-gradient-to-br from-[#0A1414] to-[#121212] rounded-xl p-4 md:p-6 border border-[#95BF47]/10 hover:border-[#95BF47]/30 transition-all duration-300 hover:-translate-y-1">
      {/* Hover Effect */}
      <div 
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${gradient}`}
      />
      
      <div className="relative flex items-center gap-3 md:gap-4">
        <div 
          className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold bg-gradient-to-r ${gradient} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div>
          <div 
            className={`text-lg md:text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
          >
            {number}
          </div>
          <div className="text-xs md:text-sm text-[#F5F5F7] mt-1">{label}</div>
        </div>
      </div>
    </div>
  );
}