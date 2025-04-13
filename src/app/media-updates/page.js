"use client";
import React, { useState } from "react";
import MediaHeroSection from "./components/MediaHeroSection";
import GalleryMediaSection from "./components/GalleryMediaSection";
import NewsEventsSection from "./components/NewsEventsSection";
import Footer from "../components/Footer"; // Adjust path if needed

export default function MediaUpdatesPage() {
  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <>
      <MediaHeroSection />
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-3 text-xl font-semibold rounded transition-colors duration-300 ${
                activeTab === "gallery"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Gallery & Media
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 text-xl font-semibold rounded transition-colors duration-300 ${
                activeTab === "news"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              News & Events
            </button>
          </div>
          {/* Conditional Rendering of Tabs */}
          <div>
            {activeTab === "gallery" ? (
              <GalleryMediaSection />
            ) : (
              <NewsEventsSection />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
