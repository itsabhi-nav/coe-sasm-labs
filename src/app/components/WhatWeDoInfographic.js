"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const functionsData = [
  {
    title: "Research",
    icon: "📡",
    details:
      "Focused on novel antenna design, advanced measurement techniques, and innovative algorithms to drive research and development.",
  },
  {
    title: "Design & Measurement",
    icon: "🛠️",
    details:
      "State-of-the-art facilities including anechoic chambers, vector network analyzers, and EMI/EMC test beds for rigorous testing and validation.",
  },
  {
    title: "Consultancy",
    icon: "💼",
    details:
      "Providing expert consultancy to industry and external researchers for antenna characterization and compliance with international standards.",
  },
  {
    title: "Training",
    icon: "🎓",
    details:
      "Offering specialized training programs and internships to prepare the next generation of engineers in RF and microwave systems.",
  },
];

export default function WhatWeDoInfographic() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTooltip = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="py-20 overflow-hidden relative z-10"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What We Do
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-20">
          {functionsData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl border backdrop-blur-md shadow-2xl text-center transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
              onClick={() => toggleTooltip(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-4 w-16 h-16 mx-auto flex items-center justify-center rounded-full border-2 border-[var(--card-border)]"
                whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
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

              {/* Tooltip */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[var(--accent)] text-white text-sm p-4 rounded-lg shadow-lg w-64 z-30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {item.details}
                  </motion.div>
                )}
              </AnimatePresence>
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
