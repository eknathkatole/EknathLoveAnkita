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

const EKNATH_PHOTOS = [
  { id: 'ek-1', src: getAssetUrl('photovid/IMG_20260927_174359.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-2', src: getAssetUrl('photovid/IMG_20260927_174404.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-3', src: getAssetUrl('photovid/IMG_20260927_174419.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-4', src: getAssetUrl('photovid/IMG_20260927_174422.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-5', src: getAssetUrl('photovid/IMG_20260927_174722.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-6', src: getAssetUrl('photovid/IMG_20260927_174725.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-7', src: getAssetUrl('photovid/IMG_20260927_174738.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-8', src: getAssetUrl('photovid/IMG_20260927_174743.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-9', src: getAssetUrl('photovid/IMG_20260927_174846.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-10', src: getAssetUrl('photovid/IMG_20260927_174848.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-11', src: getAssetUrl('photovid/IMG_20260927_174855.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-12', src: getAssetUrl('photovid/IMG_20260927_174859.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-13', src: getAssetUrl('photovid/IMG_20260927_174911.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-14', src: getAssetUrl('photovid/IMG_20260927_174918.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-15', src: getAssetUrl('photovid/IMG_20260927_175303.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-16', src: getAssetUrl('photovid/IMG_20260927_175308.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-17', src: getAssetUrl('photovid/IMG_20260927_182516.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-18', src: getAssetUrl('photovid/IMG_20260927_182548.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-19', src: getAssetUrl('photovid/IMG_20260927_182650.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-20', src: getAssetUrl('photovid/IMG_20260927_183651.jpg'), date: '27 SEPT 2026', title: 'Eknath' },
  { id: 'ek-21', src: getAssetUrl('photovid/IMG_20260927_184002.jpg'), date: '27 SEPT 2026', title: 'Eknath' }
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          width: '100%'
        }}>
          {photoList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#1D0C17',
                border: '1.5px solid rgba(255, 179, 198, 0.35)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.55), 0 0 25px rgba(255, 79, 129, 0.15)',
                cursor: 'pointer',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.65), 0 0 30px rgba(255, 79, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.55), 0 0 25px rgba(255, 79, 129, 0.15)';
              }}
            >
              {/* Photo Frame with Ambient Blurred Backdrop & 100% Visible Main Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '360px',
                overflow: 'hidden',
                background: 'radial-gradient(circle at center, #240E1B 0%, #140710 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Ambient Blurred Background */}
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(20px) brightness(0.4)',
                  opacity: 0.7,
                  transform: 'scale(1.1)',
                  pointerEvents: 'none'
                }} />

                {/* Main 100% Fully Visible Photo (contain mode) */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 10px 22px rgba(0, 0, 0, 0.7))',
                    transition: 'transform 0.4s ease'
                  }}
                />

                {/* Floating Love Button */}
                <button
                  onClick={handleHeartClick}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    zIndex: 5,
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(36, 16, 27, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 79, 129, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF4F81',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
                  }}
                  aria-label="Send love"
                >
                  <Heart size={15} fill="#FF4F81" />
                </button>

                {/* Date Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  zIndex: 5,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(22, 10, 18, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 179, 198, 0.35)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.12em',
                  color: '#FFE5EC'
                }}>
                  {item.date}
                </div>
              </div>

              {/* Photo Caption */}
              <div style={{ padding: '16px 18px', textAlign: 'left', background: '#1D0C17' }}>
                <div style={{
                  fontSize: '0.98rem',
                  fontWeight: '600',
                  color: '#FFF7FA',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginBottom: '4px'
                }}>
                  {item.title}
                </div>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#D8B8C4',
                  lineHeight: '1.45',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Eknath Photos Grid - Clean, Pure Photography (No descriptions as requested) */}
        <div style={{ marginTop: '72px', borderTop: '1px solid rgba(255, 179, 198, 0.2)', paddingTop: '54px' }}>
          <span className="section-tag">
            <Heart size={12} color="#FF4F81" fill="#FF4F81" />
            Through Her Eyes
            <Heart size={12} color="#FF4F81" fill="#FF4F81" />
          </span>
          <h3 className="section-title-editorial" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '32px' }}>
            Eknath • 27 September 2026
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '22px',
            width: '100%'
          }}>
            {EKNATH_PHOTOS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  borderRadius: '22px',
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
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.65), 0 0 25px rgba(255, 79, 129, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.12)';
                }}
              >
                {/* Photo Frame with Ambient Blur & 100% visible contain fit */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '340px',
                  overflow: 'hidden',
                  background: 'radial-gradient(circle at center, #240E1B 0%, #140710 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Ambient Backdrop */}
                  <div style={{
                    position: 'absolute',
                    inset: '-10px',
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(20px) brightness(0.4)',
                    opacity: 0.7,
                    transform: 'scale(1.1)',
                    pointerEvents: 'none'
                  }} />

                  {/* 100% Fully Visible Image */}
                  <img
                    src={item.src}
                    alt={item.title || 'Photo'}
                    loading="lazy"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'drop-shadow(0 10px 22px rgba(0, 0, 0, 0.7))',
                      transition: 'transform 0.4s ease'
                    }}
                  />

                  {/* Love Button */}
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

                  {/* Date Badge (No text description) */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    zIndex: 5,
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
              </div>
            ))}
          </div>
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
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
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

            {/* Modal Image Display */}
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
              {/* Ambient backdrop */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${selectedItem.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(25px) brightness(0.35)',
                opacity: 0.6,
                transform: 'scale(1.1)'
              }} />

              <img
                src={selectedItem.src}
                alt={selectedItem.title || 'Photo'}
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
            </div>

            {/* Modal Caption */}
            <div style={{ padding: '22px 26px', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.74rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FF4F81',
                marginBottom: '6px'
              }}>
                {selectedItem.date}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.75rem',
                color: '#FFF7FA',
                marginBottom: selectedItem.caption ? '8px' : '0'
              }}>
                {selectedItem.title}
              </h3>
              {selectedItem.caption && (
                <p style={{
                  fontSize: '0.95rem',
                  color: '#FFE5EC',
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  "{selectedItem.caption}"
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
