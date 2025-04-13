"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TriBandAntennaSection() {
  const tableData = [
    {
      freq: "0.9",
      simRL: -24,
      measRL: -11.2,
      vswrSim: 1.1,
      vswrMeas: 1.7,
      impedance: "51 Ω",
    },
    {
      freq: "1.8",
      simRL: -18,
      measRL: -25,
      vswrSim: 1.15,
      vswrMeas: 1.12,
      impedance: "51 Ω",
    },
    {
      freq: "3.5",
      simRL: -25,
      measRL: -13,
      vswrSim: 1.18,
      vswrMeas: 1.5,
      impedance: "52 Ω",
    },
  ];

  const radarData = tableData.map((row) => ({
    freq: `${row.freq} GHz`,
    Simulated: Math.abs(row.simRL),
    Measured: Math.abs(row.measRL),
  }));

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 font-orbitron mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tri Band Antenna Model-1
          <div className="text-sm mt-2 text-gray-600">
            (0.9 GHz, 1.8 GHz, 3.5 GHz)
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full animate-pulse" />
        </motion.h2>

        {/* Description */}
        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-md p-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold">Substrate:</span> FR4 with Dielectric
            Constant = 4.4, Thickness = 1.6 mm.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mt-2">
            <span className="font-bold">Patch Dimensions:</span> Width = 80 mm,
            Length = 140 mm
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          className="overflow-x-auto rounded-2xl shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base text-center rounded-md">
            <thead className="bg-indigo-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border">Frequency (GHz)</th>
                <th className="px-4 py-3 border">Return Loss (Sim)</th>
                <th className="px-4 py-3 border">Return Loss (Meas)</th>
                <th className="px-4 py-3 border">VSWR (Sim)</th>
                <th className="px-4 py-3 border">VSWR (Meas)</th>
                <th className="px-4 py-3 border">Impedance</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tableData.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-4 py-3 border">{row.freq}</td>
                  <td className="px-4 py-3 border">{row.simRL}</td>
                  <td className="px-4 py-3 border">{row.measRL}</td>
                  <td className="px-4 py-3 border">{row.vswrSim}</td>
                  <td className="px-4 py-3 border">{row.vswrMeas}</td>
                  <td className="px-4 py-3 border">{row.impedance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Return Loss Comparison (Simulated vs Measured)
          </h3>
          <div className="w-full h-72">
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#d1d5db" />
                <PolarAngleAxis dataKey="freq" stroke="#4b5563" />
                <PolarRadiusAxis angle={30} domain={[0, 30]} tickCount={6} />
                <Radar
                  name="Simulated"
                  dataKey="Simulated"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Measured"
                  dataKey="Measured"
                  stroke="#9333ea"
                  fill="#9333ea"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Glow */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
