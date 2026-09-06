import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/soundManager';
import { Volume2, VolumeX } from 'lucide-react';
import { triggerMusicNotes } from '../utils/loveEffects';

export default function MusicController() {
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    isMuted: false,
    hasInteracted: false
  });

  useEffect(() => {
    const unsubscribe = soundManager.subscribe((state) => {
      setAudioState(state);
    });
    return () => unsubscribe();
  }, []);

  const toggleSound = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top;
    triggerMusicNotes(x, y);
    soundManager.togglePlayPause();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    soundManager.toggleMute();
  };

  return (
    <div
      className="sound-toggle-pill"
      onClick={toggleSound}
      title={audioState.isPlaying ? 'Pause music' : 'Play music'}
      role="button"
      tabIndex={0}
      style={{ userSelect: 'none' }}
    >
      <div className={`waveform-anim ${!audioState.isPlaying ? 'waveform-paused' : ''}`}>
        <span className="waveform-bar" />
        <span className="waveform-bar" />
        <span className="waveform-bar" />
        <span className="waveform-bar" />
      </div>

      <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', fontWeight: '500' }}>
        {audioState.isPlaying ? 'MELODY ♪' : 'PAUSED'}
      </span>

      <button
        onClick={toggleMute}
        style={{
          background: 'transparent',
          border: 'none',
          color: audioState.isMuted ? '#9E7D8C' : '#FFB3C6',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center'
        }}
        aria-label={audioState.isMuted ? 'Unmute sound' : 'Mute sound'}
      >
        {audioState.isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
      </button>
    </div>
  );
}
