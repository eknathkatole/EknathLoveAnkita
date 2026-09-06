// Main Application Controller — Cinematic Love Story Experience

class StoryApp {
  constructor() {
    this.currentChapterIndex = 0;
    this.totalChapters = STORY_DATA.chapters.length;
    this.stage = 'opening';
    this.chatAnimationTimeouts = [];
    this.hasTriggeredOpening = false;
    this.particlePulse = 1;
    this.initDOMElements();
    this.bindEvents();
    this.initStarsCanvas();
    this.initDesktopCursor();
  }

  initDOMElements() {
    this.openingScreen = document.getElementById('opening-screen');
    this.mainStage = document.getElementById('main-stage');
    this.chapterContainer = document.getElementById('chapter-container');
    this.summaryScreen = document.getElementById('summary-screen');
    this.prankScreen = document.getElementById('prank-screen');
    this.finalScreen = document.getElementById('final-screen');

    // Controls & Modals
    this.topHeader = document.getElementById('top-header');
    this.headerProgressLine = document.getElementById('header-progress-line');
    this.progressBar = document.getElementById('story-progress-bar');
    this.memoryFrequencyModal = document.getElementById('memory-frequency-modal');
    this.quizModal = document.getElementById('quiz-modal');
    this.hiddenMemoryModal = document.getElementById('hidden-memory-modal');
  }

  bindEvents() {
    // Secret Opening Portal Interaction (Tap anywhere on the opening screen)
    if (this.openingScreen) {
      const handleOpeningTap = (e) => {
        if (this.hasTriggeredOpening) return;
        this.hasTriggeredOpening = true;

        const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
        const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 2);

        this.triggerOpeningSequence(clientX, clientY);
      };

      this.openingScreen.addEventListener('click', handleOpeningTap);
      this.openingScreen.addEventListener('touchstart', handleOpeningTap, { passive: true });
    }

    // Header buttons
    const freqBtn = document.getElementById('btn-open-frequency');
    if (freqBtn) {
      freqBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        this.openMemoryFrequency();
      });
    }

    const freqCloseBtn = document.getElementById('freq-modal-close');
    if (freqCloseBtn) {
      freqCloseBtn.addEventListener('click', () => {
        if (this.memoryFrequencyModal) this.memoryFrequencyModal.classList.add('hidden');
      });
    }

    const quizBtn = document.getElementById('btn-open-quiz');
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        this.openQuiz();
      });
    }

    // Modal Close buttons
    document.querySelectorAll('.modal-close-btn, .modal-close-btn-action').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.quiz-fullscreen-modal, .modal-overlay, .memory-frequency-fullscreen');
        if (modal) modal.classList.add('hidden');
      });
    });

    // Summary Screen finish button
    const finishBtn = document.getElementById('finish-summary-btn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        this.triggerPrankAndFinal();
      });
    }

    // Prank button
    const lastThingBtn = document.getElementById('btn-one-last-thing');
    if (lastThingBtn) {
      lastThingBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('success');
        this.showFinalReveal();
      });
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.quiz-fullscreen-modal, .modal-overlay, .memory-frequency-fullscreen').forEach(m => m.classList.add('hidden'));
      }
      if (this.stage === 'chapters') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          const nextBtn = document.querySelector('.chapter-next-btn');
          if (nextBtn) nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
          this.previousChapter();
        }
      }
    });
  }

  // Cinematic Opening Trigger Flow (First Tap Starts Music from 50s & Transitions)
  triggerOpeningSequence(x, y) {
    // 1. Start music from 50 seconds immediately
    if (window.soundManager) {
      window.soundManager.playFromOpeningTap(50);
      window.soundManager.playChime('success');
    }

    // 2. Spawn soft expanding touch ripple
    const ripplesContainer = document.getElementById('portal-ripples');
    if (ripplesContainer) {
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${Math.max(window.innerWidth, window.innerHeight) * 1.5}px`;
      ripple.style.height = `${Math.max(window.innerWidth, window.innerHeight) * 1.5}px`;
      ripplesContainer.appendChild(ripple);
    }

    // 3. Accelerate background particles
    this.particlePulse = 4;

    // 4. Bloom and dissolve central composition
    const centerComp = document.querySelector('.opening-center-composition');
    if (centerComp) {
      centerComp.style.opacity = '0';
      centerComp.style.transform = 'scale(0.92) translateY(-14px)';
      centerComp.style.filter = 'blur(10px)';
    }

    // 5. Seamless transition into Chapter 1 (14 March 2026) after 1.8 seconds
    setTimeout(() => {
      this.stage = 'chapters';
      if (this.openingScreen) {
        this.openingScreen.classList.add('hidden');
      }
      if (this.mainStage) {
        this.mainStage.classList.remove('hidden');
        this.mainStage.classList.add('fade-in');
      }
      // Reveal navigation smoothly
      if (this.topHeader) this.topHeader.classList.add('revealed');
      if (this.headerProgressLine) this.headerProgressLine.classList.add('revealed');

      this.renderChapter(0);
      this.particlePulse = 1;
    }, 1800);
  }

  initDesktopCursor() {
    const dot = document.getElementById('cursor-dot');
    const follower = document.getElementById('cursor-follower');
    if (!dot || !follower || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const updateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(updateFollower);
    };
    updateFollower();

    // Hover expand
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('button, a, .memory-capsule-item, .digit-box, .option-btn, .opening-portal-trigger')) {
        follower.style.width = '44px';
        follower.style.height = '44px';
        follower.style.borderColor = '#F5D7DE';
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('button, a, .memory-capsule-item, .digit-box, .option-btn, .opening-portal-trigger')) {
        follower.style.width = '28px';
        follower.style.height = '28px';
        follower.style.borderColor = 'var(--accent-blush)';
      }
    });
  }

  clearChatTimeouts() {
    this.chatAnimationTimeouts.forEach(t => clearTimeout(t));
    this.chatAnimationTimeouts = [];
  }

  renderChapter(index) {
    if (index >= this.totalChapters) {
      this.showSummary();
      return;
    }
    if (index < 0) index = 0;

    this.clearChatTimeouts();
    this.currentChapterIndex = index;
    const chapter = STORY_DATA.chapters[index];

    // Dynamic Theme Atmosphere
    document.body.className = chapter.theme || 'theme-love';

    // Update Progress bar
    const progressPercent = ((index + 1) / this.totalChapters) * 100;
    if (this.progressBar) this.progressBar.style.width = `${progressPercent}%`;

    // Clear and build chapter card
    this.chapterContainer.innerHTML = '';
    const chapterCard = document.createElement('div');
    chapterCard.className = 'chapter-card animate-fade-in';
    chapterCard.id = chapter.id;

    chapterCard.innerHTML = this.getChapterHTML(chapter);
    this.chapterContainer.appendChild(chapterCard);

    // Attach behaviors
    this.attachChapterBehaviors(chapter, chapterCard);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getChapterHTML(chapter) {
    let specificContent = '';

    // 1. Phone Call UI (March 14)
    if (chapter.type === 'phone-call') {
      specificContent = `
        <div class="prologue-lines">
          ${chapter.prologue.map(l => `<p class="content-p" style="color: var(--text-muted); font-style: italic;">${l}</p>`).join('')}
        </div>

        <div class="phone-call-card">
          <div class="phone-avatar">📞</div>
          <h3 class="phone-caller">${chapter.callInfo.caller}</h3>
          <span class="phone-status missed">${chapter.callInfo.status}</span>
        </div>

        <div class="factual-note-box">
          <span class="note-icon">📌</span>
          <span>${chapter.factualNote}</span>
        </div>

        <div class="chapter-content-lines">
          ${chapter.content.map(c => `<p class="content-p">${c}</p>`).join('')}
        </div>
      `;
    }
    // 2. Transition (15 March)
    else if (chapter.type === 'transition') {
      specificContent = `
        <div class="chapter-content-lines text-center my-6">
          ${chapter.content.map(c => `<p class="content-p highlight" style="font-size: 1.25rem;">${c}</p>`).join('')}
        </div>
        <div class="phone-call-card" style="border-color: rgba(37, 211, 102, 0.35);">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">💬</div>
          <h3>WhatsApp Connection</h3>
          <p class="text-subtle mt-4">Transitioning to the first official conversation...</p>
        </div>
      `;
    }
    // 3. Sequential WhatsApp Chat
    else if (chapter.type === 'chat') {
      specificContent = `
        ${chapter.narrationTop ? `<p class="content-p" style="color: var(--text-muted); font-style: italic;">${chapter.narrationTop}</p>` : ''}
        <div class="whatsapp-mockup">
          <div class="wa-chat-header">
            <div class="wa-user-profile">
              <div class="wa-avatar">A</div>
              <div class="wa-header-info">
                <span class="wa-name">Ankita 🤍</span>
                <span class="wa-status">online</span>
              </div>
            </div>
            <button class="btn-skip-chat" id="btn-skip-chat">Skip animation</button>
          </div>
          <div class="wa-chat-body" id="wa-chat-body">
            <!-- Messages animated sequentially -->
          </div>
        </div>
        ${chapter.caption ? `
          <div class="chapter-caption-box">
            ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
          </div>
        ` : ''}
      `;
    }
    // 4. Instagram Incident (28 March)
    else if (chapter.type === 'instagram-incident') {
      specificContent = `
        <div class="instagram-card-mockup">
          <div class="insta-header">
            <span style="font-size: 1.4rem;">📸</span>
            <span>Instagram Direct</span>
          </div>
          <div class="whatsapp-mockup" style="margin: 0;">
            <div class="wa-chat-body">
              ${chapter.messages.map((m) => `
                <div class="chat-bubble ${m.sender === 'me' ? 'bubble-me' : 'bubble-other'}" style="opacity: 1; transform: none;">
                  <p class="bubble-text">${m.text.replace(/\n/g, '<br>')}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="chapter-caption-box">
          ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
        </div>
      `;
    }
    // 5. Quotes / Flower Moment
    else if (chapter.type === 'quote-reveal' || chapter.type === 'quote-minimal' || chapter.type === 'flower-moment') {
      specificContent = `
        <div class="phone-call-card" style="border-color: var(--border-glow); padding: 30px 20px;">
          <p class="quote-cinema-text" style="font-family: var(--font-serif); font-size: 1.35rem; line-height: 1.6; color: var(--accent-highlight);">
            “${(chapter.quote || '').replace(/\n/g, '<br>')}”
          </p>
          ${chapter.quoteSequence ? chapter.quoteSequence.map(q => `<p class="content-p mt-4" style="color: var(--text-muted);">${q}</p>`).join('') : ''}
        </div>
        ${chapter.narration ? `
          <div class="narration-box my-4">
            ${chapter.narration.map(n => `<p class="content-p" style="font-style: italic;">${n}</p>`).join('')}
          </div>
        ` : ''}
        ${chapter.caption ? `
          <div class="chapter-caption-box">
            ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
          </div>
        ` : ''}
      `;
    }
    // 6. Voice Moment (23 April)
    else if (chapter.type === 'voice-moment') {
      specificContent = `
        ${chapter.narrationTop ? `<p class="content-p" style="color: var(--text-muted); font-style: italic;">${chapter.narrationTop}</p>` : ''}
        <div class="voice-moment-player">
          <div class="voice-wave-anim">
            <span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span>
            <span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span>
          </div>
          <p class="text-subtle font-semibold" style="margin-bottom: 12px; color: var(--accent-highlight);">"there's something I don't want to type."</p>
          <button class="btn-voice-play" id="btn-chapter-audio">
            <span>▶</span> Play Our Song
          </button>
        </div>
        <div class="chapter-content-lines">
          ${chapter.content.map(c => `<p class="content-p">${c}</p>`).join('')}
        </div>
      `;
    }
    // 7. Photo Reveal / Longing
    else if (chapter.type === 'photo-reveal') {
      specificContent = `
        ${chapter.quoteSequence ? `
          <div class="quote-stack" style="margin-bottom: 18px;">
            ${chapter.quoteSequence.map(q => `<div class="factual-note-box">${q}</div>`).join('')}
          </div>
        ` : ''}
        ${chapter.caption ? `
          <div class="chapter-caption-box">
            ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
          </div>
        ` : ''}
      `;
    }
    // 8. Trust 101%
    else if (chapter.type === 'trust-animation') {
      specificContent = `
        <div class="phone-call-card" style="padding: 36px 20px;">
          <div class="date-day" id="trust-counter" style="font-size: 4.2rem; color: var(--accent-blush);">0%</div>
          <h3 class="chapter-title mt-4" style="color: #fff;">${chapter.highlightText}</h3>
        </div>
        ${chapter.caption ? `
          <div class="chapter-caption-box">
            ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
          </div>
        ` : ''}
      `;
    }
    // 9. 5201314 Signature Decoder
    else if (chapter.type === 'code-decoder') {
      specificContent = `
        <div id="decoder-container"></div>
      `;
    }
    // 10. Marathi Confession (27 May)
    else if (chapter.type === 'confession') {
      specificContent = `
        <div class="whatsapp-mockup">
          <div class="wa-chat-body">
            ${chapter.messages.map(m => `
              <div class="chat-bubble ${m.sender === 'me' ? 'bubble-me' : 'bubble-other'}" style="opacity: 1; transform: none;">
                <p class="bubble-text">${m.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="marathi-confession-card">
          <p class="marathi-text">${chapter.marathiConfession.replace(/\n/g, '<br>')}</p>
        </div>
        ${chapter.caption ? `
          <div class="chapter-caption-box">
            ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
          </div>
        ` : ''}
      `;
    }
    // 11. Grand Reveal (23 June)
    else if (chapter.type === 'grand-reveal') {
      specificContent = `
        <div class="grand-romantic-container">
          <div class="phone-call-card" style="border-color: var(--border-glow); text-align: left; padding: 22px;">
            <span style="font-size: 0.75rem; letter-spacing: 2px; color: var(--accent-blush); font-weight: 700; text-transform: uppercase;">From Ankita:</span>
            <p class="content-p mt-4" style="color: #fff1f2; font-size: 1.1rem; line-height: 1.6;">${chapter.herMessage.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="phone-call-card" style="border-color: var(--accent-rose); background: rgba(74, 30, 52, 0.25); text-align: left; padding: 22px;">
            <span style="font-size: 0.75rem; letter-spacing: 2px; color: var(--accent-highlight); font-weight: 700; text-transform: uppercase;">My Reply:</span>
            <p class="content-p mt-4" style="color: #fff1f2; font-size: 1.1rem; line-height: 1.6;">${chapter.myReply.replace(/\n/g, '<br>')}</p>
          </div>
          ${chapter.caption ? `
            <div class="chapter-caption-box">
              ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }
    // 12. Video Milestone (3 July)
    else if (chapter.type === 'video-milestone') {
      specificContent = `
        <div class="video-call-box">
          <span class="vc-connected-badge">VIDEO CALL CONNECTED</span>
          <div class="vc-timer">02:00</div>
          <p class="vc-note">2 minutes. No proper conversation. But finally... we saw each other.</p>
        </div>
        <div class="whatsapp-mockup">
          <div class="wa-chat-body">
            ${chapter.messages.map(m => `
              <div class="chat-bubble ${m.sender === 'me' ? 'bubble-me' : 'bubble-other'}" style="opacity: 1; transform: none;">
                <p class="bubble-text">${m.text.replace(/\n/g, '<br>')}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    // 13. Crisis (July Storm)
    else if (chapter.type === 'crisis') {
      specificContent = `
        <div class="phone-call-card" style="border-color: rgba(148, 163, 184, 0.35); text-align: left; padding: 24px;">
          <span style="font-size: 0.75rem; letter-spacing: 2px; color: var(--text-dim); text-transform: uppercase;">Relationship Crisis</span>
          <h3 class="chapter-title" style="text-align: left; font-size: 1.4rem; margin: 8px 0;">${chapter.crisisTitle}</h3>
          ${chapter.narration.map(n => `<p class="content-p" style="color: var(--text-muted);">${n}</p>`).join('')}
          <div class="factual-note-box mt-4">
            <p style="font-family: var(--font-serif); font-size: 1.15rem; font-style: italic; color: #fff;">“${chapter.keyQuote}”</p>
          </div>
          ${chapter.caption ? `<p class="caption-p mt-4">${chapter.caption.join(' ')}</p>` : ''}
        </div>
      `;
    }
    // 14. Deep Understanding (24 July)
    else if (chapter.type === 'deep-understanding') {
      specificContent = `
        <div class="phone-call-card" style="padding: 24px; text-align: left;">
          <p style="font-family: var(--font-serif); font-size: 1.25rem; font-style: italic; color: var(--accent-highlight); margin-bottom: 18px;">
            “${chapter.quote.replace(/\n/g, '<br>')}”
          </p>
          <h4 style="color: var(--accent-blush); margin-bottom: 12px; font-family: var(--font-serif);">${chapter.loveReasonsTitle}</h4>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${chapter.loveReasons.map((r) => `
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); padding: 10px 14px; border-radius: 8px; display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                <span>❤️</span>
                <span>${r}</span>
              </div>
            `).join('')}
          </div>
          ${chapter.narration ? `
            <div class="mt-4">
              ${chapter.narration.map(n => `<p class="content-p" style="font-style: italic; color: var(--text-muted);">${n}</p>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }
    // 15. Conflict Chain Visualizer
    else if (chapter.type === 'conflict-chain') {
      specificContent = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 22px 0;">
          ${chapter.chain.map((step, idx) => `
            <div style="background: rgba(20, 13, 24, 0.8); border: 1px solid var(--border-subtle); padding: 8px 20px; border-radius: 20px; font-size: 0.92rem;">
              <span>${step}</span>
              ${idx < chapter.chain.length - 1 ? '<div style="color: var(--accent-rose); font-size: 1rem; text-align: center; margin-top: 4px;">↓</div>' : ''}
            </div>
          `).join('')}
        </div>
        ${chapter.caption ? `
          <div class="chapter-caption-box mt-4">
            ${chapter.caption.map(c => `<p class="caption-p">${c}</p>`).join('')}
          </div>
        ` : ''}
      `;
    }

    // Hidden Memory Charm
    const hiddenMemoryTrigger = chapter.hiddenMemoryId ? `
      <div class="hidden-spark-container">
        <button class="nav-pill-btn" data-memory-id="${chapter.hiddenMemoryId}" style="margin: 18px auto 0 auto; border-style: dashed;">
          <span>✨</span>
          <span>Secret Memory Spark</span>
        </button>
      </div>
    ` : '';

    // Editorial Date Container
    return `
      <div class="cinema-date-block">
        <div class="date-large-group">
          <span class="date-day">${chapter.day}</span>
          <div class="date-month-year">
            <span class="date-month">${chapter.month}</span>
            <span class="date-year">${chapter.year}</span>
          </div>
        </div>
        <p class="date-subtitle">"${chapter.subtitle}"</p>
      </div>

      <h2 class="chapter-title">${chapter.title}</h2>

      <div class="chapter-body">
        ${specificContent}
        ${hiddenMemoryTrigger}
      </div>

      <div class="chapter-nav-bar">
        ${this.currentChapterIndex > 0 ? `
          <button class="btn-nav-prev" id="chapter-prev-btn">← Back</button>
        ` : '<div></div>'}
        <button class="btn-primary chapter-next-btn" id="chapter-next-btn">
          ${chapter.nextPrompt || 'Next'} →
        </button>
      </div>
    `;
  }

  attachChapterBehaviors(chapter, element) {
    // Next / Prev listeners
    const nextBtn = element.querySelector('#chapter-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        this.renderChapter(this.currentChapterIndex + 1);
      });
    }

    const prevBtn = element.querySelector('#chapter-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        this.previousChapter();
      });
    }

    // Sequential Chat Animation
    if (chapter.type === 'chat' && chapter.messages) {
      const chatBody = element.querySelector('#wa-chat-body');
      const skipBtn = element.querySelector('#btn-skip-chat');

      const renderAllMessages = () => {
        this.clearChatTimeouts();
        if (chatBody) {
          chatBody.innerHTML = chapter.messages.map(m => `
            <div class="chat-bubble ${m.sender === 'me' ? 'bubble-me' : 'bubble-other'}" style="opacity: 1; transform: none;">
              <p class="bubble-text">${m.text.replace(/\n/g, '<br>')}</p>
              ${m.time ? `<span class="bubble-time">${m.time}</span>` : ''}
            </div>
          `).join('');
        }
      };

      if (skipBtn) {
        skipBtn.addEventListener('click', renderAllMessages);
      }

      if (chatBody) {
        chapter.messages.forEach((m, idx) => {
          const timeout = setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = `chat-bubble ${m.sender === 'me' ? 'bubble-me' : 'bubble-other'}`;
            bubble.innerHTML = `
              <p class="bubble-text">${m.text.replace(/\n/g, '<br>')}</p>
              ${m.time ? `<span class="bubble-time">${m.time}</span>` : ''}
            `;
            chatBody.appendChild(bubble);
            if (window.soundManager) window.soundManager.playChime('tap');
          }, idx * 650);
          this.chatAnimationTimeouts.push(timeout);
        });
      }
    }

    // Hidden Memory Charm
    const sparkBtn = element.querySelector('.nav-pill-btn[data-memory-id]');
    if (sparkBtn) {
      sparkBtn.addEventListener('click', () => {
        const memId = sparkBtn.getAttribute('data-memory-id');
        if (window.miniGamesEngine) {
          window.miniGamesEngine.triggerHiddenMemory(memId);
        }
      });
    }

    // Trust 101% Animation
    if (chapter.type === 'trust-animation') {
      const counterEl = element.querySelector('#trust-counter');
      if (counterEl) {
        let current = 0;
        const target = 101;
        const timer = setInterval(() => {
          current += 2;
          if (current >= target) {
            current = target;
            clearInterval(timer);
            if (window.soundManager) window.soundManager.playChime('success');
          }
          counterEl.textContent = `${current}%`;
        }, 25);
      }
    }

    // 5201314 Decoder
    if (chapter.type === 'code-decoder') {
      const decoderCont = element.querySelector('#decoder-container');
      if (decoderCont && window.miniGamesEngine) {
        window.miniGamesEngine.render520Decoder(decoderCont);
      }
    }

    // Voice Moment Audio Button
    const audioBtn = element.querySelector('#btn-chapter-audio');
    if (audioBtn && window.soundManager) {
      audioBtn.addEventListener('click', () => {
        window.soundManager.toggleMusic();
        audioBtn.innerHTML = window.soundManager.isPlaying 
          ? '<span>⏸</span> Pause Our Song' 
          : '<span>▶</span> Play Our Song';
      });
    }
  }

  previousChapter() {
    if (this.currentChapterIndex > 0) {
      this.renderChapter(this.currentChapterIndex - 1);
    }
  }

  openMemoryFrequency() {
    if (!this.memoryFrequencyModal || !window.memoryFrequencyEngine) return;
    const content = document.getElementById('memory-frequency-content');
    window.memoryFrequencyEngine.init(content);
    this.memoryFrequencyModal.classList.remove('hidden');
  }

  openQuiz() {
    if (!window.miniGamesEngine || !this.quizModal) return;
    const container = document.getElementById('quiz-content-container');
    window.miniGamesEngine.startQuiz(container);
    this.quizModal.classList.remove('hidden');
  }

  showSummary() {
    this.stage = 'summary';
    this.mainStage.classList.add('hidden');
    this.summaryScreen.classList.remove('hidden');
    this.summaryScreen.classList.add('fade-in');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  triggerPrankAndFinal() {
    this.stage = 'prank';
    this.summaryScreen.classList.add('hidden');
    this.prankScreen.classList.remove('hidden');

    const prankContent = document.getElementById('prank-content');
    if (prankContent) {
      prankContent.classList.add('hidden');
      setTimeout(() => {
        prankContent.classList.remove('hidden');
        prankContent.classList.add('animate-fade-in');
        if (window.soundManager) window.soundManager.playChime('tap');
      }, 2000);
    }
  }

  showFinalReveal() {
    this.stage = 'final';
    this.prankScreen.classList.add('hidden');
    this.finalScreen.classList.remove('hidden');
    this.finalScreen.classList.add('fade-in');

    const data = STORY_DATA.finalLetter;
    const container = document.getElementById('final-letter-container');

    container.innerHTML = `
      <div class="final-love-letter">
        <div class="final-paragraphs">
          ${data.paragraphs.map(p => `<p class="final-p">${p}</p>`).join('')}
        </div>

        <div class="final-memories-strip">
          ${data.memoriesList.map(m => `
            <span class="memory-tag">${m}</span>
          `).join('')}
        </div>

        <div class="final-infinity-box">
          <span class="infinity-symbol">∞</span>
          <h3 class="infinity-date">${data.timelineEnd}</h3>
        </div>

        <div class="final-conclusion">
          ${data.conclusion.map(c => `<p class="final-p" style="color: var(--accent-highlight);">${c}</p>`).join('')}
          <h2 class="final-signature">${data.signature}</h2>
        </div>

        <div class="final-actions mt-6 text-center">
          <button class="btn-primary" id="btn-replay-story">Replay Our Story ↺</button>
        </div>
      </div>
    `;

    const replayBtn = container.querySelector('#btn-replay-story');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initStarsCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: (Math.random() - 0.5) * 0.18
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.speedX * this.particlePulse;
        p.y += p.speedY * this.particlePulse;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 167, 184, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(render);
    };

    render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.storyApp = new StoryApp();
});
