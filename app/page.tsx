// app/page.tsx
import { Hero } from "@/components/hero"
import { GlobeSection } from "@/components/globe-section"
import { Button } from "@/components/ui/button"
import ShopifySection from "@/components/ShopifySection"
import ShopifyPage from "@/components/ShopifyPage"
import ForeverCustomers from "@/components/ForeverCustomers"
import Popup from "@/components/Popup"
import WikipediaHeroSection from '@/components/WikipediaHeroSection';
import OurServicesSection from '@/components/OurServicesSection';
import WikiBenefitsScroll from '@/components/WikiBenefitsSection';
import WikiServices from "@/components/WikiServices";
import { WikipediaProcess } from "@/components/WikipediaProcess"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { MikiFooter } from "@/components/MikiFooter"
import { WorldMap } from "@/components/world-map"

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Popup shows after 4 seconds */}
      {/* <Popup /> */}

      <Hero />
      <ShopifySection />
      <ShopifyPage />
      <ForeverCustomers />
      <WikipediaHeroSection />
      <OurServicesSection />
      {/* <GlobeSection /> */}
      <WikiBenefitsScroll />
      {/* <WikiServices /> */}
      <WikipediaProcess />
      <TestimonialsSection />
      <FaqSection />
      
      {/* WorldMap Section - Shopify Inspired Design */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A1414] via-[#0A1414] to-[#000000] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A37F] to-transparent opacity-50" />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#008060]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#1E3AFF]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-30 px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008060]/20 border border-[#008060]/30 text-[#00A37F] text-xs font-bold uppercase tracking-widest mb-6">
              <div className="w-2 h-2 rounded-full bg-[#00A37F] animate-pulse" />
              LIVE GLOBAL CONNECTIONS
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95] mb-6">
              Worldwide network.
              <br />
              <span className="text-[#00A37F] italic">Local intelligence.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-[#6B6B6B] text-base md:text-lg font-medium">
              Seamlessly connect your infrastructure across the globe with our high-performance 
              mesh network. Real-time monitoring, enterprise security, and unlimited scalability.
            </p>
          </div>

        
          {/* WorldMap Component */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <WorldMap
              lineColor="#00A37F"
              dots={[
                {
                  start: { lat: 40.7128, lng: -74.0060, label: "New York" },
                  end: { lat: 51.5074, lng: -0.1278, label: "London" }
                },
                {
                  start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                  end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }
                },
                {
                  start: { lat: 28.6139, lng: 77.2090, label: "Delhi" },
                  end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" }
                },
                {
                  start: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
                  end: { lat: 55.7558, lng: 37.6173, label: "Moscow" }
                },
                {
                  start: { lat: -34.6037, lng: -58.3816, label: "Buenos Aires" },
                  end: { lat: 43.6532, lng: -79.3832, label: "Toronto" }
                },
                {
                  start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
                  end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }
                },
                {
                  start: { lat: 22.3193, lng: 114.1694, label: "Hong Kong" },
                  end: { lat: 48.8566, lng: 2.3522, label: "Paris" }
                }
              ]}
            />
            
            {/* Legend Overlay */}
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 z-40">
              <div className="text-sm font-semibold mb-3 text-white flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#00A37F] mr-2 animate-pulse" />
                Active Network Nodes
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#00A37F] mr-2"></div>
                  <span className="text-xs text-[#F5F5F7]">Primary Connection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6FD1A6] mr-2"></div>
                  <span className="text-xs text-[#F5F5F7]">Backup Route</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-0.5 bg-[#008060] mr-2"></div>
                  <span className="text-xs text-[#F5F5F7]">Data Flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MikiFooter />
    </div>
  )
}