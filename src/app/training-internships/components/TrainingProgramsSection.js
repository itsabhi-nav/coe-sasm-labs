"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TrainingProgramsSection() {
  const trainingModules = [
    {
      title: "Fundamentals of Antennas and EM Theory",
      icon: "🔬",
      description:
        "A comprehensive introduction covering the basic principles of antennas and the underlying electromagnetic theory.",
    },
    {
      title: "Computational Electromagnetics",
      icon: "💻",
      description:
        "Includes techniques such as Method of Moments, FDTD, FEM, and Hybrid Methods to solve electromagnetic problems.",
    },
    {
      title: "Design and Simulation using HFSS",
      icon: "🖥️",
      description:
        "Hands-on training in one of the leading simulation tools for advanced antenna design.",
    },
    {
      title: "Characterization using VNA",
      icon: "📡",
      description:
        "Practical training on using VNAs for measuring and analyzing antenna performance and RF device characteristics.",
    },
    {
      title: "Anechoic Chamber Measurements",
      icon: "🏢",
      description:
        "Experiential learning in a controlled far‑field environment for precise antenna measurements.",
    },
    {
      title: "DOA & Beamforming Algorithms",
      icon: "🧭",
      description:
        "Advanced training on smart antenna technologies and signal processing techniques for optimal beam steering.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Training Programs Offered
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-center text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our specialized training modules equip students and faculties with
          both theoretical insights and hands-on expertise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingModules.map((module, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-4xl"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.1,
                  }}
                >
                  {module.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {module.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Accents */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
