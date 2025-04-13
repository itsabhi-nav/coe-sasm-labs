"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MeasurementsComparisonSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Overall Measurements & Simulations Comparison
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Content */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-8 text-center space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            All prototypes undergo rigorous simulation using state-of-the-art
            tools such as <strong>ANSYS HFSS</strong> and are subsequently
            validated through experimental measurements. Critical parameters
            such as <strong>resonant frequency</strong>,{" "}
            <strong>return loss</strong>, <strong>VSWR</strong>,{" "}
            <strong>gain</strong>, and <strong>impedance</strong> are carefully
            compared, demonstrating the high accuracy of our design and
            measurement methodologies.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Detailed tables above for individual prototypes provide specific
            comparisons, ensuring quality and consistency across our designs.
          </p>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
