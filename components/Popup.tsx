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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-11/12 p-6 md:p-8 text-gray-800">
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        {/* Popup image */}
        <div className="mb-4">
          <Image
            src="/popup-image.jpg" // <-- Replace with your image path
            alt="Popup Image"
            width={600}
            height={300}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Popup text */}
        <div className="text-gray-700 space-y-3 text-sm md:text-base">
          <p>
            1. Wiki Excel is an independent publishing entity and is not affiliated with, endorsed by, or connected to Wikipedia®. Any similarity in name is purely for marketing and identification purposes. All trademarks and brand names remain the property of their respective owners.
          </p>
          <p>
            2. Wiki Excel is a wholly independent publishing organization. We are not affiliated with, sponsored by, or in any way connected to Wikipedia® or any of its parent or subsidiary companies. The inclusion of these terms in our name is intended solely for marketing distinction and does not imply any form of partnership or endorsement. All referenced trademarks are the property of their respective owners.
          </p>
          <p>
            3. We operate as an independent publishing service. Our name may reference Wikipedia, but we have no official connection or partnership with the platform. The use of such terms is solely intended for branding and promotional clarity.
          </p>
        </div>
      </div>
    </div>
  );
}
