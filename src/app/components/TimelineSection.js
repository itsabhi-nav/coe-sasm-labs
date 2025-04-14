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

  const getDimensions = () => {
    if (typeof window === "undefined")
      return { baseRadius: 50, radiusStep: 40 };
    const width = window.innerWidth;
    return width < 640
      ? { baseRadius: 30, radiusStep: 25 }
      : { baseRadius: 50, radiusStep: 40 };
  };

  const { baseRadius, radiusStep } = getDimensions();

  const angle1 = useMotionValue(0);
  const angle2 = useMotionValue(0);
  const angle3 = useMotionValue(0);
  const angle4 = useMotionValue(0);

  const rot1 = useTransform(angle1, (a) => -a);
  const rot2 = useTransform(angle2, (a) => -a);
  const rot3 = useTransform(angle3, (a) => -a);
  const rot4 = useTransform(angle4, (a) => -a);

  const angles = [angle1, angle2, angle3, angle4];
  const counterRotations = [rot1, rot2, rot3, rot4];

  useEffect(() => {
    const controls = angles.map((angle, index) =>
      animate(angle, 360, {
        duration: 30 + index * 10,
        repeat: Infinity,
        ease: "linear",
      })
    );
    return () => controls.forEach((ctrl) => ctrl.stop());
  }, [angles]);

  return (
    <section className="relative overflow-hidden py-20 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-950 text-white">
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
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Heading */}
      <motion.h2
        className="z-20 text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Cosmic Milestones
        <div className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse bg-gradient-to-r from-indigo-400 to-pink-500" />
      </motion.h2>

      {/* Orbit System */}
      <div className="relative z-20 w-full max-w-4xl">
        <div className="relative flex items-center justify-center">
          {/* Glowing center */}
          <motion.div className="absolute w-16 h-16 rounded-full bg-pink-400 opacity-80 blur-xl animate-pulse-slow" />

          {/* Orbit rings */}
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

          {/* Milestone cards */}
          {milestones.map((item, index) => {
            const orbitRadius = baseRadius + index * radiusStep;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  rotate: angles[index],
                }}
              >
                <motion.div
                  className="absolute text-center p-3 rounded-xl backdrop-blur-md border shadow-md cursor-pointer transition-all hover:scale-105"
                  style={{
                    translateX: orbitRadius,
                    rotate: counterRotations[index],
                    backgroundColor: "#2a2a3eaa",
                    borderColor: "#3a3a5a",
                    width: 170,
                  }}
                  onClick={() => setFocusedEvent(index)}
                >
                  <p className="font-bold text-sm text-indigo-400">
                    {item.year}
                  </p>
                  <p className="text-xs text-white">{item.event}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {focusedEvent !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative p-6 rounded-xl bg-[#1a1a2e] border border-[#3a3a5a] text-white max-w-md w-full mx-4"
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
              <p className="mt-4 text-sm text-white">
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

      {/* Background glows */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
