import ContactForm from "./contact-form"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="/dark-tech-background.png"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-rotating-34533-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom duration-700">
            Be the next <br /> <span className="text-white">one to watch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom duration-1000">
            Dream big, build fast, and grow far on Shopify. The commerce platform for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
              Start free trial
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Watch the story
            </button>
          </div>
        </div>

        {/* Overlay Contact Form (Image 3) */}
        <div className="animate-in zoom-in duration-1000">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
