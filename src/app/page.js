// src/app/page.js
import React from "react";
import HeroSection from "./components/HeroSection";
import VideoIntroductionSection from "./components/VideoIntroductionSection";
import TimelineSection from "./components/TimelineSection";
import IntroductionSection from "./components/IntroductionSection";
import FacilitiesHighlights from "./components/FacilitiesHighlights";
import WhatWeDoInfographic from "./components/WhatWeDoInfographic"; // New
import ResearchHighlights from "./components/ResearchHighlights";
import ProjectsSection from "./components/ProjectsSection";
import TrainingHighlights from "./components/TrainingHighlights";
import AnimatedCountersSection from "./components/AnimatedCountersSection"; // New
import AwardsSection from "./components/AwardsSection";
import PublicationsPatentsSection from "./components/PublicationsPatentsSection";
import FacultyProfilesSection from "./components/FacultyProfilesSection";
import PartnersSection from "./components/PartnersSection";
import LatestNewsSlider from "./components/LatestNewsSlider"; // New
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoIntroductionSection />
      <TimelineSection />
      <IntroductionSection />
      <FacilitiesHighlights />
      <WhatWeDoInfographic />
      <ResearchHighlights />
      <ProjectsSection />
      <TrainingHighlights />
      <AnimatedCountersSection />
      <LatestNewsSlider />
      <AwardsSection />
      <PublicationsPatentsSection />
      <FacultyProfilesSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
