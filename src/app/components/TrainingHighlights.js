"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiRadioTower, GiMagnet, GiRadarSweep } from "react-icons/gi";

const trainings = [
  {
    title: "Fundamentals of Antennas & EM Theory",
    description:
      "An introduction to the principles of electromagnetic wave propagation and antenna design.",
    icon: <GiRadioTower className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Computational Electromagnetics",
    description:
      "Hands-on training using simulation tools such as ANSYS HFSS, CST Studio, and Altair FEKO.",
    icon: <GiMagnet className="text-purple-500 text-4xl" />,
  },
  {
    title: "Antenna Characterization",
    description:
      "Practical sessions on using vector network analyzers and anechoic chambers for RF testing.",
    icon: <GiRadarSweep className="text-pink-500 text-4xl" />,
  },
];

export default function TrainingHighlights() {
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
      className={`relative py-20 overflow-hidden z-10 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className={`text-3xl sm:text-4xl font-extrabold text-center font-orbitron ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Training & Internships
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
          className={`text-lg sm:text-xl text-center max-w-3xl mx-auto mt-6 mb-14 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our facility offers specialized training in antennas, electromagnetic
          simulation, and RF measurements. Programs are designed for students
          and professionals alike.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-md border transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                theme === "dark"
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-black/5 border-black/10 text-gray-800"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{training.icon}</div>
              <h3
                className={`text-lg font-semibold text-center mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {training.title}
              </h3>
              <p
                className={`text-sm text-center ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {training.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/training-internships"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Discover More & Apply
          </Link>
        </motion.div>
      </div>

      {/* Glow Orbs */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
