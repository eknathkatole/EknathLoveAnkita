import React from 'react';
import { Phone, Video, MoreVertical, CheckCheck } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function AuthenticChat({ date, messages = [] }) {
  if (!messages || messages.length === 0) return null;

  const handleMessageClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    triggerHeartBurst(x, y, { count: 5, symbols: ['❤️', '💕', '✨', '🌸'] });
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '540px',
      margin: '20px auto 10px auto',
      borderRadius: '22px',
      overflow: 'hidden',
      background: '#140916',
      border: '1.5px solid rgba(255, 79, 129, 0.35)',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 25px rgba(255, 79, 129, 0.15)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 1. WHATSAPP CHAT HEADER */}
      <div style={{
        padding: '12px 16px',
        background: 'linear-gradient(90deg, #2A1022 0%, #3D142E 100%)',
        borderBottom: '1px solid rgba(255, 79, 129, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#FFF7FA',
        userSelect: 'none'
      }}>
        {/* Left: Avatar + Name + Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF4F81 0%, #C9184A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            boxShadow: '0 0 10px rgba(255, 79, 129, 0.4)',
            border: '1px solid rgba(255, 179, 198, 0.5)'
          }}>
            🌸
          </div>
          <div>
            <div style={{ fontSize: '0.94rem', fontWeight: '600', color: '#FFE5EC', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Ankita</span>
              <span style={{ fontSize: '0.8rem' }}>❤️</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#81C784', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#81C784' }} />
              <span>online</span>
            </div>
          </div>
        </div>

        {/* Right: Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#FFB3C6' }}>
          <Video size={18} style={{ opacity: 0.85 }} />
          <Phone size={17} style={{ opacity: 0.85 }} />
          <MoreVertical size={18} style={{ opacity: 0.85 }} />
        </div>
      </div>

      {/* 2. CHAT WALLPAPER & AUTHENTIC MESSAGE BUBBLES */}
      <div style={{
        padding: '20px 16px',
        background: 'radial-gradient(circle at center, rgba(40, 16, 32, 0.95) 0%, rgba(18, 8, 18, 0.98) 100%)',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255, 79, 129, 0.05) 0%, transparent 80%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff4f81' fill-opacity='0.035' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")
        `,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {/* Centered WhatsApp Date Pill */}
        {date && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <span style={{
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(54, 20, 42, 0.85)',
              color: '#FFB3C6',
              border: '1px solid rgba(255, 79, 129, 0.25)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              {date}
            </span>
          </div>
        )}

        {/* EXACT CONVERSATION — RENDERED ONCE ONLY */}
        {messages.map((msg, idx) => {
          const isMe = msg.sender === 'him' || msg.sender === 'me';
          return (
            <div
              key={idx}
              onClick={handleMessageClick}
              style={{
                alignSelf: isMe ? 'flex-end' : 'flex-start',
                maxWidth: '84%',
                padding: '9px 14px 5px 14px',
                borderRadius: isMe ? '16px 16px 3px 16px' : '16px 16px 16px 3px',
                background: isMe
                  ? 'linear-gradient(135deg, #A8204E 0%, #6E1235 100%)'
                  : 'rgba(48, 22, 40, 0.95)',
                border: `1px solid ${isMe ? 'rgba(255, 179, 198, 0.35)' : 'rgba(255, 79, 129, 0.2)'}`,
                color: '#FFF7FA',
                fontSize: '0.94rem',
                lineHeight: '1.45',
                whiteSpace: 'pre-line',
                boxShadow: isMe ? '0 4px 15px rgba(201, 24, 74, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                position: 'relative',
                animation: 'popIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div>{msg.text}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '4px',
                marginTop: '3px',
                fontSize: '0.65rem',
                color: isMe ? '#FFE5EC' : '#D8B8C4',
                opacity: 0.8
              }}>
                <span>{msg.time || '10:20 AM'}</span>
                {isMe && <CheckCheck size={13} color="#4FC3F7" style={{ marginLeft: '2px' }} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
