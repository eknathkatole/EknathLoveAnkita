// Memory Frequency Experience & Interactive Wave Engine

class MemoryFrequencyEngine {
  constructor() {
    this.discoveredFrequencies = new Set();
    this.totalMemories = 5;
    this.activeVideo = null;
    this.waveEnergy = 0.2;
    this.targetWaveEnergy = 0.2;
    this.canvas = null;
    this.ctx = null;
    this.animFrame = null;
  }

  init(container) {
    this.container = container;
    this.renderFrequencyStage();
    this.initWaveCanvas();
    this.bindFrequencyEvents();
  }

  renderFrequencyStage() {
    this.container.innerHTML = `
      <div class="frequency-stage animate-fade-in">
        <div class="frequency-header">
          <span class="freq-tag">MEMORY ROOM</span>
          <h1 class="freq-title">MEMORY<br><span class="freq-title-sub">FREQUENCY</span></h1>
          <p class="freq-subtitle">"some memories are better felt than explained."</p>
        </div>

        <div class="frequency-canvas-wrapper">
          <canvas id="frequency-wave-canvas"></canvas>
          <div class="freq-tune-hint">tune into one</div>
        </div>

        <div class="freq-discovery-counter" id="freq-discovery-counter">
          <span id="freq-count-text">${this.discoveredFrequencies.size.toString().padStart(2, '0')} / 05 found</span>
        </div>

        <!-- Floating Asymmetric Memory Objects -->
        <div class="memory-objects-constellation" id="memory-objects-list">
          ${STORY_DATA.memoryFrequency.map((mem, idx) => `
            <div class="memory-capsule-item ${idx > 1 && !this.discoveredFrequencies.has(mem.id) ? 'locked-hint' : ''} ${this.discoveredFrequencies.has(mem.id) ? 'discovered' : ''}" 
                 data-freq-id="${mem.id}" 
                 data-freq-idx="${idx}"
                 style="--capsule-delay: ${idx * 0.15}s">
              <div class="capsule-glow-orb"></div>
              <div class="capsule-ring">◌</div>
              <div class="capsule-meta">
                <span class="capsule-num">MEMORY ${mem.number}</span>
                <span class="capsule-label">${mem.title}</span>
              </div>
              <div class="capsule-line"></div>
            </div>
          `).join('')}
        </div>

        <!-- Frequency Completion Banner -->
        <div class="freq-completion-banner ${this.discoveredFrequencies.size === 5 ? '' : 'hidden'}" id="freq-completion-banner">
          <p class="completion-lead">you found them all.</p>
          <p class="completion-sub">"but these aren't even all the memories."</p>
          <button class="btn-primary mt-4 modal-close-btn-action" onclick="document.getElementById('memory-frequency-modal').classList.add('hidden')">
            Continue Journey →
          </button>
        </div>
      </div>

      <!-- Cinema Video / Interactive Memory Viewer -->
      <div class="memory-viewer-overlay hidden" id="memory-viewer-overlay">
        <div class="viewer-backdrop" id="viewer-backdrop"></div>
        <div class="viewer-content-card" id="viewer-card">
          <button class="viewer-close-btn" id="viewer-close-btn" aria-label="Close">&times;</button>
          <div id="viewer-dynamic-body"></div>
        </div>
      </div>
    `;
  }

  initWaveCanvas() {
    this.canvas = document.getElementById('frequency-wave-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    const resize = () => {
      if (!this.canvas) return;
      this.canvas.width = this.canvas.parentElement.clientWidth;
      this.canvas.height = 100;
    };
    resize();
    window.addEventListener('resize', resize);

    let phase = 0;
    const animateWave = () => {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Smooth energy lerp
      this.waveEnergy += (this.targetWaveEnergy - this.waveEnergy) * 0.08;
      phase += 0.04 * (1 + this.waveEnergy * 2);

      const width = this.canvas.width;
      const height = this.canvas.height;
      const midY = height / 2;

      this.ctx.beginPath();
      this.ctx.moveTo(0, midY);

      for (let x = 0; x < width; x += 4) {
        const distFromCenter = Math.abs(x - width / 2) / (width / 2);
        const envelope = Math.max(0, 1 - Math.pow(distFromCenter, 1.8));
        const y = midY + Math.sin(x * 0.02 + phase) * 22 * this.waveEnergy * envelope
                       + Math.sin(x * 0.04 - phase * 1.5) * 10 * this.waveEnergy * envelope;
        this.ctx.lineTo(x, y);
      }

      this.ctx.strokeStyle = `rgba(200, 107, 143, ${0.4 + this.waveEnergy * 0.6})`;
      this.ctx.lineWidth = 2;
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = '#C86B8F';
      this.ctx.stroke();

      this.animFrame = requestAnimationFrame(animateWave);
    };

    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    animateWave();
  }

  bindFrequencyEvents() {
    const capsules = this.container.querySelectorAll('.memory-capsule-item');
    capsules.forEach(capsule => {
      capsule.addEventListener('mouseenter', () => {
        this.targetWaveEnergy = 0.9;
        if (window.soundManager) window.soundManager.playChime('tap');
      });

      capsule.addEventListener('mouseleave', () => {
        this.targetWaveEnergy = 0.2;
      });

      capsule.addEventListener('click', () => {
        const freqId = capsule.getAttribute('data-freq-id');
        this.openMemoryObject(freqId, capsule);
      });
    });

    const viewerClose = this.container.querySelector('#viewer-close-btn');
    const viewerBackdrop = this.container.querySelector('#viewer-backdrop');

    if (viewerClose) viewerClose.addEventListener('click', () => this.closeMemoryViewer());
    if (viewerBackdrop) viewerBackdrop.addEventListener('click', () => this.closeMemoryViewer());
  }

  openMemoryObject(freqId, capsuleEl) {
    const memory = STORY_DATA.memoryFrequency.find(m => m.id === freqId);
    if (!memory) return;

    this.discoveredFrequencies.add(freqId);
    this.targetWaveEnergy = 1.4;
    setTimeout(() => { this.targetWaveEnergy = 0.25; }, 800);

    if (capsuleEl) {
      capsuleEl.classList.remove('locked-hint');
      capsuleEl.classList.add('discovered');
    }

    // Unlock next hints
    const nextIdx = STORY_DATA.memoryFrequency.findIndex(m => m.id === freqId) + 1;
    const allCapsules = this.container.querySelectorAll('.memory-capsule-item');
    if (allCapsules[nextIdx]) {
      allCapsules[nextIdx].classList.remove('locked-hint');
    }

    // Update Counter
    const countEl = this.container.querySelector('#freq-count-text');
    if (countEl) {
      countEl.textContent = `${this.discoveredFrequencies.size.toString().padStart(2, '0')} / 05 found`;
    }

    if (this.discoveredFrequencies.size === 5) {
      const banner = this.container.querySelector('#freq-completion-banner');
      if (banner) banner.classList.remove('hidden');
    }

    if (window.soundManager) window.soundManager.playChime('heart');

    // Render in viewer
    this.renderViewerContent(memory);
  }

  renderViewerContent(memory) {
    const overlay = this.container.querySelector('#memory-viewer-overlay');
    const card = this.container.querySelector('#viewer-card');
    const body = this.container.querySelector('#viewer-dynamic-body');
    if (!overlay || !body) return;

    let contentHTML = '';

    // Memory 01: Abstract Waveform + Date
    if (memory.type === 'abstract-wave') {
      contentHTML = `
        <div class="freq-viewer-inner animate-fade-in text-center">
          <span class="capsule-num">MEMORY ${memory.number}</span>
          <h2 class="viewer-memory-title">${memory.title}</h2>
          <div class="viewer-abstract-wave">
            <span class="wave-dot-pulse"></span>
            <div class="wave-lines-graphic">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="viewer-date-tag">${memory.date}</div>
          <p class="viewer-quote-text mt-4">"${memory.desc}"</p>
        </div>
      `;
    }
    // Memory 02 & 04: Cinematic Video
    else if (memory.type === 'video' || memory.type === 'video-circular') {
      const animClass = memory.type === 'video' ? 'video-slide-rise' : 'video-circular-emerge';
      contentHTML = `
        <div class="freq-viewer-inner ${animClass} text-center">
          <span class="capsule-num">MEMORY ${memory.number}</span>
          <h2 class="viewer-memory-title">${memory.title}</h2>
          
          <div class="cinematic-video-frame">
            <video src="${memory.videoSrc}" class="memory-video-player" id="active-memory-video" playsinline preload="metadata"></video>
            <div class="video-overlay-glow"></div>
            
            <div class="video-custom-controls">
              <button class="btn-video-ctrl" id="btn-vid-play" aria-label="Play Video">▶ Play</button>
              <button class="btn-video-ctrl" id="btn-vid-mute" aria-label="Mute Video">🔊 Sound</button>
            </div>
          </div>

          <p class="viewer-caption-p">"${memory.caption}"</p>
        </div>
      `;
    }
    // Memory 03: Animated Typography Replay
    else if (memory.type === 'typography') {
      contentHTML = `
        <div class="freq-viewer-inner animate-fade-in text-center">
          <span class="capsule-num">MEMORY ${memory.number}</span>
          <h2 class="viewer-memory-title">${memory.title}</h2>
          <div class="viewer-typography-stage my-6">
            <p class="typog-part1">${memory.quotePart1.replace(/\n/g, '<br>')}</p>
            <div class="typog-line-divider"></div>
            <p class="typog-part2">${memory.quotePart2.replace(/\n/g, '<br>')}</p>
          </div>
          <p class="text-subtle font-italic">"${memory.desc}"</p>
        </div>
      `;
    }
    // Memory 05: Minimal Presence Still Here
    else if (memory.type === 'minimal-presence') {
      contentHTML = `
        <div class="freq-viewer-inner animate-fade-in text-center">
          <span class="capsule-num">MEMORY ${memory.number}</span>
          <h2 class="viewer-memory-title">${memory.title}</h2>
          <div class="minimal-presence-box my-6">
            <div class="presence-starlight-dot"></div>
            ${memory.lines.map(l => `<p class="presence-line">${l}</p>`).join('')}
          </div>
          <p class="viewer-quote-text" style="color: var(--accent-blush);">"14 MARCH 2026 → ∞"</p>
        </div>
      `;
    }

    body.innerHTML = contentHTML;
    overlay.classList.remove('hidden');

    // Video bindings
    const vid = body.querySelector('#active-memory-video');
    const playBtn = body.querySelector('#btn-vid-play');
    const muteBtn = body.querySelector('#btn-vid-mute');

    if (vid) {
      this.activeVideo = vid;
      vid.muted = true; // start muted per rules

      if (playBtn) {
        playBtn.addEventListener('click', () => {
          if (vid.paused) {
            vid.play();
            playBtn.textContent = '⏸ Pause';
          } else {
            vid.pause();
            playBtn.textContent = '▶ Play';
          }
        });
      }

      if (muteBtn) {
        muteBtn.addEventListener('click', () => {
          vid.muted = !vid.muted;
          muteBtn.textContent = vid.muted ? '🔇 Muted' : '🔊 Sound';
        });
      }
    }
  }

  closeMemoryViewer() {
    const overlay = this.container.querySelector('#memory-viewer-overlay');
    if (overlay) overlay.classList.add('hidden');

    if (this.activeVideo) {
      this.activeVideo.pause();
      this.activeVideo = null;
    }
  }
}

window.memoryFrequencyEngine = new MemoryFrequencyEngine();
