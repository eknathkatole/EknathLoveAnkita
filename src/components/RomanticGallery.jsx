import React, { useState, useRef } from 'react';
import { Heart, Sparkles, Eye, Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';
import { getAssetUrl } from '../utils/assets';

const GALLERY_ITEMS = [
  // 3 Couple Images First
  {
    id: 'couple-1',
    src: getAssetUrl('photovid/couple1.jpg'),
    type: 'image',
    category: 'Forever With You',
    title: 'Our Forever Spark',
    quote: 'From a silent missed call to a lifetime together... in your eyes, I found my forever home.',
    date: '14 MARCH 2026',
    featured: true
  },
  {
    id: 'couple-2',
    src: getAssetUrl('photovid/couple2.jpg'),
    type: 'image',
    category: 'Heart & Soul',
    title: 'In Your Warmth',
    quote: 'You are the melody in every quiet night, and the smile behind every morning sunshine.',
    date: 'JUNE 2026',
    featured: true
  },
  {
    id: 'couple-3',
    src: getAssetUrl('photovid/couple3.jpg'),
    type: 'image',
    category: 'Infinite Love',
    title: '5201314 In Real Life',
    quote: '5201314 — Loving you today, tomorrow, and through every lifetime yet to come.',
    date: '5201314',
    featured: true
  },

  // Precious Confessions
  {
    id: 'her-confession',
    src: getAssetUrl('photovid/herloveconfscrrenshort.jpg'),
    type: 'image',
    category: 'Love Confession',
    title: "Ankita's Heartfelt Words",
    quote: 'The unforgettable words that made time stop: "Good morning my Love, my Life, my heart... I love you so much!"',
    date: '23 JUNE 2026'
  },
  {
    id: 'my-confession',
    src: getAssetUrl('photovid/myloveconfscreenshort.jpg'),
    type: 'image',
    category: 'Love Confession',
    title: 'Words From My Heart',
    quote: 'मी तुझ्यावर जीवापाड प्रेम करतो... Written with all the truth of my heartbeat.',
    date: '27 MAY 2026'
  },

  // Sweet Memories & Captures
  {
    id: 'snap-1',
    src: getAssetUrl('photovid/Snapchat-611997065.jpg'),
    type: 'image',
    category: 'Sweet Moments',
    title: 'Your Radiant Smile',
    quote: 'A glance that turns any ordinary day into pure poetry.',
    date: 'MEMORIES'
  },
  {
    id: 'snap-2',
    src: getAssetUrl('photovid/Snapchat-749458165.jpg'),
    type: 'image',
    category: 'Sweet Moments',
    title: 'Pure Innocence',
    quote: 'That gentle, sweet smile that stays in my thoughts every single hour.',
    date: 'MEMORIES'
  },
  {
    id: 'img-1',
    src: getAssetUrl('photovid/IMG_20260714_161933_598.jpg'),
    type: 'image',
    category: 'Precious Keepsake',
    title: 'Timeless Beauty',
    quote: 'A timeless capture, holding all the grace and love that defines you.',
    date: '14 JULY 2026'
  },
  {
    id: 'img-2',
    src: getAssetUrl('photovid/IMG_20260714_161936_381.jpg'),
    type: 'image',
    category: 'Precious Keepsake',
    title: 'My Favorite View',
    quote: 'Every picture of you is a blessing I will treasure forever and ever.',
    date: '14 JULY 2026'
  },

  // 2 Video Memories
  {
    id: 'vid-1',
    src: getAssetUrl('photovid/VID_20260714_034926_982.mp4'),
    type: 'video',
    category: 'Living Memory',
    title: 'Motion & Magic',
    quote: 'Some memories do not stay frozen in stills—they breathe, move, and illuminate.',
    date: '14 JULY 2026'
  },
  {
    id: 'vid-2',
    src: getAssetUrl('photovid/VID_20260714_034930_276.mp4'),
    type: 'video',
    category: 'Living Memory',
    title: 'Unfiltered Grace',
    quote: 'This one does not need any caption. Just the most beautiful soul.',
    date: '14 JULY 2026'
  }
];

export default function RomanticGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState({});
  const [videoMuted, setVideoMuted] = useState({});
  const videoRefs = useRef({});

  const handleCardHeart = (e, item) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top;
    triggerHeartBurst(x, y, { count: 8, symbols: ['❤️', '💖', '💕', '✨', '🌸'] });
  };

  const toggleVideo = (id, e) => {
    e?.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;

    if (videoPlaying[id]) {
      vid.pause();
      setVideoPlaying(prev => ({ ...prev, [id]: false }));
    } else {
      vid.play();
      setVideoPlaying(prev => ({ ...prev, [id]: true }));
    }
  };

  const toggleMute = (id, e) => {
    e?.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;
    const nextMuted = !(videoMuted[id] !== false); // default muted
    vid.muted = nextMuted;
    setVideoMuted(prev => ({ ...prev, [id]: nextMuted }));
  };

  return (
    <section id="gallery" className="cinematic-section" style={{ minHeight: '100vh', width: '100%', padding: '90px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px', zIndex: 2 }}>
        <span className="section-tag">
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
          Visual Keepsakes
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
        </span>
        <h2 className="section-title-editorial">Our Memory Gallery</h2>
        <p style={{ color: '#D8B8C4', maxWidth: '520px', margin: '0 auto', fontSize: '0.98rem' }}>
          Every photograph, confession, and video that holds our sweetest moments together.
        </p>
      </div>

      {/* 1. FEATURED SECTION: 3 COUPLE PORTRAITS FIRST */}
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto 60px auto', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '24px'
        }}>
          <Sparkles size={16} color="#FFB3C6" />
          <span style={{
            fontSize: '0.82rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FFB3C6',
            fontWeight: '600'
          }}>
            Us • Special Moments
          </span>
          <Sparkles size={16} color="#FFB3C6" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {GALLERY_ITEMS.filter(item => item.featured).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.5) 0%, rgba(36, 16, 27, 0.85) 100%)',
                border: '1.5px solid rgba(255, 179, 198, 0.45)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 79, 129, 0.25)',
                cursor: 'pointer',
                transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease'
              }}
            >
              {/* Romantic Frame Header */}
              <div style={{
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 79, 129, 0.2)'
              }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: '#FFB3C6', textTransform: 'uppercase' }}>
                  {item.category}
                </span>
                <button
                  onClick={(e) => handleCardHeart(e, item)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#FF4F81' }}
                  aria-label="Send love"
                >
                  <Heart size={16} fill="#FF4F81" />
                </button>
              </div>

              {/* Image Container with contain fit to avoid stretching */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                background: '#12070E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>

              {/* Romantic Quote Footer */}
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.45rem',
                  color: '#FFE5EC',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.1rem',
                  color: '#FFF7FA',
                  fontStyle: 'italic',
                  lineHeight: '1.5'
                }}>
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. COMPLETE GALLERY GRID: ALL PHOTOS & VIDEOS */}
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '24px'
        }}>
          <Heart size={14} color="#FF4F81" fill="#FF4F81" />
          <span style={{
            fontSize: '0.82rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FFB3C6',
            fontWeight: '600'
          }}>
            Every Precious Memory
          </span>
          <Heart size={14} color="#FF4F81" fill="#FF4F81" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {GALLERY_ITEMS.filter(item => !item.featured).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(36, 16, 27, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(255, 79, 129, 0.25)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 79, 129, 0.1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
            >
              {/* Card Header */}
              <div style={{
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 79, 129, 0.15)',
                background: 'rgba(22, 10, 18, 0.6)'
              }}>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#FFB3C6', fontWeight: '500' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#D8B8C4', letterSpacing: '0.08em' }}>
                    {item.date}
                  </div>
                </div>

                <button
                  onClick={(e) => handleCardHeart(e, item)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#FF4F81' }}
                  aria-label="Send love"
                >
                  <Heart size={15} fill="#FF4F81" />
                </button>
              </div>

              {/* Media Body */}
              {item.type === 'image' ? (
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  background: '#12070E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>
              ) : (
                /* Video Item */
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    background: '#12070E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                  onClick={(e) => toggleVideo(item.id, e)}
                >
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    src={item.src}
                    loop
                    playsInline
                    muted={videoMuted[item.id] !== false}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    onEnded={() => setVideoPlaying(prev => ({ ...prev, [item.id]: false }))}
                  />

                  {!videoPlaying[item.id] && (
                    <div style={{
                      position: 'absolute',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(36, 16, 27, 0.85)',
                      border: '1.5px solid rgba(255, 179, 198, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(255, 79, 129, 0.4)'
                    }}>
                      <Play size={18} color="#FFE5EC" style={{ marginLeft: '2px' }} />
                    </div>
                  )}

                  {/* Video Mini Controls */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    right: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: 'rgba(22, 10, 18, 0.8)',
                    backdropFilter: 'blur(6px)'
                  }}>
                    <button
                      onClick={(e) => toggleVideo(item.id, e)}
                      style={{ background: 'transparent', border: 'none', color: '#FFF7FA', cursor: 'pointer', padding: '2px' }}
                    >
                      {videoPlaying[item.id] ? <Pause size={13} /> : <Play size={13} />}
                    </button>
                    <span style={{ fontSize: '0.68rem', color: '#FFB3C6' }}>{item.date}</span>
                    <button
                      onClick={(e) => toggleMute(item.id, e)}
                      style={{ background: 'transparent', border: 'none', color: '#FFB3C6', cursor: 'pointer', padding: '2px' }}
                    >
                      {videoMuted[item.id] === false ? <Volume2 size={13} /> : <VolumeX size={13} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Quote Footer */}
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.05rem',
                  color: '#FFF7FA',
                  fontStyle: 'italic',
                  lineHeight: '1.45'
                }}>
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(12, 5, 10, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
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
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              background: 'linear-gradient(135deg, rgba(48, 20, 36, 0.95) 0%, rgba(22, 10, 18, 0.98) 100%)',
              border: '1.5px solid rgba(255, 179, 198, 0.5)',
              borderRadius: '24px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 79, 129, 0.3)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '16px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 79, 129, 0.2)'
            }}>
              <div>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: '#FFB3C6', textTransform: 'uppercase' }}>
                  {selectedItem.category}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: '#FFE5EC' }}>
                  {selectedItem.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={(e) => handleCardHeart(e, selectedItem)}
                  style={{
                    background: 'rgba(255, 79, 129, 0.2)',
                    border: '1px solid rgba(255, 79, 129, 0.4)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#FF4F81'
                  }}
                  aria-label="Send love"
                >
                  <Heart size={16} fill="#FF4F81" />
                </button>

                <button
                  onClick={() => setSelectedItem(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#FFF7FA'
                  }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Media Body */}
            <div style={{
              flex: 1,
              maxHeight: '55vh',
              background: '#0D050B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              overflow: 'hidden'
            }}>
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px'
                  }}
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px'
                  }}
                />
              )}
            </div>

            {/* Modal Quote Footer */}
            <div style={{ padding: '22px 28px', textAlign: 'center', background: 'rgba(22, 10, 18, 0.8)' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.28rem',
                color: '#FFE5EC',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}>
                "{selectedItem.quote}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
