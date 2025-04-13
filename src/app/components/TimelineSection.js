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
import Link from "next/link";
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
      details: "Founded for antenna research.",
      color: "rgba(255, 99, 132, 0.8)",
    },
    {
      year: "2018",
      event: "Anechoic Chamber Installed",
      details: "Launched testing facility.",
      color: "rgba(54, 162, 235, 0.8)",
    },
    {
      year: "2021",
      event: "Simulation Centre Launched",
      details: "Introduced simulation tech.",
      color: "rgba(75, 192, 192, 0.8)",
    },
    {
      year: "2024",
      event: "EMI/EMC Test Bed Installed",
      details: "Enhanced compatibility testing.",
      color: "rgba(255, 206, 86, 0.8)",
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
      className={`relative overflow-hidden py-16 flex items-center justify-center min-h-screen
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 to-purple-950"
            : "bg-gradient-to-br from-gray-50 to-indigo-100"
        }`}
    >
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
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />
      <motion.h2
        className="z-20 text-4xl font-extrabold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Cosmic Milestones
      </motion.h2>
      <div className="relative z-20 w-full max-w-4xl">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-indigo-500"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {milestones.map((_, i) => (
            <div
              key={`ring-${i}`}
              className="absolute rounded-full border border-indigo-400/40"
              style={{
                width: (baseRadius + i * radiusStep) * 2,
                height: (baseRadius + i * radiusStep) * 2,
              }}
            />
          ))}
          {milestones.map((item, index) => {
            const orbitRadius = baseRadius + index * radiusStep;
            const angle = useMotionValue(0);
            const counterRotate = useTransform(angle, (a) => -a);

            useEffect(() => {
              const controls = animate(angle, 360, {
                duration: 30 + index * 15,
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
                  className="absolute p-2 rounded-xl bg-gray-800/90 text-gray-200 cursor-pointer"
                  style={{
                    translateX: orbitRadius,
                    rotate: counterRotate,
                    width: 120,
                  }}
                  onClick={() => setFocusedEvent(index)}
                >
                  <p className="font-bold text-indigo-400">{item.year}</p>
                  <p>{item.event}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {focusedEvent !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-6 rounded-xl bg-gray-900 text-gray-200 max-w-md"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            >
              <h3 className="text-xl font-bold">
                {milestones[focusedEvent].year}
              </h3>
              <p className="mt-2">{milestones[focusedEvent].event}</p>
              <p className="mt-4">{milestones[focusedEvent].details}</p>
              <button
                onClick={() => setFocusedEvent(null)}
                className="absolute top-2 right-2 p-1 bg-gray-700 rounded-full"
              >
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
