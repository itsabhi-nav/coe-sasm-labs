// src/app/research-innovation/research-projects/page.js
"use client";
import React from "react";
import FundedProjectsSection from "./components/FundedProjectsSection";

import CurrentResearchThemesSection from "./components/CurrentResearchThemesSection";
import Footer from "../../components/Footer"; // Reuse shared Footer

export default function ResearchProjectsPage() {
  return (
    <>
      <FundedProjectsSection />

      <CurrentResearchThemesSection />
      <Footer />
    </>
  );
}

