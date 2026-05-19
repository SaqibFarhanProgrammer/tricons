import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import Footer from "@/sections/Footer";
import { createMetadata, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = createMetadata({
  title: `${site.name} — Web Design, Development & Digital Marketing`,
  description: site.description,
  path: "/",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
