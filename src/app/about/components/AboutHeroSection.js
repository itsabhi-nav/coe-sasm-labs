"use client";

import React from "react";

export default function AboutHeroSection() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/11167645/pexels-photo-11167645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Optional glow orbs */}
      <div className="absolute top-10 left-1/4 w-60 h-60 bg-indigo-400 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-orbitron drop-shadow-md">
          About COE‑SASM
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 font-light text-white/90">
          Leading the way in advanced RF & microwave research
        </p>
      </div>
    </section>
  );
}
