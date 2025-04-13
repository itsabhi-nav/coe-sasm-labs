"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MultibandUSlotCircularPatchAntennaSection() {
  const rows = [
    {
      freq: "3.5",
      simGain: "5.73",
      measGain: "5.6",
      simRL: "–10.8",
      measRL: "–10.48",
    },
    {
      freq: "5.0",
      simGain: "7.43",
      measGain: "7.6",
      simRL: "–21.6",
      measRL: "–11.23",
    },
    {
      freq: "6.5",
      simGain: "5.28",
      measGain: "5.2",
      simRL: "–13.0",
      measRL: "–18.02",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Multiband U Slot Circular Patch Antenna
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Description */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-6 mb-10 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold">Frequency of Operation:</span> 3.5 GHz,
            5.0 GHz, and 6.5 GHz
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold">Dimensions:</span> 6.9 cm × 9 cm
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold">Feed Type:</span> Insert Feed
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold">Substrate:</span> Taconic (TLY);
            Dielectric Constant = 2.2, Thickness = 1.57 mm
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          className="overflow-x-auto rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-white border border-gray-300 rounded-lg text-center text-sm sm:text-base">
            <thead className="bg-indigo-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border font-semibold">
                  Frequency (GHz)
                </th>
                <th className="px-4 py-3 border font-semibold">Gain (Sim)</th>
                <th className="px-4 py-3 border font-semibold">
                  Gain (Measured)
                </th>
                <th className="px-4 py-3 border font-semibold">
                  Return Loss (Sim)
                </th>
                <th className="px-4 py-3 border font-semibold">
                  Return Loss (Measured)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-4 py-3 border">{row.freq}</td>
                  <td className="px-4 py-3 border">{row.simGain}</td>
                  <td className="px-4 py-3 border">{row.measGain}</td>
                  <td className="px-4 py-3 border">{row.simRL}</td>
                  <td className="px-4 py-3 border">{row.measRL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
