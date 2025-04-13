"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { FiX } from "react-icons/fi";
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function TimelineSection() {
  const [theme, setTheme] = useState("dark");
  const [focusedEvent, setFocusedEvent] = useState(null);

  const milestones = [
    {
      year: "2010",
      event: "COE-SASM Established",
      details: "Founded to advance RF and antenna research at RVCE.",
    },
    {
      year: "2018",
      event: "Anechoic Chamber Installed",
      details:
        "State-of-the-art facility for RF testing and electromagnetic analysis.",
    },
    {
      year: "2021",
      event: "Simulation Centre Launched",
      details:
        "Advanced simulation and modeling tools for antenna design and optimization.",
    },
    {
      year: "2024",
      event: "EMI/EMC Test Bed Installed",
      details:
        "Expanded into electromagnetic compatibility testing for defense applications.",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const getDimensions = () => {
    if (typeof window === "undefined")
      return { baseRadius: 50, radiusStep: 40 };
    const width = window.innerWidth;
    return width < 640
      ? { baseRadius: 30, radiusStep: 25 }
      : { baseRadius: 50, radiusStep: 40 };
  };

  const { baseRadius, radiusStep } = getDimensions();

  return (
    <section
      className={`relative overflow-hidden py-20 flex items-center justify-center min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-purple-950"
          : "bg-gradient-to-br from-gray-50 to-indigo-100"
      }`}
      style={{ color: "var(--text-primary)" }}
    >
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 30 },
            color: { value: "#ffffff" },
            size: { value: 2 },
          },
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Heading */}
      <motion.h2
        className="z-20 text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Cosmic Milestones
        <div
          className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
          style={{
            background:
              "linear-gradient(to right, var(--accent), var(--highlight))",
          }}
        />
      </motion.h2>

      {/* Orbit System */}
      <div className="relative z-20 w-full max-w-4xl">
        <div className="relative flex items-center justify-center">
          {/* Glowing Center Dot */}
          <motion.div className="absolute w-16 h-16 rounded-full bg-[var(--highlight)] opacity-80 blur-xl animate-pulse-slow" />

          {/* Orbit Rings */}
          {Array.from({ length: milestones.length + 1 }).map((_, i) => {
            const size = (baseRadius + i * radiusStep) * 2;
            return (
              <div
                key={i}
                className="absolute rounded-full border border-indigo-400/30"
                style={{ width: size, height: size }}
              />
            );
          })}

          {/* Milestone Cards */}
          {milestones.map((item, index) => {
            const orbitRadius = baseRadius + index * radiusStep;
            const angle = useMotionValue(0);
            const counterRotate = useTransform(angle, (a) => -a);

            useEffect(() => {
              const controls = animate(angle, 360, {
                duration: 30 + index * 10,
                repeat: Infinity,
                ease: "linear",
              });
              return () => controls.stop();
            }, [angle]);

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  rotate: angle,
                }}
              >
                <motion.div
                  className="absolute text-center p-3 rounded-xl backdrop-blur-md border shadow-md cursor-pointer transition-all hover:scale-105"
                  style={{
                    translateX: orbitRadius,
                    rotate: counterRotate,
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                    width: 170,
                  }}
                  onClick={() => setFocusedEvent(index)}
                >
                  <p className="font-bold text-sm text-[var(--accent)]">
                    {item.year}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {item.event}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {focusedEvent !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--card-border)] text-[var(--text-primary)] max-w-md w-full mx-4"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
            >
              <h3 className="text-xl font-bold">
                {milestones[focusedEvent].year}
              </h3>
              <p className="mt-2 font-medium">
                {milestones[focusedEvent].event}
              </p>
              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                {milestones[focusedEvent].details}
              </p>
              <button
                onClick={() => setFocusedEvent(null)}
                className="absolute top-2 right-2 p-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition"
              >
                <FiX className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
