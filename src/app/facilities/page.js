// src/app/facilities/page.js
"use client";
import React from "react";
import FacilitiesHeroSection from "./components/FacilitiesHeroSection";
import EquipmentOverviewSection from "./components/EquipmentOverviewSection";
import AnechoicChamberSection from "./components/AnechoicChamberSection";
import MicrowaveTestEquipmentSection from "./components/MicrowaveTestEquipmentSection";
import HornAntennasSection from "./components/HornAntennasSection";
import StandardAntennaMeasurementSection from "./components/StandardAntennaMeasurementSection";
import TestAccessoriesSection from "./components/TestAccessoriesSection";
import EMIEMCSection from "./components/EMIEMCSection";
import SimulationSoftwareSection from "./components/SimulationSoftwareSection";
import Footer from "../components/Footer"; // shared footer

export default function FacilitiesPage() {
  return (
    <>
      <FacilitiesHeroSection />
      <EquipmentOverviewSection />
      <AnechoicChamberSection />
      <MicrowaveTestEquipmentSection />
      <HornAntennasSection />
      <StandardAntennaMeasurementSection />
      <TestAccessoriesSection />
      <EMIEMCSection />
      <SimulationSoftwareSection />
      <Footer />
    </>
  );
}
