import { Code2, Globe, Rocket, Shield } from "lucide-react"

const services = [
  {
    title: "Custom Storefronts",
    desc: "Build unique shopping experiences with our powerful GraphQL API.",
    icon: Code2,
  },
  {
    title: "Global Hosting",
    desc: "Edge-native infrastructure that scales instantly with your traffic.",
    icon: Globe,
  },
  {
    title: "B2B Solutions",
    desc: "Enterprise-grade features for wholesale and volume commerce.",
    icon: Rocket,
  },
  {
    title: "Advanced Security",
    desc: "PCI compliance and fraud protection built into the core.",
    icon: Shield,
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        Everything you need to build, launch, and scale modern commerce.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
