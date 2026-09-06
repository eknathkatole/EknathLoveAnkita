import React, { useState } from 'react';
import { STORY_DATA } from '../data/story';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Heart, Sparkles } from 'lucide-react';
import { triggerQuizSuccess, triggerQuizOops } from '../utils/loveEffects';

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrectState, setIsCorrectState] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const quiz = STORY_DATA.quizzes[currentIdx];

  const handleSelect = (idx, e) => {
    if (isAnswered && isCorrectState) return; // already got it right

    setSelectedOption(idx);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    if (idx === quiz.correctIndex) {
      setIsAnswered(true);
      setIsCorrectState(true);
      setScore(prev => prev + 1);
      triggerQuizSuccess(x, y);
    } else {
      setIsAnswered(true);
      setIsCorrectState(false);
      triggerQuizOops(e.currentTarget, x, y);
    }
  };

  const handleNext = () => {
    if (currentIdx < STORY_DATA.quizzes.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrectState(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrectState(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="cinematic-section" style={{ minHeight: '90vh' }}>
      <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-tag">
          <Sparkles size={12} color="#FF4F81" />
          Memory Check
          <Sparkles size={12} color="#FF4F81" />
        </span>
        <h2 className="section-title-editorial">How Well Do You Remember?</h2>

        {!isCompleted ? (
          <div style={{
            padding: '36px 24px',
            borderRadius: '24px',
            background: 'rgba(36, 16, 27, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(255, 179, 198, 0.35)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 79, 129, 0.15)',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFB3C6' }}>
                QUESTION {quiz.questionNumber} OF {STORY_DATA.quizzes.length}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#D8B8C4', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Heart size={12} color="#FF4F81" fill="#FF4F81" /> Score: {score}
              </span>
            </div>

            {/* ONLY PLACE WHERE COUPLE PHOTOS ARE USED: Inside a framed aspect-ratio container */}
            <div style={{
              width: '100%',
              maxWidth: '340px',
              height: '240px',
              margin: '0 auto 24px auto',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#160A12',
              border: '1.5px solid rgba(255, 79, 129, 0.35)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(255, 79, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={quiz.image}
                alt="Us"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: '#FFB3C6',
              marginBottom: '8px'
            }}>
              {quiz.leadText}
            </p>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.3rem, 3.5vw, 1.65rem)',
              color: '#FFF7FA',
              lineHeight: '1.3',
              marginBottom: '28px'
            }}>
              {quiz.question}
            </h3>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {quiz.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === quiz.correctIndex;
                let bg = 'rgba(48, 20, 36, 0.65)';
                let border = 'rgba(255, 79, 129, 0.22)';
                let textColor = '#FFF7FA';

                if (isAnswered) {
                  if (isCorrect) {
                    bg = 'rgba(46, 125, 50, 0.3)';
                    border = 'rgba(129, 199, 132, 0.7)';
                    textColor = '#E8F5E9';
                  } else if (isSelected && !isCorrectState) {
                    bg = 'rgba(198, 40, 40, 0.3)';
                    border = 'rgba(239, 154, 154, 0.7)';
                    textColor = '#FFEBEE';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={(e) => handleSelect(idx, e)}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background: bg,
                      border: `1px solid ${border}`,
                      color: textColor,
                      fontSize: '0.94rem',
                      textAlign: 'left',
                      cursor: isAnswered && isCorrectState ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      minHeight: '48px',
                      boxShadow: isSelected ? '0 4px 15px rgba(255, 79, 129, 0.2)' : 'none'
                    }}
                  >
                    <span>{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 size={18} color="#81C784" />}
                    {isAnswered && isSelected && !isCorrectState && <XCircle size={18} color="#EF9A9A" />}
                  </button>
                );
              })}
            </div>

            {/* Fact feedback */}
            {isAnswered && isCorrectState && (
              <div style={{
                padding: '14px 18px',
                borderRadius: '14px',
                background: 'rgba(255, 79, 129, 0.18)',
                border: '1px solid rgba(255, 179, 198, 0.4)',
                marginBottom: '20px',
                fontSize: '0.92rem',
                color: '#FFF7FA',
                fontStyle: 'italic',
                animation: 'fadeIn 0.5s ease'
              }}>
                ✦ {quiz.fact} 💖
              </div>
            )}

            {isAnswered && !isCorrectState && (
              <div style={{
                padding: '10px 16px',
                borderRadius: '12px',
                background: 'rgba(90, 22, 53, 0.4)',
                border: '1px solid rgba(255, 79, 129, 0.3)',
                marginBottom: '16px',
                fontSize: '0.88rem',
                color: '#FFB3C6',
                fontStyle: 'italic'
              }}>
                🙈 Oops! Try again or pick another one! 💭
              </div>
            )}

            {isAnswered && isCorrectState && (
              <button
                onClick={handleNext}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(255, 79, 129, 0.5) 0%, rgba(201, 24, 74, 0.65) 100%)',
                  border: '1px solid rgba(255, 179, 198, 0.5)',
                  color: '#FFF7FA',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(255, 79, 129, 0.35)'
                }}
              >
                <span>{currentIdx < STORY_DATA.quizzes.length - 1 ? 'NEXT QUESTION' : 'SEE RESULT'}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        ) : (
          /* Result Summary */
          <div style={{
            padding: '44px 28px',
            borderRadius: '24px',
            background: 'rgba(36, 16, 27, 0.9)',
            border: '1.5px solid rgba(255, 179, 198, 0.45)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 79, 129, 0.25)'
          }}>
            <Sparkles size={34} color="#FFB3C6" style={{ marginBottom: '14px' }} />
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '2.1rem',
              color: '#FFE5EC',
              marginBottom: '12px'
            }}>
              {score >= 2 ? 'Perfect Memory, Anku! ❤️' : 'Every Memory Is Precious 🤍'}
            </h3>
            <p style={{ color: '#D8B8C4', fontSize: '1rem', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 28px auto' }}>
              No matter what, our story is kept safe right here forever and always.
            </p>

            <button
              onClick={handleRestart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                borderRadius: '999px',
                background: 'rgba(255, 79, 129, 0.2)',
                border: '1px solid rgba(255, 79, 129, 0.4)',
                color: '#FFF7FA',
                fontSize: '0.82rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={14} />
              <span>REPLAY QUIZ</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
