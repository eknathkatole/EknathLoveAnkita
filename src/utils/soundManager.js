import { getAssetUrl } from './assets';

export const TRACKS = {
  STORY_INTRO: {
    id: 'intro',
    src: getAssetUrl('photovid/songPelipelibar.mp3'),
    offset: 50 // 50 seconds
  },
  CIPHER_LOVE: {
    id: 'cipher',
    src: getAssetUrl('photovid/bodyguard_iloveyou.mp3'),
    offset: 85 // 1:25 = 85 seconds
  }
};

class SoundEngine {
  constructor() {
    this.deckIntro = null;
    this.deckCipher = null;
    this.activeDeck = 'intro';
    this.isPlaying = false;
    this.isMuted = false;
    this.hasUserInteracted = false;
    this.listeners = new Set();
  }

  initDecks() {
    if (this.deckIntro && this.deckCipher) return;

    // Deck Intro (First Song)
    this.deckIntro = new Audio();
    this.deckIntro.src = TRACKS.STORY_INTRO.src;
    this.deckIntro.preload = 'auto';
    this.deckIntro.loop = true;
    this.deckIntro.volume = 0.85;

    // Deck Cipher (Bodyguard I Love You)
    this.deckCipher = new Audio();
    this.deckCipher.src = TRACKS.CIPHER_LOVE.src;
    this.deckCipher.preload = 'auto';
    this.deckCipher.loop = true;
    this.deckCipher.volume = 0.85;

    // Event listeners for Deck Intro
    this.deckIntro.addEventListener('play', () => {
      if (this.activeDeck === 'intro') {
        this.isPlaying = true;
        this.notify();
      }
    });
    this.deckIntro.addEventListener('pause', () => {
      if (this.activeDeck === 'intro') {
        this.isPlaying = false;
        this.notify();
      }
    });

    // Event listeners for Deck Cipher
    this.deckCipher.addEventListener('play', () => {
      if (this.activeDeck === 'cipher') {
        this.isPlaying = true;
        this.notify();
      }
    });
    this.deckCipher.addEventListener('pause', () => {
      if (this.activeDeck === 'cipher') {
        this.isPlaying = false;
        this.notify();
      }
    });
  }

  // CRITICAL: Called on the opening screen tap gesture
  // Unlocks BOTH audio elements synchronously within the user gesture context
  playFromOpeningTap(startTime = 50) {
    this.hasUserInteracted = true;
    this.initDecks();
    this.activeDeck = 'intro';

    // 1. Play & Seek Deck A (Intro Song)
    try {
      this.deckIntro.currentTime = startTime;
    } catch (e) {}

    const playIntro = this.deckIntro.play();
    if (playIntro !== undefined) {
      playIntro
        .then(() => {
          this.isPlaying = true;
          try {
            this.deckIntro.currentTime = startTime;
          } catch (e) {}
          this.notify();
        })
        .catch((err) => {
          console.warn('Intro play error:', err);
        });
    }

    // 2. Pre-unlock Deck B (Bodyguard) in the SAME tap gesture so iOS/Android never blocks it later!
    try {
      this.deckCipher.currentTime = TRACKS.CIPHER_LOVE.offset;
      const playCipherUnlock = this.deckCipher.play();
      if (playCipherUnlock !== undefined) {
        playCipherUnlock
          .then(() => {
            // Immediately pause Deck B now that the browser permission is granted!
            this.deckCipher.pause();
            this.deckCipher.currentTime = TRACKS.CIPHER_LOVE.offset;
          })
          .catch(() => {});
      }
    } catch (e) {}
  }

  // Seamlessly switch to Deck B (The 5201314 Cipher) on scroll or click
  switchTrack(newSrc, startTime = 85, trackId = 'cipher') {
    this.initDecks();

    if (this.activeDeck === trackId && this.isPlaying) {
      return;
    }

    this.activeDeck = trackId;

    if (trackId === 'cipher') {
      // Pause Deck Intro
      if (this.deckIntro && !this.deckIntro.paused) {
        this.deckIntro.pause();
      }

      // Play Deck Cipher at 1:25
      try {
        this.deckCipher.currentTime = startTime;
      } catch (e) {}

      const p = this.deckCipher.play();
      if (p !== undefined) {
        p.then(() => {
          this.isPlaying = true;
          try {
            this.deckCipher.currentTime = startTime;
          } catch (e) {}
          this.notify();
        }).catch((err) => {
          console.warn('Deck cipher play error on mobile:', err);
          // If browser needed tap retry, mark active
          this.isPlaying = false;
          this.notify();
        });
      }
    } else {
      // Switch back to Intro if requested
      if (this.deckCipher && !this.deckCipher.paused) {
        this.deckCipher.pause();
      }
      try {
        this.deckIntro.currentTime = startTime;
      } catch (e) {}
      this.deckIntro.play().catch(() => {});
    }
  }

  togglePlayPause() {
    this.initDecks();
    const currentAudio = this.activeDeck === 'cipher' ? this.deckCipher : this.deckIntro;

    if (!currentAudio) {
      this.playFromOpeningTap(50);
      return;
    }

    if (!currentAudio.paused) {
      currentAudio.pause();
    } else {
      const p = currentAudio.play();
      if (p !== undefined) {
        p.catch((err) => console.warn('Play toggle error:', err));
      }
    }
  }

  toggleMute() {
    this.initDecks();
    this.isMuted = !this.isMuted;
    if (this.deckIntro) this.deckIntro.muted = this.isMuted;
    if (this.deckCipher) this.deckCipher.muted = this.isMuted;
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    const currentAudio = this.activeDeck === 'cipher' ? this.deckCipher : this.deckIntro;
    const state = {
      isPlaying: currentAudio ? !currentAudio.paused : false,
      isMuted: this.isMuted,
      hasInteracted: this.hasUserInteracted,
      currentTrack: this.activeDeck === 'cipher' ? TRACKS.CIPHER_LOVE.src : TRACKS.STORY_INTRO.src
    };
    this.listeners.forEach((fn) => fn(state));
  }
}

export const soundManager = new SoundEngine();
