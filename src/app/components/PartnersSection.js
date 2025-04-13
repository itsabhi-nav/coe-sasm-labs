"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function PartnersSection() {
  const partners = [
    {
      name: "Honeywell",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXuvsjvAti3lVZSLKjIplV2TU9qIh474Nxg&s",
    },
    {
      name: "NAL-CSIR",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldhi_uAsCwxegr4_Y6FuyXuqCEFjvdipAeg&s",
    },
    {
      name: "Wave-Com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GBah4UxZZzaSKnQikZcr36U7bWCivoDVhA&s",
    },
    {
      name: "RSST",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRIdsmP6saXg_3oWwK0MSobpX322c5Zi45Q&s",
    },
  ];

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

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particleOptions = {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
      opacity: { value: 0.2, random: true },
      size: { value: 1.5, random: true },
      shape: { type: "circle" },
      move: {
        enable: true,
        speed: 0.3,
        out_mode: "out",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* ✨ Particle Background */}
      {!prefersReducedMotion && (
        <Particles className="absolute inset-0 z-0" options={particleOptions} />
      )}
      <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* 🔠 Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Partners
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* 🧊 Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {partners.map((partner, i) => (
              <SwiperSlide key={partner.name}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
                  <motion.div
                    className="relative w-40 h-40 mx-auto my-6 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center shadow-2xl transition duration-300 hover:scale-105 group"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="w-full h-20 object-contain mb-2 grayscale group-hover:grayscale-0 transition duration-500"
                    />
                    <p
                      className="text-sm font-medium font-sans"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {partner.name}
                    </p>
                  </motion.div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* 🎯 CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-sm sm:text-base font-semibold rounded-full text-white shadow-md transition hover:scale-105 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)]"
          >
            Become a Partner
          </a>
        </div>
      </div>

      {/* Glow Backgrounds */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
