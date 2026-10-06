// Cinematic Story & Memory Archive for Ankita & Eknath
// 100% Genuine chronology & chat excerpts
import { getAssetUrl } from '../utils/assets';

export const STORY_DATA = {
  opening: {
    recipient: "FOR ANKU",
    day: "14",
    monthYear: "MARCH 2026",
    tagline: "before the story...",
    whisper: "there was a first sign",
    cta: "TAP TO ENTER",
    hint: "Sound on • Best experienced slowly"
  },

  musicTrack: getAssetUrl('photovid/songPelipelibar.mp3'),
  musicStartOffset: 50, // CRITICAL: Start immediately from 50 seconds on first tap

  // Memory Frequency Waves & Capsules
  memoryFrequency: [
    {
      id: "freq-1",
      number: "01",
      title: "THE FIRST SIGNAL",
      type: "image",
      imageSrc: getAssetUrl('photovid/couple1.jpg'),
      date: "14 MARCH 2026",
      subtitle: "A silent missed call in the dark",
      desc: "Before a single text was sent, across the distance, a quiet connection was attempted."
    },
    {
      id: "freq-2",
      number: "02",
      title: "MOTION & GRACE",
      type: "video",
      videoSrc: getAssetUrl('photovid/VID_20260714_034926_982.mp4'),
      date: "14 JULY 2026",
      caption: "Some memories don't stay static. They move.",
      desc: "A precious glance frozen in time."
    },
    {
      id: "freq-3",
      number: "03",
      title: "THE REPLAY LOOP",
      type: "image",
      imageSrc: getAssetUrl('photovid/Snapchat-611997065.jpg'),
      date: "MAY — JUNE",
      quotePart1: "somewhere between then and now...",
      quotePart2: "you became the memory I replay every night.",
      desc: "Engraved in thoughts."
    },
    {
      id: "freq-4",
      number: "04",
      title: "NATURAL & REAL",
      type: "video",
      videoSrc: getAssetUrl('photovid/VID_20260714_034930_276.mp4'),
      date: "14 JULY 2026",
      caption: "This one doesn't need a caption.",
      desc: "Purely you."
    },
    {
      id: "freq-5",
      number: "05",
      title: "STILL STANDING",
      type: "image",
      imageSrc: getAssetUrl('photovid/couple2.jpg'),
      date: "SEPTEMBER 2026",
      lines: [
        "Some things changed.",
        "Some things became harder.",
        "But we never let go."
      ],
      desc: "Unbreakable bond."
    }
  ],

  // 33 Story Milestones
  milestones: [
    {
      id: "m-1",
      index: "01",
      date: "14 MARCH 2026",
      badge: "The Origin",
      title: "THE FIRST SIGN",
      type: "missed-call",
      prologue: [
        "Before the messages...",
        "before the jokes...",
        "before everything began..."
      ],
      callInfo: {
        caller: "Unknown Number",
        status: "Missed Call Attempt",
        duration: "00:00"
      },
      content: [
        "We didn't know it back then...",
        "but this was the very first whisper of our story."
      ],
      factualNote: "14 March 2026: Our actual first contact attempt."
    },
    {
      id: "m-2",
      index: "02",
      date: "15 MARCH 2026",
      badge: "The Shift",
      title: "THE STORY MOVED TO WHATSAPP",
      type: "transition",
      content: [
        "The next day...",
        "our path quietly moved to WhatsApp."
      ],
      subtext: "From a silent call to a new window of words."
    },
    {
      id: "m-3",
      index: "03",
      date: "16 MARCH 2026",
      badge: "First Words",
      title: "THE FIRST CONVERSATION",
      type: "chat-scene",
      narration: "This is where our actual chat history began.",
      messages: [
        { sender: "her", text: "Hey! Hello 👋", time: "10:14 AM" },
        { sender: "him", text: "Hi! Kaise ho aap?", time: "10:18 AM" },
        { sender: "her", text: "Bas badhiya, aap batao?", time: "10:20 AM" },
        { sender: "him", text: "Sab theek yahan bhi 😊", time: "10:22 AM" }
      ],
      reflection: "Neither of us had any idea what this casual hello would grow into."
    },
    {
      id: "m-4",
      index: "04",
      date: "19 MARCH 2026",
      badge: "First Spark",
      title: "EARLY FLIRTING & CUTE MOMENT",
      type: "chat-scene",
      messages: [
        { sender: "him", text: "cute lagta hu? 😄", time: "08:42 PM" },
        { sender: "her", text: "you also look cute", time: "08:43 PM" },
        { sender: "him", text: "in my dreams 😅", time: "08:44 PM" },
        { sender: "her", text: "haha nahi sach mein! 😂", time: "08:44 PM" }
      ],
      reflection: "Somewhere between normal words, we started smiling at our screens."
    },
    {
      id: "m-5",
      index: "05",
      date: "23 MARCH 2026",
      badge: "The Compliment",
      title: "THE APSARA MOMENT",
      type: "quote-spotlight",
      quote: "Apsra lag rhi ho\nsidhi sawarg se dharti par utru hui\nvery very beautiful",
      reflection: "The compliments had started turning dangerous."
    },
    {
      id: "m-6",
      index: "06",
      date: "28 MARCH 2026",
      badge: "Iconic Banter",
      title: "THE INSTAGRAM INCIDENT 😂",
      type: "chat-scene",
      messages: [
        { sender: "him", text: "Chalo fir Insta pe bhi baat karte hai\nID share karo" },
        { sender: "her", text: "Its ankita5893" },
        { sender: "him", text: "Its private 😒" },
        { sender: "her", text: "To kya" },
        { sender: "him", text: "Kaya fayda id dene ka" },
        { sender: "her", text: "Tbhi to nhi de rhi thi 😂" }
      ],
      reflection: "Even getting the Instagram handle was a whole tactical mission."
    },
    {
      id: "m-7",
      index: "07",
      date: "09 APRIL 2026",
      badge: "The Shift",
      title: "FIRST \"JAAN\"",
      type: "minimal-emphasis",
      quote: "Tu ditoyu jaan meri",
      reflection: "The names were quietly changing. The warmth was taking over."
    },
    {
      id: "m-8",
      index: "08",
      date: "17 APRIL 2026",
      badge: "Sweet Gesture",
      title: "A FLOWER FOR YOU",
      type: "flower-scene",
      quote: "Yeh dekha to tum yaad aa gayi 🌸\nEk beautiful flower...\nek aur beautiful insaan ke liye 🌸",
      reflection: "The first flower sent across the miles."
    },
    {
      id: "m-9",
      index: "09",
      date: "18 APRIL 2026",
      badge: "Playful Heart",
      title: "PLAYFUL JEALOUSY",
      type: "chat-scene",
      messages: [
        { sender: "him", text: "Sach me tumhari hai\nya mujhe jealous karne ki planning hai 😄" },
        { sender: "her", text: "tumhe kya lagta hai? 😜" },
        { sender: "him", text: "matlab jaan ke heart attack dene ki planning thi 😅" }
      ],
      reflection: "Jealousy feels sweetest when it's wrapped in playful teasing."
    },
    {
      id: "m-10",
      index: "10",
      date: "19 APRIL 2026",
      badge: "Longing",
      title: "MISSING EACH OTHER",
      type: "minimal-emphasis",
      quote: "Miss kar rha tha tumhe",
      reflection: "When someone's absence starts feeling louder than the whole world."
    },
    {
      id: "m-11",
      index: "11",
      date: "23 APRIL 2026",
      badge: "Voice Milestone",
      title: "HEARING YOUR VOICE",
      type: "voice-atmosphere",
      narration: "A voice that turned digital text into a living heartbeat.",
      reflection: "Talking became something we waited for all day."
    },
    {
      id: "m-12",
      index: "12",
      date: "26 APRIL 2026",
      badge: "Anticipation",
      title: "WAITING TO MEET",
      type: "quote-sequence",
      lines: [
        "One boy who is waiting to meet his love.",
        "Where, when, how should I meet you?",
        "Waiting for one signal to come and meet you."
      ],
      reflection: "Words on a screen were no longer enough. We wanted reality."
    },
    {
      id: "m-13",
      index: "13",
      date: "30 APRIL 2026",
      badge: "Pillar",
      title: "101% TRUST",
      type: "stat-highlight",
      stat: "101%",
      headline: "You can trust me 101%",
      reflection: "A foundation built one honest sentence at a time."
    },
    {
      id: "m-14",
      index: "14",
      date: "25 MAY 2026",
      badge: "Secret Code",
      title: "THE 5201314 CODE",
      type: "interactive-code-milestone",
      code: "5201314",
      reflection: "A mysterious code that meant everything."
    },
    {
      id: "m-15",
      index: "15",
      date: "27 MAY 2026",
      badge: "Heartfelt Confession",
      title: "CONFESSION FROM THE HEART",
      type: "marathi-confession",
      messages: [
        { sender: "her", text: "5201314" },
        { sender: "him", text: "5201314 ☺️🤍🤗" },
        { sender: "her", text: "Tum ise hindi me bhi bol skte ho" }
      ],
      marathiText: "मी तुझ्यावर खूप प्रेम करतो\nमला तू खूप आवडते...\nतुझ्यावर जीवापाड प्रेम करतो मी..",
      reflection: "Pure, vulnerable words spoken straight from the soul."
    },
    {
      id: "m-16",
      index: "16",
      date: "27 MAY 2026",
      badge: "Perspective",
      title: "DISTANCE VS EFFORT",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "Long distance relationship work nhi krti\ntumhe kya lgta hai" },
        { sender: "him", text: "long distance tab fail hoti hai\njab effort fail hota hai" },
        { sender: "her", text: "Mujhe real me milna hai\nvideo call me nhi" }
      ],
      reflection: "Distance is just a test to see how far love can travel."
    },
    {
      id: "m-17",
      index: "17",
      date: "06 JUNE 2026",
      badge: "First Confession",
      title: "FIRST 'LOVE YOU' FROM EKNATH",
      type: "minimal-emphasis",
      quote: "Okay good night\nTake care ❣️\nLove you 🫶🏻🤗",
      reflection: "The words that had been echoing in the mind finally made it to the screen."
    },
    {
      id: "m-18",
      index: "18",
      date: "07 JUNE 2026",
      badge: "Morning Sunshine",
      title: "ANKITA'S 'I LOVE YOU SO MUCH'",
      type: "quote-spotlight",
      sender: "her",
      quote: "Good morning my love💞🥰\nHave a wonderful day\nkeep smiling and be happy\nI Love you so much😘😘🤗",
      reflection: "Waking up to this made the entire world feel light."
    },
    {
      id: "m-19",
      index: "19",
      date: "12 JUNE 2026",
      badge: "No Doubts",
      title: "MUTUAL LOVE",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "I love you 😘😘" },
        { sender: "him", text: "I love you too ❤️❤️🫂" }
      ],
      reflection: "No questions left. No hesitations. Just us."
    },
    {
      id: "m-20",
      index: "20",
      date: "20 JUNE 2026",
      badge: "Heartbeat",
      title: "MY HEARTBEAT",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "Good morning my heartbeat 🥰💞" },
        { sender: "her", text: "I love you 😘" },
        { sender: "him", text: "Love you too ❤️🫂🥹" }
      ],
      reflection: "Some nicknames aren't words—they become feelings."
    },
    {
      id: "m-21",
      index: "21",
      date: "21 JUNE 2026",
      badge: "Yearning",
      title: "YE DOORIYAN...",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "Mn kr rha tha hug kr lu tumhe\nja kr lekin..😒" },
        { sender: "her", text: "Ye dooriyan..." },
        { sender: "him", text: "Miluga tab ji bharke kar lena" }
      ],
      reflection: "Wishing for a hug that crosses hundreds of kilometers."
    },
    {
      id: "m-22",
      index: "22",
      date: "22 JUNE 2026",
      badge: "Reality",
      title: "VIDEO CALL RESTRICTIONS",
      type: "minimal-emphasis",
      sender: "her",
      quote: "Video call pr pichhe se koi aa gya\nto problem ho jayegi",
      reflection: "Sneaking moments between busy worlds and family constraints."
    },
    {
      id: "m-23",
      index: "23",
      date: "23 JUNE 2026",
      badge: "Cinematic Peak",
      title: "MY LOVE, MY LIFE, MY EVERYTHING",
      type: "grand-reveal",
      herMessage: "Good morning my Love,\nmy Life,\nmy heart,\nmy everything....💞😘😘😘\n\nYou are the most special person in my Life 🫂🥰\n\nLove you sooo much💞🥰😘",
      myReply: "Love you meri jaan, my sweet heart ❤️\nLove you anku😘🤗",
      reflection: "A message etched permanently into memory."
    },
    {
      id: "m-24",
      index: "24",
      date: "25/26 JUNE 2026",
      badge: "Vulnerability",
      title: "FEAR OF LOSING",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "Mujhe lgta h humari bate bhot km ho gyi hai" },
        { sender: "her", text: "Tum bhool to nhi jaoge mujhe 🥺" },
        { sender: "him", text: "Me kabhi nahi bhulunga thume" },
        { sender: "him", text: "And bohot vakt Sath me bhitana he hume\nKiti kuch krna he" }
      ],
      reflection: "True love isn't fearless; it's caring so deeply that you fear losing it."
    },
    {
      id: "m-25",
      index: "25",
      date: "27 & 30 JUNE 2026",
      badge: "Reassurance",
      title: "LOVE SEEN & KNOWN",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "Agr mai tumse romantic bate nhi karungi\nto tum mujhse door ho jaoge 🥺" },
        { sender: "him", text: "Tum sirf romantic baatein karne ke liye nahi ho" },
        { sender: "her", text: "Kyu tumhe nhi lgta mai tumse pyar krti hu" },
        { sender: "her", text: "I love you so much 🥰🤗😘" }
      ],
      reflection: "We don't love just the romance; we love the person behind every word."
    },
    {
      id: "m-26",
      index: "26",
      date: "03 JULY 2026",
      badge: "First Documented Video",
      title: "FINALLY... VIDEO",
      type: "video-milestone-scene",
      messages: [
        { sender: "her", text: "Call karu" },
        { sender: "him", text: "Video" },
        { sender: "her", text: "Voice call" },
        { sender: "him", text: "Okay karo" },
        { sender: "her", text: "Mai video call kr rhi hu\nlekin bolungi nhi kyuki mummy hai" }
      ],
      durationNote: "2 minutes. Silent smiles. Finally seeing each other live.",
      reflection: "Two minutes that felt like twenty seconds and twenty years at once."
    },
    {
      id: "m-27",
      index: "27",
      date: "08/09 JULY 2026",
      badge: "The Storm",
      title: "OUR FIRST SERIOUS CRISIS",
      type: "crisis-scene",
      headline: "The weight of circumstances",
      quote: "Lekin rah bhi to nhi skti na tumhare bina.",
      reflection: "Even when things got heavy, walking away was never an option."
    },
    {
      id: "m-28",
      index: "28",
      date: "24 JULY 2026",
      badge: "The Hardest Chapter",
      title: "THE HARDEST CHAPTER",
      type: "chat-scene",
      narration: "A moment where words almost broke what we had built.",
      messages: [
        { sender: "her", text: "Tumne hi to kaha tha\nbreakup to ho hi jate hai...", time: "11:40 PM" },
        { sender: "him", text: "Maine kabhi dil se aisa nahi kaha jaan... main tumhe khona nahi chahta", time: "11:42 PM" },
        { sender: "her", text: "Lekin baatein aisi hoti hai to bura lagta hai na 🥺", time: "11:43 PM" },
        { sender: "him", text: "I'm really sorry... aage se kabhi aisi baat nahi karunga", time: "11:45 PM" }
      ],
      reflection: "That day, we understood how much the words between us could hurt."
    },
    {
      id: "m-29",
      index: "29",
      date: "LATE JULY 2026",
      badge: "Maturity",
      title: "LEARNING BOUNDARIES",
      type: "chat-scene",
      narration: "Understanding each other's spaces across the distance.",
      messages: [
        { sender: "him", text: "Itna late kyu ho gaya reply karne me? Sab theek hai?", time: "07:15 PM" },
        { sender: "her", text: "subka apna time hota hai", time: "07:20 PM" },
        { sender: "him", text: "Haan samajh sakta hu... take your time", time: "07:22 PM" },
        { sender: "her", text: "Thank you for understanding 🤍", time: "07:25 PM" }
      ],
      reflection: "We were learning that being close didn't mean being available every second."
    },
    {
      id: "m-30",
      index: "30",
      date: "AUGUST 2026",
      badge: "Healing",
      title: "AFTER THE STORM",
      type: "cinematic-statement",
      lines: [
        "We didn't leave.",
        "We kept talking.",
        "We kept trying.",
        "We found our way back."
      ],
      reflection: "Storms passed. We stayed."
    },
    {
      id: "m-31",
      index: "31",
      date: "31 AUGUST 2026",
      badge: "Communication",
      title: "THE LATEST CHAPTER",
      type: "chat-scene",
      narration: "When silences feel heavier than words.",
      messages: [
        { sender: "her", text: "Aap busy ho kya?", time: "09:12 PM" },
        { sender: "him", text: "Nahi, abhi free hua bas... bolo na", time: "09:15 PM" },
        { sender: "her", text: "Pyaar kam ho gaya? 🥺", time: "09:16 PM" },
        { sender: "him", text: "Kabhi nahi, pagli... pyaar kabhi kam nahi ho sakta tumhare liye ❤️🫂", time: "09:18 PM" },
        { sender: "her", text: "Sach me? 🥺", time: "09:19 PM" },
        { sender: "him", text: "Sach me meri jaan. I love you the most ❤️", time: "09:20 PM" }
      ],
      reflection: "Sometimes the smallest change in communication felt much bigger because we cared so much."
    },
    {
      id: "m-32",
      index: "32",
      date: "04 SEPTEMBER 2026",
      badge: "Unconditional",
      title: "4 SEPTEMBER",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "But I can't leave without you", time: "10:30 PM" }
      ],
      reflection: "Some sentences don't need an explanation."
    },
    {
      id: "m-33",
      index: "33",
      date: "05/06 SEPTEMBER 2026",
      badge: "Present Day",
      title: "STILL WRITING IT",
      type: "chat-scene",
      messages: [
        { sender: "her", text: "Love you baby", time: "11:58 PM" },
        { sender: "him", text: "good morning baby ❤️🔥❤️🔥", time: "07:30 AM" }
      ],
      reflection: "And here we are... still writing our story together."
    }
  ],

  // Quiz - ONLY PLACE COUPLE PHOTOS ARE USED
  quizzes: [
    {
      id: "quiz-1",
      questionNumber: "01",
      leadText: "Do you remember this?",
      image: getAssetUrl('photovid/couple1.jpg'),
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
      questionNumber: "02",
      leadText: "Okay... what about this one?",
      image: getAssetUrl('photovid/couple2.jpg'),
      question: "Who sent the first explicit 'Love you' in our chat?",
      options: [
        "Eknath on 6 June ('Okay good night... Love you 🫶🏻🤗')",
        "Ankita on 7 June ('Good morning my love... I Love you so much')",
        "Both on 12 June together"
      ],
      correctIndex: 0,
      fact: "On 6 June 2026, the words 'Love you 🫶🏻🤗' made their first appearance!"
    },
    {
      id: "quiz-3",
      questionNumber: "03",
      leadText: "Last one.",
      image: getAssetUrl('photovid/couple3.jpg'),
      question: "What is the true meaning of our signature code 5201314?",
      options: [
        "A random bank OTP or lucky number",
        "520 (I Love You) + 1314 (For a Lifetime)",
        "The number of messages we exchanged"
      ],
      correctIndex: 1,
      fact: "520 = Wo Ai Ni (I Love You), 1314 = Yi Sheng Yi Shi (For a Lifetime)!"
    }
  ],

  finalReveal: {
    suspenseLines: [
      "wait...",
      "there's one thing I didn't put in the timeline."
    ],
    letter: {
      range: "14 MARCH 2026 → ∞",
      paragraphs: [
        "Anku...",
        "I don't know what our story will look like years from now.",
        "I don't know every twist, every turn, or how many miles we'll still have to cross.",
        "But I know this:",
        "I don't ever want to forget what brought us here."
      ],
      memories: [
        "the laughs at 2 AM",
        "the waiting for your texts",
        "the distance that tested us",
        "the fights that made us stronger",
        "the apologies that brought us back",
        "the little moments only we understand",
        "and every single 'I love you' we ever exchanged."
      ],
      endingNote: "This isn't the end of our story. It's just the part I've saved forever.",
      signature: "Forever yours,\nEknath ❤️"
    }
  }
};
