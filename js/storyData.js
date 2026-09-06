// Story Dataset for Ankita & Eknath
// Pure relationship story with images EXCLUSIVELY used in the Quiz section
// 18 August jealousy section is COMPLETELY REMOVED per explicit instructions

const STORY_DATA = {
  opening: {
    lines: [
      "hey anku...",
      "I made something for you.",
      "But there's one rule...",
      "don't skip anything."
    ],
    preludeLines: [
      "before you see our story...",
      "let's go back to where it actually started."
    ]
  },

  // 5 Dedicated Memory Frequency Objects
  memoryFrequency: [
    {
      id: "freq-1",
      number: "01",
      title: "THE BEGINNING",
      type: "abstract-wave",
      subtitle: "a missed call in the dark",
      date: "14 MARCH 2026",
      desc: "Before a single word was ever typed, there was a silent vibration across the distance."
    },
    {
      id: "freq-2",
      number: "02",
      title: "YOU",
      type: "video",
      videoSrc: "photovid/VID_20260714_034926_982.mp4",
      caption: "some memories move.",
      desc: "A moment captured in motion."
    },
    {
      id: "freq-3",
      number: "03",
      title: "REPLAY",
      type: "typography",
      quotePart1: "somewhere between\nthen and now...",
      quotePart2: "you became a memory\nI could replay.",
      desc: "Engraved in thoughts."
    },
    {
      id: "freq-4",
      number: "04",
      title: "YOU",
      type: "video-circular",
      videoSrc: "photovid/VID_20260714_034930_276.mp4",
      caption: "this one doesn't need a caption.",
      desc: "Simply you."
    },
    {
      id: "freq-5",
      number: "05",
      title: "STILL HERE",
      type: "minimal-presence",
      lines: [
        "some things changed.",
        "some things became harder.",
        "but we're still here."
      ],
      desc: "Unbreakable bond."
    }
  ],

  // Chronological Story Chapters
  chapters: [
    // 1. 14 MARCH 2026
    {
      id: "chap-1",
      day: "14",
      month: "MARCH",
      year: "2026",
      subtitle: "the first sign",
      theme: "theme-beginning",
      badge: "The Beginning",
      title: "THE FIRST SIGN",
      type: "phone-call",
      prologue: [
        "Before the messages...",
        "before the jokes...",
        "before everything..."
      ],
      callInfo: {
        caller: "Unknown Number",
        subtext: "Call Attempt",
        status: "Missed call",
        duration: "00:00"
      },
      content: [
        "Funny...",
        "we didn't know it then.",
        "but this was the first little mark in our story."
      ],
      factualNote: "A missed call attempt occurred on 14 March — our actual first contact.",
      nextPrompt: "what happened next?"
    },

    // 2. 15 MARCH 2026
    {
      id: "chap-2",
      day: "15",
      month: "MARCH",
      year: "2026",
      subtitle: "the story moved to WhatsApp",
      theme: "theme-beginning",
      badge: "The Shift",
      title: "THE STORY MOVED",
      type: "transition",
      content: [
        "The next day...",
        "our story found its way to WhatsApp."
      ],
      transitionTo: "16 March 2026",
      nextPrompt: "step into the chat"
    },

    // 3. 16 MARCH 2026
    {
      id: "chap-3",
      day: "16",
      month: "MARCH",
      year: "2026",
      subtitle: "the first chapter",
      theme: "theme-curiosity",
      badge: "The First Chapter",
      title: "THE FIRST CHAPTER",
      type: "chat",
      narrationTop: "This is where our actual WhatsApp story begins.",
      messages: [
        { sender: "other", text: "Hey! Hello 👋", time: "10:14 AM" },
        { sender: "me", text: "Hi! Kaise ho aap?", time: "10:18 AM" },
        { sender: "other", text: "Bas badhiya, aap batao?", time: "10:20 AM" },
        { sender: "me", text: "Sab theek yahan bhi 😊", time: "10:22 AM" }
      ],
      caption: [
        "At the time...",
        "neither of us knew how much this conversation would become."
      ],
      nextPrompt: "keep going"
    },

    // 4. 19 MARCH 2026
    {
      id: "chap-4",
      day: "19",
      month: "MARCH",
      year: "2026",
      subtitle: "first cute moment",
      theme: "theme-curiosity",
      badge: "First Spark",
      title: "FIRST CUTE MOMENT",
      type: "chat",
      messages: [
        { sender: "me", text: "cute lagta hu? 😄", time: "08:42 PM" },
        { sender: "other", text: "you also look cute", time: "08:43 PM" },
        { sender: "me", text: "in my dreams 😅", time: "08:44 PM" },
        { sender: "other", text: "haha nahi sach mein! 😂", time: "08:44 PM" }
      ],
      caption: [
        "somewhere between normal conversations...",
        "we started becoming a little less normal."
      ],
      hiddenMemoryId: "mem-1",
      nextPrompt: "see what followed"
    },

    // 5. 23 MARCH 2026
    {
      id: "chap-5",
      day: "23",
      month: "MARCH",
      year: "2026",
      subtitle: "first strong compliment",
      theme: "theme-curiosity",
      badge: "First Compliment",
      title: "THE FIRST STRONG COMPLIMENT",
      type: "quote-reveal",
      quote: "Apsra lag rhi ho\nsidhi sawarg se dharti par utru hui\nvery very beautiful",
      caption: [
        "the compliments started getting dangerous."
      ],
      nextPrompt: "the instagram incident"
    },

    // 6. 28 MARCH 2026
    {
      id: "chap-6",
      day: "28",
      month: "MARCH",
      year: "2026",
      subtitle: "the hunt for an ID",
      theme: "theme-curiosity",
      badge: "Iconic Moment",
      title: "THE INSTAGRAM INCIDENT 😂",
      type: "instagram-incident",
      messages: [
        { sender: "me", text: "Chalo fir Insta pe bhi baat karte hai\nID share karo" },
        { sender: "other", text: "Its ankita5893" },
        { sender: "me", text: "Its private 😒" },
        { sender: "other", text: "To kya" },
        { sender: "me", text: "Kaya fayda id dene ka" },
        { sender: "other", text: "Tbhi to nhi de rhi thi 😂" }
      ],
      caption: [
        "we really started with this 😂",
        "Apparently, even getting the Instagram ID wasn't that easy."
      ],
      nextPrompt: "next milestone"
    },

    // 7. 9 APRIL 2026
    {
      id: "chap-7",
      day: "09",
      month: "APRIL",
      year: "2026",
      subtitle: "the names start changing",
      theme: "theme-love",
      badge: "Shift in Tone",
      title: "FIRST \"JAAN\"",
      type: "quote-minimal",
      quote: "Tu ditoyu jaan meri",
      caption: [
        "the names started changing."
      ],
      nextPrompt: "the first flower"
    },

    // 8. 17 APRIL 2026
    {
      id: "chap-8",
      day: "17",
      month: "APRIL",
      year: "2026",
      subtitle: "a beautiful flower",
      theme: "theme-love",
      badge: "Sweet Gesture",
      title: "A FLOWER",
      type: "flower-moment",
      quote: "Yeh dekha to tum yaad aa gayi 🌸\nEk beautiful flower...\nek aur beautiful insaan ke liye 🌸",
      caption: [
        "the first flower I remember giving you."
      ],
      hiddenMemoryId: "mem-2",
      nextPrompt: "playful jealousy"
    },

    // 9. 18 APRIL 2026
    {
      id: "chap-9",
      day: "18",
      month: "APRIL",
      year: "2026",
      subtitle: "planning heart attacks",
      theme: "theme-love",
      badge: "Playful",
      title: "AND THEN... JEALOUSY 😂",
      type: "chat",
      messages: [
        { sender: "me", text: "Sach me tumhari hai\nya mujhe jealous karne ki planning hai 😄" },
        { sender: "other", text: "tumhe kya lagta hai? 😜" },
        { sender: "me", text: "matlab jaan ke heart attack dene ki planning thi 😅" }
      ],
      caption: [
        "jealousy looks cute when it's between us."
      ],
      nextPrompt: "missing each other"
    },

    // 10. 19 APRIL 2026
    {
      id: "chap-10",
      day: "19",
      month: "APRIL",
      year: "2026",
      subtitle: "a new absence",
      theme: "theme-love",
      badge: "Longing",
      title: "MISS YOU",
      type: "quote-minimal",
      quote: "Miss kar rha tha tumhe",
      caption: [
        "that's when someone's absence\nstarted feeling different."
      ],
      nextPrompt: "hearing your voice"
    },

    // 11. 23 APRIL 2026
    {
      id: "chap-11",
      day: "23",
      month: "APRIL",
      year: "2026",
      subtitle: "the first voice moment",
      theme: "theme-love",
      badge: "Audio Milestone",
      title: "THE FIRST VOICE MOMENT",
      type: "voice-moment",
      narrationTop: "we had already crossed the first-call moment on 14 March...",
      content: [
        "but now...",
        "your voice became part of the story."
      ],
      audioAvailable: true,
      audioTrack: "photovid/songPelipelibar.mp3",
      nextPrompt: "wanting to meet"
    },

    // 12. 26 APRIL 2026
    {
      id: "chap-12",
      day: "26",
      month: "APRIL",
      year: "2026",
      subtitle: "waiting for one signal",
      theme: "theme-love",
      badge: "Anticipation",
      title: "WANTING TO MEET",
      type: "photo-reveal",
      quoteSequence: [
        "One boy who is waiting to meet his love",
        "Where when how should I meet you",
        "Waiting for one signal to come and meet you"
      ],
      caption: [
        "talking wasn't enough anymore.",
        "we wanted to meet."
      ],
      nextPrompt: "building trust"
    },

    // 13. 30 APRIL 2026
    {
      id: "chap-13",
      day: "30",
      month: "APRIL",
      year: "2026",
      subtitle: "one hundred and one percent",
      theme: "theme-love",
      badge: "Foundation",
      title: "TRUST",
      type: "trust-animation",
      highlightText: "You can trust me 101%",
      number: "101%",
      caption: [
        "trust was becoming part of us."
      ],
      nextPrompt: "a mysterious number"
    },

    // 14. 25 MAY 2026
    {
      id: "chap-14",
      day: "25",
      month: "MAY",
      year: "2026",
      subtitle: "then came a number",
      theme: "theme-love",
      badge: "Signature Code",
      title: "THEN CAME A NUMBER",
      type: "code-decoder",
      code: "5201314",
      question: "what do you think this means?",
      options: [
        "A random bank OTP or lucky number",
        "520 (I love you) + 1314 (For a lifetime)",
        "The date we are supposed to meet"
      ],
      correctIndex: 1,
      revealExplanation: [
        "520 = I love you (我爱你)",
        "1314 = for a lifetime (一生一世)",
        "you didn't know what it meant at first."
      ],
      nextPrompt: "when the number returned"
    },

    // 15. 27 MAY 2026 (Confession)
    {
      id: "chap-15",
      day: "27",
      month: "MAY",
      year: "2026",
      subtitle: "from the heart in marathi",
      theme: "theme-love",
      badge: "Emotional Peak",
      title: "THE NUMBER RETURNS & CONFESSION",
      type: "confession",
      messages: [
        { sender: "other", text: "5201314" },
        { sender: "me", text: "5201314 ☺️🤍🤗" },
        { sender: "other", text: "Tum ise hindi me bhi bol skte ho" }
      ],
      marathiConfession: "मी तुझ्यावर खूप प्रेम करतो\nमला तू खूप आवडते...\nतुझ्यावर जीवापाड प्रेम करतो मी..",
      caption: [
        "the words that came straight from the heart."
      ],
      hiddenMemoryId: "mem-3",
      nextPrompt: "the distance challenge"
    },

    // 16. 27 MAY 2026 (Long Distance & Real Meeting)
    {
      id: "chap-16",
      day: "27",
      month: "MAY",
      year: "2026",
      subtitle: "efforts over distance",
      theme: "theme-love",
      badge: "Perspective",
      title: "LONG DISTANCE & REAL MEETING",
      type: "chat",
      messages: [
        { sender: "other", text: "Long distance relationship work nhi krti\ntumhe kya lgta hai" },
        { sender: "me", text: "long distance tab fail hoti hai\njab effort fail hota hai" },
        { sender: "other", text: "Mujhe real me milna hai\nvideo call me nhi" }
      ],
      caption: [
        "distance became a challenge...",
        "not the definition of us.",
        "some things can't be replaced by a screen."
      ],
      nextPrompt: "the first explicit love you"
    },

    // 17. 6 JUNE 2026
    {
      id: "chap-17",
      day: "06",
      month: "JUNE",
      year: "2026",
      subtitle: "the words finally appeared",
      theme: "theme-love",
      badge: "Milestone",
      title: "FIRST EXPLICIT LOVE YOU",
      type: "quote-minimal",
      quote: "Okay good night\nTake care ❣️\nLove you 🫶🏻🤗",
      caption: [
        "the words finally appeared."
      ],
      nextPrompt: "her morning response"
    },

    // 18. 7 JUNE 2026
    {
      id: "chap-18",
      day: "07",
      month: "JUNE",
      year: "2026",
      subtitle: "her first explicit I love you",
      theme: "theme-love",
      badge: "Her Words",
      title: "HER FIRST EXPLICIT \"I LOVE YOU\"",
      type: "quote-reveal",
      quote: "Good morning my love💞🥰\nHave a wonderful day\nkeep smiling and be happy\nI Love you so much😘😘🤗",
      caption: [
        "reading this made the whole world stop for a second."
      ],
      nextPrompt: "mutual love"
    },

    // 19. 12 JUNE 2026
    {
      id: "chap-19",
      day: "12",
      month: "JUNE",
      year: "2026",
      subtitle: "no guessing anymore",
      theme: "theme-love",
      badge: "No Doubts",
      title: "MUTUAL LOVE",
      type: "chat",
      messages: [
        { sender: "other", text: "I love you 😘😘" },
        { sender: "me", text: "I love you too ❤️❤️🫂" }
      ],
      caption: [
        "this time...",
        "there was no guessing.",
        "we both said it."
      ],
      nextPrompt: "our heartbeat"
    },

    // 20. 20 JUNE 2026
    {
      id: "chap-20",
      day: "20",
      month: "JUNE",
      year: "2026",
      subtitle: "names become feelings",
      theme: "theme-love",
      badge: "Sweet Names",
      title: "HEARTBEAT",
      type: "chat",
      messages: [
        { sender: "other", text: "Good morning my heartbeat 🥰💞" },
        { sender: "other", text: "I love you 😘" },
        { sender: "me", text: "Love you too ❤️🫂🥹" }
      ],
      caption: [
        "some names become feelings."
      ],
      nextPrompt: "yearning for a hug"
    },

    // 21. 21 JUNE 2026
    {
      id: "chap-21",
      day: "21",
      month: "JUNE",
      year: "2026",
      subtitle: "ye dooriyan",
      theme: "theme-distance",
      badge: "Yearning",
      title: "YE DOORIYAN...",
      type: "chat",
      messages: [
        { sender: "other", text: "Mn kr rha tha hug kr lu tumhe\nja kr lekin..😒" },
        { sender: "other", text: "Ye dooriyan..." },
        { sender: "me", text: "Miluga tab ji bharke kar lena" }
      ],
      caption: [
        "two hearts separated by miles, connected by every word."
      ],
      nextPrompt: "realities of distance"
    },

    // 22. 22 JUNE 2026
    {
      id: "chap-22",
      day: "22",
      month: "JUNE",
      year: "2026",
      subtitle: "video call restrictions",
      theme: "theme-distance",
      badge: "Understanding",
      title: "VIDEO CALL RESTRICTIONS",
      type: "quote-minimal",
      quote: "Video call pr pichhe se koi aa gya\nto problem ho jayegi",
      narration: [
        "Sometimes the distance wasn't a choice.",
        "Sometimes circumstances were simply stronger."
      ],
      nextPrompt: "the biggest morning"
    },

    // 23. 23 JUNE 2026
    {
      id: "chap-23",
      day: "23",
      month: "JUNE",
      year: "2026",
      subtitle: "my love, my life, my heart, my everything",
      theme: "theme-love",
      badge: "Cinematic Peak",
      title: "THE BIGGEST ROMANTIC MOMENT",
      type: "grand-reveal",
      herMessage: "Good morning my Love,\nmy Life,\nmy heart,\nmy everything....💞😘😘😘\n\nYou are the most special person in my Life 🫂🥰\n\nLove you sooo much💞🥰😘",
      myReply: "Love you meri jaan, my sweet heart ❤️\nLove you anku😘🤗",
      caption: [
        "Every word felt like a promise written in the stars."
      ],
      hiddenMemoryId: "mem-4",
      nextPrompt: "vulnerable fears"
    },

    // 24. 25/26 JUNE 2026
    {
      id: "chap-24",
      day: "25/26",
      month: "JUNE",
      year: "2026",
      subtitle: "fear of being forgotten",
      theme: "theme-distance",
      badge: "Vulnerability",
      title: "FEAR OF LOSING",
      type: "chat",
      messages: [
        { sender: "other", text: "Mujhe lgta h humari bate bhot km ho gyi hai" },
        { sender: "other", text: "Tum bhool to nhi jaoge mujhe 🥺" },
        { sender: "me", text: "Me kabhi nahi bhulunga thume" },
        { sender: "me", text: "And bohot vakt Sath me bhitana he hume\nKiti kuch krna he" }
      ],
      caption: [
        "love wasn't only about saying it.",
        "it was also about being afraid to lose it."
      ],
      nextPrompt: "deeper reassurance"
    },

    // 25. 27 & 30 JUNE 2026
    {
      id: "chap-25",
      day: "27/30",
      month: "JUNE",
      year: "2026",
      subtitle: "reassurance of love",
      theme: "theme-love",
      badge: "Depth",
      title: "IMPORTANT REASSURANCE",
      type: "chat",
      messages: [
        { sender: "other", text: "Agr mai tumse romantic bate nhi karungi\nto tum mujhse door ho jaoge 🥺" },
        { sender: "me", text: "Tum sirf romantic baatein karne ke liye nahi ho" },
        { sender: "other", text: "Kyu tumhe nhi lgta mai tumse pyar krti hu" },
        { sender: "other", text: "I love you so much 🥰🤗😘" }
      ],
      caption: [
        "sometimes people don't need more romance.",
        "they need to know their love is seen."
      ],
      nextPrompt: "the first video encounter"
    },

    // 26. 3 JULY 2026
    {
      id: "chap-26",
      day: "03",
      month: "JULY",
      year: "2026",
      subtitle: "finally video (first documented)",
      theme: "theme-love",
      badge: "Visual First",
      title: "FINALLY... VIDEO",
      type: "video-milestone",
      factualNote: "The first documented video call in our chat history.",
      messages: [
        { sender: "other", text: "Call karu" },
        { sender: "me", text: "Video" },
        { sender: "other", text: "Voice call" },
        { sender: "me", text: "Okay karo" },
        { sender: "other", text: "Mai video call kr rhi hu\nlekin bolungi nhi kyuki mummy hai" }
      ],
      callDuration: "2 minutes.",
      caption: [
        "2 minutes.",
        "No proper conversation.",
        "But finally... we saw each other."
      ],
      nextPrompt: "the first storm"
    },

    // 27. 8/9 JULY 2026
    {
      id: "chap-27",
      day: "08/09",
      month: "JULY",
      year: "2026",
      subtitle: "our first serious relationship crisis",
      theme: "theme-storm",
      badge: "Crisis",
      title: "THE FIRST STORM",
      type: "crisis",
      crisisTitle: "Our first serious relationship crisis",
      narration: [
        "She felt she wasn't able to give enough because of circumstances."
      ],
      keyQuote: "Lekin rah bhi to nhi skti na tumhare bina.",
      caption: [
        "Even when things were heavy, walking away was never an option."
      ],
      nextPrompt: "the hardest chapter"
    },

    // 28. 24 JULY 2026
    {
      id: "chap-28",
      day: "24",
      month: "JULY",
      year: "2026",
      subtitle: "understanding love differently",
      theme: "theme-storm",
      badge: "Understanding",
      title: "THE HARDEST CHAPTER",
      type: "deep-understanding",
      quote: "Tumne hi to kaha tha\nbreakup to ho hi jate hai...",
      loveReasonsTitle: "I know I love you because...",
      loveReasons: [
        "I argue with you",
        "I complain when we don't talk",
        "I think about you",
        "I get hurt",
        "I wait for your message",
        "I stay awake talking to you",
        "I wait for you to make up"
      ],
      narration: [
        "We weren't always feeling love in the same way.",
        "but we were both trying to understand it."
      ],
      nextPrompt: "learning boundaries"
    },

    // 29. LATE JULY 2026
    {
      id: "chap-29",
      day: "LATE",
      month: "JULY",
      year: "2026",
      subtitle: "learning boundaries",
      theme: "theme-storm",
      badge: "Maturity",
      title: "LEARNING BOUNDARIES",
      type: "quote-minimal",
      quote: "subka apna time hota hai",
      caption: [
        "we also learned that love doesn't mean rushing."
      ],
      nextPrompt: "the recovery"
    },

    // 30. AUGUST 2026
    {
      id: "chap-30",
      day: "—",
      month: "AUGUST",
      year: "2026",
      subtitle: "we didn't leave",
      theme: "theme-recovery",
      badge: "Healing",
      title: "BUT WE DIDN'T LEAVE.",
      type: "quote-minimal",
      quote: "after the storm...\nwe found our way back.",
      caption: [
        "we didn't leave."
      ],
      nextPrompt: "the communication cycle"
    },

    // 31. 31 AUGUST - SEPTEMBER 2026 (Note: 18 Aug removed completely)
    {
      id: "chap-31",
      day: "31 AUG",
      month: "– SEP",
      year: "2026",
      subtitle: "the emotional cycle",
      theme: "theme-present",
      badge: "The Cycle",
      title: "THE LATEST CHAPTER",
      type: "conflict-chain",
      chain: [
        "Love ❤️",
        "Less Communication ⏳",
        "Feeling Ignored 💭",
        "Hurt 💔",
        "\"Pyaar kam ho gaya?\" 🥺",
        "Misunderstanding ⚡",
        "Apology 🤍",
        "Love Reaffirmed 🫂"
      ],
      caption: [
        "sometimes the problem wasn't love.",
        "it was how we were experiencing it."
      ],
      nextPrompt: "4 September"
    },

    // 32. 4 SEPTEMBER 2026
    {
      id: "chap-32",
      day: "04",
      month: "SEPTEMBER",
      year: "2026",
      subtitle: "unconditional bond",
      theme: "theme-present",
      badge: "Unbreakable",
      title: "4 SEPTEMBER",
      type: "quote-minimal",
      quote: "But I can't leave without you",
      caption: [
        "No matter what happens..."
      ],
      nextPrompt: "today and forward"
    },

    // 33. 5–6 SEPTEMBER 2026
    {
      id: "chap-33",
      day: "05/06",
      month: "SEPTEMBER",
      year: "2026",
      subtitle: "still writing it",
      theme: "theme-present",
      badge: "Present Day",
      title: "STILL WRITING IT",
      type: "chat",
      messages: [
        { sender: "other", text: "Love you baby" },
        { sender: "other", text: "good morning baby ❤️🔥❤️🔥" }
      ],
      caption: [
        "and somehow...",
        "we're still writing it."
      ],
      nextPrompt: "open final chapter"
    }
  ],

  // Interactive Visual Relationship Quiz
  // ONLY place where the three couple photos appear
  quizzes: [
    {
      id: "quiz-1",
      questionNumber: "QUESTION 1",
      leadText: "Do you remember this?",
      image: "photovid/couple1.jpg",
      question: "When did our actual first contact / call attempt happen?",
      options: [
        "16 March 2026 (When WhatsApp started)",
        "14 March 2026 (The Missed Call)",
        "23 April 2026 (The First Voice Call)"
      ],
      correctIndex: 1,
      fact: "14 March 2026 was the missed call that started it all!"
    },
    {
      id: "quiz-2",
      questionNumber: "QUESTION 2",
      leadText: "Okay... what about this one?",
      image: "photovid/couple2.jpg",
      question: "Who sent the first explicit 'Love you' in our chat?",
      options: [
        "You on 6 June ('Okay good night... Love you 🫶🏻🤗')",
        "Ankita on 7 June ('Good morning my love... I Love you so much')",
        "Both on 12 June together"
      ],
      correctIndex: 0,
      fact: "On 6 June 2026, the words 'Love you 🫶🏻🤗' made their first appearance!"
    },
    {
      id: "quiz-3",
      questionNumber: "QUESTION 3",
      leadText: "Last one.",
      image: "photovid/couple3.jpg",
      question: "What is the meaning of our signature code 5201314?",
      options: [
        "A random bank OTP or lucky number",
        "520 (I Love You) + 1314 (For a Lifetime)",
        "The number of messages we sent"
      ],
      correctIndex: 1,
      fact: "520 = Wo Ai Ni (I Love You), 1314 = Yi Sheng Yi Shi (For a lifetime)!"
    }
  ],

  // Hidden Easter Egg Memories
  hiddenMemories: {
    "mem-1": {
      title: "Secret Spark ✨",
      text: "Even on March 19, when you said 'you also look cute', I took a screenshot and smiled for an hour."
    },
    "mem-2": {
      title: "The Virtual Flower 🌸",
      text: "I promised myself that day: one day I'll give you real flowers every single month."
    },
    "mem-3": {
      title: "The Marathi Heart 💌",
      text: "मी तुझ्यावर जीवापाड प्रेम करतो... these words are engraved in my soul forever."
    },
    "mem-4": {
      title: "The 23rd June Morning ☀️",
      text: "Waking up to 'my Love, my Life, my heart, my everything' was the happiest morning of 2026."
    }
  },

  finalLetter: {
    summaryRange: "16 MARCH 2026 → 6 SEPTEMBER 2026",
    subtext: "that's our story.",
    pauseText: "thank you for coming through all of it with me.",
    paragraphs: [
      "Anku...",
      "I don't know what our story will look like years from now.",
      "But I know...",
      "I don't want to forget what brought us here."
    ],
    memoriesList: [
      "the laughs.",
      "the waiting.",
      "the distance.",
      "the fights.",
      "the apologies.",
      "the little things.",
      "the love."
    ],
    timelineEnd: "14 MARCH 2026 → ∞",
    conclusion: [
      "This isn't the end of our story.",
      "It's just the part I've saved."
    ],
    signature: "Love you, Anku ❤️"
  }
};
