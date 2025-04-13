"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  const footerLinks = {
    about: {
      title: "About COE‑SASM",
      description:
        "The Centre of Excellence in Smart Antenna Systems and Measurements pioneers advanced RF and microwave research for wireless and defence applications.",
      logo: "https://res.cloudinary.com/dcahaaigp/image/upload/v1744560504/1703130362341_yftsi2.jpg",
    },
    quickLinks: {
      title: "Quick Links",
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/facilities", label: "Facilities & Equipment" },
        { href: "/training-internships", label: "Training & Internships" },
        { href: "/contact", label: "Contact" },
      ],
    },
    researchFacilities: {
      title: "Research & Facilities",
      items: [
        {
          href: "/research-innovation/research-projects",
          label: "Research Projects",
        },
        {
          href: "/research-innovation/prototypes-measurements",
          label: "Prototypes & Measurements",
        },
        {
          href: "/research-innovation/publications-patents",
          label: "Publications & Patents",
        },
        { href: "/facilities/aneco-chamber", label: "Anechoic Chamber" },
        { href: "/facilities/test-equipment", label: "Test Equipment" },
      ],
    },
    connect: {
      title: "Connect With Us",
      socials: [
        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
        { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com", label: "GitHub" },
        { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2s0x0:0x0!2zMTLCsDU3JzI4LjMiTiA3N8KwMzMnNTguNSJF!5e0!3m2!1sen!2sin!4v1680437234051",
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <motion.div {...fadeInUp} className="space-y-4 text-left relative z-10">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-cyan-400">
            {footerLinks.about.title}
          </h3>
          <img
            src={footerLinks.about.logo}
            alt="COE‑SASM Logo"
            className="w-28 sm:w-32 mt-4 object-contain"
          />
          <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-100 transition duration-300">
            {footerLinks.about.description}
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="space-y-4 text-left"
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-white">
            {footerLinks.quickLinks.title}
          </h3>
          <ul className="text-sm text-gray-300 space-y-3">
            {footerLinks.quickLinks.items.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href}>
                  <span className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Research & Facilities */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="space-y-4 text-left"
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-white">
            {footerLinks.researchFacilities.title}
          </h3>
          <ul className="text-sm text-gray-300 space-y-3">
            {footerLinks.researchFacilities.items.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href}>
                  <span className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect With Us */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="space-y-6 text-left"
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-teal-400">
            {footerLinks.connect.title}
          </h3>
          <div className="flex gap-6">
            {footerLinks.connect.socials.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                aria-label={item.label}
              >
                <div
                  className="group transition-transform duration-300 hover:scale-110"
                  title={item.label}
                >
                  <item.icon
                    className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_6px_var(--accent)] transition-all duration-300"
                    size={22}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full hover:scale-[1.02] transition-transform duration-300">
            <iframe
              title="COE‑SASM Location"
              className="w-full h-48 rounded-lg border border-white/10 shadow-md"
              src={footerLinks.connect.mapSrc}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm text-gray-400 space-y-1 pb-6 px-4"
      >
        <p className="hover:text-white transition duration-300">
          © 2025 COE‑SASM, RV College of Engineering. All Rights Reserved.
        </p>
        <p>
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold cursor-pointer transition-transform transform hover:scale-105 hover:underline underline-offset-4 duration-300"
          >
            Designed and Developed by Abhinav Dubey
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
}
