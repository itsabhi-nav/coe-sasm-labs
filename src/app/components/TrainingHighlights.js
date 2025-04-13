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
    icon: GiRadioTower,
    color: "text-indigo-500",
  },
  {
    title: "Computational Electromagnetics",
    description:
      "Hands-on training using simulation tools such as ANSYS HFSS, CST Studio, and Altair FEKO.",
    icon: GiMagnet,
    color: "text-purple-500",
  },
  {
    title: "Antenna Characterization",
    description:
      "Practical sessions on using vector network analyzers and anechoic chambers for RF testing.",
    icon: GiRadarSweep,
    color: "text-pink-500",
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
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Training & Internships
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-6 mb-14"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our facility offers specialized training in antennas, electromagnetic
          simulation, and RF measurements. Programs are designed for students
          and professionals alike.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-300 border hover:shadow-[0_0_20px_var(--accent)] text-center"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Centered Icon */}
                <motion.div
                  className={`w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full border-2 border-[var(--card-border)] ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="text-3xl" />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
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
