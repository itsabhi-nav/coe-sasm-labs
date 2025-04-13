"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSatelliteDish } from "react-icons/fa";

export default function MicrowaveTestEquipmentSection() {
  const items = [
    {
      label: "Vector Network Analyzer",
      detail:
        "The R&S® ZVL6 offers a frequency range from 9 kHz to 13.6 GHz with a noise floor of –125 dBm/Hz.",
    },
    {
      label: "Additional VNA",
      detail: "The R&S® ZVB40, capable of measurements up to 40 GHz.",
    },
    {
      label: "RF Power Meter",
      detail:
        "The R&S® NRP-Z51 with a DC-18 GHz power sensor (range: –30/+20 dBm).",
    },
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
          Microwave Test Equipment
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Equipment Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 hover:shadow-indigo-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-indigo-600 mb-2">
                <FaSatelliteDish size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
