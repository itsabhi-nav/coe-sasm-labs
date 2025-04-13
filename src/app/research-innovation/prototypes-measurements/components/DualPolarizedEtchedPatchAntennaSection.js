"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DualPolarizedEtchedPatchAntennaSection() {
  const data = [
    {
      parameter: "Resonant Frequency",
      simulated: "4.05 GHz",
      measured: "4.09 GHz",
    },
    { parameter: "Return Loss", simulated: "–13.5 dB", measured: "–19.1 dB" },
    { parameter: "Axial Ratio", simulated: "52 dB", measured: "40 dB" },
    { parameter: "Gain", simulated: "7.6 dBi", measured: "7.4 dBi" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dual-Polarized Dual Feed Corners Etched Patch Antenna
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Description Section */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 mb-10 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-700">
            <b>Frequency of Operation:</b> Approximately 4 GHz
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <b>Antenna Dimensions:</b> 5.6 cm × 5.6 cm
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <b>Feed Type:</b> Dual Insert Feed
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <b>Substrate:</b> Taconic (TLY); Dielectric Constant = 2.2,
            Thickness = 1.57 mm
          </p>
        </motion.div>

        {/* Table Section */}
        <motion.div
          className="overflow-x-auto rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-indigo-100 text-gray-800 text-sm sm:text-base">
              <tr>
                <th className="px-4 py-3 border font-semibold">Parameter</th>
                <th className="px-4 py-3 border font-semibold">Simulated</th>
                <th className="px-4 py-3 border font-semibold">Measured</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base text-gray-700">
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-4 py-3 border">{row.parameter}</td>
                  <td className="px-4 py-3 border">{row.simulated}</td>
                  <td className="px-4 py-3 border">{row.measured}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Glow Decoration */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
