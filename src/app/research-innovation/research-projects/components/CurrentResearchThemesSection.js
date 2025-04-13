"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdScience } from "react-icons/md";

export default function CurrentResearchThemesSection() {
  const themes = [
    "Metamaterial and Metasurfaces based antennas",
    "Direction of Arrival and Beamforming Algorithms",
    "Shared Aperture Antenna",
    "Shaped dielectric lens antennas",
    "Circularly polarized Antennas",
    "Wideband & multiband antennas",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2">
            <MdScience className="text-indigo-600 text-3xl" />
            Current Research Themes
          </span>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {themes.map((theme, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-lg text-gray-800 font-medium">
                {idx + 1}. {theme}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glow accents */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
