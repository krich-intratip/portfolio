import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dr.Krich Intratip",
  description: "Knowledge Manager & AI Implementation Specialist - Professional Portfolio",
  icons: {
    icon: '/assets/mypic.jpg',
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
