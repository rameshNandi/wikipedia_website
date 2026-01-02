"use server"

export async function submitContactForm(formData: FormData) {
  // Extract data
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // You would use environment variables from process.env.EMAIL_API_KEY
  console.log("[v0] Form submitted:", { name, email, subject, message })

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
