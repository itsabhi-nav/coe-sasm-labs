"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower } from "react-icons/fa"; // ✅ working icon

export default function StandardAntennaMeasurementSection() {
  const items = [
    {
      title: "Standard Horn Antenna",
      description: "700 MHz to 18 GHz (2 units), 18 GHz to 40 GHz (2 units).",
    },
    {
      title: "Additional Standards",
      description:
        "18 GHz to 26 GHz (1 unit), 26 GHz to 40 GHz (1 unit), Log Periodic Dipole Array (200 MHz to 6 GHz, 1 unit), Biconical Dipole Antenna (30 MHz to 200 MHz, 1 unit).",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Standard Antenna Measurement
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-6 hover:shadow-indigo-200 transition-all duration-300 flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-indigo-600 mt-1">
                <FaBroadcastTower className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
