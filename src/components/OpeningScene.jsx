import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { soundManager } from '../utils/soundManager';
import { triggerHeartBurst } from '../utils/loveEffects';
import { Sparkles, Heart } from 'lucide-react';

export default function OpeningScene({ onEnter, isEntered }) {
  const containerRef = useRef(null);
  const portalRef = useRef(null);
  const rippleRef = useRef(null);
  const textGroupRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.from('.opening-anim-item', {
        y: 28,
        opacity: 0,
        duration: 1.3,
        stagger: 0.18,
        ease: 'power3.out'
      });

      // Subtle breathing on portal rings
      gsap.to('.portal-pulse-ring', {
        scale: 1.3,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: 'power2.out',
        stagger: 0.7
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnterExperience = (e) => {
    if (hasTriggered) return;
    setHasTriggered(true);

    const x = e ? (e.clientX || (e.touches && e.touches[0]?.clientX) || window.innerWidth / 2) : window.innerWidth / 2;
    const y = e ? (e.clientY || (e.touches && e.touches[0]?.clientY) || window.innerHeight / 2) : window.innerHeight / 2;

    // Trigger romantic heart burst at tap coordinates
    triggerHeartBurst(x, y, { count: 14, symbols: ['❤️', '💖', '💕', '✨', '🌸', '🩷', '💌'] });

    // CRITICAL: Immediately play music starting from EXACTLY 50 seconds on first tap
    soundManager.playFromOpeningTap(50);

    if (rippleRef.current) {
      rippleRef.current.style.left = `${x}px`;
      rippleRef.current.style.top = `${y}px`;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (onEnter) onEnter();
      }
    });

    tl.to(rippleRef.current, {
      scale: 65,
      opacity: 0.85,
      duration: 1.2,
      ease: 'power2.inOut'
    })
    .to(textGroupRef.current, {
      opacity: 0,
      y: -35,
      filter: 'blur(8px)',
      duration: 0.75,
      ease: 'power3.in'
    }, '-=0.75')
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out'
    }, '-=0.25');
  };

  if (isEntered) return null;

  return (
    <div
      ref={containerRef}
      className="opening-scene-container"
      onClick={handleEnterExperience}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#160A12',
        backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(90, 22, 53, 0.7) 0%, rgba(22, 10, 18, 0.95) 75%, #160A12 100%)',
        cursor: 'pointer',
        padding: '24px',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Expanding Soft Pink Ripple */}
      <div
        ref={rippleRef}
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 79, 129, 0.9) 0%, rgba(201, 24, 74, 0.5) 50%, transparent 100%)',
          transform: 'translate(-50%, -50%) scale(0)',
          pointerEvents: 'none',
          zIndex: 10
        }}
      />

      {/* Main Content Group */}
      <div
        ref={textGroupRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '600px',
          zIndex: 5
        }}
      >
        <div className="opening-anim-item" style={{
          fontSize: '0.78rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#FFB3C6',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Heart size={13} color="#FF4F81" fill="#FF4F81" />
          <span>FOR ANKU</span>
          <Heart size={13} color="#FF4F81" fill="#FF4F81" />
        </div>

        <div className="opening-anim-item" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(5.5rem, 15vw, 9rem)',
          fontWeight: '300',
          lineHeight: '0.9',
          color: '#FFF7FA',
          letterSpacing: '-0.02em',
          textShadow: '0 0 40px rgba(255, 79, 129, 0.5)'
        }}>
          14
        </div>

        <div className="opening-anim-item" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.6rem, 4.5vw, 2.4rem)',
          fontStyle: 'italic',
          letterSpacing: '0.15em',
          color: '#FFE5EC',
          marginTop: '6px',
          marginBottom: '26px'
        }}>
          MARCH 2026
        </div>

        <div className="opening-anim-item" style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.95rem',
          color: '#D8B8C4',
          lineHeight: '1.6',
          maxWidth: '360px',
          marginBottom: '40px'
        }}>
          before the story began...<br />
          <span style={{ color: '#FFB3C6', fontStyle: 'italic' }}>there was a first sign. 🌸</span>
        </div>

        {/* Portal Trigger Button */}
        <div
          ref={portalRef}
          className="opening-anim-item portal-button"
          style={{
            position: 'relative',
            width: '154px',
            height: '154px',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'radial-gradient(circle, rgba(90, 22, 53, 0.95) 0%, rgba(36, 16, 27, 0.9) 100%)',
            border: '1.5px solid rgba(255, 179, 198, 0.5)',
            boxShadow: '0 0 35px rgba(255, 79, 129, 0.45)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease'
          }}
        >
          {/* Animated pulsing rings */}
          <div className="portal-pulse-ring" style={{
            position: 'absolute',
            inset: '-12px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 79, 129, 0.55)',
            pointerEvents: 'none'
          }} />
          <div className="portal-pulse-ring" style={{
            position: 'absolute',
            inset: '-24px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 179, 198, 0.35)',
            pointerEvents: 'none'
          }} />

          <Heart size={16} color="#FF4F81" fill="#FF4F81" style={{ marginBottom: '6px' }} />
          <span style={{
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FFF7FA',
            fontWeight: '600'
          }}>
            ♡ TAP TO ENTER ♡
          </span>
        </div>

        <div className="opening-anim-item" style={{
          marginTop: '32px',
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          color: '#9E7D8C'
        }}>
          Sound on • Tap anywhere to start ✨
        </div>
      </div>
    </div>
  );
}
