import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dr. Krich Intratip | Knowledge Manager & AI Implementation Specialist",
  description: "ผู้เชี่ยวชาญด้าน Assessment Systems, PMQA/ก.พ.ร. Framework และการบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์ มีประสบการณ์กว่า 20 ปี",
  keywords: ["Knowledge Manager", "AI Implementation", "PMQA", "Assessment Systems", "AI Specialist", "Thailand"],
  authors: [{ name: "Dr. Krich Intratip" }],
  creator: "Dr. Krich Intratip",
  publisher: "Dr. Krich Intratip",
  metadataBase: new URL('https://krich-intratip-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://krich-intratip-portfolio.vercel.app',
    title: 'Dr. Krich Intratip | Knowledge Manager & AI Implementation Specialist',
    description: 'ผู้เชี่ยวชาญด้าน Assessment Systems, PMQA/ก.พ.ร. Framework และการบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์',
    siteName: 'Dr. Krich Intratip Portfolio',
    images: [
      {
        url: '/assets/mypic.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Krich Intratip',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Krich Intratip | Knowledge Manager & AI Implementation Specialist',
    description: 'ผู้เชี่ยวชาญด้าน Assessment Systems และการบูรณาการ AI',
    images: ['/assets/mypic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-slate-200 bg-slate-950 selection:bg-sky-500/30 selection:text-sky-200`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
