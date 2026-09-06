import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Milestone from './Milestone';
import { STORY_DATA } from '../data/story';

export default function MilestoneJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Staggered reveal for milestones as they enter view
    const scenes = containerRef.current?.querySelectorAll('.milestone-scene');
    if (!scenes) return;

    scenes.forEach((scene) => {
      gsap.fromTo(
        scene,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scene,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section id="journey" ref={containerRef} className="cinematic-section" style={{ position: 'relative' }}>
      {/* Central subtle glowing vertical line */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(200, 107, 143, 0.4) 10%, rgba(200, 107, 143, 0.4) 90%, transparent)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ textAlign: 'center', marginBottom: '60px', zIndex: 2 }}>
        <span className="section-tag">Chapter by Chapter</span>
        <h2 className="section-title-editorial">Our Milestone Journey</h2>
        <p style={{ color: '#A9A0AA', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem' }}>
          From the very first missed call to every late-night conversation.
        </p>
      </div>

      <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        {STORY_DATA.milestones.map((milestone, idx) => (
          <Milestone key={milestone.id} milestone={milestone} index={idx} />
        ))}
      </div>
    </section>
  );
}
