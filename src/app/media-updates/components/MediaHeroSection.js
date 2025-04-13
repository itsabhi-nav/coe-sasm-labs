"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MediaHeroSection() {
  return (
    <section
      className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/media-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-1/3 w-44 h-44 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Text Content */}
      <motion.div
        className="relative text-center text-white px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-orbitron drop-shadow-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Media & Updates
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-4 text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Stay updated on our latest news and gallery highlights.
        </motion.p>
      </motion.div>
    </section>
  );
}
