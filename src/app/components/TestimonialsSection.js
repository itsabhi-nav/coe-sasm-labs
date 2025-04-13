"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically load react-tsparticles
const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function TimelineSection() {
  const [theme, setTheme] = useState("dark");
  const [focusedEvent, setFocusedEvent] = useState(null);
  const sectionRef = useRef(null);

  const milestones = [
    {
      year: "2010",
      event: "Establishment of COE-SASM at RV College",
      details:
        "Founded to advance antenna research with innovative methodologies.",
      color: "rgba(255, 99, 132, 0.8)",
    },
    {
      year: "2018",
      event: "Anechoic Chamber Installation",
      details:
        "Introduced a state-of-the-art facility for precise antenna testing.",
      color: "rgba(54, 162, 235, 0.8)",
    },
    {
      year: "2021",
      event: "Antenna Systems Simulation Centre Launch",
      details: "Pioneered advanced simulation technologies for antenna design.",
      color: "rgba(75, 192, 192, 0.8)",
    },
    {
      year: "2024",
      event: "EMI/EMC Test Bed Installation",
      details:
        "Enhanced testing for electromagnetic compatibility and interference.",
      color: "rgba(255, 206, 86, 0.8)",
    },
  ];

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme") || "dark";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Responsive ring sizes
  const getDimensions = () => {
    if (typeof window === "undefined")
      return { baseRadius: 50, radiusStep: 40 };
    const width = window.innerWidth;
    if (width < 640) return { baseRadius: 30, radiusStep: 25 }; // Mobile
    if (width < 1024) return { baseRadius: 40, radiusStep: 30 }; // Tablet
    return { baseRadius: 50, radiusStep: 40 }; // Desktop
  };

  const { baseRadius, radiusStep } = getDimensions();

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setFocusedEvent(focusedEvent === index ? null : index);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center min-h-screen
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950"
            : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"
        } transition-colors duration-500`}
    >
      {/* Enhanced starry background */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 1000 } },
            color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
            shape: { type: "star", stroke: { width: 0 } },
            opacity: { value: 0.5, random: true },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
          },
        }}
      />

      {/* Subtle backdrop blur */}
      <div
        className={`absolute inset-0 z-10 ${
          theme === "dark" ? "bg-black/30" : "bg-white/30"
        } backdrop-blur-sm transition-all duration-500`}
      />

      {/* Title with gradient text */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`z-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 font-orbitron
          ${
            theme === "dark"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
          }`}
      >
        Our Cosmic Journey
      </motion.h2>

      {/* Timeline container */}
      <div className="z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center mx-auto my-12">
          {/* Central core with pulsing effect */}
          <motion.div
            className={`absolute rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                : "bg-gradient-to-br from-blue-500 to-indigo-600"
            } shadow-xl`}
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "3rem", height: "3rem" }}
          />

          {/* Concentric rings */}
          {milestones.map((_, i) => {
            const ringSize = (baseRadius + i * radiusStep) * 2;
            return (
              <motion.div
                key={`ring-${i}`}
                className={`absolute rounded-full border ${
                  theme === "dark"
                    ? "border-indigo-400/40"
                    : "border-blue-400/40"
                }`}
                style={{ width: ringSize, height: ringSize }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            );
          })}

          {/* Orbiting milestone cards */}
          {milestones.map((item, index) => {
            const orbitRadius = baseRadius + index * radiusStep;
            const rotationSpeed = 30 + index * 15;
            const angle = useMotionValue(0);
            const counterRotate = useTransform(angle, (a) => -a);

            useEffect(() => {
              const controls = animate(angle, 360, {
                duration: rotationSpeed,
                repeat: Infinity,
                ease: "linear",
              });
              return () => controls.stop();
            }, [angle, rotationSpeed]);

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
                  className={`absolute rounded-xl cursor-pointer text-sm sm:text-base
                    ${
                      theme === "dark"
                        ? "bg-gray-800/95 text-gray-200"
                        : "bg-white/95 text-gray-900"
                    }
                    shadow-neumorphic border border-transparent hover:border-indigo-500/50
                    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  style={{
                    translateX: orbitRadius,
                    rotate: counterRotate,
                    boxShadow: `0 0 15px ${item.color}`,
                    width:
                      window.innerWidth < 640
                        ? 110
                        : window.innerWidth < 1024
                        ? 140
                        : 180,
                    padding: window.innerWidth < 640 ? "0.5rem" : "0.75rem",
                  }}
                  onClick={() => setFocusedEvent(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View milestone: ${item.event}`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 20px ${item.color}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p
                    className={`font-extrabold font-orbitron mb-1 text-xs sm:text-sm
                      ${
                        theme === "dark" ? "text-indigo-300" : "text-blue-600"
                      }`}
                  >
                    {item.year}
                  </p>
                  <p className="leading-tight text-xs sm:text-sm">
                    {item.event}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal popup */}
      <AnimatePresence>
        {focusedEvent !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFocusedEvent(null)}
          >
            <motion.div
              className={`p-6 sm:p-8 rounded-2xl max-w-lg w-full relative
                ${
                  theme === "dark"
                    ? "bg-gray-900/95 text-gray-200"
                    : "bg-white/95 text-gray-900"
                }
                shadow-2xl border
                ${
                  theme === "dark"
                    ? "border-indigo-500/50"
                    : "border-blue-500/50"
                }
                overflow-y-auto max-h-[80vh]`}
              initial={{ scale: 0.7, rotate: 10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                className={`text-xl sm:text-2xl font-extrabold font-orbitron mb-2
                  ${theme === "dark" ? "text-indigo-300" : "text-blue-600"}`}
              >
                {milestones[focusedEvent].year}
              </h3>
              <p className="text-base sm:text-lg font-semibold mb-4">
                {milestones[focusedEvent].event}
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                {milestones[focusedEvent].details}
              </p>
              <motion.button
                onClick={() => setFocusedEvent(null)}
                className={`absolute top-4 right-4 p-2 rounded-full
                  ${
                    theme === "dark"
                      ? "bg-gray-800/80 hover:bg-gray-700"
                      : "bg-gray-200/80 hover:bg-gray-300"
                  }
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200`}
                aria-label="Close modal"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA button */}
      <motion.div
        className="z-20 mt-10 sm:mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link
          href="/milestones"
          className={`inline-block py-3 px-8 rounded-full text-base sm:text-lg font-semibold
            bg-gradient-to-r
            ${
              theme === "dark"
                ? "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                : "from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
            }
            text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          Discover More
        </Link>
      </motion.div>
    </section>
  );
}
