"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlayCircle,
  FiPauseCircle,
  FiMaximize,
  FiInfo,
} from "react-icons/fi";
import Link from "next/link";
import dynamic from "next/dynamic";
import Tilt from "react-parallax-tilt";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function VideoIntroductionSection({
  videoId = "ZaXm6wau-jc", // Replace with actual video ID
  title = "Facility Virtual Tour",
  description = "Explore our state-of-the-art facilities and advanced research environment.",
  cta = { text: "Learn More", href: "/facilities" },
}) {
  const [theme, setTheme] = useState("dark");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    window.addEventListener("storage", () =>
      setTheme(localStorage.getItem("theme") || "dark")
    );
  }, []);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const toggleFullScreen = () => {
    if (iframeRef.current?.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  };

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particleOptions = {
    particles: {
      number: { value: 30 },
      color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
      size: { value: 2 },
      move: { enable: true, speed: 0.3 },
    },
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {!prefersReducedMotion && (
        <Particles className="absolute inset-0 z-0" options={particleOptions} />
      )}

      <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-sm" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold font-orbitron drop-shadow mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--highlight))",
            }}
          />
        </motion.h2>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow Border */}
            <div className="absolute inset-0 border-2 border-[var(--accent)] rounded-2xl animate-pulse pointer-events-none" />

            {/* YouTube Embed */}
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
              title={title}
              className="relative w-full h-full z-10"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />

            {/* Controls */}
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={togglePlay}
                className="text-white mx-2 p-3 rounded-full hover:scale-110 transition"
              >
                {isPlaying ? (
                  <FiPauseCircle className="w-12 h-12" />
                ) : (
                  <FiPlayCircle className="w-12 h-12" />
                )}
              </button>
              <button
                onClick={toggleFullScreen}
                className="text-white absolute bottom-4 right-4 p-2"
              >
                <FiMaximize className="w-6 h-6" />
              </button>
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="absolute top-4 right-4 p-2 text-white"
              >
                <FiInfo className="w-6 h-6" />
              </button>

              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    className="absolute top-12 right-4 px-3 py-2 rounded bg-[var(--card-bg)] text-[var(--text-primary)] text-sm shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Virtual Tour · 3:45
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </Tilt>

        <motion.p
          className="text-base sm:text-lg mt-6 mb-6 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href={cta.href}
            className="inline-block px-6 py-3 text-sm sm:text-base font-semibold rounded-full border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            {cta.text}
          </Link>
        </motion.div>
      </div>

      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--highlight)] opacity-20 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[var(--accent)] opacity-20 blur-3xl pointer-events-none animate-pulse-slow" />
    </section>
  );
}
