import Link from "next/link"

const footerSections = [
  {
    title: "Shopify",
    links: ["About", "Careers", "Investors", "Press and Media", "Social Impact"],
  },
  {
    title: "Support",
    links: ["Merchant Support", "Help Center", "Hire a Partner", "Shopify Community"],
  },
  {
    title: "Developers",
    links: ["Shopify Dev", "API Documentation", "Dev Degree", "Shopify Marketplace"],
  },
  {
    title: "Products",
    links: ["Shop", "Shop Pay", "Shopify Plus", "Shopify Commerce Cloud"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">S</div>
              <span className="text-xl font-bold tracking-tight">shopify</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Empowering independent business owners worldwide. Built for developers, for entrepreneurs, for everyone.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-10">
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-white">
              Sitemap
            </Link>
          </div>
          <p className="text-xs text-gray-600">© 2025 Shopify Clone Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
