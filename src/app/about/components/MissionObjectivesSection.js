"use client";

import React from "react";
import { motion } from "framer-motion";

const objectives = [
  {
    title: "Research",
    description:
      "Enhance mobility via compact antenna designs and develop innovative beamforming algorithms.",
    icon: "🔬",
  },
  {
    title: "Design & Measurement",
    description:
      "Utilize advanced anechoic chambers, VNAs, and EMI/EMC test beds to experimentally verify antenna performance.",
    icon: "🛠️",
  },
  {
    title: "Consultancy",
    description:
      "Provide expert measurement and design services to industry and external researchers.",
    icon: "💼",
  },
  {
    title: "Training",
    description:
      "Impart analytical and experimental training on antennas, electromagnetic scattering, and array signal processing.",
    icon: "🎓",
  },
];

export default function MissionObjectivesSection() {
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
          Our Mission & Objectives
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Objective Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md hover:shadow-indigo-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-start gap-4">
                {/* Floating Emoji */}
                <div className="text-4xl p-3 rounded-full bg-indigo-100 text-indigo-600 shadow-inner hover:scale-110 transition-transform duration-200">
                  {obj.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {obj.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{obj.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
