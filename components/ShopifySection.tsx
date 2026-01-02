"use client";

import { useState, useEffect } from 'react';

export default function ShopifySection() {
  const [sliderImages, setSliderImages] = useState([]);
  const [storyImages, setStoryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

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
        } else {
          setFallbackImages();
        }
      } catch (err) {
        console.error(err);
        setFallbackImages();
      } finally {
        setLoading(false);
      }
    };

    const setFallbackImages = () => {
      setSliderImages([
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
      ]);

      setStoryImages([
        "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]);
    };

    fetchImages();
  }, []);

  return (
    <section className="bg-[#0A1414] text-white py-12 md:py-24">
      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .slider-container { overflow: hidden; position: relative; width: 100%; }
        .slider-track {
          display: flex; gap: 1.5rem; width: 300%;
          animation: slideLeft 50s linear infinite;
        }
        .slider-item { flex: 0 0 calc(100% / 3); }
        @media (max-width: 768px) {
          .slider-track { animation: slideLeft 40s linear infinite; }
          .slider-item { flex: 0 0 calc(100% / 2); }
        }
        @media (max-width: 640px) { .slider-item { flex: 0 0 100%; } }
        .gradient-overlay {
          position: absolute; top: 0; height: 100%; width: 100px;
          pointer-events: none; z-index: 10;
        }
        .gradient-left { left: 0; background: linear-gradient(to right, #0A1414 0%, transparent 100%); }
        .gradient-right { right: 0; background: linear-gradient(to left, #0A1414 0%, transparent 100%); }
        @media (max-width: 768px) { .gradient-overlay { width: 60px; } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 md:mb-6">
          The free knowledge platform behind it all
        </h2>

        <p className="text-xl sm:text-2xl md:text-3xl text-[#6B6B6B] max-w-4xl mb-8 md:mb-14 leading-relaxed">
          Read, learn, and share information with the world. From local history to global science,
          Wikipedia makes knowledge available to everyone — on any device, anywhere.
        </p>

        <div className="mb-16 md:mb-28">
          {loading ? (
            <div className="flex gap-4 md:gap-6 animate-pulse">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-1/3">
                  <div className="rounded-2xl bg-gray-800 h-48 md:h-64 lg:h-80" />
                </div>
              ))}
            </div>
          ) : (
            <div className="slider-container rounded-2xl">
              <div className="slider-track">
                {[...sliderImages, ...sliderImages.slice(0, 3)].map((src, i) => (
                  <div key={i} className="slider-item px-1 md:px-0">
                    <img
                      src={src}
                      className="rounded-2xl w-full h-48 md:h-64 lg:h-80 object-cover"
                      alt={`Knowledge showcase ${(i % 13) + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="gradient-overlay gradient-left"></div>
              <div className="gradient-overlay gradient-right"></div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 md:mb-10 gap-4 md:gap-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl">
            Built by volunteers, used by the world
          </h3>

          <p className="text-[#6B6B6B] text-base md:text-lg max-w-md">
            Millions of editors, readers, and organizations help keep knowledge free — powering
            billions of page views every month across Wikipedia projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-2xl bg-gray-800 h-48 md:h-64 mb-4"></div>
                <div className="h-4 bg-gray-800 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-800 rounded mb-1"></div>
                <div className="h-3 bg-gray-800 rounded w-5/6"></div>
              </div>
            ))
          ) : (
            <>
              <div>
                <img
                  src={storyImages[0]}
                  className="rounded-2xl mb-4 w-full h-48 md:h-64 object-cover"
                  alt="New editors learning to contribute"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold mb-2">Start contributing</h4>
                <p className="text-[#B3B3B3] text-sm md:text-base">
                  New editors around the world learn how to improve articles, cite reliable sources,
                  and share knowledge that matters to their communities.
                </p>
              </div>

              <div>
                <img
                  src={storyImages[1]}
                  className="rounded-2xl mb-4 w-full h-48 md:h-64 object-cover"
                  alt="Growing communities"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold mb-2">Grow communities</h4>
                <p className="text-[#B3B3B3] text-sm md:text-base">
                  Local volunteer groups collaborate to maintain pages, translate content,
                  and ensure information stays accurate and accessible.
                </p>
              </div>

              <div>
                <img
                  src={storyImages[2]}
                  className="rounded-2xl mb-4 w-full h-48 md:h-64 object-cover"
                  alt="Institutions sharing archives"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold mb-2">Preserve knowledge</h4>
                <p className="text-[#B3B3B3] text-sm md:text-base">
                  Libraries, museums, and universities work with Wikipedia to digitize archives
                  and make cultural heritage freely available online.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center md:justify-start">
          <button className="mt-4 md:mt-6 px-6 md:px-7 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition font-medium text-sm md:text-base w-full md:w-auto">
            Explore ways to contribute
          </button>
        </div>
      </div>
    </section>
  );
}
