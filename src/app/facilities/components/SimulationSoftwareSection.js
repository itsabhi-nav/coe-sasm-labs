"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsCpu } from "react-icons/bs";

export default function SimulationSoftwareSection() {
  const software = [
    "ANSYS HFSS™ – High Frequency Electromagnetic Simulation",
    "CST Studio Suite®",
    "ALTAIR FEKO™",
    "CADENCE – Advancing the Wireless Revolution (AWR)",
    "Advanced Design Systems (ADS)",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Electromagnetic Simulation Software
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Grid Display */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {software.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-5 hover:shadow-indigo-200 transition-all duration-300 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BsCpu className="text-indigo-600 text-2xl mt-1" />
              <p className="text-gray-800 text-sm sm:text-base">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
