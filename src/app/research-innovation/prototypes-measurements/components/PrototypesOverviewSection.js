"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsDiagram3, BsPatchCheck } from "react-icons/bs";

export default function PrototypesOverviewSection() {
  const categories = [
    "All",
    "Patch Antennas",
    "Lens Antennas",
    "Arrays",
    "Multiband",
    "Metamaterial",
  ];

  const prototypesList = [
    {
      title: "Patch Antennas (L, C, S and X bands)",
      category: "Patch Antennas",
    },
    { title: "Patch Antenna Arrays", category: "Arrays" },
    { title: "Multiband Antennas", category: "Multiband" },
    { title: "Metamaterial Based Antennas", category: "Metamaterial" },
    { title: "Arrays for Mutual Coupling Reduction", category: "Arrays" },
    { title: "Dielectric Lens Antennas", category: "Lens Antennas" },
    { title: "Dielectric Resonator Antennas", category: "Lens Antennas" },
    { title: "Multi-Layered Flat Lens Antennas", category: "Lens Antennas" },
    { title: "Dual Polarized Antennas", category: "Patch Antennas" },
    { title: "Dielectric Shell", category: "Lens Antennas" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? prototypesList
      : prototypesList.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Prototypes Developed & Measurements
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our facility has developed a comprehensive range of prototypes for
          advanced antenna designs. Select a category to explore:
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-indigo-500 hover:text-indigo-600"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 bg-white/60 backdrop-blur-md border border-white/20 shadow-md p-4 rounded-xl hover:shadow-indigo-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <BsPatchCheck className="text-indigo-600 text-xl mt-1" />
              <p className="text-gray-800 text-sm sm:text-base">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Outro */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 text-center mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Detailed simulation and measurement comparisons for selected
          prototypes are presented below.
        </motion.p>
      </div>

      {/* Glows */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
