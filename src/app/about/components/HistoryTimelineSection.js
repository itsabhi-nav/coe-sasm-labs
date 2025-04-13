"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HistoryTimelineSection() {
  const timelineEvents = [
    { year: "2010", event: "Establishment of COE‑SASM" },
    { year: "2018", event: "Installation of the Anechoic Chamber" },
    { year: "2021", event: "Launch of the Antenna Systems Simulation Centre" },
    { year: "2024", event: "Installation of EMI/EMC Test Bed" },
  ];

  const [pause, setPause] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Journey
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <div className="relative border-l-4 border-indigo-500 ml-[50%] transform -translate-x-1/2">
          <div className="space-y-16">
            {timelineEvents.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  } relative`}
                >
                  {/* Milestone Glow */}
                  <div
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-indigo-500 shadow-md ring-4 ring-indigo-300 animate-pulse-glow"
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-indigo-400/20 animate-orbit ${
                        pause ? "paused" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`w-full md:w-5/12 p-4 ${
                      isLeft ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <p className="text-xl font-semibold text-gray-800">
                      {item.year}
                    </p>
                    <p className="text-gray-600 mt-1">{item.event}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-pulse-glow {
          box-shadow: 0 0 10px #6366f1, 0 0 20px #818cf8;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(99, 102, 241, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
        }

        .animate-orbit {
          animation: orbit 8s linear infinite;
        }

        .paused {
          animation-play-state: paused;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(6px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(6px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
