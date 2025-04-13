"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMoneyCheckAlt, FaTasks } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function FundedProjectsSection() {
  const fundedProjects = [
    {
      title:
        "Development of compact C-Band Dual Shaped Graded Index Lens-Array Antenna",
      investigators: "Dr. S. Ravishankar, Dr. Mahesh A, Dr. Shushrutha K S",
      agency: "AICTE-RPS",
      duration: "2019-2021",
      amount: 2500000,
    },
    {
      title:
        "A Shaped Sandwich Lens for Enhanced Directive Gain in Steered Beam Antennas",
      investigators: "Dr. Ravishankar S, Dr. Mahesh A, Dr. Shushrutha K S",
      agency: "CSIR – NAL",
      duration: "2 Years (Under Review)",
      amount: 2500000,
    },
    {
      title: "Analysis and independent testing of flexible PCB antenna",
      investigators: "Dr. M UttaraKumari, Dr. Shushrutha K.S, Dr. Mahesh A",
      agency: "SLN Technologies",
      duration: "June 2020",
      amount: 100000,
    },
  ];

  const utilizationProjects = [
    {
      title: "Analysis and independent testing of flexible PCB antenna",
      investigators: "Dr. M UttaraKumari, Dr. Shushrutha K S, Dr. Mahesh A",
      agency: "SLN Technologies",
      duration: "June 2020",
      amount: "1,00,000/-",
    },
    {
      title: "Real time measurement of EM signals from Mobile Base Stations",
      investigators:
        "Dr. Geetha K.S, Dr. Mahesh A, Dr. K S Shushrutha, Mr. B H Raghunandhan",
      agency: "Securier Technologies Pvt Ltd",
      duration: "Dec 2019 / Starts from June 2023",
      amount: "",
    },
    {
      title:
        "A Cost Effective and Low Loss Array – Lens Radome for Ballistic Applications",
      investigators: "Dr. S. Ravishankar, Dr. Shushrutha K S, Dr. Mahesh A",
      agency: "Honeywell Technology Solutions Lab Pvt Ltd",
      duration: "Approved",
      amount: "",
    },
    {
      title: "Characterization of Antennas Signal Chip",
      investigators: "",
      agency: "",
      duration: "Feb 2020",
      amount: "",
    },
  ];

  const barChartData = fundedProjects.map((proj) => ({
    agency: proj.agency,
    Amount: proj.amount / 100000,
  }));

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2">
            <FaMoneyCheckAlt className="text-indigo-600 text-2xl" />
            Funded Research Projects
          </span>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <motion.div
          className="overflow-x-auto rounded-2xl shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base rounded-lg">
            <thead className="bg-indigo-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border">Project Title</th>
                <th className="px-4 py-3 border">Investigators</th>
                <th className="px-4 py-3 border">Agency</th>
                <th className="px-4 py-3 border">Duration</th>
                <th className="px-4 py-3 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {fundedProjects.map((proj, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-4 py-3 border text-gray-700">
                    {proj.title}
                  </td>
                  <td className="px-4 py-3 border text-gray-700">
                    {proj.investigators}
                  </td>
                  <td className="px-4 py-3 border text-gray-700">
                    {proj.agency}
                  </td>
                  <td className="px-4 py-3 border text-gray-700">
                    {proj.duration}
                  </td>
                  <td className="px-4 py-3 border text-gray-700">
                    ₹{proj.amount.toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Funding Overview by Agency (in Lakhs)
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <BarChart
                data={barChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <XAxis
                  dataKey="agency"
                  tick={{ fill: "#4b5563", fontSize: 12 }}
                />
                <YAxis tick={{ fill: "#4b5563" }} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Amount"
                  fill="#6366f1"
                  barSize={40}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Utilization Projects */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
            <FaTasks className="text-indigo-600 text-xl" /> Utilization Projects
            (Non-RVCE)
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base rounded-lg">
              <thead className="bg-indigo-50 text-gray-800">
                <tr>
                  <th className="px-4 py-3 border">Project Title</th>
                  <th className="px-4 py-3 border">Investigators</th>
                  <th className="px-4 py-3 border">Agency</th>
                  <th className="px-4 py-3 border">Duration</th>
                  <th className="px-4 py-3 border">Amount</th>
                </tr>
              </thead>
              <tbody>
                {utilizationProjects.map((proj, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition duration-300"
                  >
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.title}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.investigators}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.agency}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.duration}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-gray-700 text-base">
            For more details on facility utilization projects, refer to our
            consultancy service guidelines.
          </div>
        </motion.div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
