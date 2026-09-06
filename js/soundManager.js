// Audio and Sound Effects Manager
// Starts track at 00:50 upon first opening tap/click with robust browser playback handling

class SoundManager {
  constructor() {
    this.bgMusic = new Audio('photovid/songPelipelibar.mp3');
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.45;
    this.isPlaying = false;
    this.hasStarted = false;
    this.audioCtx = null;
    this.initElements();
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  initElements() {
    this.toggleBtn = document.getElementById('music-toggle-btn');
    this.playIcon = document.getElementById('music-play-icon');
    this.pauseIcon = document.getElementById('music-pause-icon');
    this.waveBars = document.querySelectorAll('.music-wave-bar');

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggleMusic());
    }
  }

  // Called on the user's FIRST TAP on the opening screen
  // Starts music immediately from EXACTLY 50 seconds
  playFromOpeningTap(startTime = 50) {
    this.initAudioContext();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const startPlayback = () => {
      try {
        if (!isNaN(this.bgMusic.duration) && this.bgMusic.duration > startTime) {
          this.bgMusic.currentTime = startTime;
        }
      } catch (e) {
        console.log('Seeking to 50s:', e);
      }

      this.bgMusic.play().then(() => {
        this.isPlaying = true;
        this.hasStarted = true;
        this.updateUIState();

        // Ensure seek happens if metadata arrived right at play time
        if (Math.abs(this.bgMusic.currentTime - startTime) > 2) {
          this.bgMusic.currentTime = startTime;
        }
      }).catch(err => {
        console.log('Autoplay policy caught, will retry on next user interaction:', err);
        this.showAudioFallbackToast();
      });
    };

    if (this.bgMusic.readyState >= 1) { // metadata loaded
      startPlayback();
    } else {
      this.bgMusic.addEventListener('loadedmetadata', () => {
        startPlayback();
      }, { once: true });
      // Fallback attempt immediately
      startPlayback();
    }
  }

  toggleMusic() {
    this.initAudioContext();
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }

  playMusic() {
    this.initAudioContext();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    this.bgMusic.play().then(() => {
      this.isPlaying = true;
      this.updateUIState();
    }).catch(err => {
      console.log('Audio playback prevented:', err);
    });
  }

  pauseMusic() {
    this.bgMusic.pause();
    this.isPlaying = false;
    this.updateUIState();
  }

  updateUIState() {
    if (this.playIcon) this.playIcon.classList.toggle('hidden', this.isPlaying);
    if (this.pauseIcon) this.pauseIcon.classList.toggle('hidden', !this.isPlaying);
    if (this.toggleBtn) this.toggleBtn.classList.toggle('playing', this.isPlaying);
    this.waveBars.forEach(b => b.classList.toggle('animating', this.isPlaying));
  }

  showAudioFallbackToast() {
    const toast = document.getElementById('audio-fallback-toast');
    if (toast) {
      toast.classList.remove('hidden');
      toast.addEventListener('click', () => {
        this.playFromOpeningTap(50);
        toast.classList.add('hidden');
      }, { once: true });
    }
  }

  // Synthesized chime for subtle UI feedback
  playChime(type = 'click') {
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          const o = this.audioCtx.createOscillator();
          const g = this.audioCtx.createGain();
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + i * 0.05);
          g.gain.setValueAtTime(0.08, now + i * 0.05);
          g.gain.exponentialRampToValueAtTime(0.0001, now + 0.4 + i * 0.05);
          o.connect(g);
          g.connect(this.audioCtx.destination);
          o.start(now + i * 0.05);
          o.stop(now + 0.45 + i * 0.05);
        });
      } else if (type === 'heart') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.15);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'tap') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      }
    } catch (e) {
      // Audio fallback without error
    }
  }
}

window.soundManager = new SoundManager();
