"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Map status to progress %
const getStatusProgress = (status) => {
  const statusLower = status.toLowerCase();
  if (statusLower.includes("completed")) return 100;
  if (statusLower.includes("under review")) return 70;
  if (statusLower.includes("ongoing")) return 50;
  return 30;
};

export default function ProjectsSection() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    const listener = () => setTheme(localStorage.getItem("theme") || "dark");
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, []);

  const projects = [
    {
      title: "Compact C-Band Dual Shaped Graded Index Lens-Array Antenna",
      investigators:
        "Dr. S. Ravishankar (PI), Dr. K. S. Shushrutha (Co-PI), Dr. Mahesh A (Co-PI)",
      funding: "₹25,00,000",
      agency: "AICTE/RPS",
      status: "Completed in 2023-24",
    },
    {
      title: "Scan Enhancement Technique for Phased Array Antennas",
      investigators:
        "Dr. A Mahesh (PI), Dr. K. S. Shushrutha (Co-PI), Dr. S. Ravishankar (Co-PI)",
      funding: "₹25,00,000",
      agency: "LRDE-CARS",
      status: "Ongoing (2023)",
    },
    {
      title:
        "Shaped Sandwich Lens for Enhanced Directive Gain in Steered Beam Antennas",
      investigators:
        "Dr. S. Ravishankar (PI), Dr. K. S. Shushrutha (Co-PI), Dr. Mahesh A (Co-PI)",
      funding: "₹25,00,000",
      agency: "CSIR-NAL",
      status: "Ongoing (Under Review, 2023)",
    },
  ];

  return (
    <section
      className="py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-secondary)",
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
          Funded Research Projects
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const progress = getStatusProgress(project.status);
            const isComplete = progress === 100;

            return (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-md hover:shadow-[0_0_20px_var(--accent)] transition-shadow duration-500 flex gap-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Progress Circle */}
                <div className="w-16 h-16 shrink-0">
                  <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                      pathColor: isComplete
                        ? "var(--accent)"
                        : "var(--highlight)",
                      textColor: "var(--text-primary)",
                      trailColor: "#ffffff30",
                      textSize: "30px",
                    })}
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-1 text-sm">
                  <h3 className="text-lg font-semibold mb-1 text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    <strong>Investigators:</strong> {project.investigators}
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    <strong>Funding:</strong> {project.funding}
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    <strong>Agency:</strong> {project.agency}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                        isComplete
                          ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                          : "bg-[var(--highlight)]/20 text-[var(--highlight)]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
