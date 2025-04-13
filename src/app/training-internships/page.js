// src/app/training-internships/page.js
"use client";
import React from "react";
import TrainingHeroSection from "./components/TrainingHeroSection";
import TrainingProgramsSection from "./components/TrainingProgramsSection";
import InternshipsSection from "./components/InternshipsSection";
import TrainingContactsSection from "./components/TrainingContactsSection";
import Footer from "../components/Footer"; // Adjust the relative path if needed

export default function TrainingInternshipsPage() {
  return (
    <>
      <TrainingHeroSection />
      <TrainingProgramsSection />
      <InternshipsSection />
      <TrainingContactsSection />
      <Footer />
    </>
  );
}
