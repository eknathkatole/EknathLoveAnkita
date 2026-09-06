import gsap from 'gsap';

// Pre-defined romantic symbols and emojis
const LOVE_SYMBOLS = ['❤️', '💕', '💗', '💖', '✨', '🌸', '🩷', '🫶🏻', '💌'];
const MUSIC_SYMBOLS = ['♪', '♫', '♬', '💕', '✨', '💖'];
const CELEBRATION_SYMBOLS = ['🎉', '💖', '🥰', '✨', '💕', '🌸', '❤️', '🫶🏻'];
const OOPS_SYMBOLS = ['🥺', '💔', '🙈', '💭'];

// Check for reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Spawn heart/sparkle burst at (x, y) coordinates
export function triggerHeartBurst(x, y, options = {}) {
  if (prefersReducedMotion()) return;

  const count = options.count || (window.innerWidth < 768 ? 6 : 10);
  const symbols = options.symbols || LOVE_SYMBOLS;
  const isUpwardOnly = options.upward || false;

  const container = document.createElement('div');
  container.className = 'love-effect-burst-container';
  container.style.position = 'fixed';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    el.innerText = symbol;
    el.className = 'love-burst-particle';
    el.style.position = 'absolute';
    el.style.left = '0px';
    el.style.top = '0px';
    el.style.fontSize = `${Math.floor(Math.random() * 12 + 14)}px`;
    el.style.userSelect = 'none';
    el.style.pointerEvents = 'none';
    el.style.willChange = 'transform, opacity';
    el.style.filter = 'drop-shadow(0 0 6px rgba(255, 79, 129, 0.6))';
    container.appendChild(el);

    const angle = isUpwardOnly
      ? (Math.random() * Math.PI * 0.8) - Math.PI * 0.9 // upward fan
      : Math.random() * Math.PI * 2; // all directions
    const distance = Math.random() * 70 + 40;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance - (isUpwardOnly ? 40 : 20);
    const rotation = (Math.random() - 0.5) * 60;
    const scale = Math.random() * 0.5 + 0.8;
    const duration = Math.random() * 0.6 + 0.8;

    gsap.fromTo(
      el,
      { x: 0, y: 0, scale: 0.2, opacity: 1, rotation: 0 },
      {
        x: destX,
        y: destY,
        scale: scale,
        opacity: 0,
        rotation: rotation,
        duration: duration,
        ease: 'power2.out',
        onComplete: () => {
          el.remove();
        }
      }
    );
  }

  // Remove container after all particles finish
  setTimeout(() => {
    container.remove();
  }, 1600);
}

// Celebration burst for correct quiz answers
export function triggerQuizSuccess(x, y) {
  triggerHeartBurst(x || window.innerWidth / 2, y || window.innerHeight / 2, {
    count: window.innerWidth < 768 ? 14 : 22,
    symbols: CELEBRATION_SYMBOLS
  });
}

// Playful shake & oops burst for wrong quiz answers
export function triggerQuizOops(targetEl, x, y) {
  if (targetEl) {
    gsap.fromTo(
      targetEl,
      { x: -8 },
      { x: 8, duration: 0.08, repeat: 4, yoyo: true, ease: 'power1.inOut', onComplete: () => gsap.set(targetEl, { x: 0 }) }
    );
  }

  triggerHeartBurst(x || window.innerWidth / 2, y || window.innerHeight / 2, {
    count: 6,
    symbols: OOPS_SYMBOLS,
    upward: true
  });
}

// Music notes floating upward
export function triggerMusicNotes(x, y) {
  triggerHeartBurst(x, y, {
    count: 7,
    symbols: MUSIC_SYMBOLS,
    upward: true
  });
}
