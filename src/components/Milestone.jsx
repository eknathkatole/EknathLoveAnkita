import React from 'react';
import { PhoneMissed, Heart, Sparkles } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';
import AuthenticChat from './AuthenticChat';

export default function Milestone({ milestone, index }) {
  const handleMilestoneClick = (e) => {
    // If clicked on a chat bubble or button, let it handle
    if (e.target.closest('button, svg, [data-chat-bubble]')) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + 30;
    triggerHeartBurst(x, y, { count: 4, symbols: ['❤️', '💕', '✨', '🌸'] });
  };

  return (
    <article
      id={`milestone-${milestone.id}`}
      className="milestone-scene"
      onClick={handleMilestoneClick}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '820px',
        margin: '0 auto 90px auto',
        padding: '36px 28px',
        background: 'rgba(36, 16, 27, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 79, 129, 0.22)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.08)',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
    >
      {/* 1. Date Header & Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px',
        borderBottom: '1px solid rgba(255, 79, 129, 0.15)',
        paddingBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.85rem',
            fontWeight: '600',
            color: '#FFE5EC',
            letterSpacing: '0.04em',
            textShadow: '0 0 15px rgba(255, 79, 129, 0.3)'
          }}>
            {milestone.date}
          </span>
          <span style={{
            fontSize: '0.75rem',
            color: '#D8B8C4',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            #{milestone.index}
          </span>
        </div>

        <span style={{
          fontSize: '0.72rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '999px',
          background: 'rgba(255, 79, 129, 0.15)',
          color: '#FFB3C6',
          border: '1px solid rgba(255, 79, 129, 0.35)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Heart size={10} color="#FF4F81" fill="#FF4F81" />
          {milestone.badge}
        </span>
      </div>

      {/* 2. Chapter Title */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
        fontWeight: '400',
        color: '#FFF7FA',
        lineHeight: '1.25',
        marginBottom: '16px'
      }}>
        {milestone.title}
      </h3>

      {/* 3. Short Cinematic Narration (Distinct from Chat) */}
      {milestone.narration && (
        <p style={{
          color: '#D8B8C4',
          fontSize: '0.94rem',
          lineHeight: '1.6',
          marginBottom: '18px'
        }}>
          {milestone.narration}
        </p>
      )}

      {/* 4. RENDER CONVERSATION OR SCENE CONTENT (EXACTLY ONCE) */}

      {/* A. 14 March Missed Call */}
      {milestone.type === 'missed-call' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '16px 0' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 20px',
            borderRadius: '16px',
            background: 'rgba(90, 22, 53, 0.35)',
            border: '1px solid rgba(255, 79, 129, 0.3)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 79, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <PhoneMissed size={20} color="#FFB3C6" />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', color: '#FFF7FA', fontWeight: '500' }}>
                {milestone.callInfo.caller}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#FFB3C6' }}>
                {milestone.callInfo.status} • {milestone.callInfo.duration}
              </div>
            </div>
          </div>

          {milestone.prologue?.map((line, idx) => (
            <p key={idx} style={{ fontStyle: 'italic', color: '#D8B8C4', fontSize: '0.95rem' }}>
              {line}
            </p>
          ))}
          {milestone.content?.map((line, idx) => (
            <p key={idx} style={{ color: '#FFF7FA', fontSize: '1rem', lineHeight: '1.6' }}>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* B. 15 March Transition */}
      {milestone.type === 'transition' && (
        <div style={{ margin: '16px 0' }}>
          {milestone.content?.map((line, idx) => (
            <p key={idx} style={{ color: '#FFF7FA', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {line}
            </p>
          ))}
          {milestone.subtext && (
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', marginTop: '10px', fontSize: '0.92rem' }}>
              {milestone.subtext} ✨
            </p>
          )}
        </div>
      )}

      {/* C. WhatsApp Chat Conversations (Rendered ONCE) */}
      {milestone.type === 'chat-scene' && (
        <AuthenticChat
          date={milestone.date}
          messages={milestone.messages || []}
        />
      )}

      {/* D. Quote Spotlight */}
      {milestone.type === 'quote-spotlight' && (
        <AuthenticChat
          date={milestone.date}
          messages={[{ sender: milestone.sender || 'him', text: milestone.quote, time: '10:45 PM' }]}
        />
      )}

      {/* E. Single Authentic Message / Quote */}
      {milestone.type === 'minimal-emphasis' && (
        <AuthenticChat
          date={milestone.date}
          messages={[{ sender: milestone.sender || 'him', text: milestone.quote, time: '11:15 PM' }]}
        />
      )}

      {/* F. 17 April Flower Moment */}
      {milestone.type === 'flower-scene' && (
        <AuthenticChat
          date={milestone.date}
          messages={[{ sender: 'him', text: milestone.quote, time: '09:30 AM' }]}
        />
      )}

      {/* G. 30 April 101% Trust Stat Highlight */}
      {milestone.type === 'stat-highlight' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          padding: '28px 20px',
          margin: '16px 0',
          borderRadius: '20px',
          background: 'radial-gradient(circle, rgba(255, 79, 129, 0.22) 0%, transparent 70%)',
          border: '1px solid rgba(255, 79, 129, 0.35)'
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.2rem, 8.5vw, 4.8rem)',
            fontWeight: '600',
            color: '#FFE5EC',
            lineHeight: '1',
            textShadow: '0 0 30px rgba(255, 79, 129, 0.6)'
          }}>
            {milestone.stat}
          </div>
          <div style={{
            fontSize: '1.05rem',
            color: '#FFF7FA',
            fontWeight: '500',
            letterSpacing: '0.05em'
          }}>
            {milestone.headline} 🤍
          </div>
        </div>
      )}

      {/* H. 27 May Marathi Confession */}
      {milestone.type === 'marathi-confession' && (
        <div style={{ margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AuthenticChat
            date={milestone.date}
            messages={milestone.messages || []}
          />

          <div style={{
            padding: '24px 20px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.85) 0%, rgba(36, 16, 27, 0.95) 100%)',
            border: '1px solid rgba(255, 179, 198, 0.5)',
            boxShadow: '0 0 35px rgba(255, 79, 129, 0.3)',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.25rem, 3.5vw, 1.65rem)',
              color: '#FFE5EC',
              lineHeight: '1.7',
              whiteSpace: 'pre-line',
              fontWeight: '500'
            }}>
              {milestone.marathiText}
            </p>
          </div>
        </div>
      )}

      {/* I. 23 June Grand Reveal */}
      {milestone.type === 'grand-reveal' && (
        <AuthenticChat
          date={milestone.date}
          messages={[
            { sender: 'her', text: milestone.herMessage, time: '08:15 AM' },
            { sender: 'him', text: milestone.myReply, time: '08:22 AM' }
          ]}
        />
      )}

      {/* J. 3 July Video Call Milestone */}
      {milestone.type === 'video-milestone-scene' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '16px 0' }}>
          <AuthenticChat
            date={milestone.date}
            messages={milestone.messages || []}
          />
          {milestone.durationNote && (
            <div style={{
              padding: '12px 18px',
              borderRadius: '12px',
              background: 'rgba(255, 179, 198, 0.12)',
              border: '1px solid rgba(255, 179, 198, 0.3)',
              fontSize: '0.9rem',
              color: '#FFB3C6',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              {milestone.durationNote}
            </div>
          )}
        </div>
      )}

      {/* K. 8/9 July Crisis Scene */}
      {milestone.type === 'crisis-scene' && (
        <AuthenticChat
          date={milestone.date}
          messages={[{ sender: 'her', text: milestone.quote, time: '02:14 AM' }]}
        />
      )}

      {/* L. August 2026: After The Storm (Pure Cinematic Statement) */}
      {milestone.type === 'cinematic-statement' && (
        <div style={{
          padding: '32px 24px',
          margin: '16px 0',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.4) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.35)',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 79, 129, 0.15)'
        }}>
          <div style={{
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FFB3C6',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Sparkles size={13} color="#FF4F81" />
            <span>AFTER THE STORM</span>
            <Sparkles size={13} color="#FF4F81" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {milestone.lines?.map((line, idx) => (
              <p key={idx} style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: idx === 0 ? '1.5rem' : '1.35rem',
                color: idx === 0 ? '#FFE5EC' : '#FFF7FA',
                fontWeight: idx === 0 ? '600' : '400',
                lineHeight: '1.5'
              }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* M. Quote Sequence */}
      {milestone.type === 'quote-sequence' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
          {milestone.lines?.map((line, idx) => (
            <p key={idx} style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.25rem',
              color: '#FFE5EC',
              fontStyle: 'italic'
            }}>
              "{line}"
            </p>
          ))}
        </div>
      )}

      {/* 5. Reflection Footer */}
      {milestone.reflection && (
        <div style={{
          marginTop: '18px',
          paddingTop: '14px',
          borderTop: '1px solid rgba(255, 79, 129, 0.15)',
          fontSize: '0.88rem',
          color: '#D8B8C4',
          fontStyle: 'italic',
          lineHeight: '1.6'
        }}>
          {milestone.reflection}
        </div>
      )}
    </article>
  );
}
