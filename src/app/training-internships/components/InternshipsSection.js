"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaStar, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function InternshipsSection() {
  const testimonials = [
    {
      name: "Ananya M.",
      feedback:
        "The antenna simulation module was incredibly practical. I felt industry-ready after completing it!",
    },
    {
      name: "Rajesh K.",
      feedback:
        "Learning from top faculty and working on real RF design tasks made this internship truly valuable.",
    },
    {
      name: "Sanya R.",
      feedback:
        "Loved the one-on-one guidance. The modules are rigorous but fun, and the exposure is amazing!",
    },
  ];

  const modules = [
    { id: "M-1", name: "Antenna Design and Simulation", active: true },
    { id: "M-2", name: "Smart Antenna Algorithms", active: true },
    { id: "M-3", name: "RF Integrated Circuits Design", active: false },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2">
            <FaGraduationCap className="text-indigo-600 text-2xl" />
            Internship Program
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full animate-pulse" />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-center text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Industry Certified Internship is designed to transform students
          into ready engineers through hands-on multidisciplinary projects and
          one-to-one interactions with leading faculty researchers.
        </motion.p>

        {/* Module Card */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-xl backdrop-blur-md border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Internship Modules
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            {modules.map((mod, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span>
                  <span className="font-semibold">{mod.id}:</span> {mod.name}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-medium ${
                    mod.active ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {mod.active ? (
                    <>
                      <FaCheckCircle /> Active
                    </>
                  ) : (
                    <>Upcoming</>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-6">
            <span className="font-semibold">No. of Students Enrolled:</span> 46
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="mt-14 bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-bold mb-4 text-center text-indigo-600">
            Student Testimonials
          </h4>
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop
            className="max-w-xl mx-auto"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-6">
                  <p className="text-gray-700 text-lg italic">
                    "{testi.feedback}"
                  </p>
                  <div className="mt-3 text-indigo-500 font-semibold">
                    – {testi.name}
                  </div>
                  <div className="mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="inline-block text-sm" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Glows */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
