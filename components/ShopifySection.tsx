'use client';

import { useState, useEffect, useRef } from 'react';

export default function ShopifySection() {
  const [sliderImages, setSliderImages] = useState([]);
  const [storyImages, setStoryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Preload fallback images
  const fallbackSliderImages = [
     "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg?auto=compress&cs=tinysrgb&w=800",
     "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
     "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",,
     "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=800",
     "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
     "https://images.pexels.com/photos/3182804/pexels-photo-3182804.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
     "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800",
     "https://images.pexels.com/photos/2774551/pexels-photo-2774551.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const fallbackStoryImages = [
    "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        // For better performance, we'll use fallback images initially
        // and lazy load real images if needed
        setSliderImages(fallbackSliderImages);
        setStoryImages(fallbackStoryImages);
        
        // You can uncomment this and add your Pexels API key for real images
        /*
        const API_KEY = 'YOUR_PEXELS_API_KEY';
        const sliderResponse = await fetch(
          'https://api.pexels.com/v1/search?query=knowledge+library+people&per_page=13&orientation=landscape',
          { headers: { Authorization: API_KEY } }
        );

        const storyResponse = await fetch(
          'https://api.pexels.com/v1/search?query=community+collaboration+learning&per_page=3&orientation=landscape',
          { headers: { Authorization: API_KEY } }
        );

        if (sliderResponse.ok && storyResponse.ok) {
          const sliderData = await sliderResponse.json();
          const storyData = await storyResponse.json();

          const sliderPhotos = sliderData.photos.map(p => p.src.medium);
          const storyPhotos = storyData.photos.map(p => p.src.medium);

          setSliderImages(sliderPhotos.slice(0, 13));
          setStoryImages(storyPhotos.slice(0, 3));
        }
        */
        
      } catch (err) {
        console.error('Error loading images:', err);
        // Keep fallback images on error
      } finally {
        // Small delay for smooth loading animation
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchImages();

    // Cleanup
    return () => {
      setSliderImages([]);
      setStoryImages([]);
    };
  }, []);

  // Optimize slider animation
  useEffect(() => {
    if (!sliderRef.current || loading) return;

    const slider = sliderRef.current;
    let animationFrame: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (!isHovering) {
        position -= speed;
        if (position <= -slider.scrollWidth / 3) {
          position = 0;
        }
        slider.style.transform = `translateX(${position}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [loading, isHovering]);

  return (
    <section className="bg-gradient-to-b from-[#0A1414] to-[#121212] text-white py-12 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #95BF47 1px, transparent 1px),
                          linear-gradient(to bottom, #95BF47 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Floating Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#008060]/10 to-[#00A37F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-[#95BF47]/10 to-[#6FD1A6]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Wikipedia Excellence</span>
            <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Free <span className="text-[#95BF47]">Knowledge Platform</span><br />
            Behind It All
          </h2>
          
          <p className="text-lg md:text-xl text-[#F5F5F7] leading-relaxed">
            Read, learn, and share information with the world. From local history to global science,
            Wikipedia makes knowledge available to everyone — on any device, anywhere.
          </p>
        </div>

        {/* Slider Section */}
        <div className="mb-16 md:mb-24 relative">
          {/* Slider Container */}
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              ref={sliderRef}
              className="flex gap-4 md:gap-6 transition-transform duration-1000 ease-linear"
              style={{ width: '300%' }}
            >
              {/* First set of images */}
              {loading ? (
                [...Array(13)].map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                    <div className="bg-gradient-to-br from-[#0A1414] to-[#121212] rounded-xl p-8 h-48 md:h-64 lg:h-72 flex items-center justify-center border border-[#95BF47]/10 animate-pulse">
                      <div className="text-[#95BF47] opacity-30">Loading...</div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {[...sliderImages, ...sliderImages.slice(0, 4)].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                      <div className="group relative overflow-hidden rounded-xl">
                        {/* Image */}
                        <img
                          src={src}
                          className="w-full h-48 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                          alt={`Wikipedia Service ${(i % 13) + 1}`}
                          loading={i < 4 ? "eager" : "lazy"}
                          decoding="async"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#95BF47] rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-white uppercase">Service {((i % 13) + 1).toString().padStart(2, '0')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1414] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1414] to-transparent pointer-events-none" />
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#95BF47] w-6' : 'bg-[#95BF47]/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-16 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Built by <span className="text-[#95BF47]">Volunteers</span>,<br />
                Used by the <span className="text-[#00A37F]">World</span>
              </h3>
            </div>
            
            <div>
              <p className="text-[#F5F5F7] text-base md:text-lg leading-relaxed mb-6">
                Millions of editors, readers, and organizations help keep knowledge free — powering
                billions of page views every month across Wikipedia projects.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#95BF47]">55M+</div>
                  <div className="text-xs text-[#F5F5F7]">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#00A37F]">300+</div>
                  <div className="text-xs text-[#F5F5F7]">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#008060]">1B+</div>
                  <div className="text-xs text-[#F5F5F7]">Monthly Visits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gradient-to-br from-[#0A1414] to-[#121212] rounded-xl p-6 border border-[#95BF47]/10">
                    <div className="h-48 md:h-56 bg-[#95BF47]/10 rounded-lg mb-4" />
                    <div className="h-4 bg-[#95BF47]/10 rounded mb-3 w-2/3" />
                    <div className="space-y-2">
                      <div className="h-2 bg-[#95BF47]/10 rounded" />
                      <div className="h-2 bg-[#95BF47]/10 rounded w-5/6" />
                      <div className="h-2 bg-[#95BF47]/10 rounded w-4/5" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <StoryCard
                  image={storyImages[0]}
                  title="Start Contributing"
                  description="New editors around the world learn how to improve articles, cite reliable sources, and share knowledge that matters to their communities."
                  color="#95BF47"
                  icon="📝"
                />
                
                <StoryCard
                  image={storyImages[1]}
                  title="Grow Communities"
                  description="Local volunteer groups collaborate to maintain pages, translate content, and ensure information stays accurate and accessible."
                  color="#00A37F"
                  icon="👥"
                />
                
                <StoryCard
                  image={storyImages[2]}
                  title="Preserve Knowledge"
                  description="Libraries, museums, and universities work with Wikipedia to digitize archives and make cultural heritage freely available online."
                  color="#008060"
                  icon="🏛️"
                />
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-[#F5F5F7] max-w-2xl mb-2">
              Join thousands of satisfied clients who have established their digital presence with our professional Wikipedia services.
            </p>
            
            <button className="group relative bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-[#95BF47]/30 transition-all duration-300 flex items-center gap-3 overflow-hidden">
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative">Explore Ways to Contribute</span>
              <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF1E2D] rounded-full animate-pulse" />
                <span className="text-xs text-[#F5F5F7]">Verified Wikipedia Editors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1E3AFF] rounded-full animate-pulse" />
                <span className="text-xs text-[#F5F5F7]">Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#95BF47] rounded-full animate-pulse" />
                <span className="text-xs text-[#F5F5F7]">24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .optimized-image {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
        
        .slider-item {
          flex: 0 0 calc(100% / 4);
        }
        
        @media (max-width: 1024px) {
          .slider-item {
            flex: 0 0 calc(100% / 3);
          }
        }
        
        @media (max-width: 768px) {
          .slider-item {
            flex: 0 0 calc(100% / 2);
          }
        }
        
        @media (max-width: 640px) {
          .slider-item {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------- STORY CARD COMPONENT ---------- */
function StoryCard({ 
  image, 
  title, 
  description, 
  color,
  icon 
}: { 
  image: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}) {
  return (
    <div className="group relative bg-gradient-to-br from-[#0A1414] to-[#121212] rounded-xl p-6 border border-[#95BF47]/10 hover:border-[#95BF47]/30 transition-all duration-300 hover:-translate-y-2">
      {/* Corner Accents */}
      <div 
        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#95BF47]/30 rounded-tl-xl"
      />
      <div 
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#95BF47]/30 rounded-br-xl"
      />
      
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105 optimized-image"
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414]/60 via-transparent to-transparent" />
        
        {/* Icon Badge */}
        <div 
          className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
          style={{ 
            backgroundColor: `${color}20`,
            border: `2px solid ${color}40`
          }}
        >
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h4 
        className="text-lg font-bold mb-2 group-hover:tracking-wide transition-all duration-300"
        style={{ color }}
      >
        {title}
      </h4>
      
      <p className="text-sm text-[#F5F5F7] leading-relaxed">
        {description}
      </p>
      
      {/* Learn More Link */}
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold cursor-pointer group/link">
        <span 
          className="transition-all duration-300 group-hover/link:underline group-hover/link:tracking-wider"
          style={{ color }}
        >
          Learn More
        </span>
        <div 
          className="w-4 h-4 flex items-center justify-center rounded-full transition-all duration-300 group-hover/link:translate-x-1"
          style={{ 
            backgroundColor: `${color}20`,
            border: `1px solid ${color}40`
          }}
        >
          <svg 
            className="w-2 h-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}