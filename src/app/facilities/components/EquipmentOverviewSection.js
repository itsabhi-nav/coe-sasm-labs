"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EquipmentOverviewSection() {
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
          Equipment Overview
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Content */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md px-6 py-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            The{" "}
            <strong>
              Centre of Excellence in Smart Antenna Systems & Measurements
            </strong>{" "}
            houses state-of-the-art equipment for the characterization of
            antennas and RF devices. Serving multiple purposes—funded R&D, lab
            testing, and consultancy—the facility is equipped with advanced
            instrumentation such as RF anechoic chambers, vector network
            analyzers, microwave test benches, specialized horn antennas, and
            comprehensive EMI/EMC test setups.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Additionally, the facility utilizes sophisticated simulation tools
            and software to optimize designs and verify performance under
            controlled conditions. Each piece of equipment is selected to ensure
            high accuracy and repeatability in measurements, meeting
            international standards.
          </p>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
