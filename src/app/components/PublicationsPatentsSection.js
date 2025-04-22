"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicationsPatentsSection() {
  const [activeTab, setActiveTab] = useState("journals");

  const journals = [
    {
      title:
        "Design of Modified U-Slot Multiband Circular Patch Antenna with Cylindrical Dielectric Resonator Antenna",
      authors: "Shushrutha K S, Pooja T R, Sushma V",
      conference: "4th IEEE RTEICT (2019)",
    },
    {
      title:
        "Hybridization of Bayesian Compressive Sensing and Array Dilation Technique for Synthesis of Linear Isophoric Sparse Antenna Arrays",
      authors: "Mahesh A, Ashutosh Kedar, Pratap Vangol",
      journal: "IEEE Transactions on Antennas and Propagation, May 2023",
    },
  ];

  const patents = [
    {
      title:
        "Method and System to Estimate Angle of Arrival for a Smart Array Antenna",
      details: "Patent Filed (Filing Date: 30.03.2017, Granted: 14.03.2024)",
    },
  ];

  const displayedItems = activeTab === "journals" ? journals : patents;

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Publications & Patents
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["journals", "patents"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-white/10 text-[var(--text-secondary)] border border-[var(--card-border)]"
              }`}
            >
              {tab === "journals" ? "📘 Journals & Conferences" : "🧠 Patents"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {displayedItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-300 border"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>

                {item.authors && (
                  <p className="text-sm text-[var(--text-secondary)] mb-1">
                    👨‍🔬 <span className="font-medium">Authors:</span>{" "}
                    {item.authors}
                  </p>
                )}

                {item.conference && (
                  <p className="text-sm text-[var(--text-secondary)] mb-1">
                    🧾 <span className="font-medium">Conference:</span>{" "}
                    {item.conference}
                  </p>
                )}

                {item.journal && (
                  <p className="text-sm text-[var(--text-secondary)] mb-1">
                    📘 <span className="font-medium">Journal:</span>{" "}
                    {item.journal}
                  </p>
                )}

                {item.details && (
                  <p className="text-sm text-[var(--text-secondary)]">
                    🧠 <span className="font-medium">Patent Info:</span>{" "}
                    {item.details}
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="research-innovation/publications-patents"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300"
          >
            View All Publications & Patents
          </a>
        </div>
      </div>

      {/* Glow Orbs */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
