export default function DevSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">By developers, for developers</h2>
          <p className="text-xl text-gray-400">
            APIs, primitives, and tools empower devs and partners to build the apps, themes, and custom storefronts
            businesses are looking for.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass rounded-3xl p-8 overflow-hidden aspect-video flex items-center justify-center">
            {/* Visualizing the UI mockups from Image 2 */}
            <div className="grid grid-cols-12 gap-4 w-full h-full">
              <div className="col-span-8 bg-[#111] rounded-xl border border-white/10 p-4 shadow-2xl relative">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-1/2 bg-white/5 rounded" />
                  <div className="h-4 w-2/3 bg-cyan-500/20 rounded border border-cyan-500/30" />
                  <div className="h-4 w-1/3 bg-white/5 rounded" />
                </div>
                <div className="absolute -right-10 top-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
              </div>
              <div className="col-span-4 space-y-4">
                <div className="bg-[#111] rounded-xl border border-white/10 p-4 h-1/2 shadow-2xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4" />
                  <div className="h-3 w-full bg-white/5 rounded mb-2" />
                  <div className="h-3 w-3/4 bg-white/5 rounded" />
                </div>
                <div className="bg-cyan-600/10 border border-cyan-500/30 rounded-xl p-4 h-1/2 flex items-center justify-center">
                  <span className="text-cyan-400 font-mono font-bold">hydrogen.app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
