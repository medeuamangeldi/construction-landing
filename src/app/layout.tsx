import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./_components/Menu/menu.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Alim Corporation",
  description:
    "Explore cutting-edge solutions for Bitcoin mining with our expert services in ASIC repair, microcircuit repair, and hashboard repair. Discover innovative cooling solutions, including adiabatic cooling and filtration solutions, designed to prevent Bitcoin mining overheating. Our metal building construction, featuring steel framing construction and adiabatic panels, ensures efficient operation by effectively separating the cold zone from the hot one. We specialize in daily operation and maintenance for top brands like Bitmain, Whatsminer, and Avalon miner. Optimize your mining setup today with our comprehensive services, including spreading gravel and industrial welding for enhanced durability.",
  keywords: [
    "Bitcoin mining",
    "Asic repair",
    "Adiabatic cooling",
    "Microcircuit repair",
    "Cooling solutions",
    "Metal Building Construction",
    "Hashboard repair",
    "Filtration solutions",
    "Bitmain",
    "Whatsminer",
    "Avalon miner",
    "Construction",
    "Adiabatic panels",
    "Bitcoin mining overheating",
    "Steel framing construction",
    "Separate the cold zone from the hot one",
    "Spread gravel",
    "Industrial Welding",
    "Daily operation and maintenance",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Menu /> */}
        {children}
      </body>
    </html>
  );
}
