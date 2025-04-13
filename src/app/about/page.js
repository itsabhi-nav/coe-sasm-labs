// src/app/about/page.js
"use client";
import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import OverviewSection from "./components/OverviewSection";
import MissionObjectivesSection from "./components/MissionObjectivesSection";
import HistoryTimelineSection from "./components/HistoryTimelineSection";
import ResearchGroupSection from "./components/ResearchGroupSection";

// For consistency, you can also import a Footer component if you want it here;
// either reuse the global footer or create an about-specific one.
import Footer from "../components/Footer"; // assuming Footer is shared across the site

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OverviewSection />
      <MissionObjectivesSection />
      <HistoryTimelineSection />
      <ResearchGroupSection />
      <Footer />
    </>
  );
}
