"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const newsData = [
  {
    title: "FMCW RADAR Design Award",
    description:
      "Winner of 1st Prize in the National Level Project Design Contest for a FMCW RADAR for Traffic‑Queue Length Estimation.",
    link: "http://ahfr.dit.ie/node/26",
  },
  {
    title: "Best Paper Award at IEEE SPACE",
    description:
      "Students awarded Best Paper for their work on a monopole-fed modulated metasurface based antenna.",
    link: "http://ahfr.dit.ie/node/26",
  },
  {
    title: "New Research Project Initiated",
    description:
      "Launch of the 'Scan Enhancement Technique for Phased Array Antennas' project, funded by LRDE-CARS.",
    link: "http://rvce.edu.in/rvce-coe-me-funded-r-and-d-projects",
  },
];

export default function LatestNewsSlider() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <section
      className="py-20 relative overflow-hidden z-10"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Latest News & Updates
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative p-8 rounded-2xl max-w-3xl mx-auto transition-all duration-300 text-center hover:scale-[1.015]"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  color: "var(--text-primary)",
                  boxShadow:
                    theme === "dark"
                      ? "0 10px 30px rgba(0,0,0,0.6)"
                      : "0 8px 24px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <h3
                    className="text-2xl font-bold mb-4 font-sans"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {news.title}
                  </h3>
                  <p
                    className="text-base mb-6 font-sans"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {news.description}
                  </p>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block font-semibold hover:underline transition duration-200"
                    style={{ color: "var(--accent)" }}
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
