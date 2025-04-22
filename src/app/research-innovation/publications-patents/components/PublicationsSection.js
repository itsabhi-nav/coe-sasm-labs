"use client";

import React, { useState } from "react";
import useSWR from "swr";
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
import { useInView } from "react-intersection-observer";

const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN;

const fetcher = (url) =>
  fetch(url, {
    headers: AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {},
  }).then((res) => res.json());

export default function PublicationsSection() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/items/publications`,
    fetcher,
    {
      dedupingInterval: 60 * 1000,
      revalidateOnFocus: false,
    }
  );

  const publications = data?.data || [];

  const barChartData = Object.entries(
    publications.reduce((acc, pub) => {
      if (pub.year) acc[pub.year] = (acc[pub.year] || 0) + 1;
      return acc;
    }, {})
  ).map(([year, count]) => ({ year, count }));

  const { ref: chartRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Pagination logic
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(publications.length / ITEMS_PER_PAGE);
  const paginatedPublications = publications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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

        {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        {error && (
          <p className="text-center text-red-500">
            Failed to fetch publications.
          </p>
        )}

        {!isLoading && !error && (
          <>
            {/* Publication Cards */}
            <div className="space-y-8">
              {paginatedPublications.map((pub, idx) => (
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
                    <span className="font-semibold">Authors:</span>{" "}
                    {pub.authors}
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
                      <span className="font-semibold">Journal:</span>{" "}
                      {pub.journal}
                    </p>
                  )}
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

            {/* Chart */}
            <motion.div
              ref={chartRef}
              className="mt-16 bg-gray-50 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Publications Per Year
              </h3>
              <div className="w-full h-80">
                {inView ? (
                  barChartData.length === 0 ? (
                    <p className="text-center text-gray-500">No chart data</p>
                  ) : (
                    <ResponsiveContainer>
                      <BarChart
                        data={barChartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 10,
                        }}
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
                  )
                ) : (
                  <p className="text-center text-gray-400">Chart loading...</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
