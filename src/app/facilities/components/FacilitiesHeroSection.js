"use client";

import React from "react";

export default function FacilitiesHeroSection() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1128670106/photo/laser-reflect-on-optic-table-un-quantum-laboratory-b.jpg?s=612x612&w=0&k=20&c=ICPNEddia-7oNHwRFSDezj9hytb5YdxrO7YlANweWhE=')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Ambient Glow Effects */}
      <div className="absolute top-10 left-1/4 w-60 h-60 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-orbitron drop-shadow-md">
          Facilities & Equipment
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 font-light text-white/90">
          Comprehensive Characterization & Measurement Capabilities
        </p>
      </div>
    </section>
  );
}
