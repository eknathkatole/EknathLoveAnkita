import { Howl, Howler } from 'howler';
import { getAssetUrl } from './assets';

class SoundEngine {
  constructor() {
    this.sound = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.targetStartOffset = 50; // Exactly 50 seconds
    this.hasUserInteracted = false;
    this.hasAppliedInitialSeek = false;
    this.pendingPlayFromTap = false;
    this.listeners = new Set();
  }

  init(src = getAssetUrl('photovid/songPelipelibar.mp3')) {
    if (this.sound) return;

    this.sound = new Howl({
      src: [src],
      html5: true, // Use HTML5 Audio for streaming 18MB audio & instant seeking
      preload: true,
      volume: 0.85,
      loop: true,
      onload: () => {
        if (this.pendingPlayFromTap) {
          this.executeStartFrom50();
        }
      },
      onplay: (id) => {
        this.isPlaying = true;
        this.applyOffset(id);
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
        // Mobile retry on next user interaction
        this.pendingPlayFromTap = true;
      }
    });

    // Attach metadata listener to underlying node if already created
    this.attachNodeListener();
  }

  attachNodeListener() {
    try {
      const soundObj = this.sound?._sounds?.[0];
      if (soundObj?._node) {
        const node = soundObj._node;
        node.addEventListener('loadedmetadata', () => {
          if (!this.hasAppliedInitialSeek && this.isPlaying) {
            node.currentTime = this.targetStartOffset;
            this.hasAppliedInitialSeek = true;
          }
        }, { once: true });
      }
    } catch (e) {
      console.warn('Node listener attach:', e);
    }
  }

  applyOffset(id) {
    if (this.hasAppliedInitialSeek) return;

    try {
      if (id !== undefined) {
        this.sound.seek(this.targetStartOffset, id);
      } else {
        this.sound.seek(this.targetStartOffset);
      }

      const soundObj = this.sound?._sounds?.[0];
      if (soundObj?._node) {
        const node = soundObj._node;
        if (node.readyState >= 1) {
          node.currentTime = this.targetStartOffset;
          this.hasAppliedInitialSeek = true;
        } else {
          node.addEventListener('canplay', () => {
            if (!this.hasAppliedInitialSeek) {
              node.currentTime = this.targetStartOffset;
              this.hasAppliedInitialSeek = true;
            }
          }, { once: true });
        }
      } else {
        this.hasAppliedInitialSeek = true;
      }
    } catch (e) {
      console.warn('Seek error on play:', e);
    }
  }

  // CRITICAL: Called on the very first user tap on the opening screen
  playFromOpeningTap(startTime = 50) {
    this.hasUserInteracted = true;
    this.targetStartOffset = startTime;

    // Mobile audio context unlock
    try {
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume();
      }
    } catch (e) {
      console.warn('AudioContext resume:', e);
    }

    if (!this.sound) {
      this.init();
    }

    this.executeStartFrom50();
  }

  executeStartFrom50() {
    if (!this.sound) return;

    try {
      const id = this.sound.play();
      this.applyOffset(id);
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
