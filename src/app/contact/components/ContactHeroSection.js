"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
    >
      {/* Overlay Blur & Tint */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-10 left-1/3 w-44 h-44 bg-pink-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-orbitron drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-4 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Contact us for inquiries, collaborations, or to learn more about our
          services.
        </motion.p>
      </motion.div>
    </section>
  );
}
