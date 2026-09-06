import React, { useState } from 'react';
import { Heart, Sparkles, Lock, MapPin, Music, Compass, ArrowRight, Check } from 'lucide-react';
import { triggerHeartBurst } from '../utils/loveEffects';

export default function FutureChapter() {
  const [openedMeeting, setOpenedMeeting] = useState(false);
  const [openedProposal, setOpenedProposal] = useState(false);
  const [isDancing, setIsDancing] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showDestinations, setShowDestinations] = useState(false);
  const [kissAttempted, setKissAttempted] = useState(false);

  const destinations = [
    { id: 'mountains', label: 'Misty Mountains 🏔️', desc: 'Cold winds, warm coffee, and holding hands under foggy pines.' },
    { id: 'beach', label: 'Sunset Ocean Beach 🌊', desc: 'Walking barefoot on wet sand while the sky turns pink and gold.' },
    { id: 'city', label: 'Starlit City Walk 🌃', desc: 'Quiet midnight streets, glowing lamps, and laughing at small things.' },
    { id: 'hills', label: 'A Cozy Hillside Cottage 🏡', desc: 'Tucked away from the whole world with just each other.' }
  ];

  const handleMeetingClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerHeartBurst(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top, { count: 12 });
    setOpenedMeeting(true);
  };

  const handleProposalClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerHeartBurst(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top, { count: 14, symbols: ['💍', '✨', '💖', '❤️', '🌸'] });
    setOpenedProposal(true);
  };

  const handleDanceToggle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerHeartBurst(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top, { count: 8, symbols: ['💃', '🕺', '💕', '✨', '🎵'] });
    setIsDancing(!isDancing);
  };

  const handleDestinationSelect = (dest, e) => {
    setSelectedDestination(dest);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerHeartBurst(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top, { count: 10, symbols: ['✈️', '💖', '🌸', '✨'] });
  };

  const handleKissClick = (e) => {
    setKissAttempted(true);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerHeartBurst(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top, { count: 10, symbols: ['🔒', '💋', '❤️', '🥺', '✨'] });
  };

  return (
    <section id="future" className="cinematic-section" style={{ minHeight: '100vh', width: '100%', padding: '90px 20px' }}>
      {/* Romantic Chapter Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', zIndex: 2 }}>
        <span className="section-tag">
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
          OUR UNWRITTEN TOMORROW
          <Heart size={12} color="#FF4F81" fill="#FF4F81" />
        </span>
        <h2 className="section-title-editorial">Where Our Forever Begins</h2>
        <p style={{ color: '#D8B8C4', maxWidth: '520px', margin: '0 auto', fontSize: '1.02rem', lineHeight: '1.6' }}>
          Not every memory is behind us. <br />
          <span style={{ color: '#FFB3C6', fontStyle: 'italic' }}>The sweetest chapters of our story are still waiting to be lived with you.</span>
        </p>

        {/* Clear Distinction Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: '20px',
          padding: '6px 16px',
          borderRadius: '999px',
          background: 'rgba(90, 22, 53, 0.4)',
          border: '1px solid rgba(255, 79, 129, 0.3)',
          fontSize: '0.78rem',
          color: '#FFE5EC'
        }}>
          <span>PAST: What We Built 🤍</span>
          <span style={{ color: '#FF4F81' }}>•</span>
          <span style={{ color: '#FFB3C6', fontWeight: '600' }}>FUTURE: Our Promises ✨</span>
        </div>
      </div>

      {/* Grid of Interactive Future Memory Cards */}
      <div style={{
        width: '100%',
        maxWidth: '1050px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '28px',
        zIndex: 2
      }}>

        {/* 1. 🌸 OUR FIRST MEETING */}
        <div style={{
          padding: '30px 24px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.5) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌸</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FFE5EC', marginBottom: '8px' }}>
              Our First Meeting
            </h3>
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '14px' }}>
              "The day the distance finally disappears."
            </p>
            <p style={{ color: '#FFF7FA', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              No screen.<br />
              No typing.<br />
              No waiting for a call.<br />
              Just you and me, finally standing in front of each other.
            </p>
          </div>

          <div>
            {!openedMeeting ? (
              <button
                onClick={handleMeetingClick}
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(255, 79, 129, 0.5) 0%, rgba(201, 24, 74, 0.6) 100%)',
                  border: '1px solid rgba(255, 179, 198, 0.5)',
                  color: '#FFF7FA',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(255, 79, 129, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                OPEN THIS MEMORY ✨
              </button>
            ) : (
              <div style={{
                padding: '14px',
                borderRadius: '16px',
                background: 'rgba(255, 79, 129, 0.18)',
                border: '1px solid rgba(255, 179, 198, 0.45)',
                textAlign: 'center',
                animation: 'popIn 0.4s ease'
              }}>
                <div style={{ fontSize: '1.25rem', fontFamily: "'Cormorant Garamond', serif", color: '#FFE5EC', fontWeight: '600' }}>
                  DISTANCE → 0 KM
                </div>
                <div style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: '#FFB3C6', textTransform: 'uppercase', marginTop: '4px' }}>
                  STATUS: NOT YET LIVED 🤍
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. 💍 THE PROPOSAL */}
        <div style={{
          padding: '30px 24px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(70, 18, 44, 0.6) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💍</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FFE5EC', marginBottom: '8px' }}>
              The Proposal
            </h3>
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '14px' }}>
              "One day, I'll ask you properly."
            </p>
            <p style={{ color: '#FFF7FA', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Not a completed memory.<br />
              A promise written in every beat of my heart.
            </p>
          </div>

          <div>
            {!openedProposal ? (
              <button
                onClick={handleProposalClick}
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(255, 79, 129, 0.5) 0%, rgba(201, 24, 74, 0.6) 100%)',
                  border: '1px solid rgba(255, 179, 198, 0.5)',
                  color: '#FFF7FA',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(255, 79, 129, 0.3)'
                }}
              >
                TOUCH THE RING 💍
              </button>
            ) : (
              <div style={{
                padding: '14px',
                borderRadius: '16px',
                background: 'rgba(255, 79, 129, 0.18)',
                border: '1px solid rgba(255, 179, 198, 0.45)',
                textAlign: 'center',
                animation: 'popIn 0.4s ease'
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.15rem',
                  color: '#FFE5EC',
                  fontStyle: 'italic',
                  lineHeight: '1.5'
                }}>
                  "This chapter hasn't happened yet... but I already know I want to write it with you. 💍✨"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 3. 💃 OUR FIRST DANCE */}
        <div style={{
          padding: '30px 24px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.5) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💃</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FFE5EC', marginBottom: '8px' }}>
              Our First Dance
            </h3>
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '14px' }}>
              "No audience. No perfect steps. Just us."
            </p>
            <p style={{ color: '#FFF7FA', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Soft music in the background, your head resting gently against my chest, swaying under the starlight.
            </p>
          </div>

          <div>
            <div style={{
              padding: '12px',
              borderRadius: '16px',
              background: 'rgba(255, 79, 129, 0.12)',
              border: '1px solid rgba(255, 179, 198, 0.35)',
              textAlign: 'center',
              marginBottom: '10px'
            }}>
              <div style={{ fontSize: '0.74rem', letterSpacing: '0.16em', color: '#FFB3C6', textTransform: 'uppercase' }}>
                STATUS: WAITING FOR OUR SONG 🎵
              </div>
            </div>

            <button
              onClick={handleDanceToggle}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '999px',
                background: 'rgba(255, 79, 129, 0.25)',
                border: '1px solid rgba(255, 179, 198, 0.4)',
                color: '#FFF7FA',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              {isDancing ? '✨ SWAYING TOGETHER...' : 'START DANCE PREVIEW 💃'}
            </button>
          </div>
        </div>

        {/* 4. 🎤 SINGING FOR YOU */}
        <div style={{
          padding: '30px 24px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(70, 18, 44, 0.6) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎤</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FFE5EC', marginBottom: '8px' }}>
              Singing For You
            </h3>
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '14px' }}>
              "One day, I'll sing something just for you."
            </p>
            <p style={{ color: '#FFF7FA', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Even if my voice shakes, even if it's off-key... every line will be solely meant for your ears.
            </p>
          </div>

          <div style={{
            padding: '14px',
            borderRadius: '16px',
            background: 'rgba(255, 79, 129, 0.18)',
            border: '1px solid rgba(255, 179, 198, 0.45)',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.25rem',
              color: '#FFE5EC',
              fontWeight: '600'
            }}>
              <Music size={16} color="#FF4F81" />
              <span>♪ OUR SONG — COMING SOON</span>
            </div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: '#D8B8C4', textTransform: 'uppercase', marginTop: '4px' }}>
              Reserved for our real moment 🌸
            </div>
          </div>
        </div>

        {/* 5. ✈️ OUR FIRST TRIP */}
        <div style={{
          padding: '30px 24px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.5) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✈️</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FFE5EC', marginBottom: '8px' }}>
              Our First Trip
            </h3>
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '14px' }}>
              "Somewhere neither of us has been."
            </p>

            {/* Route Map Graphic */}
            <div style={{
              padding: '12px',
              borderRadius: '14px',
              background: 'rgba(22, 10, 18, 0.7)',
              border: '1px solid rgba(255, 79, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#FFE5EC', fontWeight: '500' }}>YOU 📍</span>
              <span style={{ color: '#FF4F81', fontSize: '0.85rem' }}>──────✈──────</span>
              <span style={{ fontSize: '0.8rem', color: '#FFB3C6', fontWeight: '600' }}>
                {selectedDestination ? selectedDestination.label : '??? 📍'}
              </span>
            </div>
          </div>

          <div>
            {!showDestinations ? (
              <button
                onClick={() => setShowDestinations(true)}
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(255, 79, 129, 0.5) 0%, rgba(201, 24, 74, 0.6) 100%)',
                  border: '1px solid rgba(255, 179, 198, 0.5)',
                  color: '#FFF7FA',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(255, 79, 129, 0.3)'
                }}
              >
                {selectedDestination ? 'CHANGE DESTINATION' : 'CHOOSE OUR DESTINATION 🗺️'}
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fadeIn 0.3s ease' }}>
                {destinations.map(d => (
                  <button
                    key={d.id}
                    onClick={(e) => {
                      handleDestinationSelect(d, e);
                      setShowDestinations(false);
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '12px',
                      background: selectedDestination?.id === d.id ? 'rgba(255, 79, 129, 0.35)' : 'rgba(48, 20, 36, 0.7)',
                      border: `1px solid ${selectedDestination?.id === d.id ? 'rgba(255, 179, 198, 0.6)' : 'rgba(255, 79, 129, 0.2)'}`,
                      color: '#FFF7FA',
                      fontSize: '0.82rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{d.label}</span>
                    {selectedDestination?.id === d.id && <Check size={14} color="#81C784" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 6. 💋 OUR FIRST KISS */}
        <div style={{
          padding: '30px 24px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(70, 18, 44, 0.6) 0%, rgba(36, 16, 27, 0.85) 100%)',
          border: '1.5px solid rgba(255, 179, 198, 0.4)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 79, 129, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💋</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: '#FFE5EC', marginBottom: '8px' }}>
              The Kiss We're Still Waiting For
            </h3>
            <p style={{ color: '#FFB3C6', fontStyle: 'italic', fontSize: '0.98rem', marginBottom: '14px' }}>
              "Some memories can't be replayed yet. Because they haven't happened."
            </p>
            <p style={{ color: '#FFF7FA', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Held safe in the future, reserved for the exact second our eyes meet and all the waiting fades away.
            </p>
          </div>

          <div>
            <button
              onClick={handleKissClick}
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '16px',
                background: 'rgba(36, 16, 27, 0.9)',
                border: '1.5px dashed rgba(255, 79, 129, 0.45)',
                color: '#FFE5EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <Lock size={16} color="#FF4F81" />
              <span style={{ fontSize: '0.82rem', letterSpacing: '0.15em', fontWeight: '600' }}>
                {kissAttempted ? 'LOCKED TILL WE MEET 🔒❤️' : 'LOCKED 🔒 • TAP TO REVEAL'}
              </span>
            </button>
            {kissAttempted && (
              <p style={{ fontSize: '0.74rem', color: '#D8B8C4', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
                Will unlock when the moment becomes real 🤍
              </p>
            )}
          </div>
        </div>

      </div>

      {/* 7. TO BE CONTINUED... PROMISES WAITING TO BECOME MEMORIES */}
      <div style={{
        width: '100%',
        maxWidth: '780px',
        margin: '60px auto 0 auto',
        padding: '38px 28px',
        borderRadius: '26px',
        background: 'linear-gradient(135deg, rgba(90, 22, 53, 0.6) 0%, rgba(36, 16, 27, 0.92) 100%)',
        border: '1.5px solid rgba(255, 179, 198, 0.45)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(255, 79, 129, 0.25)',
        textAlign: 'center',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '0.78rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#FFB3C6',
          marginBottom: '16px'
        }}>
          <Sparkles size={14} color="#FF4F81" />
          <span>TO BE CONTINUED...</span>
          <Sparkles size={14} color="#FF4F81" />
        </div>

        {/* Roadmap Flow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {['FIRST MEETING', '→', 'PROPOSAL', '→', 'FIRST DANCE', '→', 'FIRST TRIP', '→', 'FIRST KISS', '→', '∞'].map((step, idx) => (
            <span
              key={idx}
              style={{
                fontSize: step === '→' || step === '∞' ? '1rem' : '0.76rem',
                color: step === '→' ? '#FF4F81' : step === '∞' ? '#FFE5EC' : '#FFF7FA',
                fontWeight: step === '∞' ? '700' : '500',
                padding: step === '→' ? '0' : '4px 10px',
                borderRadius: '999px',
                background: step === '→' ? 'transparent' : 'rgba(255, 79, 129, 0.16)'
              }}
            >
              {step}
            </span>
          ))}
        </div>

        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.45rem',
          color: '#FFE5EC',
          fontStyle: 'italic',
          lineHeight: '1.6',
          marginBottom: '16px'
        }}>
          "These aren't just memories... they're promises waiting to become reality."
        </p>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.65rem',
          fontWeight: '600',
          color: '#FFF7FA',
          letterSpacing: '0.04em'
        }}>
          OUR STORY ISN'T FINISHED. WE'RE STILL WRITING IT. 💌
        </p>
      </div>
    </section>
  );
}
