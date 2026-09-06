// Interactive Mini-Games and Features Engine
// Incorporates the 3 AI Couple Photos exclusively inside the Quiz Game

class MiniGamesEngine {
  constructor() {
    this.discoveredMemories = new Set();
    this.currentQuizIndex = 0;
  }

  // 1. Render 5201314 Signature Decoder
  render520Decoder(container, onComplete) {
    container.innerHTML = `
      <div class="decoder-widget animate-fade-in">
        <div class="decoder-header">
          <p class="text-subtle font-semibold">The Signature Number</p>
          <div class="decoder-digits-stream" id="decoder-digits-box">
            <span class="digit-box">5</span>
            <span class="digit-box">2</span>
            <span class="digit-box">0</span>
            <span class="digit-box">1</span>
            <span class="digit-box">3</span>
            <span class="digit-box">1</span>
            <span class="digit-box">4</span>
          </div>
          <p class="decoder-prompt">"what do you think this means?"</p>
        </div>

        <div class="decoder-options">
          <button class="option-btn" data-ans="0">
            <span>A random bank OTP or lucky number</span>
          </button>
          <button class="option-btn" data-ans="1">
            <span>520 (I love you) + 1314 (For a lifetime)</span>
          </button>
          <button class="option-btn" data-ans="2">
            <span>The date we are supposed to meet</span>
          </button>
        </div>

        <div class="decoder-result hidden" id="decoder-result">
          <div class="code-breakdown animate-fade-in">
            <div class="code-part">
              <span class="part-num">520</span>
              <span class="part-mean">= I Love You (我爱你)</span>
            </div>
            <div class="code-separator" style="color: var(--accent-pink); font-size: 1.5rem;">+</div>
            <div class="code-part">
              <span class="part-num">1314</span>
              <span class="part-mean">= For A Lifetime (一生一世)</span>
            </div>
          </div>
          <p class="result-narration" style="color: var(--text-muted); font-style: italic; margin-top: 10px;">
            "You didn't know what it meant at first... but it became our signature promise."
          </p>
        </div>
      </div>
    `;

    const resultBox = container.querySelector('#decoder-result');
    const optionBtns = container.querySelectorAll('.option-btn');

    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const ans = parseInt(btn.getAttribute('data-ans'), 10);
        if (ans === 1) {
          btn.classList.add('correct');
          if (window.soundManager) window.soundManager.playChime('success');
          resultBox.classList.remove('hidden');
          optionBtns.forEach(b => b.disabled = true);
          if (onComplete) onComplete();
        } else {
          btn.style.borderColor = '#ef4444';
          btn.style.color = '#f87171';
          if (window.soundManager) window.soundManager.playChime('tap');
          setTimeout(() => {
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 1000);
        }
      });
    });
  }

  // 2. Render Interactive Visual Relationship Quiz (Questions 1, 2, 3 with couple1.jpg, couple2.jpg, couple3.jpg)
  startQuiz(container) {
    this.currentQuizIndex = 0;
    this.renderQuizStep(container);
  }

  renderQuizStep(container) {
    const quizList = STORY_DATA.quizzes;
    if (this.currentQuizIndex >= quizList.length) {
      // Completed all 3 questions
      container.innerHTML = `
        <div class="interactive-quiz-card animate-fade-in text-center">
          <div class="sparkle-anim" style="font-size: 2.8rem; margin-bottom: 12px;">🤍</div>
          <div class="chapter-badge">Quiz Completed</div>
          <h3 class="chapter-title mt-4">3 / 3 Memories Remembered Perfectly</h3>
          <p class="content-p my-4" style="color: #fff1f2;">
            "Thank you for remembering every single step of our story, Anku."
          </p>
          <button class="btn-primary modal-close-btn-action" onclick="document.getElementById('quiz-modal').classList.add('hidden')">
            Back to Our Story ✨
          </button>
        </div>
      `;
      return;
    }

    const currentQuiz = quizList[this.currentQuizIndex];
    container.innerHTML = `
      <div class="interactive-quiz-card animate-fade-in">
        <div class="quiz-header-bar">
          <span class="chapter-badge">${currentQuiz.questionNumber}</span>
          <span class="quiz-step-tracker">${this.currentQuizIndex + 1} of ${quizList.length}</span>
        </div>

        <p class="quiz-lead-text">${currentQuiz.leadText}</p>

        <!-- Responsive Image Container -->
        <div class="quiz-photo-frame">
          <img src="${currentQuiz.image}" alt="Couple Memory #${this.currentQuizIndex + 1}" class="quiz-photo-img" loading="eager" />
        </div>

        <h3 class="quiz-question-title">${currentQuiz.question}</h3>

        <div class="decoder-options">
          ${currentQuiz.options.map((opt, i) => `
            <button class="option-btn quiz-opt-btn" data-idx="${i}">
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div class="factual-note-box hidden mt-4 animate-fade-in" id="quiz-fact-box">
          <span class="note-icon">✨</span>
          <span class="fact-text">${currentQuiz.fact}</span>
        </div>

        <div class="quiz-footer-actions hidden mt-4 text-center" id="quiz-next-action">
          <button class="btn-primary" id="btn-quiz-next">
            ${this.currentQuizIndex < quizList.length - 1 ? 'Next Memory →' : 'Complete Quiz ✨'}
          </button>
        </div>
      </div>
    `;

    const factBox = container.querySelector('#quiz-fact-box');
    const nextAction = container.querySelector('#quiz-next-action');
    const nextBtn = container.querySelector('#btn-quiz-next');
    const optButtons = container.querySelectorAll('.quiz-opt-btn');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (idx === currentQuiz.correctIndex) {
          btn.classList.add('correct');
          if (window.soundManager) window.soundManager.playChime('success');
        } else {
          btn.style.borderColor = '#ef4444';
          btn.style.color = '#f87171';
          optButtons[currentQuiz.correctIndex].classList.add('correct');
          if (window.soundManager) window.soundManager.playChime('tap');
        }

        optButtons.forEach(b => b.disabled = true);
        factBox.classList.remove('hidden');
        nextAction.classList.remove('hidden');
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        this.currentQuizIndex++;
        this.renderQuizStep(container);
      });
    }
  }

  // 3. Render 14 Milestone Cards
  renderMilestoneCards(container) {
    const cards = STORY_DATA.milestoneCards;
    container.innerHTML = `
      <div class="milestones-grid">
        ${cards.map((c, i) => `
          <div class="milestone-card" data-card-idx="${i}">
            <div class="card-inner">
              <div class="card-front">
                <span class="card-date-badge">${c.date}</span>
                <h4 class="card-title">${c.title}</h4>
                <div class="card-tap-hint">Tap to flip ✨</div>
              </div>
              <div class="card-back">
                <span class="card-who">${c.who}</span>
                <p class="card-desc">${c.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.milestone-card').forEach(card => {
      card.addEventListener('click', () => {
        if (window.soundManager) window.soundManager.playChime('click');
        card.classList.toggle('flipped');
      });
    });
  }

  // 4. Trigger Hidden Memory Easter Egg
  triggerHiddenMemory(memoryId) {
    const memory = STORY_DATA.hiddenMemories[memoryId];
    if (!memory) return;

    this.discoveredMemories.add(memoryId);
    if (window.soundManager) window.soundManager.playChime('heart');

    const modal = document.getElementById('hidden-memory-modal');
    const titleEl = document.getElementById('modal-memory-title');
    const textEl = document.getElementById('modal-memory-text');
    const counterEl = document.getElementById('memory-counter-badge');

    if (titleEl) titleEl.textContent = memory.title;
    if (textEl) textEl.textContent = memory.text;
    if (counterEl) {
      counterEl.textContent = `${this.discoveredMemories.size} / 4 Memories Found`;
      counterEl.classList.remove('hidden');
    }

    if (modal) {
      modal.classList.remove('hidden');
    }
  }
}

window.miniGamesEngine = new MiniGamesEngine();
