import Navbar from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"

const satoshiFont = localFont({
  src: "../../public/fonts/satoshi/Satoshi-Regular.otf",
  variable: "--font-satoshi",
})

export const metadata: Metadata = {
  title: "Yernar Mukayev",
  description: "Portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshiFont.variable} bg-[#222] font-satoshi text-sm text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
