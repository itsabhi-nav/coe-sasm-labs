"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function PatentsSection() {
  const patents = [
    {
      title:
        "Method and System to Estimate Angle of Arrival for a Smart Array Antenna",
      applicationNumber: "201741011400",
      filingDate: "19.07.2017",
      grantedDate: "14.03.2024",
    },
    // Add more patents if available
  ];

  const chartData = [
    { name: "Filed", value: patents.length },
    { name: "Granted", value: patents.filter((p) => p.grantedDate).length },
  ];

  const yearWiseData = patents.map((p) => {
    const year = p.filingDate?.split(".")[2];
    return { year, count: 1 };
  });

  const COLORS = ["#6366f1", "#10b981"];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3">
            <FaCertificate className="text-indigo-600 text-2xl" />
            Patents Filed
          </span>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <div className="space-y-8">
          {patents.map((pat, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {pat.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-1">
                <span className="font-semibold">Patent No.:</span>{" "}
                {pat.applicationNumber}
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-1">
                <span className="font-semibold">Filing Date:</span>{" "}
                {pat.filingDate}
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                <span className="font-semibold">Granted Date:</span>{" "}
                {pat.grantedDate}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pie Chart */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Patent Status Distribution
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Year-wise Filing Bar Chart */}
        <motion.div
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Patent Filings by Year
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <BarChart
                data={yearWiseData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#4b5563", fontSize: 12 }}
                />
                <YAxis allowDecimals={false} tick={{ fill: "#4b5563" }} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#818cf8"
                  barSize={40}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="http://rvce.edu.in/IDRC-PATENTS-FILED"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            View All Patents Filed
          </a>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
