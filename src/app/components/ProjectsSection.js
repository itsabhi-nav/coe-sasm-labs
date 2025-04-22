"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN;

const fetcher = (url) =>
  fetch(url, {
    headers: AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {},
  }).then((res) => res.json());

const getStatusProgress = (type) => {
  switch (type) {
    case "completed":
      return 100;
    case "under_review":
      return 70;
    case "ongoing":
      return 50;
    default:
      return 30;
  }
};

export default function ProjectsSection() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    const listener = () => setTheme(localStorage.getItem("theme") || "dark");
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, []);

  const { data, error } = useSWR(`${API_URL}/items/funded_projects`, fetcher, {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
  });

  const projects = data?.data || [];
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const paginatedProjects = projects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center font-orbitron mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Funded Research Projects
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        {error ? (
          <p className="text-center text-red-500">
            ❌ Failed to fetch projects.
          </p>
        ) : !data ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {paginatedProjects.map((project, index) => {
                const progress = getStatusProgress(project.status_type);
                const isComplete = progress === 100;

                return (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-300 text-left group"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex gap-6 items-start">
                      <motion.div
                        className="w-16 h-16 shrink-0"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <CircularProgressbar
                          value={progress}
                          text={`${progress}%`}
                          styles={buildStyles({
                            pathColor: isComplete
                              ? "var(--accent)"
                              : "var(--highlight)",
                            textColor: "var(--text-primary)",
                            trailColor: "#cccccc40",
                            textSize: "24px",
                          })}
                        />
                      </motion.div>

                      <div className="flex-1 space-y-1 text-sm">
                        <h3 className="text-lg font-semibold mb-1 text-[var(--text-primary)]">
                          {project.title}
                        </h3>
                        <p className="text-[var(--text-secondary)]">
                          <strong>Investigators:</strong>{" "}
                          {project.investigators || "-"}
                        </p>
                        <p className="text-[var(--text-secondary)]">
                          <strong>Funding:</strong> ₹
                          {project.amount?.toLocaleString("en-IN") || "N/A"}
                        </p>
                        <p className="text-[var(--text-secondary)]">
                          <strong>Agency:</strong> {project.agency || "-"}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                              isComplete
                                ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                                : "bg-[var(--highlight)]/20 text-[var(--highlight)]"
                            }`}
                          >
                            {project.status_type || "Unknown"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded border bg-white hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-500"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded border bg-white hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-500"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Background Glow */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[var(--highlight)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
