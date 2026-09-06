import { Howl, Howler } from 'howler';
import { getAssetUrl } from './assets';

export const TRACKS = {
  STORY_INTRO: {
    src: getAssetUrl('photovid/songPelipelibar.mp3'),
    offset: 50 // 50s
  },
  CIPHER_LOVE: {
    src: getAssetUrl('photovid/I love you (Full song) Bodyguard feat. Salman khan_ Kareena Kapoor(MP3_160K).mp3'),
    offset: 85 // 1:25 sec
  }
};

class SoundEngine {
  constructor() {
    this.sound = null;
    this.currentSrc = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.targetStartOffset = 50;
    this.hasUserInteracted = false;
    this.hasAppliedInitialSeek = false;
    this.pendingPlay = false;
    this.listeners = new Set();
  }

  init(src = TRACKS.STORY_INTRO.src, startOffset = 50) {
    if (this.sound && this.currentSrc === src) return;

    this.currentSrc = src;
    this.targetStartOffset = startOffset;
    this.hasAppliedInitialSeek = false;

    this.sound = new Howl({
      src: [src],
      html5: true, // Use HTML5 Audio for streaming & instant seeking
      preload: true,
      volume: 0.85,
      loop: true,
      onload: () => {
        if (this.pendingPlay) {
          this.executeStart();
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
        this.pendingPlay = true;
      }
    });

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
      this.init(TRACKS.STORY_INTRO.src, startTime);
    }

    this.executeStart();
  }

  // Smoothly switch audio tracks with seeking (e.g. for 5201314 Cipher)
  switchTrack(newSrc, startTime = 0) {
    if (this.currentSrc === newSrc && this.sound) {
      return;
    }

    this.targetStartOffset = startTime;
    this.hasAppliedInitialSeek = false;

    if (this.sound) {
      const oldSound = this.sound;
      try {
        oldSound.fade(oldSound.volume(), 0, 600);
        setTimeout(() => {
          try {
            oldSound.stop();
            oldSound.unload();
          } catch (e) {}
        }, 650);
      } catch (e) {
        oldSound.stop();
      }
      this.sound = null;
    }

    this.init(newSrc, startTime);

    if (this.hasUserInteracted) {
      this.executeStart();
    }
  }

  executeStart() {
    if (!this.sound) return;

    try {
      const id = this.sound.play();
      this.applyOffset(id);
      this.isPlaying = true;
      this.pendingPlay = false;
      this.notify();
    } catch (e) {
      console.warn('Failed to start audio at offset:', e);
      this.pendingPlay = true;
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
      hasInteracted: this.hasUserInteracted,
      currentTrack: this.currentSrc
    };
    this.listeners.forEach(fn => fn(state));
  }
}

export const soundManager = new SoundEngine();
