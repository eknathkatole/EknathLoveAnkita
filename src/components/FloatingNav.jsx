import React from 'react';
import MusicController from './MusicController';

export default function FloatingNav({ activeSection, onNavigate }) {
  const primaryItems = [
    { id: 'journey', label: 'JOURNEY' },
    { id: 'code520', label: '5201314' },
    { id: 'frequency', label: 'MOTION' },
    { id: 'gallery', label: 'GALLERY' },
  ];

  const secondaryItems = [
    { id: 'future', label: 'OUR FUTURE' },
    { id: 'quiz', label: 'QUIZ' },
    { id: 'final', label: 'FOR YOU' }
  ];

  return (
    <header className="floating-nav">
      <div className="nav-row nav-row-primary">
        {primaryItems.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="nav-divider" />

      <div className="nav-row nav-row-secondary">
        {secondaryItems.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
        <MusicController />
      </div>
    </header>
  );
}
