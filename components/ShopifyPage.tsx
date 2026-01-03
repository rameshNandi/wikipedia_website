'use client';
import { useState, useEffect } from 'react';

export default function WikipediaPage() {
  const [loading, setLoading] = useState(false);

  // Predefined images without API calls for faster loading
  const images = {
    hero: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600",
    posDevice: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishChannels: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800",
    checkoutCard: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1414] text-white py-12 md:py-20 px-4 md:px-6">

      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full" />
          <span className="text-xs font-bold uppercase tracking-wider">Wikipedia Access</span>
          <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full" />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Explore <span className="text-[#95BF47]">Knowledge</span> Everywhere
        </h1>

        <p className="text-lg md:text-xl text-[#F5F5F7] max-w-3xl">
          Get access to comprehensive articles that are curated collaboratively. 
          Read, learn, and contribute freely to the world's largest encyclopedia.
        </p>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="overflow-hidden rounded-xl md:rounded-2xl">
          {loading ? (
            <div className="w-full h-64 md:h-80 lg:h-96 bg-[#121212] animate-pulse rounded-xl"></div>
          ) : (
            <img
              src={images.hero}
              alt="Wikipedia website interface showcasing articles and navigation"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
              loading="eager"
            />
          )}
        </div>
      </div>

      {/* ===== WIKIPEDIA FEATURE CARDS ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* CARD 1: Reading articles */}
        <div className="bg-[#121212] rounded-xl md:rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 overflow-hidden rounded-lg">
            {loading ? (
              <div className="w-full h-48 bg-[#95BF47]/10 animate-pulse rounded-lg"></div>
            ) : (
              <img
                src={images.posDevice}
                alt="People reading encyclopedia articles on a tablet or device"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Access Articles Anywhere
            </h3>
            <p className="text-sm text-[#F5F5F7] leading-relaxed">
              Read detailed articles on various topics and keep your knowledge
              up-to-date across devices with{" "}
              <span className="text-[#95BF47] font-semibold">
                Wikipedia
              </span>
              .
            </p>
          </div>
        </div>

        {/* CARD 2: Multichannel contributions */}
        <div className="bg-[#121212] rounded-xl md:rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 overflow-hidden rounded-lg">
            {loading ? (
              <div className="w-full h-48 bg-[#00A37F]/10 animate-pulse rounded-lg"></div>
            ) : (
              <img
                src={images.publishChannels}
                alt="Online knowledge platforms for publishing and contributing content"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Contribute and Share Knowledge
            </h3>
            <p className="text-sm text-[#F5F5F7] leading-relaxed">
              Share information and edits that help millions learn and
              discover across the web with{" "}
              <span className="text-[#00A37F] font-semibold">
                multichannel contributions
              </span>
              .
            </p>
          </div>
        </div>

        {/* CARD 3: Comprehensive reference */}
        <div className="bg-[#121212] rounded-xl md:rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 overflow-hidden rounded-lg">
            {loading ? (
              <div className="w-full h-48 bg-[#008060]/10 animate-pulse rounded-lg"></div>
            ) : (
              <img
                src={images.checkoutCard}
                alt="Encyclopedia book stack representing comprehensive reference content"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Comprehensive Knowledge Base
            </h3>
            <p className="text-sm text-[#F5F5F7] leading-relaxed">
              Wikipedia provides thorough and well-referenced content,
              allowing users to learn about virtually any subject freely.
            </p>
          </div>
        </div>

      </div>

      {/* ===== STATS SECTION ===== */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-[#121212] p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#95BF47] mb-1">55M+</div>
            <div className="text-xs md:text-sm text-[#F5F5F7]">Wikipedia Articles</div>
          </div>
          <div className="bg-[#121212] p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#00A37F] mb-1">1B+</div>
            <div className="text-xs md:text-sm text-[#F5F5F7]">Monthly Visitors</div>
          </div>
          <div className="bg-[#121212] p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#008060] mb-1">300+</div>
            <div className="text-xs md:text-sm text-[#F5F5F7]">Languages</div>
          </div>
          <div className="bg-[#121212] p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#1E3AFF] mb-1">24/7</div>
            <div className="text-xs md:text-sm text-[#F5F5F7]">Available Access</div>
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="max-w-3xl mx-auto mt-16 md:mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Your Wikipedia Journey Today
        </h2>
        
        <p className="text-[#F5F5F7] mb-8">
          Explore millions of articles and contribute to the world's knowledge
        </p>
        
        <button className="bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          <span>Explore Wikipedia</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}