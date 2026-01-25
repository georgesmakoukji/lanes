import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: "Lanes — Future of Shipping",
  description:
    "Lanes is a shipping facilitation partner that orchestrates carriers, customs, and logistics so your team can focus on growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}


