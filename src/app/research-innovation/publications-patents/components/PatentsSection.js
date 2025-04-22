"use client";

import React, { useState } from "react";
import useSWR from "swr";
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
import { useInView } from "react-intersection-observer";

// ⛽ API setup
const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN;

const fetcher = (url) =>
  fetch(url, {
    headers: AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {},
  }).then((res) => res.json());

export default function PatentsSection() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/items/patents`,
    fetcher,
    {
      dedupingInterval: 60 * 1000,
      revalidateOnFocus: false,
    }
  );

  const allPatents = data?.data || [];

  // 🔁 Pagination
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPatents.length / ITEMS_PER_PAGE);
  const paginatedPatents = allPatents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 📊 Pie: Filed vs Granted
  const chartData = [
    { name: "Filed", value: allPatents.length },
    {
      name: "Granted",
      value: allPatents.filter((p) => p.grantedDate).length,
    },
  ];

  // 📊 Bar: Year-wise filings
  const yearCountMap = allPatents.reduce((acc, pat) => {
    const year = pat.filingDate?.slice(0, 4);
    if (year) acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});
  const yearWiseData = Object.entries(yearCountMap).map(([year, count]) => ({
    year,
    count,
  }));

  const { ref: pieRef, inView: pieInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: barRef, inView: barInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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

        {isLoading && (
          <p className="text-center text-gray-500">Loading patents...</p>
        )}
        {error && (
          <p className="text-center text-red-500">Failed to load patents.</p>
        )}

        {!isLoading && !error && (
          <>
            <div className="space-y-8">
              {paginatedPatents.map((pat, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
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
                    {new Date(pat.filingDate).toLocaleDateString("en-IN")}
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg">
                    <span className="font-semibold">Granted Date:</span>{" "}
                    {pat.grantedDate
                      ? new Date(pat.grantedDate).toLocaleDateString("en-IN")
                      : "Pending"}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center items-center gap-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={`px-4 py-2 rounded-md border ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="text-gray-600 font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={`px-4 py-2 rounded-md border ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}

            {/* Pie Chart */}
            <motion.div
              ref={pieRef}
              className="mt-16 bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={pieInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Patent Status Distribution
              </h3>
              <div className="w-full h-80">
                {pieInView ? (
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
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
                ) : (
                  <p className="text-center text-gray-400">Loading chart...</p>
                )}
              </div>
            </motion.div>

            {/* Bar Chart */}
            <motion.div
              ref={barRef}
              className="mt-12 bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={barInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Patent Filings by Year
              </h3>
              <div className="w-full h-80">
                {barInView ? (
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
                ) : (
                  <p className="text-center text-gray-400">Chart loading...</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
