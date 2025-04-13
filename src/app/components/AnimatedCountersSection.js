"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaSatelliteDish, FaProjectDiagram } from "react-icons/fa";

const researchItems = [
  {
    title: "Compact C-Band Dual Shaped Graded Index Lens-Array Antenna",
    description:
      "Optimized for enhanced beam steerability in a compact form factor, leveraging advanced dielectric lens designs.",
    icon: (
      <FaSatelliteDish className="text-indigo-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
    ),
  },
  {
    title: "Shaped Sandwich Lens for Enhanced Directive Gain",
    description:
      "Incorporates innovative materials and unique geometries to achieve superior scan enhancement.",
    icon: (
      <FaFlask className="text-purple-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
    ),
  },
  {
    title: "Advanced Phased Array Techniques",
    description:
      "Combines hybrid analysis with Bayesian compressive sensing for efficient sparse array synthesis.",
    icon: (
      <FaProjectDiagram className="text-pink-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
    ),
  },
];

export default function ResearchHighlights() {
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
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Research & Innovation
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-center mb-14"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our pioneering projects range from advanced beamforming to novel
          antenna architectures that drive real-world performance.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {researchItems.map((item, index) => (
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
              {/* Icon */}
              <motion.div
                className="mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Backgrounds */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
