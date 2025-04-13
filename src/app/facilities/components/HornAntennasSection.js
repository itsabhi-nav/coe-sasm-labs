"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower } from "react-icons/fa";

export default function HornAntennasSection() {
  const antennas = [
    {
      label: "Double Ridged Broadband Horn Antenna 1",
      range: "700 MHz to 18 GHz",
    },
    {
      label: "Double Ridged Broadband Horn Antenna 2",
      range: "18 GHz to 27 GHz",
    },
    {
      label: "Double Ridged Broadband Horn Antenna 3",
      range: "25 GHz to 37 GHz",
    },
    {
      label: "Double Ridged Broadband Horn Antenna 4",
      range: "33 GHz to 40 GHz",
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
          Horn Antennas
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Antenna Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {antennas.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 hover:shadow-indigo-200 transition-all duration-300 flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-indigo-600 mt-1">
                <FaBroadcastTower className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-700">{item.range}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glows */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
