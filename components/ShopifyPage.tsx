"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function WikipediaPage() {
  const [images, setImages] = useState({
    hero: '',
    posDevice: '',
    publishChannels: '',
    checkoutCard: ''
  });
  const [loading, setLoading] = useState(true);

  // Fetch images from Pexels API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const API_KEY = 'YOUR_PEXELS_API_KEY'; // Replace with your Pexels API key
        
        const queries = {
          hero: 'wikipedia website interface',
          posDevice: 'people reading encyclopedia on tablet',
          publishChannels: 'online knowledge platforms',
          checkoutCard: 'encyclopedia book stack'
        };

        const fetchPromises = Object.entries(queries).map(async ([key, query]) => {
          try {
            const response = await fetch(
              `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
              { headers: { Authorization: API_KEY } }
            );

            if (response.ok) {
              const data = await response.json();
              return { key, url: data.photos[0]?.src.large || '' };
            }
            return { key, url: '' };
          } catch (error) {
            console.error(`Error fetching ${key} image:`, error);
            return { key, url: '' };
          }
        });

        const results = await Promise.all(fetchPromises);
        const newImages = {};
        results.forEach(result => {
          newImages[result.key] = result.url;
        });

        setImages({
          hero: newImages.hero || 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600',
          posDevice: newImages.posDevice || 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=800',
          publishChannels: newImages.publishChannels || 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
          checkoutCard: newImages.checkoutCard || 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
        });

      } catch (error) {
        console.error('Error fetching images:', error);
        // Fallback images
        setImages({
          hero: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600',
          posDevice: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=800',
          publishChannels: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
          checkoutCard: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Card background gradient style
  const cardGradientStyle = {
    background: 'linear-gradient(135deg, #0E2A2A 0%, #0C2323 45%, #0A1C1C 100%)'
  };

  return (
    <div className="min-h-screen bg-[#0A1414] text-white px-6 md:px-20 py-16">

      {/* ===== HEADER ===== */}
      <div className="max-w-5xl mx-auto mb-14">
        <p className="text-sm text-[#22D3EE] mb-3">Online and in person</p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Explore knowledge everywhere
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-3xl">
          Get access to{" "}
          <span className="underline underline-offset-4">
            comprehensive articles
          </span>{" "}
          that are curated collaboratively. Read, learn, and contribute freely to
          the world's largest encyclopedia.
        </p>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-[#0F1C1C] rounded-2xl p-4 md:p-6">
          <div className="relative overflow-hidden rounded-xl h-[400px] md:h-[500px]">
            {loading ? (
              <div className="w-full h-full bg-gray-800 animate-pulse rounded-xl"></div>
            ) : (
              <Image
                src={images.hero}
                alt="Wikipedia website interface showcasing articles and navigation"
                fill
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            )}
          </div>
        </div>
      </div>

      {/* ===== WIKIPEDIA STYLE CARDS ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* CARD 1: Reading articles */}
        <div 
          className="rounded-2xl p-6 md:p-8 min-h-[480px] md:min-h-[520px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
          style={cardGradientStyle}
        >
          <div className="flex justify-center items-center h-[280px] md:h-[320px]">
            {loading ? (
              <div className="w-full h-full bg-gray-800/50 animate-pulse rounded-xl"></div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={images.posDevice}
                  alt="People reading encyclopedia articles on a tablet or device"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Access articles anywhere
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Read detailed articles on various topics and keep your knowledge
              up-to-date across devices with{" "}
              <span className="text-[#22D3EE] underline underline-offset-4">
                Wikipedia
              </span>
              .
            </p>
          </div>
        </div>

        {/* CARD 2: Multichannel contributions */}
        <div 
          className="rounded-2xl p-6 md:p-8 min-h-[480px] md:min-h-[520px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
          style={cardGradientStyle}
        >
          <div className="flex justify-center items-center h-[280px] md:h-[320px]">
            {loading ? (
              <div className="w-full h-full bg-gray-800/50 animate-pulse rounded-xl"></div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={images.publishChannels}
                  alt="Online knowledge platforms for publishing and contributing content"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Contribute and share knowledge
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Share information and edits that help millions learn and
              discover across the web with{" "}
              <span className="text-[#22D3EE] underline underline-offset-4">
                multichannel contributions
              </span>
              .
            </p>
          </div>
        </div>

        {/* CARD 3: Comprehensive reference */}
        <div 
          className="rounded-2xl p-6 md:p-8 min-h-[480px] md:min-h-[520px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
          style={cardGradientStyle}
        >
          <div className="flex justify-center items-center h-[280px] md:h-[320px]">
            {loading ? (
              <div className="w-full h-full bg-gray-800/50 animate-pulse rounded-xl"></div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={images.checkoutCard}
                  alt="Encyclopedia book stack representing comprehensive reference content"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Comprehensive knowledge base
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Wikipedia provides thorough and well-referenced content,
              allowing users to learn about virtually any subject freely.
            </p>
          </div>
        </div>

      </div>

      {/* ===== FOOTER NOTE ===== */}
      {loading && (
        <div className="max-w-7xl mx-auto mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Loading images from Pexels API...
          </p>
        </div>
      )}
    </div>
  );
}
