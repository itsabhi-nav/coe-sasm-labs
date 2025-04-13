"use client";
import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";
import MapSection from "./components/MapSection";
import Footer from "../components/Footer"; // Adjust relative path as necessary

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <MapSection />
      <Footer />
    </>
  );
}
