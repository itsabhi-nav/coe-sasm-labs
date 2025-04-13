"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Lightbulb, ScrollText, Handshake } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      title: "Sustainable Innovation Award",
      description: "For groundbreaking research in RF technologies.",
      icon: (
        <Lightbulb size={32} strokeWidth={2.2} className="text-yellow-400" />
      ),
      tooltip: "Awarded for innovation in sustainability",
    },
    {
      title: "Best Research Paper",
      description: "Excellence in technical paper presentations.",
      icon: (
        <ScrollText size={32} strokeWidth={2.2} className="text-pink-400" />
      ),
      tooltip: "Top recognition for research excellence",
    },
    {
      title: "Industrial Collaboration Award",
      description: "Honored for outstanding consultancy projects.",
      icon: <Handshake size={32} strokeWidth={2.2} className="text-sky-400" />,
      tooltip: "Collaboration with industry for real-world impact",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden z-10"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Awards & Recognition
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                className="relative transition-all duration-300 text-center p-8 flex flex-col justify-between h-full min-h-[340px] hover:scale-[1.015] shadow-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "1rem",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Icon Glow */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 bg-[var(--accent)] opacity-10 rounded-full blur-3xl pointer-events-none" />

                {/* Icon Bubble */}
                <div
                  className="relative w-20 h-20 mx-auto mb-6 group cursor-help"
                  title={award.tooltip}
                >
                  <div className="absolute inset-0 rounded-full bg-[var(--accent)] blur-2xl opacity-30 animate-pulse" />
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-white shadow-md relative z-10 bg-white/10 backdrop-blur"
                    animate={{ rotate: [0, 3, -3, 0], y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {award.icon}
                  </motion.div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-2 font-sans"
                  style={{ color: "var(--text-heading)" }}
                >
                  {award.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed font-sans"
                  style={{ color: "var(--text-body)" }}
                >
                  {award.description}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
