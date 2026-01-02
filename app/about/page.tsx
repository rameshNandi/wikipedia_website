export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-8 text-center">About Our Platform</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            We started with a simple goal: build the tools we wished we had. Today, our platform powers thousands of
            high-growth businesses worldwide.
          </p>
          <p className="text-lg text-muted-foreground mt-6">
            Our team consists of developers who have built some of the most complex systems on the web. We understand
            the challenges of scaling, security, and performance because we live them every day.
          </p>
        </div>
        <div className="aspect-square bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
          <div className="relative h-full border border-white/10 rounded-2xl flex items-center justify-center">
            <span className="text-6xl font-bold opacity-20 italic">SINCE 2018</span>
          </div>
        </div>
      </div>
    </div>
  )
}
