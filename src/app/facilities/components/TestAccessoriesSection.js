"use client";

import React from "react";
import { motion } from "framer-motion";
import { GiCircuitry } from "react-icons/gi";

export default function TestAccessoriesSection() {
  const accessories = [
    {
      title: "4–8 GHz Phase Shifter",
      description:
        "Includes USB cable and software (LPS-802 by Vaunix, Quantity: 2).",
    },
    {
      title: "Substrate (RT Duriod 5880)",
      description:
        'Dielectric constant: 2.2, Loss Tangent: 0.0009, Thickness: 1.575 mm, Panel size: 18" x 24", with 1 oz copper cladding (Quantity: 2, by Rogers).',
    },
    {
      title: "Power Dividers",
      description:
        "Models ZN2PD-9G-S (3 units) and ZN4PD1-842-S (2 units) from Mini-Circuits.",
    },
    {
      title: "Additional Accessories",
      description: "Includes low-loss cables, connectors, and adapters.",
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
          RF & Microwave Test Accessories
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Accessory Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-6 hover:shadow-indigo-200 transition-all duration-300 flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GiCircuitry className="text-indigo-600 text-2xl mt-1" />
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

      {/* Glow Background */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
