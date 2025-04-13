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

// Dynamic import for particles
const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  {
    ssr: false,
  }
);

export default function VideoIntroductionSection({
  videoId = "YOUR_VIDEO_ID", // Replace with actual YouTube video ID
  title = "Facility Virtual Tour",
  description = "Explore our state-of-the-art facilities and advanced research environment.",
  cta = { text: "Learn More", href: "/facilities" },
}) {
  const [theme, setTheme] = useState("dark");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  // Sync with site's theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Load YouTube Iframe API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };

  // Reduced motion check
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Particle options
  const particleOptions = {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: theme === "dark" ? "#ffffff" : "#4f46e5" },
      shape: { type: "circle" },
      opacity: { value: 0.2, random: true },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
    },
  };

  // Video controls
  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
    trackClick(isPlaying ? "Pause Video" : "Play Video");
  };

  const toggleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      }
    }
    trackClick("Full Screen Video");
  };

  // Analytics placeholder
  const trackClick = (label) => {
    console.log(`Event: ${label}`);
    // Integrate with Google Analytics: window.gtag("event", label, { event_category: "VideoSection" });
  };

  return (
    <section
      className={`relative py-16 sm:py-20 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-gray-100 to-white"
      }`}
    >
      {/* Particle Overlay */}
      {!prefersReducedMotion && (
        <Particles
          className="absolute inset-0 z-0"
          init={() => {}}
          options={particleOptions}
        />
      )}

      {/* Glassmorphic Overlay */}
      <div
        className={`absolute inset-0 z-10 ${
          theme === "dark" ? "bg-black/30" : "bg-white/30"
        } backdrop-blur-sm`}
      ></div>

      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={prefersReducedMotion ? "visible" : "visible"}
      >
        <motion.h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          } mb-6 sm:mb-8 drop-shadow-lg`}
          variants={itemVariants}
        >
          {title}
        </motion.h2>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          disabled={prefersReducedMotion}
        >
          <motion.div
            className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-video group"
            variants={itemVariants}
            whileHover={
              prefersReducedMotion
                ? {}
                : { scale: 1.02, transition: { duration: 0.3 } }
            }
          >
            {/* Glowing Border */}
            <div
              className={`absolute inset-0 border-2 ${
                theme === "dark" ? "border-indigo-500/50" : "border-blue-500/50"
              } rounded-xl animate-pulse group-hover:border-opacity-75`}
            ></div>

            {/* Video Iframe */}
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
              title={title}
              className="relative w-full h-full z-10"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* Overlay Controls */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <motion.button
                onClick={togglePlay}
                className="p-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isPlaying ? (
                  <FiPauseCircle className="w-12 h-12" />
                ) : (
                  <FiPlayCircle className="w-12 h-12" />
                )}
              </motion.button>
              <motion.button
                onClick={toggleFullScreen}
                className="absolute bottom-4 right-4 p-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                aria-label="Toggle full screen"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FiMaximize className="w-6 h-6" />
              </motion.button>
              <motion.button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="absolute top-4 right-4 p-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                aria-label="Video information"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FiInfo className="w-6 h-6" />
              </motion.button>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    className={`absolute top-12 right-4 p-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-900"
                    } text-sm shadow-lg`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Virtual Tour | 3:45
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </Tilt>

        <motion.p
          className={`text-base sm:text-lg md:text-xl text-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } mt-4 sm:mt-6 leading-relaxed drop-shadow-md`}
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-center mt-6 sm:mt-8"
          variants={itemVariants}
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            disabled={prefersReducedMotion}
          >
            <motion.div
              className={`inline-block py-3 sm:py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 border-2 ${
                theme === "dark"
                  ? "border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900"
                  : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
              variants={buttonVariants}
              whileHover={prefersReducedMotion ? {} : "hover"}
              whileTap={prefersReducedMotion ? {} : "tap"}
            >
              <Link
                href={cta.href}
                aria-label={cta.text}
                onClick={() => trackClick(cta.text)}
              >
                {cta.text}
              </Link>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
}
