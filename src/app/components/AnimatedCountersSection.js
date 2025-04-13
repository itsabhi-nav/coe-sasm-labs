"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  GiReceiveMoney,
  GiMoneyStack,
  GiArchiveResearch,
  GiRadarDish,
  GiTrophyCup,
  GiGraduateCap,
} from "react-icons/gi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function StatisticsSection() {
  const stats = [
    {
      label: "R&D Funding (INR)",
      value: 2.5,
      suffix: " CR",
      icon: <GiReceiveMoney size={36} />,
      color: "#22c55e",
    },
    {
      label: "Consultancy Revenue (INR)",
      value: 40,
      suffix: " LAKHS",
      icon: <GiMoneyStack size={36} />,
      color: "#3b82f6",
    },
    {
      label: "Papers Published",
      value: 50,
      suffix: "+",
      icon: <GiArchiveResearch size={36} />,
      color: "#ec4899",
    },
    {
      label: "Antenna Models Developed",
      value: 80,
      suffix: "+",
      icon: <GiRadarDish size={36} />,
      color: "#f59e0b",
    },
    {
      label: "Patents Granted",
      value: 1,
      suffix: "+",
      icon: <GiTrophyCup size={36} />,
      color: "#8b5cf6",
    },
    {
      label: "Internships",
      value: 120,
      suffix: "+",
      icon: <GiGraduateCap size={36} />,
      color: "#0ea5e9",
    },
  ];

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
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Impact in Numbers
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-300 text-center group"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4 inline-block p-3 rounded-full border-2 border-current"
                style={{ color: stat.color }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                title={stat.label}
              >
                {stat.icon}
              </motion.div>

              {/* Count */}
              <div
                className="text-4xl font-bold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                <CountUp
                  end={stat.value}
                  duration={2}
                  decimals={stat.suffix.includes("CR") ? 2 : 0}
                />
                {stat.suffix}
              </div>

              {/* Label */}
              <p
                className="text-base font-medium mb-4 font-sans"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </p>

              {/* Progress Ring */}
              <motion.div
                className="w-20 h-20 mx-auto"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CircularProgressbar
                  value={(stat.value / 100) * 100}
                  text={`${stat.value}`}
                  styles={buildStyles({
                    pathColor: stat.color,
                    textColor: "var(--text-primary)",
                    trailColor: "#cccccc40",
                    textSize: "24px",
                  })}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing Backgrounds */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
