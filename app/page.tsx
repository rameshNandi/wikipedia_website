import { Hero } from "@/components/hero"
import { GlobeSection } from "@/components/globe-section"
import { Button } from "@/components/ui/button"
import ShopifySection from "@/components/ShopifySection"
import ShopifyPage from "@/components/ShopifyPage"
import ForeverCustomers from "@/components/ForeverCustomers"
import Popup from "@/components/Popup"        // <-- ADD THIS

export default function Home() {
  return (
    <div className="flex flex-col relative">

      {/* Popup shows after 4 seconds */}
      <Popup />

      <Hero />
      <ShopifySection />
      <ShopifyPage />
      <ForeverCustomers />
      <GlobeSection />
    </div>
  )
}
