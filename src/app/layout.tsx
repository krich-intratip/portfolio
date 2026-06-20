import type { Metadata } from "next";
import { Trirong, Sarabun } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const trirong = Trirong({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-trirong",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "พลโท ดร.กริช อินทราทิพย์ | Lt.Gen. Krich Intratip, Ph.D.",
  description: "ผู้เชี่ยวชาญด้านยุทธศาสตร์ ความมั่นคง การพัฒนาทรัพยากรมนุษย์ และการประยุกต์ใช้ AI | Strategic Security, Human Development & AI Governance Specialist",
  keywords: ["Krich Intratip", "Lt.Gen. Krich", "AI Governance", "Strategic Security", "Human Development", "Digital Transformation", "Thailand", "Military Strategy"],
  authors: [{ name: "Lt.Gen. Krich Intratip, Ph.D." }],
  creator: "Lt.Gen. Krich Intratip, Ph.D.",
  publisher: "Lt.Gen. Krich Intratip, Ph.D.",
  metadataBase: new URL('https://krich-intratip-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://krich-intratip-portfolio.vercel.app',
    title: 'พลโท ดร.กริช อินทราทิพย์ | Lt.Gen. Krich Intratip, Ph.D.',
    description: 'ผู้เชี่ยวชาญด้านยุทธศาสตร์ ความมั่นคง การพัฒนาทรัพยากรมนุษย์ และการประยุกต์ใช้ AI',
    siteName: 'Lt.Gen. Krich Intratip — Executive Portfolio',
    images: [
      {
        url: '/assets/mypic.jpg',
        width: 1200,
        height: 630,
        alt: 'พลโท ดร.กริช อินทราทิพย์',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'พลโท ดร.กริช อินทราทิพย์ | Lt.Gen. Krich Intratip, Ph.D.',
    description: 'ผู้เชี่ยวชาญด้านยุทธศาสตร์ ความมั่นคง และการประยุกต์ใช้ AI',
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
      { url: '/icon.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/icon.jpg', type: 'image/jpeg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`scroll-smooth ${trirong.variable} ${sarabun.variable}`}>
      <body className="font-body antialiased text-ink-primary bg-void-navy">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
