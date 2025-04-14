// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import { Orbitron, Inter } from "next/font/google";
import Loader from "./loader"; //
// Load both fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "COE-SASM | Excellence in Smart Antenna Systems",
  description: "Centre of Excellence in Smart Antenna Systems & Measurements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`
          ${orbitron.variable} 
          ${inter.variable} 
          font-sans 
          bg-[var(--bg-primary)] 
          text-[var(--text-primary)] 
          transition-colors duration-300
        `}
      >
        <Loader />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
