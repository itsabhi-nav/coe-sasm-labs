"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower } from "react-icons/fa";

export default function AnechoicChamberSection() {
  const specs = [
    "Chamber dimensions: 7.5m × 5m × 3.3m",
    "Frequency range: 700 MHz – 40 GHz",
    "Quiet zone size: 1 m³",
    "Reflection: –40 dB below peak",
    "Ripple: ±1.5 dB at QZ edge",
    "Test distance: 5 m (Approx.)",
    "Polarization: Linear & Circular",
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
          RF Anechoic Chamber
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Specs */}
          <motion.div
            className="bg-white/60 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-4 text-gray-800 text-base sm:text-lg">
              {specs.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">
                    <FaBroadcastTower className="text-lg" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://res.cloudinary.com/dcahaaigp/image/upload/v1744536101/maritime_antenna_in_specialized_antenna_anechoic_chamber_at_the_new_Surface_Sensors_and_Combat_Systems_F_dc1f39.jpg"
              alt="RF Anechoic Chamber"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Glow Background */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
