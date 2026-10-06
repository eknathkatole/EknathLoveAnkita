import React, { useState, useRef } from 'react';
import { Heart, Sparkles, Play, Pause, Volume2, VolumeX, Eye, X } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';
import { getAssetUrl } from '../utils/assets';

const ANKITA_MEDIA = [
  {
    id: 'ank-vid-1',
    type: 'video',
    src: getAssetUrl('photovid/VID-20260928-WA0016.mp4'),
    title: 'Grace In Motion',
    date: '28 SEPTEMBER 2026',
    caption: 'Some beauty cannot be captured in a single frame—it moves like gentle poetry.',
    tag: 'Living Memory'
  },
  {
    id: 'ank-img-1',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0014.jpg'),
    title: 'Pure Radiance',
    date: '14 SEPTEMBER 2026',
    caption: 'Your smile lights up even the darkest corners of my world.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-2',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0015.jpg'),
    title: 'Innocent Eyes',
    date: '14 SEPTEMBER 2026',
    caption: 'A gentle glance that says more than a thousand words ever could.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-3',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0016.jpg'),
    title: 'My Peaceful World',
    date: '14 SEPTEMBER 2026',
    caption: 'Looking at you feels like finding peace after a long storm.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-4',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0017.jpg'),
    title: 'Grace & Softness',
    date: '14 SEPTEMBER 2026',
    caption: 'The kindest, sweetest soul I have ever known in my life.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-5',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0018.jpg'),
    title: 'Heartbeat',
    date: '14 SEPTEMBER 2026',
    caption: 'Every picture of you is a little blessing I will treasure forever.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-6',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0019.jpg'),
    title: 'Endless Charm',
    date: '14 SEPTEMBER 2026',
    caption: 'I could gaze at you for a lifetime and never get tired.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-7',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0020.jpg'),
    title: 'My Forever Girl',
    date: '14 SEPTEMBER 2026',
    caption: 'The one who silently owns every heartbeat inside me.',
    tag: 'Portraits of Her'
  },
  {
    id: 'ank-img-8',
    type: 'image',
    src: getAssetUrl('photovid/IMG-20260914-WA0021.jpg'),
    title: 'Poetry In Real Life',
    date: '14 SEPTEMBER 2026',
    caption: 'You are the most beautiful reality I have ever known.',
    tag: 'Portraits of Her'
  }
];

export default function AnkitaMuse() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const heroVideo = ANKITA_MEDIA.find((m) => m.type === 'video');
  const photoList = ANKITA_MEDIA.filter((m) => m.type === 'image');

  const handleHeartClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    triggerHeartBurst(x, y, { count: 12, symbols: ['❤️', '💖', '💕', '🌸', '✨', '🩷'] });
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setVideoPlaying(true);
    }
  };

  const toggleVideoMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoMuted;
    setVideoMuted(!videoMuted);
  };

  return (
    <section id="ankita" className="cinematic-section" style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
        {/* Editorial Section Tag */}
        <span className="section-tag">
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
          Her Radiant World
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
        </span>

        {/* Section Title */}
        <h2 className="section-title-editorial">Portraits of My Universe</h2>

        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.28rem',
          color: '#FFE5EC',
          fontStyle: 'italic',
          maxWidth: '560px',
          margin: '0 auto 42px auto',
          lineHeight: '1.5'
        }}>
          "In every smile, a poetry written just for my heart... every glance of yours is a memory I keep close."
        </p>

        {/* Featured Video Spotlight */}
        {heroVideo && (
          <div style={{
            maxWidth: '440px',
            margin: '0 auto 52px auto',
            borderRadius: '26px',
            padding: '12px',
            background: 'radial-gradient(ellipse at center, rgba(90, 22, 53, 0.7) 0%, rgba(22, 10, 18, 0.95) 100%)',
            border: '1.5px solid rgba(255, 179, 198, 0.45)',
            boxShadow: '0 25px 55px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 79, 129, 0.25)',
            overflow: 'hidden'
          }}>
            <div
              onClick={toggleVideoPlay}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9 / 16',
                maxHeight: '540px',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#160A12',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <video
                ref={videoRef}
                src={heroVideo.src}
                loop
                playsInline
                muted={videoMuted}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
                onEnded={() => setVideoPlaying(false)}
              />

              {/* Play / Pause Center Ring */}
              {!videoPlaying && (
                <div style={{
                  position: 'absolute',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(36, 16, 27, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(255, 179, 198, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(255, 79, 129, 0.6)',
                  transition: 'transform 0.3s ease'
                }}>
                  <Play size={24} color="#FFF7FA" style={{ marginLeft: '3px' }} />
                </div>
              )}

              {/* Top Tag & Mute Bar */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                right: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 3
              }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(36, 16, 27, 0.8)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 79, 129, 0.3)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: '#FFB3C6',
                  textTransform: 'uppercase'
                }}>
                  {heroVideo.date}
                </span>

                <button
                  onClick={toggleVideoMute}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(36, 16, 27, 0.8)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 79, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFE5EC',
                    cursor: 'pointer'
                  }}
                  aria-label="Toggle mute"
                >
                  {videoMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>

            {/* Video Caption Bottom */}
            <div style={{ padding: '16px 14px 10px 14px', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.74rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FF4F81',
                fontWeight: '600',
                marginBottom: '4px'
              }}>
                {heroVideo.title}
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.18rem',
                color: '#FFE5EC',
                fontStyle: 'italic',
                lineHeight: '1.4',
                marginBottom: '4px'
              }}>
                "{heroVideo.caption}"
              </p>
            </div>
          </div>
        )}

        {/* Photo Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
          width: '100%'
        }}>
          {photoList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#1D0C17',
                border: '1.5px solid rgba(255, 179, 198, 0.3)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.12)',
                cursor: 'pointer',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 79, 129, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.12)';
              }}
            >
              {/* Photo Frame */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                background: '#160A12'
              }}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Floating Love Button */}
                <button
                  onClick={handleHeartClick}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(36, 16, 27, 0.85)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 79, 129, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF4F81',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                  }}
                  aria-label="Send love"
                >
                  <Heart size={14} fill="#FF4F81" />
                </button>

                {/* Date Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: 'rgba(22, 10, 18, 0.85)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 179, 198, 0.3)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: '#FFE5EC'
                }}>
                  {item.date}
                </div>
              </div>

              {/* Photo Caption */}
              <div style={{ padding: '14px 16px', textAlign: 'left' }}>
                <div style={{
                  fontSize: '0.92rem',
                  fontWeight: '600',
                  color: '#FFF7FA',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginBottom: '4px'
                }}>
                  {item.title}
                </div>
                <p style={{
                  fontSize: '0.78rem',
                  color: '#D8B8C4',
                  lineHeight: '1.4',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(12, 5, 10, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '520px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#1D0C17',
              border: '1.5px solid rgba(255, 179, 198, 0.5)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.8), 0 0 35px rgba(255, 79, 129, 0.3)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(36, 16, 27, 0.85)',
                border: '1px solid rgba(255, 79, 129, 0.4)',
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

            {/* Modal Image */}
            <div style={{
              width: '100%',
              maxHeight: '65vh',
              background: '#160A12',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Modal Caption */}
            <div style={{ padding: '20px 24px', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FF4F81',
                marginBottom: '4px'
              }}>
                {selectedItem.date}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.65rem',
                color: '#FFF7FA',
                marginBottom: '8px'
              }}>
                {selectedItem.title}
              </h3>
              <p style={{
                fontSize: '0.92rem',
                color: '#FFE5EC',
                fontStyle: 'italic',
                lineHeight: '1.5'
              }}>
                "{selectedItem.caption}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
