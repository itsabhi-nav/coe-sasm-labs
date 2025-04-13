"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaSatelliteDish, FaProjectDiagram } from "react-icons/fa";

const researchItems = [
  {
    title: "Compact C-Band Dual Shaped Graded Index Lens-Array Antenna",
    description:
      "Optimized for enhanced beam steerability in a compact form factor, leveraging advanced dielectric lens designs.",
    icon: <FaSatelliteDish className="text-indigo-500 text-3xl" />,
  },
  {
    title: "Shaped Sandwich Lens for Enhanced Directive Gain",
    description:
      "Incorporates innovative materials and unique geometries to achieve superior scan enhancement.",
    icon: <FaFlask className="text-purple-500 text-3xl" />,
  },
  {
    title: "Advanced Phased Array Techniques",
    description:
      "Combines hybrid analysis with Bayesian compressive sensing for efficient sparse array synthesis.",
    icon: <FaProjectDiagram className="text-pink-500 text-3xl" />,
  },
];

export default function ResearchHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Research & Innovation
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full animate-pulse" />

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-center text-gray-600 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our pioneering projects range from advanced beamforming to novel
          antenna architectures that drive real-world performance.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {researchItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl border border-gray-200 bg-white/30 backdrop-blur-md shadow-lg hover:shadow-2xl p-6 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
