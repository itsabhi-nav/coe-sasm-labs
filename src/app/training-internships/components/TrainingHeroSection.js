"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TrainingHeroSection() {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/training-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold font-orbitron tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Training & Internships
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Empowering future engineers through hands-on learning
        </motion.p>
      </motion.div>

      {/* Optional Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
