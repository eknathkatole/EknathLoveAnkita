import React, { useRef, useEffect } from 'react';
import VideoMemory from './VideoMemory';
import { STORY_DATA } from '../data/story';
import { Sparkles, Heart, Film } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function MemoryFrequency() {
  const waveCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = 'rgba(255, 79, 129, 0.75)';

      for (let x = 0; x < width; x += 4) {
        const angle = (x * 0.02) + step;
        const y = centerY + Math.sin(angle) * Math.sin(step * 0.5) * 16;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      step += 0.04;
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleCardClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + 20;
    triggerHeartBurst(x, y, { count: 5, symbols: ['✨', '💕', '❤️', '🌸'] });
  };

  return (
    <section id="frequency" className="cinematic-section" style={{ minHeight: '100vh', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 2 }}>
        <span className="section-tag">
          <Film size={13} color="#FF4F81" />
          Living Echoes
          <Film size={13} color="#FF4F81" />
        </span>
        <h2 className="section-title-editorial">Moments In Motion</h2>
        <p style={{ color: '#D8B8C4', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.5' }}>
          Glimpses of you, captured in gentle motion and preserved forever.
        </p>

        {/* Live Frequency Wave Canvas */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 10px 0' }}>
          <canvas
            ref={waveCanvasRef}
            width={320}
            height={50}
            style={{ display: 'block', opacity: 0.85 }}
          />
        </div>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '960px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        zIndex: 2,
        alignItems: 'stretch'
      }}>
        {STORY_DATA.memoryFrequency.map((freq) => {
          if (freq.type === 'video') {
            return (
              <div key={freq.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#FFB3C6',
                  marginBottom: '8px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}>
                  <Heart size={11} color="#FF4F81" fill="#FF4F81" />
                  CAPSULE {freq.number} • {freq.title}
                </div>
                <VideoMemory
                  src={freq.videoSrc}
                  caption={freq.caption}
                  desc={freq.desc}
                  date={freq.date}
                />
              </div>
            );
          }

          return (
            <div
              key={freq.id}
              onClick={handleCardClick}
              style={{
                padding: '32px 24px',
                borderRadius: '24px',
                background: 'rgba(36, 16, 27, 0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255, 79, 129, 0.25)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, transform 0.3s ease'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px'
                }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#FFB3C6', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={12} color="#FF4F81" /> CAPSULE {freq.number}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#D8B8C4' }}>
                    {freq.date}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.65rem',
                  color: '#FFF7FA',
                  marginBottom: '16px'
                }}>
                  {freq.title}
                </h3>

                {freq.subtitle && (
                  <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '12px' }}>
                    "{freq.subtitle}" 🌸
                  </p>
                )}

                {freq.quotePart1 && (
                  <div style={{ margin: '14px 0' }}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.28rem',
                      color: '#FFE5EC',
                      fontStyle: 'italic',
                      lineHeight: '1.5'
                    }}>
                      "{freq.quotePart1} <br />
                      {freq.quotePart2}" 💖
                    </p>
                  </div>
                )}

                {freq.lines && (
                  <div style={{ margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {freq.lines.map((line, idx) => (
                      <p key={idx} style={{ color: '#FFF7FA', fontSize: '0.98rem', fontStyle: 'italic' }}>
                        ✦ {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div style={{
                marginTop: '20px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 79, 129, 0.15)',
                fontSize: '0.82rem',
                color: '#D8B8C4'
              }}>
                {freq.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
