"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import Link from "next/link";
import dynamic from "next/dynamic";
import Tilt from "react-parallax-tilt";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function IntroductionSection() {
  const [theme, setTheme] = useState("dark");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particleOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value:
          typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 25,
        density: { enable: true, value_area: 800 },
      },
      color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      move: { enable: true, speed: 0.5, out_mode: "out" },
    },
  };

  const textToSpeak = `
    The Centre of Excellence in Smart Antenna Systems & Measurements at RV College of Engineering is dedicated to the analysis, design, optimization, and measurement of RF and microwave devices for wireless and defence applications. Established with the support of Rashtreeya Sikshana Samithi Trust, our state-of-the-art facility features cutting-edge equipment—including anechoic chambers, vector network analyzers, and EMI/EMC test beds—to support both funded R&D projects and consultancy.
  `;

  const speakNow = () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "en-IN"; // 🌐 You can change to "hi-IN", "en-US", etc.
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    setHasSpoken(true);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speakNow();
    }
  };

  // 🔊 Speak when section is scrolled into view
  useEffect(() => {
    if (isInView && !hasSpoken && !prefersReducedMotion) {
      speakNow();
    }
  }, [isInView]);

  // ✍️ Per-letter animation setup
  const animatedHeading = Array.from("Welcome to COE-SASM").map((char, idx) => (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {!prefersReducedMotion && (
        <Particles className="absolute inset-0 z-0" options={particleOptions} />
      )}

      {/* Background Blur */}
      <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-sm" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* ✍️ Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 font-orbitron"
          initial="hidden"
          animate="visible"
        >
          {animatedHeading}
          <div
            className="w-24 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The Centre of Excellence in Smart Antenna Systems & Measurements at RV
          College of Engineering is dedicated to the analysis, design,
          optimization, and measurement of RF and microwave devices for wireless
          and defence applications.
          <br />
          <br />
          Established with the support of Rashtreeya Sikshana Samithi Trust
          (RSST), our state-of-the-art facility features cutting-edge
          equipment—including anechoic chambers, vector network analyzers, and
          EMI/EMC test beds—to support both funded R&D projects and consultancy.
        </motion.p>

        {/* 🔊 Narration Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={toggleSpeech}
            className="p-3 rounded-full border-2 hover:scale-105 transition"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
            aria-label={isSpeaking ? "Stop narration" : "Start narration"}
          >
            {isSpeaking ? (
              <FiVolumeX className="w-6 h-6" />
            ) : (
              <FiVolume2 className="w-6 h-6" />
            )}
          </button>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <Link
              href="/about"
              className="inline-block px-8 py-3 text-base sm:text-lg font-semibold rounded-full shadow-md transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(to right, var(--accent), var(--highlight))",
                color: "#ffffff",
              }}
            >
              Learn More
            </Link>
          </Tilt>
        </motion.div>
      </div>

      {/* Ambient Glow Orbs */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
