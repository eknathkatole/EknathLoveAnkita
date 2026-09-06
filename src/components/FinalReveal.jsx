import React, { useState } from 'react';
import { STORY_DATA } from '../data/story';
import { Heart, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function FinalReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const data = STORY_DATA.finalReveal;

  const handleReveal = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    triggerHeartBurst(x, y, { count: 16, symbols: ['❤️', '💖', '💕', '✨', '🌸', '🩷', '💌', '🥰'] });
    setIsRevealed(true);
  };

  return (
    <section id="final" className="cinematic-section" style={{ minHeight: '100vh', textAlign: 'center' }}>
      <div style={{ maxWidth: '720px', width: '100%', margin: '0 auto' }}>
        {!isRevealed ? (
          <div style={{
            padding: '50px 24px',
            borderRadius: '24px',
            background: 'rgba(36, 16, 27, 0.75)',
            border: '1.5px solid rgba(255, 79, 129, 0.3)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 79, 129, 0.15)'
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.45rem',
              color: '#D8B8C4',
              fontStyle: 'italic',
              marginBottom: '12px'
            }}>
              "{data.suspenseLines[0]}"
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              color: '#FFF7FA',
              lineHeight: '1.3',
              marginBottom: '32px'
            }}>
              {data.suspenseLines[1]}
            </h3>

            <button
              onClick={handleReveal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 34px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, rgba(255, 79, 129, 0.5) 0%, rgba(201, 24, 74, 0.65) 100%)',
                border: '1.5px solid rgba(255, 179, 198, 0.5)',
                color: '#FFF7FA',
                fontSize: '0.88rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(255, 79, 129, 0.35)',
                transition: 'all 0.3s ease'
              }}
            >
              <Heart size={16} color="#FFE5EC" fill="#FFE5EC" />
              <span>READ THE FINAL NOTE</span>
            </button>
          </div>
        ) : (
          <div style={{
            padding: '50px 32px',
            borderRadius: '28px',
            background: 'linear-gradient(180deg, rgba(48, 20, 36, 0.95) 0%, rgba(22, 10, 18, 0.98) 100%)',
            border: '1.5px solid rgba(255, 179, 198, 0.45)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.65), 0 0 40px rgba(255, 79, 129, 0.25)',
            textAlign: 'left',
            animation: 'fadeIn 1s ease-out'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              borderBottom: '1px solid rgba(255, 79, 129, 0.2)',
              paddingBottom: '16px'
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                color: '#FFB3C6',
                letterSpacing: '0.08em',
                fontWeight: '600'
              }}>
                {data.letter.range}
              </span>
              <Sparkles size={20} color="#FFB3C6" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              {data.letter.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                    color: '#FFF7FA',
                    lineHeight: '1.7',
                    letterSpacing: '0.01em'
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Memories bullet list */}
            <div style={{
              padding: '22px 26px',
              borderRadius: '18px',
              background: 'rgba(255, 79, 129, 0.1)',
              border: '1px solid rgba(255, 79, 129, 0.25)',
              marginBottom: '28px'
            }}>
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FFB3C6',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Heart size={12} color="#FF4F81" fill="#FF4F81" />
                WHAT I REMEMBER MOST
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {data.letter.memories.map((m, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.18rem',
                      color: '#FFE5EC',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ color: '#FF4F81', fontSize: '0.85rem' }}>✦</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.38rem',
              color: '#FFF7FA',
              fontStyle: 'italic',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              "{data.letter.endingNote}"
            </p>

            <div style={{
              textAlign: 'right',
              borderTop: '1px solid rgba(255, 79, 129, 0.2)',
              paddingTop: '20px'
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.55rem',
                color: '#FFB3C6',
                fontStyle: 'italic',
                whiteSpace: 'pre-line'
              }}>
                {data.letter.signature}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
