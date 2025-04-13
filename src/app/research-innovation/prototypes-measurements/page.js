// src/app/research-innovation/prototypes-measurements/page.js
"use client";
import React from "react";
import PrototypesOverviewSection from "./components/PrototypesOverviewSection";
import DualPolarizedEtchedPatchAntennaSection from "./components/DualPolarizedEtchedPatchAntennaSection";
import MultibandUSlotCircularPatchAntennaSection from "./components/MultibandUSlotCircularPatchAntennaSection";
import TriBandAntennaSection from "./components/TriBandAntennaSection";
import QuadBandAntennaSection from "./components/QuadBandAntennaSection";
import SpheroidalModalAnalysisSection from "./components/SpheroidalModalAnalysisSection";
import MeasurementsComparisonSection from "./components/MeasurementsComparisonSection";
import Footer from "../../components/Footer"; // Reuse shared Footer

export default function PrototypesMeasurementsPage() {
  return (
    <>
      <PrototypesOverviewSection />
      <DualPolarizedEtchedPatchAntennaSection />
      <MultibandUSlotCircularPatchAntennaSection />
      <TriBandAntennaSection />
      <QuadBandAntennaSection />
      <SpheroidalModalAnalysisSection />
      <MeasurementsComparisonSection />
      <Footer />
    </>
  );
}
