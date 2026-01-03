import { Hero } from "@/components/hero"
import { GlobeSection } from "@/components/globe-section"
import { Button } from "@/components/ui/button"
import ShopifySection from "@/components/ShopifySection"
import ShopifyPage from "@/components/ShopifyPage"
import ForeverCustomers from "@/components/ForeverCustomers"
import Popup from "@/components/Popup"        // <-- ADD THIS
import WikipediaHeroSection from '@/components/WikipediaHeroSection';
import OurServicesSection from '@/components/OurServicesSection';
import WikiBenefitsScroll from '@/components/WikiBenefitsSection';
import WikiServices from "@/components/WikiServices";
import { WikipediaProcess } from "@/components/WikipediaProcess"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { Footer } from "@/components/Footer"

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
         <Footer />
    </div>
  )
}
