import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Wikipedia  | By Wikipedia , Wikipedia ",
  description: "Wikipedia is a free online encyclopedia that anyone can edit, covering a wide range of topics in multiple languages",
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-border py-12 px-6 text-center text-muted-foreground">
          <p>© 2026 DevPlatform. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
