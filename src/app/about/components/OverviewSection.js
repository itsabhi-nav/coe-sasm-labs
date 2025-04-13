"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Overview
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Content */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md px-5 py-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 sm:mb-6">
            The{" "}
            <strong>
              Centre of Excellence in Smart Antenna Systems & Measurements
            </strong>{" "}
            at RV College of Engineering is a state-of-the-art facility
            established to advance the analysis, design, optimization, and
            measurement of RF and microwave devices for wireless and defence
            applications.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Our facility, which doubles as an EMI/EMC test bed, supports funded
            R&D projects, serves as a lab for research scholars and faculty, and
            offers consultancy services with cutting‑edge equipment and
            interdisciplinary collaboration.
          </p>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
