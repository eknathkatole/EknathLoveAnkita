import React, { useState, useEffect, useRef } from 'react';
import { KeyRound, Sparkles, Heart } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';
import { soundManager, TRACKS } from '../utils/soundManager';

export default function LoveCode() {
  const [isDecoded, setIsDecoded] = useState(false);
  const sectionRef = useRef(null);
  const hasSwitchedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasSwitchedRef.current) {
            hasSwitchedRef.current = true;
            soundManager.switchTrack(TRACKS.CIPHER_LOVE.src, TRACKS.CIPHER_LOVE.offset);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDecode = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    triggerHeartBurst(x, y, { count: 12, symbols: ['❤️', '💖', '💕', '✨', '🌸', '🩷', '💌'] });
    setIsDecoded(true);
    soundManager.switchTrack(TRACKS.CIPHER_LOVE.src, TRACKS.CIPHER_LOVE.offset);
  };

  return (
    <section ref={sectionRef} id="code520" className="cinematic-section" style={{ minHeight: '80vh', textAlign: 'center' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', width: '100%' }}>
        <span className="section-tag">
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
          Secret Language
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
        </span>
        <h2 className="section-title-editorial">The 5201314 Cipher</h2>

        <div style={{
          padding: '44px 28px',
          borderRadius: '28px',
          background: 'radial-gradient(ellipse at center, rgba(90, 22, 53, 0.75) 0%, rgba(22, 10, 18, 0.95) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 79, 129, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Digits Display */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3.8rem, 11vw, 7rem)',
              fontWeight: '600',
              color: '#FFF7FA',
              letterSpacing: '0.06em',
              textShadow: '0 0 40px rgba(255, 79, 129, 0.7)'
            }}>
              520
            </span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: '300',
              color: '#FFB3C6',
              opacity: 0.8
            }}>
              •
            </span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3.8rem, 11vw, 7rem)',
              fontWeight: '600',
              color: '#FFE5EC',
              letterSpacing: '0.06em',
              textShadow: '0 0 40px rgba(255, 179, 198, 0.7)'
            }}>
              1314
            </span>
          </div>

          {!isDecoded ? (
            <div>
              <p style={{ color: '#D8B8C4', fontSize: '0.98rem', marginBottom: '26px' }}>
                A sequence of numbers sent on 25 May 2026. Do you remember what it unlocked?
              </p>

              <button
                onClick={handleDecode}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 30px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(255, 79, 129, 0.5) 0%, rgba(201, 24, 74, 0.65) 100%)',
                  border: '1px solid rgba(255, 179, 198, 0.6)',
                  color: '#FFF7FA',
                  fontSize: '0.88rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(255, 79, 129, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                <KeyRound size={16} color="#FFE5EC" />
                <span>DECODE THE CIPHER</span>
              </button>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.8s ease' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '18px',
                marginBottom: '28px',
                textAlign: 'left'
              }}>
                <div style={{
                  padding: '20px 22px',
                  borderRadius: '18px',
                  background: 'rgba(255, 79, 129, 0.16)',
                  border: '1px solid rgba(255, 79, 129, 0.35)',
                  boxShadow: '0 4px 15px rgba(255, 79, 129, 0.15)'
                }}>
                  <div style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", color: '#FFB3C6', fontWeight: '600' }}>
                    520 (五二零)
                  </div>
                  <div style={{ color: '#FFF7FA', fontSize: '1.05rem', marginTop: '4px' }}>
                    "I Love You" (我爱你) ❤️
                  </div>
                </div>

                <div style={{
                  padding: '20px 22px',
                  borderRadius: '18px',
                  background: 'rgba(255, 179, 198, 0.16)',
                  border: '1px solid rgba(255, 179, 198, 0.35)',
                  boxShadow: '0 4px 15px rgba(255, 179, 198, 0.15)'
                }}>
                  <div style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", color: '#FFE5EC', fontWeight: '600' }}>
                    1314 (一生一世)
                  </div>
                  <div style={{ color: '#FFF7FA', fontSize: '1.05rem', marginTop: '4px' }}>
                    "For a Lifetime" 🤍
                  </div>
                </div>
              </div>

              {/* Heartfelt connection to Marathi confession */}
              <div style={{
                padding: '22px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.7) 0%, rgba(36, 16, 27, 0.8) 100%)',
                border: '1px solid rgba(255, 179, 198, 0.45)',
                boxShadow: '0 0 25px rgba(255, 79, 129, 0.2)'
              }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFB3C6', marginBottom: '8px' }}>
                  The Real Meaning
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.38rem',
                  color: '#FFF7FA',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}>
                  "I love you for a lifetime... and as I said in Marathi: <br />
                  <span style={{ color: '#FFE5EC', fontWeight: '600' }}>मी तुझ्यावर जीवापाड प्रेम करतो.</span> 💌"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
