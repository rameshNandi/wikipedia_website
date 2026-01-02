"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions"
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isPending, setIsPending] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = [
    "Individual / Personal Brand",
    "Business / Corporation",
    "Non-Profit Organization",
    "Artist / Creative Professional",
    "Academic / Researcher",
    "Other",
  ]

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your eligibility report is being generated.",
          className: "bg-gradient-to-r from-[#008060] to-[#00A37F] text-white",
        })
      } else {
        throw new Error()
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="relative w-full">
      {/* Form Card */}
      <div className="bg-gradient-to-br from-[#0A1414] to-[#0A1414]/95 rounded-2xl p-5 sm:p-6 space-y-5 shadow-2xl border border-[#008060]/30 backdrop-blur-sm">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#008060]/30 to-[#00A37F]/30 mb-1">
            <CheckCircle className="h-5 w-5 text-[#00A37F]" />
          </div>
          <h2 className="text-xl font-black text-[#FFFFFF] tracking-tight">
            Check Your Wikipedia Eligibility for FREE!
          </h2>
          <p className="text-[#6FD1A6] font-medium text-sm">
            Get a professional assessment to see if you're eligible for a Wikipedia page.
          </p>
        </div>

        {/* Form */}
        <form action={handleSubmit} className="space-y-4">
          {/* Category Selector */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-[#FFFFFF] font-semibold text-xs">
              Are you a? <span className="text-[#FF1E2D]">*</span>
            </Label>
            <div className="relative">
              <select
                id="category"
                name="category"
                required
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-10 px-3 bg-[#0A1414]/90 text-[#FFFFFF] text-sm rounded-lg border border-[#008060]/40 focus:border-[#00A37F] focus:ring-2 focus:ring-[#00A37F]/30 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0A1414]">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-[#0A1414] text-sm">
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-[#6FD1A6] pointer-events-none" />
            </div>
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="company" className="text-[#FFFFFF] font-semibold text-xs">
              Enter Your Company Name <span className="text-[#FF1E2D]">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              required
              placeholder="e.g., Acme Corporation"
              className="h-10 px-3 bg-[#0A1414]/90 text-[#FFFFFF] text-sm rounded-lg border border-[#008060]/40 focus:border-[#00A37F] focus:ring-2 focus:ring-[#00A37F]/30 placeholder:text-[#6FD1A6]/60"
            />
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#FFFFFF] font-semibold text-xs">
              Your Name <span className="text-[#FF1E2D]">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="h-10 px-3 bg-[#0A1414]/90 text-[#FFFFFF] text-sm rounded-lg border border-[#008060]/40 focus:border-[#00A37F] focus:ring-2 focus:ring-[#00A37F]/30 placeholder:text-[#6FD1A6]/60"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#FFFFFF] font-semibold text-xs">
              Email Address <span className="text-[#FF1E2D]">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="h-10 px-3 bg-[#0A1414]/90 text-[#FFFFFF] text-sm rounded-lg border border-[#008060]/40 focus:border-[#00A37F] focus:ring-2 focus:ring-[#00A37F]/30 placeholder:text-[#6FD1A6]/60"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#FFFFFF] font-semibold text-xs">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="h-10 px-3 bg-[#0A1414]/90 text-[#FFFFFF] text-sm rounded-lg border border-[#008060]/40 focus:border-[#00A37F] focus:ring-2 focus:ring-[#00A37F]/30 placeholder:text-[#6FD1A6]/60"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-gradient-to-r from-[#008060] to-[#00A37F] text-white font-bold text-base rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#008060]/40"
          >
            {isPending ? "Generating Report..." : "Get FREE Eligibility Report"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-[#6FD1A6]/70 text-xs pt-3 border-t border-[#008060]/20">
          By submitting, you agree to our terms. We'll contact you within 24 hours.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#95BF47]/20 rounded-full blur-xl -z-10" />
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#1E3AFF]/15 rounded-full blur-xl -z-10" />
    </div>
  )
}