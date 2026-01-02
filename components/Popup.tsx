"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Popup() {
  const [show, setShow] = useState(false);

  // Show popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
        {/* Header with gradient - Slimmed */}
        <div 
          className="px-6 py-3 text-white"
          style={{ 
            background: 'linear-gradient(135deg, #0A1414 0%, #008060 100%)'
          }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Important Notice</h3>
              <p className="text-xs opacity-90">Please read carefully</p>
            </div>
            <button
              onClick={() => setShow(false)}
              className="text-white hover:text-gray-200 text-xl font-bold transition-transform hover:scale-110 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              ×
            </button>
          </div>
        </div>

        {/* Popup content - Reduced height */}
        <div className="bg-white p-5">
          {/* Popup image - Smaller */}
          <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 relative">
            <Image
              src="/popup_img.png"
              alt="Popup Image"
              width={800}
              height={160}
              className="w-full h-[140px] object-cover"
              priority
            />
            {/* Image badge */}
            <div className="absolute top-2 right-2">
              <span className="bg-[#00A37F] text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                Official
              </span>
            </div>
          </div>

          {/* Popup text content - Compact */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {/* Notice 1 */}
            <div className="p-3 rounded-lg bg-[#F5F5F7] border-l-3 border-[#008060]">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#008060] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <p className="text-[#6B6B6B] text-sm leading-snug">
                  Wiki Excel is an independent publishing entity and is not affiliated with, endorsed by, or connected to Wikipedia®. Any similarity in name is purely for marketing and identification purposes.
                </p>
              </div>
            </div>

            {/* Notice 2 */}
            <div className="p-3 rounded-lg bg-[#F5F5F7] border-l-3 border-[#00A37F]">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00A37F] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <p className="text-[#6B6B6B] text-sm leading-snug">
                  Wiki Excel is a wholly independent publishing organization. We are not affiliated with, sponsored by, or in any way connected to Wikipedia® or any of its parent or subsidiary companies.
                </p>
              </div>
            </div>

            {/* Notice 3 */}
            <div className="p-3 rounded-lg bg-[#F5F5F7] border-l-3 border-[#95BF47]">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#95BF47] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <p className="text-[#6B6B6B] text-sm leading-snug">
                  We operate as an independent publishing service. Our name may reference Wikipedia, but we have no official connection or partnership with the platform.
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons - Compact */}
          <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setShow(false)}
              className="flex-1 px-4 py-2.5 bg-[#008060] text-white font-semibold rounded-lg hover:bg-[#006d4d] transition-colors duration-300 text-sm shadow"
            >
              I Understand
            </button>
            <button
              onClick={() => {
                // Add your contact/link action here
                window.open('/contact', '_blank');
              }}
              className="flex-1 px-4 py-2.5 border border-[#008060] text-[#008060] font-semibold rounded-lg hover:bg-[#F5F5F7] transition-colors duration-300 text-sm"
            >
              Learn More
            </button>
          </div>

          {/* Footer note - Smaller */}
          <p className="mt-3 text-xs text-center text-[#6B6B6B]">
            Required legal disclosure.{" "}
            <span 
              className="text-[#008060] font-medium cursor-pointer hover:underline"
              onClick={() => window.open('/legal', '_blank')}
            >
              Legal Info
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}