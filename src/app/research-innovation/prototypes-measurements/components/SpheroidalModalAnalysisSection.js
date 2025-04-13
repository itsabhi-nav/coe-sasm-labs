"use client";

import React from "react";
import { motion } from "framer-motion";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function SpheroidalModalAnalysisSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 to-white overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2">
            <AiOutlineFundProjectionScreen className="text-indigo-600 text-3xl" />
            Spheroidal Modal Analysis & Aperture Integral Method
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Content */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-6 text-center space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold">Advanced computational methods</span>{" "}
            including
            <span className="text-indigo-600 font-semibold">
              {" "}
              Spheroidal Modal Analysis{" "}
            </span>
            and
            <span className="text-indigo-600 font-semibold">
              {" "}
              Aperture Integral Method{" "}
            </span>
            are used to simulate electromagnetic fields of the antennas.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            For instance, comparisons for a
            <span className="font-semibold">
              {" "}
              1×2 patch array antenna at 6 GHz{" "}
            </span>
            indicate close agreement between simulated patterns (using HFSS and
            hybrid methods) and measured fields. Similar analysis has been
            performed on
            <span className="font-semibold">
              {" "}
              2×2 arrays and antennas operating at 10 GHz
            </span>
            , with parameters such as substrate type, dimensions, and loss
            tangents considered.
          </p>
        </motion.div>
      </div>

      {/* Glow */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
