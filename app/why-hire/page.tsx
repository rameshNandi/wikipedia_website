import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Expert developers with 10+ years of experience",
  "Tailored solutions for your specific business needs",
  "24/7 priority support and maintenance",
  "Scalable architecture that grows with you",
  "Cutting-edge security and performance standards",
  "Transparent communication and agile workflow",
]

export default function WhyHirePage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Why Hire Us?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just build websites; we build engines for growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-4 items-start p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="relative h-full bg-[#111] border border-white/10 rounded-[3rem] p-8 flex flex-col justify-center text-center">
              <div className="text-8xl font-black text-primary mb-4">98%</div>
              <p className="text-2xl font-bold uppercase tracking-widest text-muted-foreground">Client Satisfaction</p>
              <div className="mt-12 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
