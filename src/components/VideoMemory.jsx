import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function VideoMemory({ src, caption, desc, date }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleLoveClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top;
    triggerHeartBurst(x, y, { count: 8, symbols: ['❤️', '💖', '💕', '✨'] });
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '420px',
      margin: '0 auto',
      borderRadius: '24px',
      overflow: 'hidden',
      background: '#1D0C17',
      border: '1.5px solid rgba(255, 179, 198, 0.35)',
      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 79, 129, 0.15)'
    }}>
      {/* Video frame preserving natural aspect ratio without distortion */}
      <div
        onClick={togglePlay}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          maxHeight: '520px',
          background: '#160A12',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <video
          ref={videoRef}
          src={src}
          loop
          playsInline
          muted={isMuted}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Play/Pause Overlay Indicator */}
        {!isPlaying && (
          <div style={{
            position: 'absolute',
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'rgba(36, 16, 27, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1.5px solid rgba(255, 179, 198, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 25px rgba(255, 79, 129, 0.5)'
          }}>
            <Play size={22} color="#FFE5EC" style={{ marginLeft: '3px' }} />
          </div>
        )}

        {/* Video Controls Bar */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 14px',
          borderRadius: '999px',
          background: 'rgba(36, 16, 27, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 79, 129, 0.25)'
        }}>
          <button
            onClick={togglePlay}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFF7FA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
          </button>

          <span style={{ fontSize: '0.72rem', color: '#D8B8C4', letterSpacing: '0.1em' }}>
            {date || 'MEMORY'}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleLoveClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FF4F81',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
              aria-label="Send love to video"
            >
              <Heart size={15} fill="#FF4F81" />
            </button>

            <button
              onClick={toggleMute}
              style={{
                background: 'transparent',
                border: 'none',
                color: isMuted ? '#9E7D8C' : '#FFB3C6',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
          </div>
        </div>
      </div>

      {/* Caption footer */}
      <div style={{ padding: '16px 20px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.2rem',
          color: '#FFE5EC',
          fontStyle: 'italic',
          marginBottom: '4px'
        }}>
          "{caption}"
        </p>
        <span style={{ fontSize: '0.75rem', color: '#D8B8C4' }}>
          {desc}
        </span>
      </div>
    </div>
  );
}
