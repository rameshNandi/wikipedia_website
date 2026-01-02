export function GlobeSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">There's no better place for you to build</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">The world's best-converting checkout</h3>
              <div className="flex gap-12 mt-8">
                <div>
                  <p className="text-4xl font-bold text-primary">15%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">Conversion Boost</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-secondary">150M+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">Annual Users</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                Platform Checkout converts 15% higher on average than other commerce platforms and exposes your brand to
                over 150 million buy-ready shoppers.
              </p>
            </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
            {/* Animated Globe Effect */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl" />
            <div className="relative w-full h-full rounded-full border border-primary/20 flex items-center justify-center animate-rotate-globe">
              {/* Visual Globe Representation */}
              <div className="absolute inset-0 rounded-full bg-[url('/glowing-dark-globe-map-wireframe.jpg')] bg-cover opacity-60" />
              <div className="w-[90%] h-[90%] rounded-full border border-secondary/10" />
              <div className="w-[70%] h-[70%] rounded-full border border-primary/10" />
              {/* Glowing dots to simulate active nodes */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#22d3ee]" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#a855f7]" />
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#22d3ee]" />
            </div>

            {/* Center core glow */}
            <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
