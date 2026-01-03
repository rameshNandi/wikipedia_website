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
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        setSliderImages(fallbackSliderImages);
        setStoryImages(fallbackStoryImages);
      } catch (err) {
        console.error('Error loading images:', err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchImages();

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
    const speed = 0.5;

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
    <section className="bg-[#0A1414] text-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider">Wikipedia Excellence</span>
            <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full" />
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
            className="overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              ref={sliderRef}
              className="flex gap-4 md:gap-6 transition-transform duration-1000 ease-linear"
              style={{ width: '300%' }}
            >
              {loading ? (
                [...Array(13)].map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                    <div className="bg-[#121212] p-8 h-48 md:h-64 lg:h-72 flex items-center justify-center animate-pulse">
                      <div className="text-[#95BF47] opacity-30">Loading...</div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {[...sliderImages, ...sliderImages.slice(0, 4)].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                      <div className="group relative overflow-hidden">
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
                  <div className="bg-[#121212] p-6">
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
            
            <button className="bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-3">
              <span>Explore Ways to Contribute</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF1E2D] rounded-full" />
                <span className="text-xs text-[#F5F5F7]">Verified Wikipedia Editors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1E3AFF] rounded-full" />
                <span className="text-xs text-[#F5F5F7]">Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#95BF47] rounded-full" />
                <span className="text-xs text-[#F5F5F7]">24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <div className="group">
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </div>
      
      {/* Content */}
      <h4 
        className="text-lg font-bold mb-2"
        style={{ color }}
      >
        {title}
      </h4>
      
      <p className="text-sm text-[#F5F5F7] leading-relaxed">
        {description}
      </p>
    </div>
  );
}