'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'WIKIPEDIA PROFILES', value: 1200, replacementText: 'INFLUENTIAL PAGES' },
  { label: 'YEARS OF EXPERIENCE', value: 10, replacementText: 'DECADE OF EXPERTISE' },
  { label: 'COUNTRIES REACHED', value: 150, replacementText: 'GLOBAL REACH' },
  { label: 'HAPPY CLIENTS', value: 1000, replacementText: 'SATISFIED PARTNERS' },
];

export default function WikipediaHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [boxPositions, setBoxPositions] = useState(stats.map(() => false));
  const [heroContentVisible, setHeroContentVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHeroContentVisible(true);
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    if (heroRef.current) heroObserver.observe(heroRef.current);
    
    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    // Reset states
    setCounts(stats.map(() => 0));
    setBoxPositions(stats.map(() => false));
    
    // First: Count up animation
    stats.forEach((stat, i) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 40);
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
          
          // After all numbers reach their max, wait 5 seconds then show boxes
          if (i === stats.length - 1) {
            setTimeout(() => {
              // Animate boxes rising one by one
              stats.forEach((_, idx) => {
                setTimeout(() => {
                  setBoxPositions(prev => {
                    const updated = [...prev];
                    updated[idx] = true;
                    return updated;
                  });
                }, idx * 400);
              });
            }, 5000);
          }
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 25);
    });
  };

  const resetAndAnimate = () => {
    setHasAnimated(false);
    setHeroContentVisible(false);
    startAnimation();
  };

  return (
    <section className="font-sans overflow-hidden">

      {/* ===== TOP DARK STATS BAR ===== */}
      <div ref={ref} className="bg-[#0A1414] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 text-center relative z-10">
            {stats.map((item, i) => (
              <div key={i} className="min-h-[100px] md:min-h-[120px] relative px-2">
                {/* Number Display with Counting */}
                <div className={`transition-all duration-500 ${boxPositions[i] ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
                    {counts[i]}
                  </h2>
                  <p className="text-[10px] md:text-xs tracking-widest text-[#95BF47] px-1">
                    {item.label}
                  </p>
                </div>

                {/* Replacement Text Box */}
                <div 
                  className={`
                    absolute inset-0 bg-[#0A1414] border border-[#95BF47] 
                    rounded-lg p-3 md:p-4 shadow-xl transition-all duration-700
                    flex flex-col items-center justify-center mx-1
                    ${boxPositions[i] ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                  `}
                  style={{
                    transitionDelay: `${i * 400}ms`,
                    boxShadow: boxPositions[i] ? '0 0 20px rgba(149, 191, 71, 0.3)' : 'none',
                  }}
                >
                  <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#95BF47] leading-tight text-center mb-1 md:mb-2 px-1">
                    {item.replacementText}
                  </h2>
                  <p className="text-[10px] md:text-xs tracking-widest text-[#95BF47] opacity-80">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            {boxPositions.map((isUp, i) => (
              <div
                key={i}
                className={`
                  absolute top-1/2 left-1/2 w-24 md:w-32 h-24 md:h-32 rounded-full 
                  bg-[#95BF47] blur-2xl md:blur-3xl transition-all duration-1000
                  ${isUp ? 'opacity-15 md:opacity-20' : 'opacity-0'}
                `}
                style={{
                  transform: `translate(-50%, -50%) translateX(${(i - 1.5) * 150}px)`,
                  transitionDelay: `${i * 400}ms`,
                }}
              />
            ))}
          </div>

          {/* Reset Button */}
          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={resetAndAnimate}
              className="text-xs md:text-sm text-[#95BF47] border border-[#95BF47] px-3 md:px-4 py-1.5 md:py-2 rounded hover:bg-[#95BF47] hover:text-[#0A1414] transition-colors"
            >
              Replay Animation
            </button>
          </div>
        </div>
      </div>

      {/* ===== HERO CONTENT SECTION ===== */}
      <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-[#0A1414] via-[#0A1414] to-[#121212] py-12 md:py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #95BF47 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          {/* Animated Border Container */}
          <div className={`
            absolute inset-x-4 md:inset-x-6 top-4 md:top-6 bottom-4 md:bottom-6 rounded-2xl md:rounded-3xl 
            transition-all duration-1000
            ${heroContentVisible ? 'opacity-100' : 'opacity-0'}
            border-2 border-transparent
            hover:border-[#95BF47] transition-colors duration-300
          `} style={{
            background: 'linear-gradient(45deg, #0A1414, #121212)',
            boxShadow: heroContentVisible ? '0 10px 40px rgba(0, 0, 0, 0.8)' : 'none'
          }}>
            {/* Animated Border Effects */}
            <div className={`
              absolute inset-0 rounded-2xl md:rounded-3xl 
              transition-all duration-1500
              ${heroContentVisible ? 'opacity-100' : 'opacity-0'}
            `} style={{
              background: 'linear-gradient(45deg, transparent, rgba(149, 191, 71, 0.1), transparent)'
            }} />
          </div>
          
          {/* Corner Accents */}
          <div className={`
            absolute top-4 md:top-6 left-4 md:left-6 w-6 md:w-8 h-6 md:h-8 
            rounded-tl-xl md:rounded-tl-2xl transition-all duration-1000
            ${heroContentVisible ? 'opacity-100' : 'opacity-0 translate-y-2 md:translate-y-4 translate-x-2 md:translate-x-4'}
          `} style={{
            background: 'linear-gradient(135deg, #95BF47, #00A37F)'
          }} />
          <div className={`
            absolute top-4 md:top-6 right-4 md:right-6 w-6 md:w-8 h-6 md:h-8 
            rounded-tr-xl md:rounded-tr-2xl transition-all duration-1000
            ${heroContentVisible ? 'opacity-100' : 'opacity-0 translate-y-2 md:translate-y-4 -translate-x-2 md:-translate-x-4'}
          `} style={{
            background: 'linear-gradient(225deg, #95BF47, #00A37F)'
          }} />
          <div className={`
            absolute bottom-4 md:bottom-6 left-4 md:left-6 w-6 md:w-8 h-6 md:h-8 
            rounded-bl-xl md:rounded-bl-2xl transition-all duration-1000
            ${heroContentVisible ? 'opacity-100' : 'opacity-0 -translate-y-2 md:-translate-y-4 translate-x-2 md:translate-x-4'}
          `} style={{
            background: 'linear-gradient(45deg, #95BF47, #00A37F)'
          }} />
          <div className={`
            absolute bottom-4 md:bottom-6 right-4 md:right-6 w-6 md:w-8 h-6 md:h-8 
            rounded-br-xl md:rounded-br-2xl transition-all duration-1000
            ${heroContentVisible ? 'opacity-100' : 'opacity-0 -translate-y-2 md:-translate-y-4 -translate-x-2 md:-translate-x-4'}
          `} style={{
            background: 'linear-gradient(315deg, #95BF47, #00A37F)'
          }} />

          {/* Floating Glow Effects */}
          <div className={`
            absolute top-1/4 left-1/4 w-40 md:w-64 h-40 md:h-64 rounded-full 
            bg-[#008060] blur-2xl md:blur-3xl transition-all duration-2000
            ${heroContentVisible ? 'opacity-10' : 'opacity-0'}
          `} />
          <div className={`
            absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full 
            bg-[#95BF47] blur-2xl md:blur-3xl transition-all duration-2000 delay-500
            ${heroContentVisible ? 'opacity-10' : 'opacity-0'}
          `} />

          {/* Hero Content */}
          <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center z-10">
            
            {/* LEFT - Wikipedia Logo */}
            <div className={`
              text-center transition-all duration-1000 delay-300
              ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-8'}
              order-2 lg:order-1
            `}>
              <div className="relative inline-block">
                <div className="relative w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 mx-auto">
                  {/* Wikipedia Globe with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#95BF47] via-[#00A37F] to-[#008060] rounded-full opacity-20 blur-lg md:blur-xl animate-pulse" />
                  <div className="absolute inset-3 md:inset-4 bg-gradient-to-br from-[#0A1414] to-[#121212] rounded-full" />
                  <div className="relative flex items-center justify-center w-full h-full">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#95BF47]">W</div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00A37F] ml-1 md:ml-2">iki</div>
                  </div>
                </div>
                {/* Decorative Rings */}
                <div className={`
                  absolute -inset-2 md:-inset-4 border border-[#95BF47] rounded-full
                  transition-all duration-1000 delay-700
                  ${heroContentVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}
                `} />
                <div className={`
                  absolute -inset-4 md:-inset-8 border border-[#00A37F]/50 rounded-full
                  transition-all duration-1000 delay-900
                  ${heroContentVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-50'}
                `} />
              </div>
              <h2 className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Wikipedia
              </h2>
              <p className="text-lg md:text-xl text-[#95BF47] mt-1 md:mt-2">
                The Free Encyclopedia
              </p>
              <div className="mt-3 md:mt-4 inline-flex items-center gap-2 bg-[#0A1414] border border-[#95BF47] px-3 md:px-4 py-1 md:py-2 rounded-full">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF1E2D] rounded-full animate-pulse" />
                <span className="text-xs md:text-sm text-[#95BF47]">Trusted Since 2014</span>
              </div>
            </div>

            {/* RIGHT - Content Box */}
            <div className={`
              bg-gradient-to-br from-[#0A1414] to-[#121212] 
              rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#95BF47]/20
              shadow-xl md:shadow-2xl transition-all duration-1000 delay-500
              ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-8'}
              hover:border-[#95BF47]/40 transition-colors duration-300
              order-1 lg:order-2
            `}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-3 md:px-4 py-1 md:py-2 rounded-full mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
                  Premium Service
                </span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0A1414] rounded-full animate-pulse" />
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                PROFESSIONAL WIKIPEDIA PAGE
              </h3>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#95BF47] mb-4 md:mb-6">
                CREATION SERVICES
              </h3>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <p className="text-sm md:text-base text-[#F5F5F7] leading-relaxed md:leading-7">
                  When the digital market is fuming with fierce competition and a
                  drastic need to bring innovation is the need of the hour no
                  matter in which field you operate, that is where we come in to
                  save the day.
                </p>

                <p className="text-sm md:text-base text-[#F5F5F7] leading-relaxed md:leading-7">
                  We bring you a wide range of custom Wikipedia page creation
                  services to help you get acknowledged and noticed in no time.
                  Our top-of-the-line Wikipedia page creators know the policies
                  inside out.
                </p>
              </div>

              {/* Stats inside hero */}
              <div className="mb-6 md:mb-8 grid grid-cols-3 gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-[#0A1414] to-[#121212] rounded-lg border border-[#95BF47]/20">
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#95BF47]">24/7</div>
                  <div className="text-[10px] md:text-xs text-[#F5F5F7]">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#95BF47]">100%</div>
                  <div className="text-[10px] md:text-xs text-[#F5F5F7]">Approval Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#95BF47]">30 Days</div>
                  <div className="text-[10px] md:text-xs text-[#F5F5F7]">Delivery</div>
                </div>
              </div>

              <button className={`
                w-full bg-gradient-to-r from-[#95BF47] to-[#00A37F] 
                text-[#0A1414] px-4 md:px-6 lg:px-8 py-3 md:py-4 uppercase tracking-wider font-bold 
                text-sm md:text-base rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#95BF47]/30
                active:scale-[0.98] transition-all duration-300
                flex items-center justify-center gap-2 md:gap-3
                ${heroContentVisible ? 'opacity-100' : 'opacity-0'}
              `}>
                <span>Contact With Us</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Trust Badges */}
              <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-6">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#FF1E2D] rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs text-[#F5F5F7]">Verified Editors</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#1E3AFF] rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs text-[#F5F5F7]">Wikipedia Certified</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#95BF47] rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs text-[#F5F5F7]">Money Back Guarantee</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#95BF47]/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs md:text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00A37F] rounded-full" />
                    <span className="text-[#F5F5F7]">No Advance Payment</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00A37F] rounded-full" />
                    <span className="text-[#F5F5F7]">100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}