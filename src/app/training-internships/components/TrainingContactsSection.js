"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaEnvelope, FaPhone } from "react-icons/fa";

export default function TrainingContactsSection() {
  const contacts = [
    {
      name: "Dr. Geetha K S",
      designation: "Vice Principal, RVCE",
      email: "geethaks@rvce.edu.in",
      phone: "99007 00990",
    },
    {
      name: "Dr. Shushrutha K S",
      designation: "Associate Professor, ECE Dept, RVCE",
      email: "shushruthaks@rvce.edu.in",
      phone: "99641 79197",
    },
    {
      name: "Dr. Mahesh A",
      designation: "Associate Professor, ECE Dept, RVCE",
      email: "mahesha@rvce.edu.in",
      phone: "98865 31812",
    },
    {
      name: "Prof. M. Shambulinga",
      designation: "Assistant Professor, TCE Dept, RVCE",
      email: "shambulingam@rvce.edu.in",
      phone: "99162 92488",
    },
    {
      name: "Mr. Raghunandan",
      designation: "Foreman, ECE Dept, RVCE",
      email: "raghunandan@rvce.edu.in",
      phone: "94814 26697",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          For Inquiries & Training Consultations
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-center text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          To inquire or utilize our training services on a payment basis, please
          reach out to one of our dedicated contacts.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaUserTie className="text-indigo-500 text-xl" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {contact.name}
                </h3>
              </div>
              <p className="text-gray-700 mb-2">{contact.designation}</p>
              <p className="text-gray-700 flex items-center gap-2 mb-1">
                <FaEnvelope className="text-blue-500" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <FaPhone className="text-green-500" />
                {contact.phone}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
