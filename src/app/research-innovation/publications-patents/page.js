// src/app/research-innovation/publications-patents/page.js
"use client";
import React from "react";
import PublicationsSection from "./components/PublicationsSection";
import PatentsSection from "./components/PatentsSection";
import Footer from "../../components/Footer"; // Assuming shared footer

export default function PublicationsPatentsPage() {
  return (
    <>
      <PublicationsSection />
      <PatentsSection />
      <Footer />
    </>
  );
}
