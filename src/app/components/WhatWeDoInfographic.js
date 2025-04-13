// src/app/components/WhatWeDoInfographic.js
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const functionsData = [
  {
    title: "Research",
    icon: "📡",
    details:
      "Focused on novel antenna design, advanced measurement techniques, and innovative algorithms to drive research and development.",
  },
  {
    title: "Design & Measurement",
    icon: "🛠️",
    details:
      "State-of-the-art facilities including anechoic chambers, vector network analyzers, and EMI/EMC test beds for rigorous testing and validation.",
  },
  {
    title: "Consultancy",
    icon: "💼",
    details:
      "Providing expert consultancy to industry and external researchers for antenna characterization and compliance with international standards.",
  },
  {
    title: "Training",
    icon: "🎓",
    details:
      "Offering specialized training programs and internships to prepare the next generation of engineers in RF and microwave systems.",
  },
];

export default function WhatWeDoInfographic() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTooltip = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {functionsData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer"
              onClick={() => toggleTooltip(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Tooltip */}
              {activeIndex === index && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-indigo-600 text-white text-sm p-4 rounded-lg shadow-lg w-64 z-20">
                  {item.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
