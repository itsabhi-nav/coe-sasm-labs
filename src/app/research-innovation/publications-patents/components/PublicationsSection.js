"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaLaptopCode } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function PublicationsSection() {
  const publications = [
    {
      title:
        "Design of Modified U-Slot Multiband Circular Patch Antenna with Cylindrical Dielectric Resonator Antenna",
      authors: "Shushrutha K S, Pooja T R, and Sushma V",
      conference:
        "4th IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT 2019)",
      year: 2019,
    },
    {
      title:
        "Design of Conformal Multiband Antenna and its Gain Enhancement using Metamaterial Lens",
      authors: "Mahesh A, Sandhya, Keerthana",
      conference:
        "5th IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering, Nov 2019, Bangalore, India",
      year: 2019,
    },
    {
      title:
        "Design of Multi-Band Antennas for Wireless Communication Applications",
      authors: "Mahesh A, Shushrutha K S, Ramesh Kumar Shukla",
      conference:
        "6th biennial IEEE Applied Electromagnetics Conference (AEMC-2017), Aurangabad, India",
      year: 2017,
    },
    {
      title:
        "A Hybrid Method of Analysis for Shaped Dielectric Lenses Compared with Measurement Results",
      authors: "Ravishankar S, Shushrutha K S, and Mahesh S",
      conference:
        "2017 IEEE MTT-S International Microwave and RF Conference (IMaRC), Dec 2017, Ahmedabad, India",
      year: 2017,
    },
    {
      title:
        "Computations of Scattering by Shaped Dielectric Lenses and a comparison with Measurements",
      authors: "Ravishankar S, Shushrutha K S, Mahesh S, and Arjun Ravishankar",
      conference:
        "2017 IEEE AP-S Symposium on Antennas and Propagation and USNC-URSI Radio Science Meeting, July 9–14, 2017, San Diego, California, USA",
      year: 2017,
    },
    {
      title:
        "Hybridization of Bayesian Compressive Sensing and Array Dilation Technique for Synthesis of Linear Isophoric Sparse Antenna Arrays",
      authors: "Mahesh A, Ashutosh Kedar, and Pratap Vangol",
      journal:
        "IEEE Transactions on Antennas and Propagation, Vol. 71, Issue: 5, May 2023",
      year: 2023,
    },
  ];

  const barChartData = Object.entries(
    publications.reduce((acc, pub) => {
      acc[pub.year] = (acc[pub.year] || 0) + 1;
      return acc;
    }, {})
  ).map(([year, count]) => ({ year, count }));

  return (
    <section className="relative py-20 bg-white overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Publications by Faculty In Charge
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-xl transition duration-300 border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
                {pub.journal ? (
                  <FaBook className="text-indigo-500" />
                ) : (
                  <FaLaptopCode className="text-indigo-500" />
                )}
                {pub.title}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Authors:</span> {pub.authors}
              </p>
              {pub.conference && (
                <p className="text-sm inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full mt-2">
                  Conference
                </p>
              )}
              {pub.journal && (
                <p className="text-sm inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full mt-2">
                  Journal
                </p>
              )}
              {pub.conference && (
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">
                    Conference/Presentation:
                  </span>{" "}
                  {pub.conference}
                </p>
              )}
              {pub.journal && (
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Journal:</span> {pub.journal}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <motion.div
          className="mt-14 bg-gray-50 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Publications Per Year
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <BarChart
                data={barChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#4b5563", fontSize: 12 }}
                />
                <YAxis tick={{ fill: "#4b5563" }} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#6366f1"
                  barSize={40}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://rvce.edu.in/IDRC-PATENTS-FILED"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline text-lg"
          >
            View All Publications
          </a>
        </motion.div>
      </div>
    </section>
  );
}
