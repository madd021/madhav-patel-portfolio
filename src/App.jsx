import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import DynamicBackground from './components/DynamicBackground';
import CVModal from './components/CVModal';
import EasterEggTerminal from './components/EasterEggTerminal';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CurrentlyExploring from './sections/CurrentlyExploring';
import SkillsSection from './sections/SkillsSection';
import FeaturedProject from './sections/FeaturedProject';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import StrengthsSection from './sections/StrengthsSection';
import JourneySection from './sections/JourneySection';
import PhilosophySection from './sections/PhilosophySection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* 1. Fast Terminal Preloader (<2s) */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* 2. Desktop-Only Custom Cursor */}
      <CustomCursor />

      {/* 3. Dynamic Background Canvas with particles & grid */}
      <DynamicBackground />

      {/* 4. Sticky Header Navigation */}
      <Navbar 
        onOpenCV={() => setIsCVOpen(true)} 
        onTriggerEasterEgg={() => setIsEasterEggOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 5. Hero Section */}
        <HeroSection onOpenCV={() => setIsCVOpen(true)} />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Currently Exploring */}
        <CurrentlyExploring />

        {/* 8. Skills Section */}
        <SkillsSection />

        {/* 9. Featured Project (UNIVO) */}
        <FeaturedProject />

        {/* 10. Experience Section */}
        <ExperienceSection />

        {/* 11. Education Section */}
        <EducationSection />

        {/* 12. Certifications */}
        <CertificationsSection />

        {/* 13. Strengths & What I Bring */}
        <StrengthsSection />

        {/* 14. Journey Timeline */}
        <JourneySection />

        {/* 15. Personal Philosophy */}
        <PhilosophySection />

        {/* 16. Contact Section */}
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* 17. Footer */}
      <Footer onTriggerEasterEgg={() => setIsEasterEggOpen(true)} />

      {/* Modals & Overlays */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <EasterEggTerminal isOpen={isEasterEggOpen} onClose={() => setIsEasterEggOpen(false)} />

    </div>
  );
}
