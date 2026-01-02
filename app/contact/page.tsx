import { ContactForm } from "@/components/contact-form"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold mb-6">Let's build together</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind? Our team of experts is ready to help you architect and build your next big idea.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">Email Us</p>
                <p className="text-lg font-medium">hello@devplatform.io</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">Call Us</p>
                <p className="text-lg font-medium">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
