"use client";

import { useState, useEffect } from "react";
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
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bg = document.querySelector(".hero-bg");
      if (bg) {
        const offset = window.scrollY * 0.2;
        bg.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particleOptions = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
    },
  };

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden font-sans"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* 🎥 Background GIF */}
      <div className="absolute inset-0 z-0 hero-bg">
        <Image
          src="https://res.cloudinary.com/dcahaaigp/image/upload/v1744561333/1085656-uhd_3840_2160_25fps-ezgif.com-video-to-gif-converter_1_ebwhnz.gif"
          alt="Smart Antenna Systems Background"
          fill
          className="object-cover object-center transition-transform duration-100"
        />
      </div>

      {/* 🟣 Particle Overlay */}
      {!prefersReducedMotion && (
        <Particles
          className="absolute inset-0 z-10"
          options={particleOptions}
        />
      )}

      {/* 🌫️ Gradient + Blur Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-black/10 to-black/40 backdrop-blur-[2px]" />

      {/* ✍️ Text & CTAs */}
      <motion.div
        className="relative z-30 text-center px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          {headline}
        </h1>

        {/* Underline */}
        <div
          className="w-28 h-1 mx-auto mb-6 rounded-full animate-pulse"
          style={{
            background:
              "linear-gradient(to right, var(--accent), var(--highlight))",
          }}
        />

        {/* Typing Animation */}
        <div className="text-lg md:text-2xl mb-10 leading-relaxed min-h-[2.5rem] text-[var(--text-secondary)]">
          <TypeAnimation
            sequence={subtitles.flatMap((text) => [text, 2000])}
            wrapper="p"
            repeat={Infinity}
            speed={50}
            className="inline-block"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            disabled={prefersReducedMotion}
          >
            <motion.a
              href={primaryCTA.href}
              className="inline-block py-3 px-8 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] hover:from-indigo-700 hover:to-purple-700 shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {primaryCTA.text}
            </motion.a>
          </Tilt>
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            disabled={prefersReducedMotion}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-3 px-8 rounded-full text-lg font-semibold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition shadow-md"
            >
              <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </motion.div>
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
}
