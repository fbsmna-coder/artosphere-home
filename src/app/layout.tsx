import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artosphere — Two Parameters. All of Physics.",
  description:
    "The Artosphere ecosystem: scientific journal with triple-lock priority, DeFi protocol governed by golden ratio physics, and on-chain discovery verification. 36 parameters of nature from M_Pl and φ.",
  keywords: [
    "Artosphere",
    "golden ratio",
    "DeSci",
    "scientific journal",
    "blockchain",
    "Base",
    "ARTS token",
    "physics",
    "Planck mass",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
