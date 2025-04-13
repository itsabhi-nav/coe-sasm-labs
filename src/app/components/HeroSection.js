"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function HeroSection({
  headline = "Centre of Excellence in Smart Antenna Systems & Measurements",
  subtitles = [
    "Advancing RF & Microwave Design, Optimization, and Measurement",
    "Innovating Antenna Systems for the Future",
    "Pioneering Research in Smart Technologies",
  ],
  primaryCTA = { text: "Discover More", href: "#introduction" },
  secondaryCTA = { text: "Contact Us", href: "/contact" },
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    const handler = () => setTheme(localStorage.getItem("theme") || "dark");
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const particleOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 20, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      opacity: { value: 0.2, random: true },
      size: { value: 2, random: true },
      shape: { type: "circle" },
      move: { enable: true, speed: 0.3, out_mode: "out" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dcahaaigp/video/upload/f_auto:video,q_auto/p9xll7iisai5y2pj6qc3"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Fallback Image if needed */}
      {/* <Image src="/images/hero-bg.jpg" layout="fill" objectFit="cover" className="z-0" alt="Hero Background" /> */}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm" />

      {/* Particles */}
      <Particles className="absolute inset-0 z-10" options={particleOptions} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {headline}
        </motion.h1>

        {/* Animated Subtitles */}
        <TypeAnimation
          sequence={[...subtitles.flatMap((line) => [line, 2000])]}
          wrapper="p"
          className="text-white text-lg sm:text-xl md:text-2xl mt-6"
          repeat={Infinity}
        />

        {/* CTAs */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link
            href={primaryCTA.href}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:opacity-90 transition"
          >
            {primaryCTA.text}
          </Link>
          <Link
            href={secondaryCTA.href}
            className="border border-white text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
          >
            {secondaryCTA.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
