import React, { useEffect, useRef } from 'react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function HeartBurst() {
  const lastMoveTimeRef = useRef(0);

  useEffect(() => {
    // Global tap/click handler
    const handleGlobalClick = (e) => {
      // Don't trigger if clicked on a video control to avoid interfering
      if (e.target.closest('video, audio')) return;

      const x = e.clientX || (e.touches && e.touches[0]?.clientX);
      const y = e.clientY || (e.touches && e.touches[0]?.clientY);

      if (x !== undefined && y !== undefined) {
        triggerHeartBurst(x, y, { count: window.innerWidth < 768 ? 4 : 7 });
      }
    };

    // Subtle desktop cursor sparkle trail (throttled to keep it minimal and elegant)
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return; // Desktop only
      const now = Date.now();
      if (now - lastMoveTimeRef.current < 250) return; // Throttle to every 250ms

      lastMoveTimeRef.current = now;

      // Small chance to spawn a tiny sparkle near cursor
      if (Math.random() > 0.4) {
        const sparkle = document.createElement('span');
        sparkle.innerText = Math.random() > 0.5 ? '✨' : '💖';
        sparkle.style.position = 'fixed';
        sparkle.style.left = `${e.clientX + (Math.random() - 0.5) * 16}px`;
        sparkle.style.top = `${e.clientY + (Math.random() - 0.5) * 16}px`;
        sparkle.style.fontSize = '11px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.userSelect = 'none';
        sparkle.style.zIndex = '9998';
        sparkle.style.opacity = '0.7';
        sparkle.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
        sparkle.style.transform = 'translate(-50%, -50%) scale(0.6)';
        document.body.appendChild(sparkle);

        requestAnimationFrame(() => {
          sparkle.style.transform = 'translate(-50%, -18px) scale(1.1)';
          sparkle.style.opacity = '0';
        });

        setTimeout(() => sparkle.remove(), 800);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // Side-effect component
}
