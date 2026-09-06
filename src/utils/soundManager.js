import { Howl } from 'howler';

class SoundEngine {
  constructor() {
    this.sound = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.targetStartOffset = 50; // Exactly 50 seconds
    this.hasUserInteracted = false;
    this.hasAppliedInitialSeek = false;
    this.listeners = new Set();
  }

  init(src = '/photovid/songPelipelibar.mp3') {
    if (this.sound) return;

    this.sound = new Howl({
      src: [src],
      html5: true, // Use HTML5 Audio for seamless streaming of 18MB audio & instant seeking
      preload: true,
      volume: 0.8,
      loop: true,
      onload: () => {
        if (this.pendingPlayFromTap) {
          this.executeStartFrom50();
        }
      },
      onplay: (id) => {
        this.isPlaying = true;

        // Ensure 50s offset is applied upon first playback start
        if (!this.hasAppliedInitialSeek) {
          try {
            this.sound.seek(this.targetStartOffset, id);
            // Also enforce directly on the underlying HTML5 audio node if available
            const soundObj = this.sound._sounds && this.sound._sounds[0];
            if (soundObj && soundObj._node) {
              soundObj._node.currentTime = this.targetStartOffset;
            }
            this.hasAppliedInitialSeek = true;
          } catch (e) {
            console.warn('Seek error on play:', e);
          }
        }

        this.notify();
      },
      onpause: () => {
        this.isPlaying = false;
        this.notify();
      },
      onstop: () => {
        this.isPlaying = false;
        this.notify();
      },
      onend: () => {
        this.isPlaying = false;
        this.notify();
      },
      onloaderror: (_id, err) => {
        console.warn('Audio load error:', err);
      },
      onplayerror: (_id, err) => {
        console.warn('Audio playback error:', err);
      }
    });
  }

  // CRITICAL: Called on the very first user tap on the opening screen
  playFromOpeningTap(startTime = 50) {
    this.hasUserInteracted = true;
    this.targetStartOffset = startTime;

    if (!this.sound) {
      this.init();
    }

    this.executeStartFrom50();
  }

  executeStartFrom50() {
    if (!this.sound) return;

    try {
      // Play immediately to capture the user gesture
      const id = this.sound.play();

      // Immediately seek to 50 seconds
      if (id !== undefined) {
        this.sound.seek(this.targetStartOffset, id);
      } else {
        this.sound.seek(this.targetStartOffset);
      }

      // Directly update the underlying audio element's currentTime
      const soundObj = this.sound._sounds && this.sound._sounds[0];
      if (soundObj && soundObj._node) {
        soundObj._node.currentTime = this.targetStartOffset;
      }

      this.hasAppliedInitialSeek = true;
      this.isPlaying = true;
      this.pendingPlayFromTap = false;
      this.notify();
    } catch (e) {
      console.warn('Failed to start audio at 50s:', e);
      this.pendingPlayFromTap = true;
    }
  }

  togglePlayPause() {
    if (!this.sound) {
      this.playFromOpeningTap(this.targetStartOffset);
      return;
    }

    if (this.sound.playing()) {
      this.sound.pause();
    } else {
      const id = this.sound.play();
      if (!this.hasAppliedInitialSeek) {
        this.sound.seek(this.targetStartOffset, id);
        this.hasAppliedInitialSeek = true;
      }
    }
    this.notify();
  }

  toggleMute() {
    if (!this.sound) return;
    this.isMuted = !this.isMuted;
    this.sound.mute(this.isMuted);
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    const state = {
      isPlaying: this.sound ? this.sound.playing() : false,
      isMuted: this.isMuted,
      hasInteracted: this.hasUserInteracted
    };
    this.listeners.forEach(fn => fn(state));
  }
}

export const soundManager = new SoundEngine();
