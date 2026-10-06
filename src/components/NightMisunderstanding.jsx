import React, { useState } from 'react';
import { Moon, Sun, Lock, Unlock, Clock, Heart, ShieldAlert, ArrowDown } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function NightMisunderstanding() {
  const [phase, setPhase] = useState('night'); // 'night', 'transition', 'morning'

  const handleHeartClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    triggerHeartBurst(x, y, { count: 10, symbols: ['🥺', '💔', '❤️', '🫂', '💌', '✨'] });
  };

  return (
    <section id="night1145" className="cinematic-section" style={{ minHeight: '100vh', position: 'relative', padding: '90px 16px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', width: '100%' }}>
        
        {/* Editorial Section Tag */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span className="section-tag">
            <Moon size={12} color="#FF4F81" />
            Real Memory Archive • 11:45 PM
            <Moon size={12} color="#FF4F81" />
          </span>
          <h2 className="section-title-editorial" style={{ fontSize: 'clamp(2.1rem, 5vw, 3.4rem)', lineHeight: '1.2' }}>
            11:45 PM — The Night She Thought I Was Ignoring Her
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.22rem',
            color: '#FFE5EC',
            fontStyle: 'italic',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            "Sometimes it isn't distance that creates misunderstandings... sometimes, it's just one unanswered message."
          </p>
        </div>

        {/* Phase Toggle Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setPhase('night')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: phase === 'night' ? 'rgba(255, 79, 129, 0.25)' : 'rgba(36, 16, 27, 0.6)',
              border: phase === 'night' ? '1px solid #FF4F81' : '1px solid rgba(255, 179, 198, 0.2)',
              color: phase === 'night' ? '#FFF7FA' : '#D8B8C4',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <Moon size={14} color="#FFB3C6" />
            <span>11:45 PM — THE SILENCE</span>
          </button>

          <button
            onClick={() => setPhase('morning')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: phase === 'morning' ? 'rgba(255, 79, 129, 0.25)' : 'rgba(36, 16, 27, 0.6)',
              border: phase === 'morning' ? '1px solid #FF4F81' : '1px solid rgba(255, 179, 198, 0.2)',
              color: phase === 'morning' ? '#FFF7FA' : '#D8B8C4',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <Sun size={14} color="#FFB3C6" />
            <span>MORNING — THE EXPLANATION</span>
          </button>
        </div>

        {/* Realistic WhatsApp Chat Card */}
        <div style={{
          borderRadius: '26px',
          overflow: 'hidden',
          background: '#0B141A',
          border: '1.5px solid rgba(255, 179, 198, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(255, 79, 129, 0.18)',
          position: 'relative'
        }}>
          
          {/* WhatsApp Header Bar */}
          <div style={{
            padding: '14px 20px',
            background: '#1F2C34',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF4F81 0%, #9E1030 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF7FA',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1.5px solid rgba(255, 179, 198, 0.6)'
              }}>
                A
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#E9EDEF', fontSize: '0.98rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                  Ankita 🤍
                </div>
                <div style={{ color: '#8696A0', fontSize: '0.74rem' }}>
                  {phase === 'night' ? 'last seen yesterday at 11:45 PM' : 'online • 7:15 AM'}
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.06)',
              fontSize: '0.72rem',
              color: '#8696A0'
            }}>
              <Clock size={13} color="#FFB3C6" />
              <span>{phase === 'night' ? '11:45 PM' : 'Morning'}</span>
            </div>
          </div>

          {/* Chat Canvas with WhatsApp Wallpaper Doodles Pattern */}
          <div style={{
            padding: '24px 18px',
            minHeight: '480px',
            backgroundColor: '#0C1317',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(36, 16, 27, 0.4) 0%, rgba(11, 20, 26, 0.95) 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>

            {/* PART 1: 11:45 PM Banner */}
            <div style={{
              alignSelf: 'center',
              padding: '6px 16px',
              borderRadius: '8px',
              background: '#182229',
              color: '#8696A0',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginBottom: '6px'
            }}>
              YESTERDAY • 11:45 PM
            </div>

            {/* Mobile Taken Away Status Notification */}
            <div style={{
              alignSelf: 'center',
              maxWidth: '440px',
              width: '100%',
              padding: '12px 18px',
              borderRadius: '12px',
              background: 'rgba(90, 22, 53, 0.5)',
              border: '1px solid rgba(255, 79, 129, 0.35)',
              color: '#FFE5EC',
              textAlign: 'center',
              fontSize: '0.84rem',
              lineHeight: '1.45',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontWeight: '600', color: '#FFB3C6', marginBottom: '4px' }}>
                <Lock size={14} color="#FF4F81" />
                <span>Mobile taken away</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#D8B8C4', fontStyle: 'italic' }}>
                Not because I wanted to disappear.<br />
                I simply couldn't reply.
              </div>
            </div>

            {/* HER REAL MESSAGES (Left-Aligned, Dark WhatsApp Bubble) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '82%', alignSelf: 'flex-start' }}>
              
              {/* Message 1 */}
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                position: 'relative',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Tum itne rude kaise ho skte ho yar good night bhi nhi bola tumne 🥺😔
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  11:46 PM
                </div>
              </div>

              {/* Message 2 */}
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                I miss you so much 😢😔
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  11:48 PM
                </div>
              </div>

              {/* Message 3 */}
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Achha kr rhe ho aise hi Krna ab
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  11:52 PM
                </div>
              </div>

              {/* Message 4 */}
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Maine photo nhi bheji to tum mujhse bat nhi karoge
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  12:05 AM
                </div>
              </div>

              {/* Message 5 */}
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                I miss you na jaan 🥺
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  12:18 AM
                </div>
              </div>

              {/* Message 6 */}
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Kyu kr rhe ho tum aisa 😔
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  12:30 AM
                </div>
              </div>
            </div>

            {/* TRANSITION DIVIDER: 11:45 PM -> Morning */}
            <div style={{
              margin: '24px 0',
              padding: '16px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(36, 16, 27, 0.85) 0%, rgba(22, 10, 18, 0.95) 100%)',
              border: '1px solid rgba(255, 179, 198, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.78rem', color: '#FFB3C6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Clock size={14} color="#FF4F81" />
                <span>While she was waiting for a reply…</span>
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                color: '#FFF7FA',
                fontStyle: 'italic',
                marginBottom: '8px'
              }}>
                11:45 PM → The Long Silent Night → Morning
              </div>
              <p style={{ fontSize: '0.82rem', color: '#D8B8C4', maxWidth: '480px', margin: '0 auto', lineHeight: '1.5' }}>
                Her messages were still waiting.<br />
                He was awake all night in the locked room, thinking only of her, unable to send a single word.
              </p>
            </div>

            {/* MORNING EXPLANATION (Right-Aligned, Blue/Green WhatsApp Bubble) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '85%', alignSelf: 'flex-end' }}>
              
              <div style={{
                alignSelf: 'center',
                padding: '4px 14px',
                borderRadius: '6px',
                background: '#182229',
                color: '#8696A0',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                marginBottom: '4px'
              }}>
                TODAY • 7:15 AM
              </div>

              {/* Message 1 (Eknath Explanation) */}
              <div style={{
                background: '#005C4B',
                color: '#E9EDEF',
                padding: '12px 16px',
                borderRadius: '14px 14px 4px 14px',
                fontSize: '0.92rem',
                lineHeight: '1.55',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                kal mummy ne mera mobile le liya tha kyuki unhone mujhe 11:45 ke around mobile chalte aur tumse chat karte dekh liya tha... unhone pehle hi 10 baje sone ko bola tha, isliye mobile le liya aur mujhe jis room me mai sota hu usme lock kr diya. Mummy dusre room me so gayi thi aur mere paas mobile hi nhi tha ki mai tumhe kuch bata pata ya reply kar pata 🥺
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                  <span>7:15 AM</span>
                  <span style={{ color: '#53BDEB' }}>✓✓</span>
                </div>
              </div>

              {/* Message 2 (Eknath awake all night) */}
              <div style={{
                background: '#005C4B',
                color: '#E9EDEF',
                padding: '12px 16px',
                borderRadius: '14px 14px 4px 14px',
                fontSize: '0.92rem',
                lineHeight: '1.55',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                Me puri raat jaag rha tha bas tumare bare me hi soch rha tha 🥺
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                  <span>7:16 AM</span>
                  <span style={{ color: '#53BDEB' }}>✓✓</span>
                </div>
              </div>

              {/* Message 3 (Eknath Love Reassurance) */}
              <div style={{
                background: '#005C4B',
                color: '#E9EDEF',
                padding: '12px 16px',
                borderRadius: '14px 14px 4px 14px',
                fontSize: '0.92rem',
                lineHeight: '1.55',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                tum itna care krti ho meri, itna sochti ho mere liye... ❤️<br /><br />
                bas ek baat kabhi mt sochna ki mai tumhe miss nhi krta ya tumse baat nhi krna chahta... tum hoti ho to baat krne ka man hota hi hai ❤️<br /><br />
                kal mai kuch kr nhi skta tha jaan... warna tumhe aise wait nhi krwata 🥺<br />
                I'm sorry jaan 🥺❤️<br />
                aur I love you... bhot sara ❤️🫂
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                  <span>7:18 AM</span>
                  <span style={{ color: '#53BDEB' }}>✓✓</span>
                </div>
              </div>
            </div>

            {/* HER REAL RESPONSE (Left-Aligned, Ankita) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '82%', alignSelf: 'flex-start', marginTop: '10px' }}>
              
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Ye tum mujhe tb bta skte the na jb online the whatsapp me<br />
                mai wait kr rhi thi ki ki kb msg karoge lekin online hote hue bhi msg nhi kiye<br />
                Mujhe lga to janbujhkar nhi kr maine photo nhi send ki isliye
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  7:22 AM
                </div>
              </div>

              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Pta nhi kya kya soch rhi thi mai puri raat
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  7:23 AM
                </div>
              </div>
            </div>

            {/* HIS REPLY & HER CLOSING */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '82%', alignSelf: 'flex-end', marginTop: '6px' }}>
              <div style={{
                background: '#005C4B',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 4px 14px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                Mummy dekha rahi hogi whatsapp tab<br />
                Kya kya soch rahi thi
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                  <span>7:25 AM</span>
                  <span style={{ color: '#53BDEB' }}>✓✓</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '82%', alignSelf: 'flex-start', marginTop: '6px' }}>
              <div style={{
                background: '#202C33',
                color: '#E9EDEF',
                padding: '10px 14px',
                borderRadius: '14px 14px 14px 4px',
                fontSize: '0.92rem',
                lineHeight: '1.45',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                Chhodo ho gya
                <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#8696A0', marginTop: '4px' }}>
                  7:26 AM
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Cinematic Reflection Card (Outside the Chat) */}
        <div style={{
          marginTop: '36px',
          padding: '32px 28px',
          borderRadius: '24px',
          background: 'radial-gradient(ellipse at center, rgba(90, 22, 53, 0.6) 0%, rgba(22, 10, 18, 0.95) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.35)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 25px rgba(255, 79, 129, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.38rem',
            color: '#FFF7FA',
            fontStyle: 'italic',
            lineHeight: '1.6',
            marginBottom: '18px'
          }}>
            “She wasn't angry because of a missed message.<br />
            She was hurt because she thought the silence meant I didn't want to talk to her.”
          </p>

          <div style={{ width: '40px', height: '1px', background: 'rgba(255, 79, 129, 0.4)', margin: '0 auto 18px auto' }} />

          <p style={{
            fontSize: '0.92rem',
            color: '#FFE5EC',
            lineHeight: '1.6',
            maxWidth: '520px',
            margin: '0 auto 20px auto'
          }}>
            <span style={{ color: '#FFB3C6', fontWeight: '600' }}>But the truth was simpler…</span><br />
            His phone was gone. Her messages were waiting.<br />
            And both of them spent the night thinking about each other.
          </p>

          <div style={{
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF4F81',
            fontWeight: '600'
          }}>
            11:45 PM — A misunderstanding that started with silence, and ended with an explanation. 🤍
          </div>
        </div>

      </div>
    </section>
  );
}
