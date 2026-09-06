import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import OpeningScene from './components/OpeningScene';
import MilestoneJourney from './components/MilestoneJourney';
import LoveCode from './components/LoveCode';
import MemoryFrequency from './components/MemoryFrequency';
import RomanticGallery from './components/RomanticGallery';
import FutureChapter from './components/FutureChapter';
import Quiz from './components/Quiz';
import FinalReveal from './components/FinalReveal';
import FloatingNav from './components/FloatingNav';
import AmbientBackground from './components/AmbientBackground';
import HeartBurst from './components/HeartBurst';
import { soundManager, TRACKS } from './utils/soundManager';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false
    });
    lenisRef.current = lenis;

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleEnter = () => {
    setIsEntered(true);
    // Smooth scroll slightly past hero to begin story
    setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo('#journey', { offset: -50, duration: 1.5 });
      }
    }, 100);
  };

  const handleNavigate = (targetId) => {
    setActiveSection(targetId);
    if (targetId === 'code520') {
      soundManager.switchTrack(TRACKS.CIPHER_LOVE.src, TRACKS.CIPHER_LOVE.offset);
    }
    if (lenisRef.current) {
      const el = document.getElementById(targetId);
      if (el) {
        lenisRef.current.scrollTo(el, { offset: -80, duration: 1.2 });
      }
    }
  };

  return (
    <div className="cinematic-app-root" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Dynamic atmospheric starry ambient canvas, glowing light orbs and film grain */}
      <AmbientBackground />

      {/* Global Interactive HeartBurst System for Click / Tap / Subtle Mouse Trail */}
      <HeartBurst />

      {/* Secret Cinematic Romantic Opening Portal */}
      <OpeningScene onEnter={handleEnter} isEntered={isEntered} />

      {/* Main Experience */}
      {isEntered && (
        <>
          <FloatingNav activeSection={activeSection} onNavigate={handleNavigate} />

          <main style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <MilestoneJourney />
            <LoveCode />
            <MemoryFrequency />
            <RomanticGallery />
            <FutureChapter />
            <Quiz />
            <FinalReveal />
          </main>
        </>
      )}
    </div>
  );
}
