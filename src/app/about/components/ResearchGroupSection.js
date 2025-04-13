"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";

export default function ResearchGroupSection() {
  const facultyMembers = [
    {
      name: "Dr. K S Geetha",
      designation: "Vice Principal, RVCE",
      email: "geethaks@rvce.edu.in",
      image: "/images/faculty-1.jpg",
    },
    {
      name: "Dr. S Ravishankar",
      designation: "Visiting Professor, RVCE",
      email: "",
      image: "/images/faculty-2.jpg",
    },
    {
      name: "Dr. Mahesh A",
      designation: "Associate Professor, RVCE",
      email: "mahesha@rvce.edu.in",
      image: "/images/faculty-3.jpg",
    },
    {
      name: "Dr. K S Shushrutha",
      designation: "Associate Professor, RVCE",
      email: "shushruthaks@rvce.edu.in",
      image: "/images/faculty-4.jpg",
    },
    {
      name: "Prof. Shambulinga M.",
      designation: "Assistant Professor, RVCE",
      email: "shambulingam@rvce.edu.in",
      image: "/images/faculty-5.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Research Group
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 flex flex-col items-center text-center hover:shadow-indigo-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Photo */}
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-xl opacity-30 animate-pulse" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-4 border-white relative z-10"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-700 mb-2">{member.designation}</p>

              {/* Email if available */}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-indigo-600 hover:underline text-sm flex items-center gap-1"
                >
                  <HiOutlineMail className="text-lg" /> {member.email}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
