import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "How does the conversion boost work?",
    a: "Our checkout is optimized using data from millions of transactions, ensuring the smoothest path from cart to completion.",
  },
  {
    q: "Is it suitable for small businesses?",
    a: "Absolutely. While we offer enterprise-grade features, our platform is designed to scale with you from your first sale.",
  },
  {
    q: "What APIs are available?",
    a: "We offer comprehensive GraphQL and REST APIs for every part of our platform, from inventory to customer management.",
  },
]

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2">
            Support Center
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about building your next project with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border/50 rounded-2xl px-6 py-2 hover:border-primary/30 transition-all data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="text-left text-xl font-bold hover:no-underline hover:text-primary transition-colors py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 pt-2">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-primary/10 to-purple-500/10 border border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-8">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}
