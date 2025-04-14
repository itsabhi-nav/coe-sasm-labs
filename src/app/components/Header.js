"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Sun, Moon, Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  const [theme, setTheme] = useState("dark");
  const mobileMenuRef = useRef(null);
  const researchButtonRef = useRef(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => setIsScrolled(y > 50));
    return () => unsubscribe();
  }, [scrollY]);

  const toggleSubMenu = (name) => {
    setSubMenu((prev) => (prev === name ? "" : name));
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setSubMenu("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !researchButtonRef.current?.contains(event.target)
      ) {
        closeMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) mobileMenuRef.current?.focus();
  }, [menuOpen]);

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/facilities", label: "Facilities & Equipment" },
      {
        label: "Research & Innovation",
        subItems: [
          {
            href: "/research-innovation/research-projects",
            label: "Research & Projects",
          },
          {
            href: "/research-innovation/prototypes-measurements",
            label: "Prototypes & Measurements",
          },
          {
            href: "/research-innovation/publications-patents",
            label: "Publications & Patents",
          },
        ],
      },
      { href: "/media-updates", label: "Media & Updates" },
      { href: "/training-internships", label: "Training & Internships" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, staggerChildren: 0.05 },
    },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 shadow-xl" : "py-6"
      } bg-[#0b1d3a] text-white`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-x-3 group">
          <Image
            src="/logo.png" // make sure your logo is inside /public/logo.png
            alt="COE-SASM Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-3xl font-bold font-orbitron tracking-wider group-hover:text-cosmic-accent transition text-white">
            COE-SASM
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center text-[15px] font-medium text-white">
          {navItems.map((item, i) =>
            item.subItems ? (
              <div key={i} className="relative">
                <button
                  ref={researchButtonRef}
                  onClick={() => toggleSubMenu(item.label)}
                  className="hover:text-cosmic-accent flex items-center gap-1"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      subMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {subMenu === item.label && (
                    <motion.ul
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="absolute left-0 mt-4 w-64 bg-[#0b1d3a] border border-cosmic-accent/30 text-white rounded-lg shadow-xl z-50 p-2 space-y-1"
                    >
                      {item.subItems.map((sub, j) => (
                        <motion.li key={j} variants={itemVariants}>
                          <Link
                            href={sub.href}
                            onClick={closeMenus}
                            className={`block px-4 py-2 rounded-md transition ${
                              pathname === sub.href
                                ? "bg-cosmic-accent/20 text-cosmic-accent"
                                : "hover:bg-cosmic-accent/10 text-white"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={i}
                href={item.href}
                className={`hover:text-cosmic-accent transition ${
                  pathname === item.href
                    ? "text-cosmic-accent font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/20 hover:border-cosmic-accent transition"
          >
            {theme === "dark" ? (
              <Sun className="text-white" size={18} />
            ) : (
              <Moon className="text-white" size={18} />
            )}
          </button>
        </nav>

        {/* Mobile Theme Toggle + Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/20 hover:border-cosmic-accent transition"
          >
            {theme === "dark" ? (
              <Sun className="text-white" size={18} />
            ) : (
              <Moon className="text-white" size={18} />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={mobileMenuRef}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-[#0b1d3a] text-white px-6 py-4 space-y-4"
          >
            {navItems.map((item, i) =>
              item.subItems ? (
                <div key={i}>
                  <button
                    onClick={() => toggleSubMenu(item.label)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        subMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {subMenu === item.label && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.subItems.map((sub, j) => (
                        <li key={j}>
                          <Link
                            href={sub.href}
                            className="block hover:text-cosmic-accent"
                            onClick={closeMenus}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  href={item.href}
                  className="block hover:text-cosmic-accent"
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
