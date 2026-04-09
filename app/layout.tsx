import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import "./globals.css";

/* 🔥 Premium Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/* 🔥 SEO */
export const metadata: Metadata = {
  title: "Acharya Timbers & Furnitures - Premium Sawmill Solutions",
  description:
    "Industrial-grade sawmill solutions featuring advanced timber cutting and processing machines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-gradient-to-br from-[#f8f6f3] via-[#f1ede7] to-[#e8e2d9] text-gray-900`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-20">
          {children}
        </main>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}