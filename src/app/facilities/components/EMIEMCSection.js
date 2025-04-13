"use client";

import React from "react";
import { motion } from "framer-motion";
import { GiElectric } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";

export default function EMIEMCSection() {
  const equipment = [
    {
      title: "EMI Receiver",
      icon: <GiElectric size={28} />,
      description:
        "Operates from 10 Hz to 6 GHz. Features dual RF inputs: full compliance testing from 9 kHz to 30 MHz and pre‑compliance testing up to 6 GHz.",
    },
    {
      title: "LISN (CISPR-16-1-2)",
      icon: <MdPrecisionManufacturing size={28} />,
      description:
        "Supports either two lines (16 A) or four lines (32 A) with appropriate neutral filters.",
    },
    {
      title: "Additional Equipment",
      icon: <GiElectric size={28} />,
      description:
        "Includes 3 near-field probes (50 Ω), AC line filters (3-phase + Neutral, 32 A, 0–600 VAC, with 40 dB attenuation from 0.15–30 MHz), and an Artificial Mains Network (PMM L3-32).",
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
          EMI/EMC Test Facility
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Equipment Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-indigo-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-indigo-600 mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
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
