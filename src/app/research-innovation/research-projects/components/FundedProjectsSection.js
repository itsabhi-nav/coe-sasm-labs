"use client";

import React, { useState } from "react";
import useSWR from "swr";
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
import { useInView } from "react-intersection-observer";

// ⛽ API setup
const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN;

const fetcher = (url) =>
  fetch(url, {
    headers: AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {},
  }).then((res) => res.json());

export default function FundedProjectsSection() {
  const { data: fundedData, error: fundedError } = useSWR(
    `${API_URL}/items/funded_projects`,
    fetcher,
    {
      dedupingInterval: 60 * 1000,
      revalidateOnFocus: false,
    }
  );

  const { data: utilizationData, error: utilizationError } = useSWR(
    `${API_URL}/items/utilization_projects`,
    fetcher,
    {
      dedupingInterval: 60 * 1000,
      revalidateOnFocus: false,
    }
  );

  const fundedProjects = fundedData?.data || [];
  const utilizationProjects = utilizationData?.data || [];

  const [fundedPage, setFundedPage] = useState(1);
  const [utilizationPage, setUtilizationPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const fundedTotalPages = Math.ceil(fundedProjects.length / ITEMS_PER_PAGE);
  const utilizationTotalPages = Math.ceil(
    utilizationProjects.length / ITEMS_PER_PAGE
  );

  const paginatedFunded = fundedProjects.slice(
    (fundedPage - 1) * ITEMS_PER_PAGE,
    fundedPage * ITEMS_PER_PAGE
  );

  const paginatedUtilization = utilizationProjects.slice(
    (utilizationPage - 1) * ITEMS_PER_PAGE,
    utilizationPage * ITEMS_PER_PAGE
  );

  const barChartData = fundedProjects.map((proj) => {
    const rawAmount =
      typeof proj.amount === "string"
        ? parseInt(proj.amount.replace(/[^0-9]/g, ""), 10)
        : proj.amount;

    return {
      agency: proj.agency || "Unknown",
      Amount: rawAmount ? rawAmount / 100000 : 0,
    };
  });

  const { ref: chartRef, inView: chartInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

        {/* Funded Projects Table */}
        <motion.div
          className="overflow-x-auto rounded-2xl shadow-md mb-4"
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
              {paginatedFunded.map((proj, idx) => (
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
                    {proj.amount
                      ? `₹${proj.amount.toLocaleString("en-IN")}`
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Funded Pagination */}
        {fundedTotalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-10">
            <button
              onClick={() => setFundedPage((p) => Math.max(1, p - 1))}
              disabled={fundedPage === 1}
              className={`px-4 py-2 rounded border ${
                fundedPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-600 font-medium">
              Page {fundedPage} of {fundedTotalPages}
            </span>
            <button
              onClick={() =>
                setFundedPage((p) => Math.min(fundedTotalPages, p + 1))
              }
              disabled={fundedPage === fundedTotalPages}
              className={`px-4 py-2 rounded border ${
                fundedPage === fundedTotalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Bar Chart */}
        <motion.div
          ref={chartRef}
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={chartInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Funding Overview by Agency (in Lakhs)
          </h3>
          <div className="w-full h-80">
            {chartInView ? (
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
            ) : (
              <p className="text-center text-gray-400">Loading chart...</p>
            )}
          </div>
        </motion.div>

        {/* Utilization Table */}
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
                {paginatedUtilization.map((proj, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition duration-300"
                  >
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.title}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.investigators || "-"}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.agency || "-"}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.duration}
                    </td>
                    <td className="px-4 py-3 border text-gray-700">
                      {proj.amount || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Utilization Pagination */}
        {utilizationTotalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setUtilizationPage((p) => Math.max(1, p - 1))}
              disabled={utilizationPage === 1}
              className={`px-4 py-2 rounded border ${
                utilizationPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-600 font-medium">
              Page {utilizationPage} of {utilizationTotalPages}
            </span>
            <button
              onClick={() =>
                setUtilizationPage((p) =>
                  Math.min(utilizationTotalPages, p + 1)
                )
              }
              disabled={utilizationPage === utilizationTotalPages}
              className={`px-4 py-2 rounded border ${
                utilizationPage === utilizationTotalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Glow Background */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
