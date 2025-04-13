"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Tilt from "react-parallax-tilt";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function FacilitiesHighlights() {
  const [theme, setTheme] = useState("dark");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      rotate: 1.5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const particleOptions = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
      opacity: { value: 0.25, random: true },
      size: { value: 2.5, random: true },
      shape: { type: "circle" },
      move: {
        enable: true,
        speed: 0.6,
        out_mode: "out",
        random: true,
      },
    },
  };

  const facilities = [
    {
      title: "Anechoic Chamber",
      img: "https://res.cloudinary.com/dcahaaigp/image/upload/v1744536101/maritime_antenna_in_specialized_antenna_anechoic_chamber_at_the_new_Surface_Sensors_and_Combat_Systems_F_dc1f39.jpg",
      specs: ["Dimensions: 7.5m x 5m x 3.3m", "Freq: 700 MHz – 40 GHz"],
      desc: "Quiet Zone: 1m³, reflection -40dB, ripple ±1.5dB, Test distance: 5m.",
    },
    {
      title: "Microwave & Test Equipment",
      img: "https://res.cloudinary.com/dcahaaigp/image/upload/v1744536255/microwave-lab-kit_s8tdg0.jpg",
      specs: ["Vector Network Analyzers", "4–8 GHz Phase Shifters"],
      desc: "Includes ZVB40, ZVL6, RF power meters, calibration kits.",
    },
    {
      title: "EMI/EMC Facility",
      img: "https://res.cloudinary.com/dcahaaigp/image/upload/v1744536207/EMIEMC-Laboratory-IMG_wcbrjr.jpg",
      specs: ["EMI Receivers", "Near-Field Probes"],
      desc: "Includes LISN, probes for EMI/EMC testing and certification.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background Particles */}
      <Particles className="absolute inset-0 z-0" options={particleOptions} />

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-14 font-orbitron"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Facilities & Equipment
        <div
          className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
          style={{
            background:
              "linear-gradient(to right, var(--accent), var(--highlight))",
          }}
        />
      </motion.h2>

      {/* Facility Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {facilities.map((item, idx) => (
          <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              className="rounded-2xl overflow-hidden backdrop-blur-lg shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-3 min-h-[48px] text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.desc}
                </p>
                <ul
                  className="text-sm space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.specs.map((spec, i) => (
                    <li key={i}>• {spec}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-16 flex justify-center">
        <Link
          href="/facilities"
          className="py-3 px-8 rounded-full text-lg font-semibold text-white transition hover:scale-105"
          style={{
            background:
              "linear-gradient(to right, var(--accent), var(--highlight))",
            boxShadow: "0 4px 20px rgba(0, 225, 255, 0.2)",
          }}
        >
          Explore All Facilities
        </Link>
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
