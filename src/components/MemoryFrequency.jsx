import React, { useRef, useEffect, useState } from 'react';
import VideoMemory from './VideoMemory';
import { STORY_DATA } from '../data/story';
import { Sparkles, Heart, Film, X } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function MemoryFrequency() {
  const waveCanvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleHeartClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    triggerHeartBurst(x, y, { count: 8, symbols: ['✨', '💕', '❤️', '🌸', '💖'] });
  };

  return (
    <section id="frequency" className="cinematic-section" style={{ minHeight: '100vh', width: '100%', padding: '90px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 2 }}>
        <span className="section-tag">
          <Film size={13} color="#FF4F81" />
          Living Echoes
          <Film size={13} color="#FF4F81" />
        </span>
        <h2 className="section-title-editorial">Moments In Motion</h2>
        <p style={{ color: '#D8B8C4', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.5' }}>
          Glimpses of you and our journey, preserved in gentle motion and photographs.
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
        maxWidth: '1050px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                  marginBottom: '10px',
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
            <div key={freq.id} style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Top Header */}
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FFB3C6',
                marginBottom: '10px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}>
                <Heart size={11} color="#FF4F81" fill="#FF4F81" />
                CAPSULE {freq.number} • {freq.title}
              </div>

              {/* Card matching VideoMemory frame */}
              <div
                onClick={() => setSelectedImage(freq)}
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '420px',
                  margin: '0 auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#1D0C17',
                  border: '1.5px solid rgba(255, 179, 198, 0.35)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 79, 129, 0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Photo frame preserving natural aspect ratio without distortion */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9 / 16',
                  maxHeight: '520px',
                  background: '#160A12',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Ambient backdrop */}
                  {freq.imageSrc && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${freq.imageSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(20px) brightness(0.4)',
                      transform: 'scale(1.1)'
                    }} />
                  )}

                  {freq.imageSrc ? (
                    <img
                      src={freq.imageSrc}
                      alt={freq.title}
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.7))'
                      }}
                      loading="lazy"
                    />
                  ) : null}

                  {/* Top-Right Heart Button */}
                  <button
                    onClick={handleHeartClick}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      zIndex: 5,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(36, 16, 27, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 79, 129, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF4F81',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
                    }}
                    aria-label="Send love"
                  >
                    <Heart size={14} fill="#FF4F81" />
                  </button>

                  {/* Date Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    zIndex: 5,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(36, 16, 27, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 79, 129, 0.25)',
                    fontSize: '0.72rem',
                    color: '#D8B8C4',
                    letterSpacing: '0.1em'
                  }}>
                    {freq.date || 'MEMORY'}
                  </div>
                </div>

                {/* Caption footer */}
                <div style={{ padding: '16px 20px', textAlign: 'center' }}>
                  {freq.subtitle && (
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.2rem',
                      color: '#FFE5EC',
                      fontStyle: 'italic',
                      marginBottom: '4px'
                    }}>
                      "{freq.subtitle}" 🌸
                    </p>
                  )}

                  {freq.quotePart1 && (
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.15rem',
                      color: '#FFE5EC',
                      fontStyle: 'italic',
                      marginBottom: '4px'
                    }}>
                      "{freq.quotePart1} {freq.quotePart2}" 💖
                    </p>
                  )}

                  {freq.lines && (
                    <div style={{ marginBottom: '4px' }}>
                      {freq.lines.map((line, idx) => (
                        <p key={idx} style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.1rem',
                          color: '#FFE5EC',
                          fontStyle: 'italic',
                          margin: '2px 0'
                        }}>
                          ✦ {line}
                        </p>
                      ))}
                    </div>
                  )}

                  <span style={{ fontSize: '0.75rem', color: '#D8B8C4' }}>
                    {freq.desc}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(12, 5, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '560px',
              width: '100%',
              borderRadius: '26px',
              overflow: 'hidden',
              background: '#1D0C17',
              border: '1.5px solid rgba(255, 179, 198, 0.5)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.85), 0 0 40px rgba(255, 79, 129, 0.35)'
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                zIndex: 10,
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(36, 16, 27, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 79, 129, 0.5)',
                color: '#FFF7FA',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div style={{
              width: '100%',
              height: '62vh',
              background: 'radial-gradient(circle at center, #240E1B 0%, #12070E 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '16px',
              position: 'relative'
            }}>
              {selectedImage.imageSrc && (
                <>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${selectedImage.imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(25px) brightness(0.35)',
                    opacity: 0.6,
                    transform: 'scale(1.1)'
                  }} />
                  <img
                    src={selectedImage.imageSrc}
                    alt={selectedImage.title}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: '12px',
                      filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.8))'
                    }}
                  />
                </>
              )}
            </div>

            <div style={{ padding: '22px 26px', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.74rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FF4F81',
                marginBottom: '6px'
              }}>
                CAPSULE {selectedImage.number} • {selectedImage.date}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.75rem',
                color: '#FFF7FA',
                marginBottom: '8px'
              }}>
                {selectedImage.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#FFE5EC',
                fontStyle: 'italic',
                lineHeight: '1.5',
                margin: 0
              }}>
                {selectedImage.subtitle ? `"${selectedImage.subtitle}"` : (selectedImage.quotePart1 ? `"${selectedImage.quotePart1} ${selectedImage.quotePart2}"` : selectedImage.desc)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
