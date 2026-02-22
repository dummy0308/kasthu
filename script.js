/**
 * Dedicated Birthday Website for Kasthu ❤️
 * Full Logic: Navigation, Surprises, Timeline, Gallery, Reasons, Letters, Secret Page
 */

// --- USER-EDITABLE CONSTANTS ---
const GIRL_NAME = "Kasthu";
const MY_NAME = "Antigravity"; // Your name
const BIRTHDAY_DATE = "2026-03-03"; // Format: YYYY-MM-DD
const PASSCODE = "0108"; // Secret page code
const FINAL_VIDEO_URL = "#"; // Final message link
const DEBUG_MODE = true; // SET TO TRUE TO UNLOCK EVERYTHING FOR TESTING

console.log("--- Birthday Site Script Initializing ---");
console.log("GIRL_NAME:", GIRL_NAME);
console.log("BIRTHDAY_DATE:", BIRTHDAY_DATE);
console.log("DEBUG_MODE:", DEBUG_MODE);

let currentMegaStage = 0;
let megaSurpriseData = null;
let heartCatchScore = 0;
let currentDay1Stage = 1;
let day1SurpriseData = null;
let day1CountdownInterval = null;
let heartCatchTimer = null;
let megaAudio = null;

// --- DATA ---

const TIMELINE_EVENTS = [
    { date: "08 Jan 2022", title: "When I First Texted You", desc: "The day of my life's Turning point, and i didn't know that single msg will led us to this long journey" },
    { date: "08 Jun 2022", title: "When We First Met", desc: "The day my world changed. I still remember exactly what you were wearing." },
    { date: "03 Aug 2022", title: "You Proposed me no?", desc: "We both in shy and it felt like 4 minutes. I knew then." },
    { date: "31 Dec 2022", title: "The New Year", desc: "Starting the year with you was the best decision of my life." },
    { date: "14 Feb 2023", title: "Our First Valentine's", desc: "That silly card you made is still my favorite possession." },
    { date: "03 Aug 2023", title: "Our 1st Anniversary", desc: "365 days of choosing you, and I'd do it a million times more." },
    { date: "Today", title: "Counting Down...", desc: "Getting ready to celebrate the most special person I know." }
];

const GALLERY_IMAGES = [
    { url: "Lapkas/5J3A4685.JPG", category: "cute", caption: "One of my absolute favorite shots." },
    { url: "Lapkas/5J3A4788.JPG", category: "cute", caption: "You look stunning here." },
    { url: "Lapkas/IMG-20240902-WA0058.jpg", category: "fun", caption: "Remember this day? So much fun." },
    { url: "Lapkas/IMG-20241201-WA0117.jpg", category: "trips", caption: "Another beautiful memory." },
    { url: "Lapkas/IMG-20250319-WA0046.jpg", category: "cute", caption: "That smile is everything." },
    { url: "Lapkas/IMG-20250329-WA0083.jpg", category: "fun", caption: "We were so silly that day." },
    { url: "Lapkas/IMG-20250329-WA0093.jpg", category: "trips", caption: "The view was almost as pretty as you." },
    { url: "Lapkas/IMG-20250615-WA0112.jpg", category: "screenshots", caption: "A moment I had to save." },
    { url: "Lapkas/IMG-20251105-WA0094.jpg", category: "cute", caption: "Just capturing your beauty." },
    { url: "Lapkas/IMG-20251107-WA0041.jpg", category: "fun", caption: "Laughed so hard on this one." },
    { url: "Lapkas/IMG-20251107-WA0042.jpg", category: "trips", caption: "A perfect getaway." },
    { url: "Lapkas/IMG-20251201-WA0026.jpg", category: "screenshots", caption: "So many memories in one image." },
    { url: "Lapkas/IMG-20260102-WA0102.jpg", category: "cute", caption: "A fresh start to the year." },
    { url: "Lapkas/IMG-20260109-WA0030.jpg", category: "fun", caption: "Unexpected moments are the best." },
    { url: "Lapkas/IMG-20260120-WA0036.jpg", category: "trips", caption: "Exploring the world together." },

];

const REASONS = [
    "Your laugh is the best sound I've ever heard.",
    "The way you care for people inspires me.",
    "Your resilience in tough times.",
    "How you look at me when you think I'm not looking.",
    "Your weird obsession with spicy snacks.",
    "The way you always know when I need a hug.",
    "Your intelligence and how you view the world.",
    "Your singing in the shower (it's cute!).",
    "How you defend the people you love.",
    "The way your nose crinkles when you laugh.",
    "Your ability to find beauty in small things.",
    "How hard you work for your dreams.",
    "The way you look in my oversized hoodies.",
    "Your patience with me.",
    "The way you remember the smallest details about us.",
    "Your sense of style – you always look amazing.",
    "The way you make every place feel like home.",
    "Your kindness towards strangers.",
    "Your loyalty is unmatched.",
    "The way you handle my bad jokes.",
    "Your ambition and drive.",
    "The way you space out when you're thinking deeply.",
    "Your dance moves (even the awkward ones).",
    "How you are my biggest supporter.",
    "The way you smell – it's so comforting.",
    "Your honesty, even when it's hard.",
    "How you make me want to be a better person.",
    "Your curiosity about everything.",
    "The way you hold my hand.",
    "Simply because you are YOU, and I love every bit of it."
];

const PRAISES = [
    "You have the most beautiful smile I've ever seen. ❤️",
    "Your kindness is your greatest strength. 🌟",
    "I love the way you laugh at my silly jokes. 😂",
    "You are the strongest person I know. 💪",
    "Everything is better when I'm with you. 🌸",
    "Your eyes hold a universe of love. ✨",
    "You are my favorite thought in the morning. ☕",
    "I'm so proud of everything you achieve. 🏆",
    "You make ordinary moments feel extraordinary. 🌈",
    "The world is brighter just because you're in it. ☀️",
    "You have a heart of gold. 💛",
    "I love how passionate you are about your dreams. 🚀",
    "You are my safe haven. 🏠",
    "Your intelligence always amazes me. 🧠",
    "You are the most caring partner anyone could ask for. 🫂",
    "I love your sense of style! 👗",
    "You are my missing piece. 🧩",
    "I love you more than words can express. ❤️"
];

const MEMORIES = [
    "Our first coffee date where we talked for hours.",
    "That rainy evening when we shared an umbrella.",
    "The time we got lost but turned it into an adventure.",
    "Watching our first sunset together at the beach.",
    "The way you surprised me on my last birthday.",
    "Our silly late-night video calls that lasted until dawn.",
    "Finding that hidden cafe with the best hot chocolate.",
    "The first time we held hands in the park.",
    "Cooking together and making a huge mess in the kitchen.",
    "Your first 'I love you' (I'll never forget that moment)."
];

const PROMISES = [
    "I promise to always be your biggest fan and supporter.",
    "I promise to hold your hand through every storm.",
    "I promise to always listen, even when we disagree.",
    "I promise to make you laugh every single day.",
    "I promise to never stop choosing you, every morning.",
    "I promise to create a lifetime of beautiful memories with you.",
    "I promise to always be your safe place to land.",
    "I promise to keep our love adventurous and fresh.",
    "I promise to love you more today than I did yesterday.",
    "I promise to be yours, forever and always."
];

const COMPLIMENTS = [
    "You are remarkably intelligent and quick-witted.",
    "Your sense of style is absolutely impeccable.",
    "You have a way of making everyone feel special.",
    "You are incredibly resilient and strong.",
    "Your creativity never ceases to amaze me.",
    "You are the most beautiful person I know, inside and out.",
    "You have such a kind and generous soul.",
    "Your determination is so inspiring to me.",
    "You are an amazing listener and a true friend.",
    "You make the world a better place just by being in it."
];

const LETTERS = [
    { type: "sad", title: "sad", message: "My love, I'm sorry you're feeling down. Take a deep breath. You are so much stronger than you feel right now. I'm always here with a shoulder to lean on. ❤️" },
    { type: "miss", title: "miss me", message: "I'm probably missing you even more right now. Close your eyes and remember our last hug. I'll be back in your arms before you know it." },
    { type: "motivation", title: "need motivation", message: "You are a rockstar! Don't let a temporary setback stop you. You've achieved so much already, and I believe in you 100%!" },
    { type: "stressed", title: "stressed", message: "Everything will be okay. Put your phone away for 10 minutes, drink some water, and remember that you've handled everything life has thrown at you. I'm proud of you." }
];

const SURPRISES = [
    {
        day: 30, type: "envelope", title: "A Special Letter", message: `Innum 30 naal irukku... This countdown is just a small way to say how much you mean to me. Get ready for a surprise every 5 days!

Innum 30 naal irukku, Aanaal indha naal enakku special… Un sirippu nenachale Indha naalum festival pola feel aagudhu.

Birthday oru naal thaan varum, Aanaal nee irukkura ella naalum En life-la celebration thaan.

Cake illa, candle illa, Aanaal un ninaivu mattum podhum Indha 30 naalum happy-aa irukka.

Un birthday vara varaikkum illa… Un sirippu irukkura varaikkum En manasula sandhosham mudiyadhu.

Advance-aa solren illa… Late-aa kooda illa… Simply heart-la irundhu solren — Nee irukkura naal ellame Enakku best days thaan 💖` },
    { day: 25, type: "polaroid", title: "Our Memory Wall", message: "intha phpotos ellam gapagam iruka ellam namaloda 1st memories create pana places and memories ipa nechalum feels heaven no? intha nimidam than innum thodaruma momment? i hope this will forever us only and wish a advance happy birthday my dear chellameee", images: ["us/imp1.jpg", "us/imp2.jpg", "us/imp3.jpg"] },
    {
        day: 20,
        type: "quiz-game",
        title: "Our Love Journey",
        message: "Let's see how much you remember about us... 15 levels of memories!",
        quizSteps: [
            { question: "When will our fights be over?", options: ["Never", "Tomorrow", "After Marriage"], correct: 0 },
            { question: "Who started the first fight? (Be honest! 😂)", options: ["Me", "You", "Both of us"], correct: 2 },
            { question: "What's the one thing I love most about you?", options: ["Your Smile", "Your Heart", "Everything"], correct: 2 },
            { question: "Who is more stubborn among us?", options: ["Definitely Me", "Definitely You", "It's a Tie!"], correct: 0 },
            { question: "Who said 'I love you' first?", options: ["I did", "You did", "We said it together"], correct: 1 },
            { question: "What's my favorite color on you?", options: ["Blue", "Black", "White"], correct: 0 },
            { question: "Where was our first official date?", options: ["Beach", "Cafe", "Park"], correct: 2 },
            { question: "Who is better at keeping secrets?", options: ["Me", "You", "None of us 😂"], correct: 2 },
            { question: "What's my favorite midnight snack?", options: ["Pizza", "Chocolate", "Maggi"], correct: 0 },
            { question: "Who is more likely to cry during a movie?", options: ["Me", "You", "Both of us"], correct: 0 },
            { question: "What's my 'signature' song on you?", options: ["Munbe vaa", "Megham Karukatha", "Oorum blood"], correct: 2 },
            { question: "Who is the better driver?", options: ["Me (Obviously)", "You", "We both did"], correct: 2 },
            { question: "What's the one thing that always makes me smile?", options: ["Your Voice", "Your litte surprises", "Just You"], correct: 1 },
            { question: "If we were in a movie, who would be the villain?", options: ["Me", "You", "Mamiyar and frnds"], correct: 2 },
            { question: "Do I love you more than Biryani?", options: ["Yes", "No", "Maybe..."], correct: 1 }
        ]
    },
    {
        day: 15,
        type: "jar",
        title: "The Love Jar",
        message: "Reach in and pick a heart note...",
        notes: REASONS,
        voiceNotes: {
            'REASONS': 'voice1.m4a',
            'MEMORIES': 'voice2.m4a',
            'PROMISES': 'voice3.m4a',
            'COMPLIMENTS': 'voice4.m4a'
        }
    },
    {
        day: 10,
        type: "mega-day-10",
        title: "Day 10: Mega Birthday Surprise! 🎊",
        message: "This isn't just one surprise... it's a whole journey! Are you ready?",
        stages: [
            {
                id: "welcome",
                title: "Welcome! ❤️",
                content: "Let's start your Day 10 journey with some music and love."
            },
            {
                id: "wheel",
                title: "Wheel of Love 💖",
                content: "Spin the drum to see what I love about you most today...",
                praises: PRAISES
            },
            {
                id: "letter",
                title: "A Secret Letter ✉️",
                content: "I have something I've been wanting to tell you...",
                letter: "My dearest Kasthu,\n\nAs we get closer to your big day, I wanted to take a moment to tell you how much you truly mean to me. Every day with you is a gift, but milestones like this make me realize how lucky I am to have you by my side.\n\nYou make my world brighter, my laughs louder, and my heart fuller. I hope this birthday season is as magical as you are.\n\nForever yours,\nTharu ❤️"
            },
            {
                id: "game",
                title: "Catch My Love! 🎮",
                content: "Catch as many hearts as you can in 30 seconds!",
                gameTime: 30
            },
            {
                id: "hug",
                title: "Virtual Hug! 🫂",
                content: "Click the button for a massive virtual hug!",
                hugMessage: "Sending a huge, warm hug across the screen! I love you so much! ❤️❤️❤️"
            }
        ]
    },
    {
        day: 5,
        type: "mega-celestial",
        title: "The Celestial Journey ✨",
        message: "Your birthday is a day the stars aligned. Journey through the heavens to find your blessings...",
        stages: [
            {
                id: "constellation",
                title: "The Heart in the Stars",
                points: [
                    { x: 50, y: 85, label: "08 Jan" },
                    { x: 15, y: 45, label: "First Met" },
                    { x: 25, y: 15, label: "Shy Days" },
                    { x: 50, y: 35, label: "Us" },
                    { x: 75, y: 15, label: "Laughter" },
                    { x: 85, y: 45, label: "Forever" }
                ]
            },
            {
                id: "blessings",
                title: "A Shower of Blessings",
                blessings: ["Happiness", "Health", "Success", "Eternal Love", "Pure Joy", "Blessed Being"]
            },
            {
                id: "lanterns",
                title: "Wish Lanterns",
                wishes: [
                    "May your year be as bright as your smile.",
                    "To more adventures and late-night laughs.",
                    "Wishing you all the success you work so hard for.",
                    "May your heart always be as kind as it is today.",
                    "To a birthday that's as special as you are."
                ]
            },
            {
                id: "moon",
                title: "The Moon's Promise",
                promise: "I feel incredibly blessed to have you in my life. Every day with you is a gift I never expected. You are my moon, my stars, and my entire universe. ❤️"
            },
            {
                id: "memories",
                title: "The Nebula of Us",
                images: [
                    "Lapkas/5J3A4685.JPG", "Lapkas/5J3A4788.JPG",
                    "Lapkas/IMG-20240902-WA0058.jpg", "Lapkas/IMG-20241201-WA0117.jpg",
                    "Lapkas/IMG-20250319-WA0046.jpg", "Lapkas/IMG-20250329-WA0083.jpg",
                    "Lapkas/IMG-20250329-WA0093.jpg", "Lapkas/IMG-20250615-WA0112.jpg"
                ]
            },
            {
                id: "cake",
                title: "Stardust Birthday Surprise",
                message: "A celestial celebration for my universe..."
            }
        ]
    },
    {
        day: 4,
        type: "mega-scrapbook",
        title: "The Scrapbook: Love Alchemy 🧪",
        message: "Mix the perfect ingredients to create our magical bond...",
        reasons: [
            "Your smile lights up my entire world ☀️",
            "You always know how to make me laugh 😂",
            "Your hugs feel like home 🏠",
            "You believe in me even when I don't 💪",
            "The way you sing along to songs 🎤",
            "Your patience with my silly plans ✨",
            "How you always smell amazing 🌸",
            "Your determination inspires me every day 🚀",
            "The way you hold my hand so tight ✋",
            "You make even boring days feel special 🌈",
            "Your cooking experiments (even the failed ones) 🍳",
            "How protective you are of the people you love 🛡️",
            "Your laugh — it's my favorite sound 🎵",
            "The way you look when you're concentrating 🤓",
            "You always put others first 💖",
            "Your random late-night texts that make me smile 📱",
            "How you never give up on anything 🏆",
            "The way your eyes sparkle when you're happy ✨",
            "Your honesty, even when it's hard to hear 💎",
            "How you always remember the small things 🧠",
            "Your passion for the things you love 🔥",
            "The way you dance when nobody's watching 💃",
            "How you make everyone feel welcome 🤗",
            "Your strength during tough times 💪",
            "The way you say my name ❤️",
            "How you always find the positive side 🌟",
            "Your creativity and imagination 🎨",
            "The comfort of your presence 🕊️",
            "How you've made me a better person 🌱",
            "Simply because you are YOU — and that's everything 👑"
        ],
        voucher: {
            title: "Infinite Heart-to-Heart Voucher ❤️",
            message: "Valid for one long hug, a coffee date, and listening to you vent for as long as you need.",
            code: "KASTHU-LOVE-2026"
        },
        stages: [
            {
                id: "alchemy-ingredients",
                title: "The Essence Selector",
                description: "Select 3 bottles to find the core of 'Us'",
                ingredients: [
                    { id: 'laughter', label: 'Essence of Laughter', color: '#ffeb3b', emoji: '😂' },
                    { id: 'kindness', label: 'Liquid Kindness', color: '#e91e63', emoji: '💖' },
                    { id: 'bravery', label: 'Bravery Bloom', color: '#f44336', emoji: '🦁' },
                    { id: 'intelligence', label: 'Spark of Smartness', color: '#2196f3', emoji: '🧠' },
                    { id: 'creativity', label: 'Creative Clouds', color: '#9c27b0', emoji: '🎨' },
                    { id: 'patience', label: 'Drop of Patience', color: '#4caf50', emoji: '⏳' }
                ]
            },
            {
                id: "alchemy-brew",
                title: "The Great Stirring",
                description: "Stir the cauldron to mix the perfection..."
            },
            {
                id: "alchemy-result",
                title: "The Potion of Pure Joy",
                description: "Behold, the result of perfection!"
            }
        ]
    },
    {
        day: 3,
        type: "mega-treasure",
        title: "The Great Treasure Journey 🗺️",
        message: "A map of memories awaits... Follow the path to find your birthday bounty!",
        stages: [
            {
                id: "welcome",
                title: "Call to Adventure 📜",
                content: "I've hidden a series of clues across our journey. Ancient wisdom (and silly memories) will guide you. Are you ready to begin the hunt?",
                mapPos: { x: 10, y: 80 }
            },
            {
                id: "riddle-1",
                title: "The First Milestone",
                question: "Where did we share our first awkward silence together?",
                hint: "Think of the place we first met...",
                answer: "park",
                clue: "🎁 Memory Fragment Found! It's a piece of our start...",
                fragmentImg: "us/imp1.jpg",
                mapPos: { x: 30, y: 40 }
            },
            {
                id: "riddle-2",
                title: "The Musical Clue",
                question: "What's the song we connect with each other in the starting stage of our love?",
                hint: "Song of Dhanush",
                answer: "Megham karukatha",
                clue: "🎁 Memory Fragment Found! The rhythm of us...",
                fragmentImg: "us/imp2.jpg",
                mapPos: { x: 60, y: 70 }
            },
            {
                id: "riddle-3",
                title: "The Core Truth",
                question: "What's the one word I'd use to describe you?",
                hint: "It starts with D...",
                answer: "Devatha",
                clue: "🎁 Memory Fragment Found! The final piece of the puzzle...",
                fragmentImg: "us/imp3.jpg",
                mapPos: { x: 85, y: 30 }
            },
            {
                id: "final",
                title: "Treasure Discovered! 💎",
                content: "You've successfully tracked all the clues. The final treasure is waiting to be opened...",
                chestMessage: "The real treasure isn't in this box, it's in my heart ❤️. don't think too much that's you ",
                mapPos: { x: 95, y: 15 }
            }
        ]
    },
    {
        day: 2,
        type: "mega-ocean",
        title: "The Ocean of Eternal Love 🌊",
        message: "Dive deep into my heart... there are secrets waiting to be found in the blue.",
        stages: [
            {
                id: "washed-ashore",
                title: "Washed Ashore 🐚",
                content: "Something has washed ashore... It's been traveling for a long time to reach you.",
                bottleMessage: "My dearest Kasthu,\n\nIf you're reading this, it means my message has finally found its way to your shores. Just like this bottle, our journey has been across vast oceans of time and emotion, but I'd navigate them all again just to see your smile.\n\nYou are my safe harbor, my north star, and my greatest treasure.\n\nHappy almost birthday, my love. ❤️\n\n- Tharu"
            },
            {
                id: "heart-compass",
                title: "The Heart's Compass 🧭",
                content: "No matter where we go, my heart always points back to you.",
                milestones: [
                    { label: "Our First Chat", angle: 315, date: "08 Jan 2022" },
                    { label: "The First Meeting", angle: 45, date: "08 Jun 2022" },
                    { label: "That Proposal", angle: 135, date: "03 Aug 2022" },
                    { label: "Every Single Day", angle: 225, date: "Forever" }
                ]
            },
            {
                id: "pearl-blessings",
                title: "The Pearl of Blessings 🦪",
                content: "A rare pearl is growing in the depths. Click the oyster to reveal the hidden blessings of our love.",
                blessings: [
                    "Endless Laughter 😂",
                    "Unwavering Support 🤝",
                    "Infinite Cuddles 🫂",
                    "Pure Happiness ✨",
                    "A Lifetime of Us ❤️"
                ]
            },
            {
                id: "starfish-wishes",
                title: "Starfish Wishes ⭐️",
                content: "They say when you see a glowing starfish, your wish comes true. Tap them to see my wishes for you.",
                wishes: [
                    "May your smile never fade.",
                    "To many more adventures together.",
                    "Wishing you all the success in the world.",
                    "May your heart always be full of joy.",
                    "Always be the strong woman you are."
                ]
            }
        ]
    },
    {
        day: 1,
        type: "day1-one-night-before",
        title: "One Night Before 🌙",
        message: "The night before your birthday — the start of something special. Open this when you're ready for your first surprise.",
        introLine: "Tomorrow is your day — the one day the whole world gets to celebrate you. But tonight is just for us.",
        subIntroLine: "I’ve been waiting for this moment to start something special. Ready?",
        candleLine: "This little light is for you. You light up my whole world — one more sleep and we officially start celebrating the most important person in my life. 💛",
        letterText: "Kasthu,\n\nTonight isn’t just any night. It’s the last night before your birthday — and the first night of a journey I made only for you.\n\nFor the next 30 days, every time you open this, there will be something new: a surprise, a memory, or a little piece of my heart. None of it could ever be as big as the surprise you are in my life — but I tried.\n\nSleep well tonight. The moment you wake up, I’ll be thinking of you. Your day is almost here.\n\nI love you. ❤️",
        letterImage: "us/imp2.jpg",
        countdownLabel: "Until midnight, when it’s officially your birthday…",
        countdownSublabel: "Time left:",
        goodnightLine: "Until then, rest. I’ll be right here, counting down with you.",
        journeyTeaserTitle: "And that’s only the beginning.",
        journeyTeaserLine: "Tommorow is the most important day of your life, and i will be there for you. for my kanmani i will do anything",
        seeYouButtonLabel: "See you tomorrow 💖"
    }
];

// --- LOGIC ---

let openedSurprises = JSON.parse(localStorage.getItem('openedSurprises')) || [];
let currentJarCategory = 'REASONS';

function init() {
    console.log("Initializing UI components...");

    // Fill basic details
    document.querySelectorAll('.girl-name').forEach(el => {
        el.textContent = GIRL_NAME;
        el.classList.add('girl-name-clickable');
        el.addEventListener('click', showNameWow);
    });
    showFirstVisitWelcome();
    const myNameEl = document.getElementById('my-name-display');
    if (myNameEl) myNameEl.textContent = MY_NAME;

    const heroNoteEl = document.getElementById('hero-note');
    if (heroNoteEl) heroNoteEl.textContent = `Every day with you is a gift, but today (and every day of this month) is about celebrating the incredible person you are. I hope this little space makes you smile as much as you make me.`;

    startTimers();
    renderSurprises();
    renderTimeline();
    renderGallery('all');
    renderReasons();
    renderLetters();
    setupEventListeners();
    setupNavigation();
    initUnexpectedSurprises();

    console.log("Initialization complete.");
}

function startTimers() {
    console.log("Starting countdown timer...");
    const lockBanner = document.getElementById('lock-message');
    const bdaySection = document.getElementById('birthday-reveal');

    function update() {
        const target = new Date(`${BIRTHDAY_DATE}T00:00:00`).getTime();
        const now = new Date().getTime();
        const diff = target - now;
        const daysLeft = Math.ceil(diff / 86400000);

        if (diff > 0) {
            const d = Math.floor(diff / 86400000);
            const h = Math.floor((diff % 86400000) / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);

            const dEl = document.getElementById('days');
            const hEl = document.getElementById('hours');
            const mEl = document.getElementById('minutes');
            const sEl = document.getElementById('seconds');

            if (dEl) dEl.textContent = d.toString().padStart(2, '0');
            if (hEl) hEl.textContent = h.toString().padStart(2, '0');
            if (mEl) mEl.textContent = m.toString().padStart(2, '0');
            if (sEl) sEl.textContent = s.toString().padStart(2, '0');
        } else {
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) countdownEl.classList.add('hidden');
        }

        if (DEBUG_MODE) {
            if (lockBanner) lockBanner.classList.add('hidden');
            if (bdaySection) bdaySection.classList.remove('hidden');
        } else {
            if (daysLeft > 30) {
                if (lockBanner) {
                    lockBanner.textContent = "The surprise journey starts when we are 30 days away! ❤️";
                    lockBanner.classList.remove('hidden');
                }
            } else if (daysLeft <= 0) {
                if (bdaySection) bdaySection.classList.remove('hidden');
                if (lockBanner) lockBanner.classList.add('hidden');
            }
        }
    }

    update();
    setInterval(update, 1000);

    if (DEBUG_MODE || new Date(`${BIRTHDAY_DATE}T00:00:00`).getTime() - new Date().getTime() <= 0) {
        startConfetti();
    }
}

function renderSurprises() {
    const grid = document.getElementById('surprises-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const target = new Date(`${BIRTHDAY_DATE}T00:00:00`).getTime();
    const now = new Date().getTime();
    const daysLeft = Math.ceil((target - now) / 86400000);

    SURPRISES.sort((a, b) => b.day - a.day).forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';

        let isLocked = daysLeft > data.day;
        if (DEBUG_MODE || daysLeft <= 0) isLocked = false;

        if (isLocked) {
            card.classList.add('locked');
            card.innerHTML = `<span class="card-number">🔒</span><p>${data.day} Days Left</p>`;
        } else {
            if (openedSurprises.includes(data.day)) card.classList.add('opened');
            card.innerHTML = `<span class="card-number">${data.day}</span><p>${data.type.toUpperCase()}</p>`;
            card.onclick = () => openSurprise(data);
        }
        grid.appendChild(card);
    });
}

function openSurprise(data) {
    const body = document.getElementById('modal-body');
    const title = document.getElementById('modal-title');
    if (title) title.textContent = `Day ${data.day}: ${data.title}`;

    let content = `<p style="font-size:1.1rem; margin-bottom:1.5rem;">${data.message}</p>`;

    if (data.type === 'image') {
        if (data.images && Array.isArray(data.images)) {
            content += `<div class="surprise-image-grid">`;
            data.images.forEach(img => {
                content += `<img src="${img}" style="width:100%; border-radius:10px; cursor:pointer;" onclick="openLightbox('${img}', '${data.title}')">`;
            });
            content += `</div>`;
        } else {
            content += `<img src="${data.placeholder}" style="width:100%; border-radius:10px; margin-top:10px; cursor:pointer;" onclick="openLightbox('${data.placeholder}', '${data.title}')">`;
        }
    } else if (data.type === 'audio') {
        content += `<audio controls style="width:100%; margin-top:10px;"><source src="${data.placeholder}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
    } else if (data.type === 'video') {
        content += `<video controls style="width:100%; border-radius:10px; margin-top:10px;"><source src="${data.placeholder}" type="video/mp4">Your browser does not support video.</video>`;
    } else if (data.type === 'link') {
        let url = data.link;
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            let videoId = url.split('v=')[1];
            if (!videoId && url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1];
            const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
            if (ampersandPosition !== -1) videoId = videoId.substring(0, ampersandPosition);
            if (videoId) {
                content += `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                content += `<a href="${url}" target="_blank" class="action-btn">Open Link 🔗</a>`;
            }
        } else {
            content += `<a href="${url}" target="_blank" class="action-btn">Open Link 🔗</a>`;
        }
    } else if (data.type === 'coupon') {
        content += `<div class="coupon-container">`;
        data.options.forEach(opt => {
            content += `<div class="coupon-ticket">${opt}</div>`;
        });
        content += `</div>`;
    } else if (data.type === 'envelope') {
        content += `
            <div class="envelope-wrapper" onclick="this.classList.toggle('open'); if(this.classList.contains('open')) startTypewriter('env-text', \`${data.message}\`)">
                <div class="envelope-top"></div>
                <div class="envelope-letter">
                    <div id="env-text" class="typewriter-text">Click the heart to open...</div>
                </div>
                <div class="envelope-front"></div>
                <div class="heart-seal">❤️</div>
            </div>`;
    } else if (data.type === 'polaroid') {
        content += `
            <div class="polaroid-desk">
                ${data.images.map(img => {
            const rot = (Math.random() * 20 - 10).toFixed(1);
            const tx = (Math.random() * 20 - 10).toFixed(1);
            const ty = (Math.random() * 20 - 10).toFixed(1);
            return `
                        <div class="polaroid-item" 
                             style="transform: rotate(${rot}deg) translate(${tx}px, ${ty}px)"
                             onclick="openLightbox('${img}', '${data.title}')">
                            <img src="${img}">
                        </div>`;
        }).join('')}
            </div>`;
    } else if (data.type === 'jar') {
        content += `
            <div style="text-align:center;">
                <div class="category-filters">
                    <button class="category-pill active" onclick="changeJarCategory('REASONS', this)">Reasons</button>
                    <button class="category-pill" onclick="changeJarCategory('MEMORIES', this)">Memories</button>
                    <button class="category-pill" onclick="changeJarCategory('PROMISES', this)">Promises</button>
                    <button class="category-pill" onclick="changeJarCategory('COMPLIMENTS', this)">Compliments</button>
                </div>
                <div id="jar-container" class="jar-wrapper" onclick="pickJarNote()">
                    <svg class="jar-svg" viewBox="0 0 100 130">
                        <path d="M30 10 L70 10 L70 25 Q70 30 75 35 Q95 50 95 80 Q95 120 50 120 Q5 120 5 80 Q5 50 25 35 Q30 30 30 25 Z" fill="none" stroke="#ff758c" stroke-width="2"/>
                        <rect x="25" y="5" width="50" height="8" rx="2" fill="#ff758c"/>
                    </svg>
                    <div id="jar-hearts-container"></div>
                </div>
                <audio id="jar-audio"><source src="${data.voiceNotes['REASONS']}" type="audio/mpeg"></audio>
                <div id="jar-note-popup" class="quiz-feedback"></div>
            </div>`;
        currentJarCategory = 'REASONS'; // Reset to default when opening
        setTimeout(() => spawnJarHearts(), 100);
    } else if (data.type === 'scratch') {
        content += `
            <div style="text-align:center;">
                <p>Use your mouse or finger to scratch and reveal!</p>
                <div class="scratch-card-container">
                    <div class="scratch-content">
                        <h3 style="color:var(--primary); margin-bottom:1rem;">Your Coupons!</h3>
                        <div class="coupon-container">
                            ${data.coupons.map(c => `<div class="coupon-ticket">${c}</div>`).join('')}
                        </div>
                    </div>
                    <canvas id="scratch-canvas" width="300" height="400"></canvas>
                </div>
            </div>`;
        setTimeout(() => initScratchCard(), 100);
    } else if (data.type === 'wheel-3d') {
        content += `
            <div style="text-align:center;">
                <div class="wheel-3d-container">
                    <button class="wheel-nav-btn prev" onclick="moveWheel(-1)" aria-label="Previous">▲</button>
                    <div class="wheel-3d-wrapper" id="wheel-3d-wrapper">
                        <div class="wheel-3d-overlay"></div>
                        <div class="wheel-3d-selector"></div>
                        <div id="wheel-3d-drum" class="wheel-3d-drum"></div>
                    </div>
                    <button class="wheel-nav-btn next" onclick="moveWheel(1)" aria-label="Next">▼</button>
                </div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-top:1rem;">Swipe, drag, or use arrows to explore... ✨</p>
                <div id="wheel-3d-result" class="wheel-result"></div>
            </div>`;
        setTimeout(() => initWheel3D(), 100);
    } else if (data.type === 'quiz-game') {
        content += `
            <div id="quiz-game-container">
                <div id="quiz-step-area">
                    <p class="question-counter">Question 1 of ${data.quizSteps.length}</p>
                    <p class="quiz-question">${data.quizSteps[0].question}</p>
                    <div class="quiz-options">
                        ${data.quizSteps[0].options.map((opt, i) => `
                            <button class="quiz-btn" onclick="checkQuizStep(this, ${i === data.quizSteps[0].correct}, 0)">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div id="quiz-feedback" class="quiz-feedback"></div>
                <div id="game-area" class="reveal-content">
                    <h3 style="color:var(--secondary); margin-bottom:1rem;">Phase 1 Complete! 🌟</h3>
                    <p>Now, show me how much you love me! Tap the heart to fill the meter.</p>
                    <div class="love-meter-container">
                        <div class="meter-track">
                            <div id="love-meter-fill" class="meter-fill">
                                <span class="meter-heart">❤️</span>
                            </div>
                        </div>
                        <div id="meter-percentage" style="font-weight:bold; color:var(--primary); margin-bottom:1rem;">0%</div>
                        <div class="tap-btn" onclick="handleMeterTap()">❤️</div>
                    </div>
                </div>
                <div id="final-reveal" class="reveal-content">
                    <h3 style="color:var(--primary); margin-bottom:1rem;">You Filled My Heart! 💖</h3>
                    <p style="font-size:1.1rem; line-height:1.6;">Namma sandai pottaalum, misunderstandings vandhalum, un mela ulla kaadhal mattum koraiyave koraiyadhu. You are the best thing that ever happened to me. Happy early Birthday, my everything! 🌸</p>
                    <img src="us/imp2.jpg" style="width:100%; border-radius:15px; margin-top:1.5rem; box-shadow:var(--shadow-lg);">
                </div>
            </div>`;
    } else if (data.type === 'mega-day-10') {
        content += `
            <div id="mega-surprise-wrapper" class="mega-surprise-container">
                <div class="mega-progress-bar" id="mega-progress"></div>
                <div id="mega-stage-content"></div>
                <div class="mega-nav-btns">
                    <button id="mega-prev-btn" class="action-btn secondary" style="display:none;" onclick="prevMegaStage()">Back</button>
                    <button id="mega-next-btn" class="action-btn" onclick="nextMegaStage()">Continue</button>
                </div>
            </div>`;
        setTimeout(() => initMegaDay10(data), 100);
    } else if (data.type === 'music-player') {
        content += `
            <div class="music-player-wrapper">
                <div class="music-now-playing">
                    <div class="music-disc" id="music-disc">🎵</div>
                    <div class="music-info">
                        <div class="music-track-title" id="music-track-title">${data.tracks[0].title}</div>
                        <div class="music-track-artist" id="music-track-artist">${data.tracks[0].artist}</div>
                    </div>
                </div>
                <div class="music-note" id="music-note">${data.tracks[0].note}</div>
                <div class="music-controls">
                    <button class="music-ctrl-btn" onclick="prevTrack()">⏮️</button>
                    <button class="music-ctrl-btn play-btn" id="music-play-btn" onclick="toggleMusicPlay()">▶️</button>
                    <button class="music-ctrl-btn" onclick="nextTrack()">⏭️</button>
                </div>
                <div class="music-progress-bar">
                    <div class="music-progress-fill" id="music-progress-fill"></div>
                </div>
                <div class="music-tracklist">
                    ${data.tracks.map((t, i) => `
                        <div class="music-track-item ${i === 0 ? 'active' : ''}" onclick="selectTrack(${i})" id="track-${i}">
                            <span class="track-num">${i + 1}</span>
                            <span class="track-name">${t.title}</span>
                            <span class="track-artist-small">${t.artist}</span>
                        </div>
                    `).join('')}
                </div>
                <audio id="music-audio" src="${data.tracks[0].src}"></audio>
            </div>`;
        setTimeout(() => initMusicPlayer(data), 100);
    } else if (data.type === 'mega-scrapbook') {
        content += `
            <div id="scrapbook-wrapper" class="mega-surprise-container scrapbook-skin">
                <div class="mega-progress-bar" id="scrapbook-progress"></div>
                <div id="scrapbook-stage-content" style="height:480px; position:relative; overflow:hidden;"></div>
                <div class="mega-nav-btns">
                    <button id="scrapbook-prev-btn" class="action-btn secondary" style="display:none;" onclick="prevScrapbookStage()">Back</button>
                    <button id="scrapbook-next-btn" class="action-btn" style="display:none;" onclick="nextScrapbookStage()">Continue</button>
                </div>
            </div>`;
        setTimeout(() => initScrapbook(data), 100);
    } else if (data.type === 'card-cascade') {
        content += `
            <div class="cascade-grid" id="cascade-grid">
                ${data.reasons.map((r, i) => `
                    <div class="cascade-card" onclick="flipCard(this)" style="animation-delay: ${i * 0.05}s">
                        <div class="cascade-card-inner">
                            <div class="cascade-card-front">${i + 1}</div>
                            <div class="cascade-card-back">${r}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cascade-counter"><span id="cards-flipped">0</span> / ${data.reasons.length} revealed</div>`;
    } else if (data.type === 'treasure-hunt') {
        content += `
            <div class="treasure-wrapper" id="treasure-wrapper">
                <div class="treasure-riddle" id="treasure-riddle">
                    <div class="riddle-number">Riddle 1 of ${data.riddles.length}</div>
                    <p class="riddle-question">${data.riddles[0].question}</p>
                    <p class="riddle-hint">💡 Hint: ${data.riddles[0].hint}</p>
                    <div class="riddle-input-group">
                        <input type="text" id="riddle-answer" class="riddle-input" placeholder="Type your answer..." onkeydown="if(event.key==='Enter')checkTreasureAnswer()">
                        <button class="action-btn" onclick="checkTreasureAnswer()">Submit</button>
                    </div>
                    <div id="riddle-feedback" class="riddle-feedback"></div>
                </div>
                <div class="treasure-clues" id="treasure-clues">
                    ${data.riddles.map((_, i) => `<div class="clue-slot" id="clue-slot-${i}">🔒 Clue ${i + 1}</div>`).join('')}
                </div>
            </div>`;
        window._treasureData = data;
        window._treasureIdx = 0;
    } else if (data.type === 'mega-ocean') {
        content += `
            <div id="mega-ocean-wrapper" class="mega-surprise-container ocean-skin">
                <div class="mega-progress-bar" id="ocean-progress"></div>
                <div id="ocean-stage-content" style="height:480px; position:relative; overflow:hidden;"></div>
                <div class="mega-nav-btns">
                    <button id="ocean-prev-btn" class="action-btn secondary" style="display:none;" onclick="prevOceanStage()">Back</button>
                    <button id="ocean-next-btn" class="action-btn" style="display:none;" onclick="nextOceanStage()">Continue</button>
                </div>
            </div>`;
        setTimeout(() => initMegaOcean(data), 100);
    } else if (data.type === 'mega-treasure') {
        content += `
            <div id="treasure-journey-wrapper" class="mega-surprise-container treasure-skin">
                <div class="treasure-map-container" id="treasure-map-container">
                    <div class="treasure-map-parchment"></div>
                    <svg class="map-path-svg" id="map-path-svg" viewBox="0 0 100 100">
                        <path id="map-svg-path" d="" fill="none" stroke="var(--primary)" stroke-width="4" stroke-dasharray="8 8" />
                    </svg>
                    <div class="map-node player-marker" id="player-marker">🏃‍♀️</div>
                    ${data.stages.map((st, i) => `
                        <div class="map-node ${st.id === 'final' ? 'chest-node' : 'location-node'}" 
                             id="map-node-${i}" 
                             style="left:${st.mapPos.x}%; top:${st.mapPos.y}%"
                             title="${st.title}">
                             ${st.id === 'final' ? '🔒' : '📍'}
                        </div>
                    `).join('')}
                </div>
                
                <div id="treasure-inventory" class="treasure-inventory">
                    <div class="inventory-slot" id="slot-0" data-empty="true"></div>
                    <div class="inventory-slot" id="slot-1" data-empty="true"></div>
                    <div class="inventory-slot" id="slot-2" data-empty="true"></div>
                </div>

                <div id="treasure-stage-content" class="treasure-stage-area"></div>
                
                <div class="mega-nav-btns">
                    <button id="treasure-prev-btn" class="action-btn secondary" style="display:none;" onclick="prevTreasureStage()">Back</button>
                    <button id="treasure-next-btn" class="action-btn" style="display:none;" onclick="nextTreasureStage()">Continue</button>
                </div>
            </div>`;
        setTimeout(() => initMegaTreasure(data), 100);
    } else if (data.type === 'mega-celestial') {
        content += `
            <div id="celestial-journey-wrapper" class="mega-surprise-container">
                <div class="mega-progress-bar" id="celestial-progress"></div>
                <div id="celestial-stage-content" style="height:450px; position:relative;"></div>
                <div class="mega-nav-btns">
                    <button id="celestial-prev-btn" class="action-btn secondary" style="display:none;" onclick="prevCelestialStage()">Back</button>
                    <button id="celestial-next-btn" class="action-btn" style="display:none;" onclick="nextCelestialStage()">Continue</button>
                </div>
            </div>`;
        setTimeout(() => initMegaCelestial(data), 100);
    } else if (data.type === 'day1-one-night-before') {
        const letterHtml = (data.letterText || '')
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        const subIntro = (data.subIntroLine || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        content += `
            <div class="day1-wrapper" id="day1-wrapper">
                <div class="day1-stage day1-night-sky" id="day1-stage-1">
                    <div class="day1-moon" aria-hidden="true"></div>
                    <div class="day1-shooting-star" aria-hidden="true"></div>
                    <div class="day1-stars"></div>
                    <p class="day1-intro-line">${(data.introLine || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    ${subIntro ? `<p class="day1-sub-intro">${subIntro}</p>` : ''}
                    <button type="button" class="action-btn day1-btn" id="day1-btn-candle">Light a candle</button>
                </div>
                <div class="day1-stage day1-stage-candle" id="day1-stage-2" style="display:none;">
                    <div class="day1-candle-sparkles" id="day1-candle-sparkles" aria-hidden="true"></div>
                    <div class="day1-candle-wrap" id="day1-candle-wrap">
                        <div class="day1-candle">
                            <div class="day1-candle-flame" aria-hidden="true"></div>
                        </div>
                        <p class="day1-candle-line" id="day1-candle-line">${(data.candleLine || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    </div>
                    <button type="button" class="action-btn day1-btn" id="day1-btn-continue">Continue</button>
                </div>
                <div class="day1-stage" id="day1-stage-3" style="display:none;">
                    <div class="day1-letter day1-letter-reveal" id="day1-letter-box">${letterHtml}</div>
                    <p class="day1-letter-ps" id="day1-letter-ps">P.S. I've been waiting to do this for you.</p>
                    ${data.letterImage ? `<img class="day1-letter-image" src="${data.letterImage}" alt="">` : ''}
                    <button type="button" class="action-btn day1-btn" id="day1-btn-more">One more thing…</button>
                </div>
                <div class="day1-stage" id="day1-stage-4" style="display:none;">
                    <p class="day1-countdown-label">${(data.countdownLabel || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    <p class="day1-countdown-sublabel">${((data.countdownSublabel || 'Time left:').replace(/</g, '&lt;').replace(/>/g, '&gt;'))}</p>
                    <p class="day1-countdown-time" id="day1-countdown-time" aria-live="polite">--</p>
                    <p class="day1-goodnight-line">${(data.goodnightLine || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    <button type="button" class="action-btn day1-btn" id="day1-btn-whats-next">What's next?</button>
                </div>
                <div class="day1-stage day1-stage-journey" id="day1-stage-5" style="display:none;">
                    <h3 class="day1-journey-title">${(data.journeyTeaserTitle || 'And that\'s only the beginning.').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
                    <p class="day1-journey-line">${(data.journeyTeaserLine || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    <div class="day1-dots-preview" id="day1-dots-preview" aria-hidden="true"></div>
                    <button type="button" class="action-btn day1-btn day1-btn-see-you" id="day1-btn-see-you">${(data.seeYouButtonLabel || 'See you tomorrow').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</button>
                </div>
            </div>`;
        day1SurpriseData = data;
        currentDay1Stage = 1;
        setTimeout(() => initDay1OneNightBefore(data), 100);
    }

    const wowCurtain = `<div id="wow-curtain" class="wow-curtain" aria-hidden="true">
        <p class="wow-curtain-text">This moment is just for you.</p>
        <p class="wow-curtain-sub">Something special is waiting inside.</p>
    </div>`;
    body.innerHTML = wowCurtain + `<div id="modal-content-wrap" class="modal-content-wrap">` + content + `</div>`;
    openModal();
    setTimeout(function () {
        const curtain = document.getElementById('wow-curtain');
        const contentWrap = document.getElementById('modal-content-wrap');
        if (curtain) {
            curtain.classList.add('wow-curtain-out');
            setTimeout(function () {
                curtain.remove();
                if (contentWrap) contentWrap.classList.add('visible');
            }, 700);
        } else if (contentWrap) {
            contentWrap.classList.add('visible');
        }
    }, 2200);

    if (!openedSurprises.includes(data.day)) {
        openedSurprises.push(data.day);
        localStorage.setItem('openedSurprises', JSON.stringify(openedSurprises));
        renderSurprises();
    }
}

// --- Games & Interaction Logic ---

window.checkQuizStep = (btn, isCorrect, stepIndex) => {
    const feedback = document.getElementById('quiz-feedback');
    const stepArea = document.getElementById('quiz-step-area');
    const currentSurprise = SURPRISES.find(s => s.day === 20);
    const allBtns = btn.parentElement.querySelectorAll('.quiz-btn');

    if (isCorrect) {
        btn.classList.add('correct');
        allBtns.forEach(b => b.disabled = true);
        feedback.textContent = "Correct! ✨";
        feedback.style.color = "#065f46";
        feedback.style.background = "#d1fae5";
        feedback.classList.add('show');

        setTimeout(() => {
            feedback.classList.remove('show');
            const nextIndex = stepIndex + 1;
            if (nextIndex < currentSurprise.quizSteps.length) {
                const step = currentSurprise.quizSteps[nextIndex];
                stepArea.innerHTML = `
                    <p class="question-counter">Question ${nextIndex + 1} of ${currentSurprise.quizSteps.length}</p>
                    <p class="quiz-question">${step.question}</p>
                    <div class="quiz-options">
                        ${step.options.map((opt, i) => `
                            <button class="quiz-btn" onclick="checkQuizStep(this, ${i === step.correct}, ${nextIndex})">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                `;
            } else {
                stepArea.style.display = 'none';
                document.getElementById('game-area').classList.add('show');
                startConfetti();
            }
        }, 1000);
    } else {
        btn.classList.add('wrong');
        feedback.textContent = "Oops! Try again... 🌸";
        feedback.style.color = "#991b1b";
        feedback.style.background = "#fee2e2";
        feedback.classList.add('show');
        setTimeout(() => { btn.classList.remove('wrong'); }, 600);
    }
};

let meterPercent = 0;
window.handleMeterTap = () => {
    if (meterPercent >= 100) return;
    meterPercent += 5;
    if (meterPercent > 100) meterPercent = 100;

    const fill = document.getElementById('love-meter-fill');
    const percText = document.getElementById('meter-percentage');
    if (fill) fill.style.width = `${meterPercent}%`;
    if (percText) percText.textContent = `${meterPercent}%`;

    spawnFloatingHeart();

    if (meterPercent === 100) {
        setTimeout(() => {
            document.getElementById('game-area').style.display = 'none';
            document.getElementById('final-reveal').classList.add('show');
            startLongConfetti();
        }, 800);
    }
};

function spawnFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = (window.innerWidth / 2 - 20) + (Math.random() * 100 - 50) + 'px';
    heart.style.top = (window.innerHeight / 2 - 20) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}

// --- 3D Wheel Logic (Gestural Reveal) ---
let currentRotationX = 0;
let isDragging = false;
let startY = 0;

window.initWheel3D = () => {
    const wrapper = document.getElementById('wheel-3d-wrapper');
    const drum = document.getElementById('wheel-3d-drum');
    if (!drum || !wrapper) return;

    // Reset rotation state on every open
    currentRotationX = 0;
    drum.style.transform = `rotateX(0deg)`;
    drum.style.transition = 'none';

    const data = SURPRISES.find(s => s.day === 10);
    let praises = data.praises;
    if (!praises && data.stages) {
        const wheelStage = data.stages.find(st => st.id === 'wheel');
        if (wheelStage) praises = wheelStage.praises;
    }

    if (!praises) return;

    const count = praises.length;
    const panelHeight = 90; // Increased height for better text visibility
    const radius = Math.round((panelHeight / 2) / Math.tan(Math.PI / count)) + 10;

    drum.innerHTML = '';
    praises.forEach((text, i) => {
        const panel = document.createElement('div');
        panel.className = 'wheel-3d-segment';
        const angle = (360 / count) * i;
        panel.style.transform = `rotateX(${-angle}deg) translateZ(${radius}px)`;
        panel.innerHTML = `<span>${text}</span>`;
        drum.appendChild(panel);
    });

    const handleStart = (e) => {
        isDragging = true;
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        drum.style.transition = 'none';
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        const delta = (startY - y) * 1.2; // Increased sensitivity (was 0.4)
        currentRotationX += delta;
        startY = y;
        drum.style.transform = `rotateX(${currentRotationX}deg)`;
        update3DFocus();
    };

    const handleEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        drum.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        const panelAngle = 360 / praises.length;
        currentRotationX = Math.round(currentRotationX / panelAngle) * panelAngle;
        drum.style.transform = `rotateX(${currentRotationX}deg)`;
        setTimeout(update3DFocus, 400);
    };

    wrapper.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    wrapper.addEventListener('touchstart', handleStart, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd, { passive: false });

    setTimeout(update3DFocus, 100);
};

window.moveWheel = (direction) => {
    const drum = document.getElementById('wheel-3d-drum');
    if (!drum) return;

    const data = SURPRISES.find(s => s.day === 10);
    let praises = data.praises;
    if (!praises && data.stages) {
        const wheelStage = data.stages.find(st => st.id === 'wheel');
        if (wheelStage) praises = wheelStage.praises;
    }
    if (!praises) return;
    const count = praises.length;
    const panelAngle = 360 / count;

    // Moving to next segment (direction 1) means increasing rotationX
    // Moving to prev segment (direction -1) means decreasing rotationX
    currentRotationX += direction * panelAngle;

    drum.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    drum.style.transform = `rotateX(${currentRotationX}deg)`;
    setTimeout(update3DFocus, 400);
};

function update3DFocus() {
    const drum = document.getElementById('wheel-3d-drum');
    if (!drum) return;
    const data = SURPRISES.find(s => s.day === 10);
    let praises = data.praises;
    if (!praises && data.stages) {
        const wheelStage = data.stages.find(st => st.id === 'wheel');
        if (wheelStage) praises = wheelStage.praises;
    }
    if (!praises) return;
    const count = praises.length;
    const panelAngle = 360 / count;
    const normalizedRot = ((currentRotationX % 360) + 360) % 360;
    const activeIdx = Math.round(normalizedRot / panelAngle) % count;

    const segments = drum.querySelectorAll('.wheel-3d-segment');
    segments.forEach((seg, i) => {
        if (i === activeIdx) seg.classList.add('focus');
        else seg.classList.remove('focus');
    });
}

window.startTypewriter = (id, text) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.started) return;
    el.dataset.started = 'true';
    el.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
};



function changeJarCategory(category, btn) {
    currentJarCategory = category;

    // Update active pill
    document.querySelectorAll('.category-pill').forEach(pill => pill.classList.remove('active'));
    btn.classList.add('active');

    // Update audio source
    const jarSurprise = SURPRISES.find(s => s.day === 15);
    const audio = document.getElementById('jar-audio');
    if (audio && jarSurprise && jarSurprise.voiceNotes) {
        audio.src = jarSurprise.voiceNotes[category];
        audio.load();
    }

    // Re-spawn hearts for visual effect
    spawnJarHearts();
}

function spawnJarHearts() {
    const container = document.getElementById('jar-hearts-container');
    if (!container) return;
    container.innerHTML = '';

    // Map categories to colors for variety
    const colors = {
        'REASONS': '#ff758c',
        'MEMORIES': '#ff7eb3',
        'PROMISES': '#75baff',
        'COMPLIMENTS': '#ffb375'
    };
    const color = colors[currentJarCategory] || '#ff758c';

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'jar-heart';
        heart.innerHTML = '❤️';
        heart.style.left = (Math.random() * 60 + 20) + '%';
        heart.style.bottom = (Math.random() * 40 + 10) + '%';
        heart.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(${Math.random() * 0.5 + 0.8})`;
        heart.style.color = color;
        container.appendChild(heart);
    }
}

function pickJarNote() {
    const jar = document.getElementById('jar-container');
    const popup = document.getElementById('jar-note-popup');
    const audio = document.getElementById('jar-audio');

    // Shaking Animation
    jar.classList.add('shaking');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Audio play blocked"));
    }

    // Flying Heart Effect
    spawnFloatingHeart();

    setTimeout(() => {
        jar.classList.remove('shaking');

        let pool = [];
        if (currentJarCategory === 'REASONS') pool = REASONS;
        else if (currentJarCategory === 'MEMORIES') pool = MEMORIES;
        else if (currentJarCategory === 'PROMISES') pool = PROMISES;
        else if (currentJarCategory === 'COMPLIMENTS') pool = COMPLIMENTS;

        const note = pool[Math.floor(Math.random() * pool.length)];

        popup.innerHTML = `<span style="color:var(--primary); font-weight:bold; display:block; margin-bottom:0.5rem;">${currentJarCategory}:</span> "${note}"`;
        popup.classList.add('show');

        // Hide popup after a while
        setTimeout(() => popup.classList.remove('show'), 4000);
    }, 500);
}

window.initScratchCard = () => {
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = '#ccc';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#888';
    ctx.font = '20px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch here! ✨', width / 2, height / 2);

    let isDrawing = false;
    function scratch(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
        checkScratchProgress();
    }
    function checkScratchProgress() {
        const imageData = ctx.getImageData(0, 0, width, height);
        let clearPixels = 0;
        for (let i = 3; i < imageData.data.length; i += 4) { if (imageData.data[i] === 0) clearPixels++; }
        if (clearPixels > (imageData.data.length / 4) * 0.6) {
            canvas.style.opacity = '0';
            canvas.style.pointerEvents = 'none';
            startConfetti();
        }
    }
    canvas.onmousedown = canvas.ontouchstart = () => isDrawing = true;
    canvas.onmouseup = canvas.ontouchend = () => isDrawing = false;
    canvas.onmousemove = canvas.ontouchmove = scratch;
};

// --- Mega Day 3: Treasure Hunt Logic ---

let treasureInventory = [];

window.initMegaTreasure = (data) => {
    megaSurpriseData = data;
    currentMegaStage = 0;
    treasureInventory = [];
    renderTreasureStage();
    updateTreasureMap();
    updateInventoryUI();
};

window.nextTreasureStage = () => {
    if (currentMegaStage < megaSurpriseData.stages.length - 1) {
        currentMegaStage++;
        renderTreasureStage();
        updateTreasureMap();
    } else {
        closeModal();
    }
};

window.prevTreasureStage = () => {
    if (currentMegaStage > 0) {
        currentMegaStage--;
        renderTreasureStage();
        updateTreasureMap();
    }
};

function renderTreasureStage() {
    const parent = document.getElementById('treasure-stage-content');
    const prevBtn = document.getElementById('treasure-prev-btn');
    const nextBtn = document.getElementById('treasure-next-btn');
    const stage = megaSurpriseData.stages[currentMegaStage];

    if (!parent) return;

    // Default nav visibility
    if (prevBtn) prevBtn.style.display = currentMegaStage === 0 ? 'none' : 'block';
    if (nextBtn) {
        const isRiddle = stage.id.startsWith('riddle');
        const isFinal = stage.id === 'final';
        // Hide next btn if riddle is not solved or if it's the final ritual stage
        nextBtn.style.display = (isRiddle || isFinal) ? 'none' : 'block';
        nextBtn.textContent = currentMegaStage === megaSurpriseData.stages.length - 1 ? 'End Journey ❤️' : 'Continue';
    }

    let html = `
        <div class="treasure-stage active">
            <h3 class="treasure-stage-title">${stage.title}</h3>
            <div class="treasure-stage-body">
    `;

    if (stage.id === 'welcome') {
        html += `
            <p class="treasure-text">${stage.content}</p>
            <div class="treasure-welcome-icon">📜🕯️</div>
        `;
    } else if (stage.id.startsWith('riddle')) {
        html += `
            <p class="treasure-question">${stage.question}</p>
            <p class="treasure-hint">💡 Hint: ${stage.hint}</p>
            <div class="treasure-input-group">
                <input type="text" id="mega-riddle-answer" class="treasure-input" placeholder="Enter answer..." onkeydown="if(event.key==='Enter')checkMegaTreasureAnswer()">
                <button class="action-btn" onclick="checkMegaTreasureAnswer()">Unlock</button>
            </div>
            <div id="mega-riddle-feedback" class="treasure-feedback"></div>
            <div id="fragment-preview" class="fragment-preview"></div>
        `;
    } else if (stage.id === 'final') {
        html += `
            <div class="ritual-container">
                <p class="treasure-text">The treasure is sealed with three memory locks. Place the collected fragments to break the seal!</p>
                <div class="ritual-slots">
                    <div class="ritual-slot" id="ritual-slot-0" onclick="placeFragment(0)"></div>
                    <div class="ritual-slot" id="ritual-slot-1" onclick="placeFragment(1)"></div>
                    <div class="ritual-slot" id="ritual-slot-2" onclick="placeFragment(2)"></div>
                </div>
                <div class="treasure-chest-wrapper locked" id="chest-wrapper">
                    <div class="treasure-chest" id="treasure-chest">🎁</div>
                    <div class="chest-shield" id="chest-shield">✨</div>
                </div>
                <div id="chest-reveal-msg" class="chest-reveal-msg" style="display:none;">
                    ${stage.chestMessage}
                </div>
            </div>
        `;
    }

    html += `</div></div>`;
    parent.innerHTML = html;
}

function updateTreasureMap() {
    const stage = megaSurpriseData.stages[currentMegaStage];
    const player = document.getElementById('player-marker');
    const path = document.getElementById('map-svg-path');
    if (!player || !path) return;

    // Move player
    player.style.left = stage.mapPos.x + '%';
    player.style.top = stage.mapPos.y + '%';

    // Update nodes
    megaSurpriseData.stages.forEach((st, i) => {
        const node = document.getElementById(`map-node-${i}`);
        if (node) {
            if (i < currentMegaStage) node.className = 'map-node visited';
            else if (i === currentMegaStage) node.className = 'map-node current';
            else node.className = 'map-node location-node';
        }
    });

    // Draw SVG path
    let d = '';
    for (let i = 0; i <= currentMegaStage; i++) {
        const pos = megaSurpriseData.stages[i].mapPos;
        // Convert % to "map space" (assuming 100% = a certain width/height in SVG viewbox)
        // SVG viewbox is usually 0 0 100 100 for percentage drawing
        d += (i === 0 ? 'M' : 'L') + ` ${pos.x} ${pos.y}`;
    }
    path.setAttribute('d', d);
}

window.checkMegaTreasureAnswer = () => {
    const input = document.getElementById('mega-riddle-answer');
    const feedback = document.getElementById('mega-riddle-feedback');
    const stage = megaSurpriseData.stages[currentMegaStage];

    if (!input || !feedback) return;

    const userAnswer = input.value.trim().toLowerCase();
    if (userAnswer.includes(stage.answer.toLowerCase())) {
        feedback.textContent = "✅ Correct!";
        feedback.className = "treasure-feedback success show";
        input.disabled = true;

        // Show fragment preview
        const preview = document.getElementById('fragment-preview');
        preview.innerHTML = `
            <div class="collectible-fragment anim-in" onclick="collectFragment('${stage.fragmentImg}')">
                <img src="${stage.fragmentImg}">
                <span>Memory Collected! (Click to stash)</span>
            </div>
        `;
        startConfetti();
    } else {
        feedback.textContent = "❌ Not quite... Try again!";
        feedback.className = "treasure-feedback error show";
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
};

window.collectFragment = (imgUrl) => {
    const fragment = document.querySelector('.collectible-fragment');
    if (!fragment) return;

    treasureInventory.push(imgUrl);
    updateInventoryUI();

    // Fly to inventory animation logic
    fragment.classList.add('fly-to-inventory');
    setTimeout(() => {
        const nextBtn = document.getElementById('treasure-next-btn');
        if (nextBtn) nextBtn.style.display = 'block';
        fragment.remove();
    }, 1000);
};

function updateInventoryUI() {
    treasureInventory.forEach((img, i) => {
        const slot = document.getElementById(`slot-${i}`);
        if (slot) {
            slot.innerHTML = `<img src="${img}" class="inventory-img">`;
            slot.dataset.empty = "false";
        }
    });
}

let ritualProgress = 0;
window.placeFragment = (slotIdx) => {
    const targetSlot = document.getElementById(`ritual-slot-${slotIdx}`);
    if (!targetSlot || targetSlot.classList.contains('filled')) return;

    // Check if we have this fragment in inventory
    if (treasureInventory[slotIdx]) {
        targetSlot.innerHTML = `<img src="${treasureInventory[slotIdx]}" class="ritual-img">`;
        targetSlot.classList.add('filled');
        ritualProgress++;

        if (ritualProgress === 3) {
            unlockFinalChest();
        }
    }
};

function unlockFinalChest() {
    const shield = document.getElementById('chest-shield');
    const wrapper = document.getElementById('chest-wrapper');
    const chest = document.getElementById('treasure-chest');

    if (shield) shield.classList.add('dissolve');
    if (wrapper) wrapper.classList.remove('locked');

    setTimeout(() => {
        chest.onclick = (e) => openUltimateChest(chest);
        chest.classList.add('ready');
    }, 1000);
}

window.openUltimateChest = (chest) => {
    const msg = document.getElementById('chest-reveal-msg');
    if (chest && msg && !chest.classList.contains('opened')) {
        chest.classList.add('opened');
        chest.textContent = '🔓';
        msg.style.display = 'block';
        msg.classList.add('reveal-anim');
        startLongConfetti();

        // Show next button finally
        const nextBtn = document.getElementById('treasure-next-btn');
        if (nextBtn) nextBtn.style.display = 'block';
    }
};



// --- Mega Ocean Logic (Day 2) ---

let currentOceanStage = 0;
let oceanSurpriseData = null;

window.initMegaOcean = (data) => {
    oceanSurpriseData = data;
    currentOceanStage = 0;
    renderOceanProgress();
    renderOceanStage();
};

function renderOceanProgress() {
    const progress = document.getElementById('ocean-progress');
    if (!progress) return;
    progress.innerHTML = oceanSurpriseData.stages.map((_, i) => `
        <div class="progress-dot ${i <= currentOceanStage ? 'active' : ''}"></div>
    `).join('');
}

window.nextOceanStage = () => {
    if (currentOceanStage < oceanSurpriseData.stages.length - 1) {
        currentOceanStage++;
        renderOceanProgress();
        renderOceanStage();
    } else {
        closeModal();
    }
};

window.prevOceanStage = () => {
    if (currentOceanStage > 0) {
        currentOceanStage--;
        renderOceanProgress();
        renderOceanStage();
    }
};

function renderOceanStage() {
    const area = document.getElementById('ocean-stage-content');
    const nextBtn = document.getElementById('ocean-next-btn');
    const prevBtn = document.getElementById('ocean-prev-btn');
    const stage = oceanSurpriseData.stages[currentOceanStage];

    if (!area) return;
    area.innerHTML = '';

    if (prevBtn) prevBtn.style.display = currentOceanStage === 0 ? 'none' : 'block';
    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.textContent = currentOceanStage === oceanSurpriseData.stages.length - 1 ? 'Finish 🌊' : 'Continue 🌊';
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'ocean-stage-wrapper';
    wrapper.style.height = '100%';
    area.appendChild(wrapper);

    if (stage.id === 'washed-ashore') {
        renderOceanBottle(wrapper, stage);
    } else if (stage.id === 'heart-compass') {
        renderOceanCompass(wrapper, stage);
    } else if (stage.id === 'pearl-blessings') {
        renderOceanOyster(wrapper, stage);
    } else if (stage.id === 'starfish-wishes') {
        renderOceanStarfish(wrapper, stage);
    }
}

function renderOceanBottle(parent, stage) {
    parent.innerHTML = `
        <div class="bottle-scene">
            <div class="bottle-ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="bottle-container" id="bottle-container" onclick="openOceanBottle()">
                <div class="bottle-item">
                    <div class="bottle-body">
                        <div class="bottle-cork"></div>
                        <div class="bottle-highlight"></div>
                        <div class="bottle-scroll-tiny"></div>
                    </div>
                </div>
            </div>
            <div class="scroll-wrapper" id="scroll-wrapper">
                <div class="scroll-paper">
                    <div class="scroll-content">
                        <div class="scroll-text" id="scroll-message"></div>
                        <div class="scroll-signature">- Tharu ❤️</div>
                    </div>
                </div>
            </div>
            <p class="bottle-hint" id="bottle-hint">Click the bottle to open the message...</p>
        </div>`;
    window._bottleMessage = stage.bottleMessage;
}

window.openOceanBottle = () => {
    const bottle = document.getElementById('bottle-container');
    const scroll = document.getElementById('scroll-wrapper');
    const hint = document.getElementById('bottle-hint');
    const messageEl = document.getElementById('scroll-message');

    if (!bottle || !scroll || !messageEl || bottle.classList.contains('opened')) return;

    bottle.classList.add('opened');
    if (hint) hint.style.opacity = '0';

    setTimeout(() => {
        bottle.style.display = 'none';
        scroll.classList.add('open');
        setTimeout(() => {
            startTypewriter('scroll-message', window._bottleMessage || "I love you! ❤️");
            const nextBtn = document.getElementById('ocean-next-btn');
            if (nextBtn) nextBtn.style.display = 'block';
            if (window.startLongConfetti) startLongConfetti();
        }, 800);
    }, 1000);
};

function renderOceanCompass(parent, stage) {
    parent.innerHTML = `
        <div class="compass-scene">
            <h3 class="ocean-title">${stage.title}</h3>
            <p class="ocean-desc">${stage.content}</p>
            <div class="compass-wrapper">
                <div class="compass-dial" id="compass-dial">
                    ${stage.milestones.map(m => `<div class="compass-tick" style="--rot: ${m.angle}deg; transform: rotate(var(--rot))"><span>${m.label}</span></div>`).join('')}
                </div>
                <div class="compass-needle" id="compass-needle"></div>
            </div>
            <div id="compass-reveal" class="compass-reveal"></div>
            <button class="action-btn" id="compass-spin-btn" onclick="rotateCompass()">Spin the Compass</button>
        </div>
    `;
    window._milestoneIdx = 0;
}

window.rotateCompass = () => {
    const needle = document.getElementById('compass-needle');
    const reveal = document.getElementById('compass-reveal');
    const btn = document.getElementById('compass-spin-btn');
    if (!needle) return;

    const milestones = oceanSurpriseData.stages[1].milestones;
    const m = milestones[window._milestoneIdx];

    needle.style.transform = `translate(-50%, -100%) rotate(${360 * 3 + m.angle}deg)`;
    btn.disabled = true;

    setTimeout(() => {
        reveal.innerHTML = `<div class="compass-praise"><h4>${m.label}</h4><p>${m.date}</p></div>`;
        reveal.classList.add('show');
        window._milestoneIdx++;

        if (window._milestoneIdx < milestones.length) {
            btn.disabled = false;
            btn.textContent = "Spin Again 🧭";
        } else {
            btn.style.display = 'none';
            const nextBtn = document.getElementById('ocean-next-btn');
            if (nextBtn) nextBtn.style.display = 'block';
        }
    }, 2000);
};

function renderOceanOyster(parent, stage) {
    parent.innerHTML = `
        <div class="oyster-scene">
            <h3 class="ocean-title">${stage.title}</h3>
            <p class="ocean-desc">${stage.content}</p>
            <div class="oyster-container" id="oyster-container" onclick="tapOyster()">
                <div class="oyster-shell top"></div>
                <div class="oyster-shell bottom"></div>
                <div class="oyster-pearl" id="oyster-pearl">✨</div>
            </div>
            <div id="oyster-praise" class="oyster-praise"></div>
            <div class="oyster-hint">Tap the oyster to open it! (<span id="oyster-clicks">5</span> clicks left)</div>
        </div>
    `;
    window._oysterClicks = 5;
}

window.tapOyster = () => {
    const oyster = document.getElementById('oyster-container');
    const pearl = document.getElementById('oyster-pearl');
    const praise = document.getElementById('oyster-praise');
    const counter = document.getElementById('oyster-clicks');

    if (!oyster || window._oysterClicks <= 0) return;

    window._oysterClicks--;
    if (counter) counter.textContent = window._oysterClicks;

    oyster.classList.add('shake');
    setTimeout(() => oyster.classList.remove('shake'), 300);

    if (window._oysterClicks === 0) {
        oyster.classList.add('opened');
        const blessings = oceanSurpriseData.stages[2].blessings;
        praise.innerHTML = blessings.map((b, i) => `<div class="blessing-pearl" style="animation-delay: ${i * 0.2}s">${b}</div>`).join('');
        praise.classList.add('show');

        const nextBtn = document.getElementById('ocean-next-btn');
        if (nextBtn) nextBtn.style.display = 'block';
        if (window.startLongConfetti) startLongConfetti();
    }
};

function renderOceanStarfish(parent, stage) {
    parent.innerHTML = `
        <div class="starfish-scene">
            <h3 class="ocean-title">${stage.title}</h3>
            <p class="ocean-desc">${stage.content}</p>
            <div class="starfish-grid">
                ${stage.wishes.map((w, i) => `
                    <div class="starfish-item" onclick="revealStarfishWish(this, '${w}')" style="animation-delay: ${i * 0.3}s">
                        <span class="starfish-emoji">⭐</span>
                        <div class="starfish-content">${w}</div>
                    </div>
                `).join('')}
            </div>
            <div class="oyster-hint">Collect all starfish to finish! (<span id="starfish-count">0</span>/${stage.wishes.length})</div>
        </div>
    `;
    window._starfishRevealed = 0;
}

window.revealStarfishWish = (el, wish) => {
    if (el.classList.contains('active')) return;
    el.classList.add('active');
    window._starfishRevealed++;

    const count = document.getElementById('starfish-count');
    if (count) count.textContent = window._starfishRevealed;

    const total = oceanSurpriseData.stages[3].wishes.length;
    if (window._starfishRevealed === total) {
        const nextBtn = document.getElementById('ocean-next-btn');
        if (nextBtn) nextBtn.style.display = 'block';
        startLongConfetti();
    }
};

function startLongConfetti() {
    startConfetti();
    setTimeout(startConfetti, 1000);
    setTimeout(startConfetti, 2000);
}

function renderTimeline() {
    const cont = document.getElementById('timeline-container');
    if (!cont) return;
    cont.innerHTML = '';
    TIMELINE_EVENTS.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span style="color:var(--primary); font-weight:bold;">${ev.date}</span>
                <h3 style="margin:5px 0;">${ev.title}</h3>
                <p style="color:var(--text-muted); font-size:0.9rem;">${ev.desc}</p>
            </div>
        `;
        cont.appendChild(item);
    });
}

function renderGallery(filter) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const items = filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);
    items.forEach(img => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <img src="${img.url}" alt="Gallery item">
            <div class="gallery-overlay"><p>${img.caption}</p></div>
        `;
        div.onclick = () => openLightbox(img.url, img.caption);
        grid.appendChild(div);
    });
}

function renderReasons() {
    const cont = document.getElementById('reasons-display');
    if (!cont) return;
    cont.innerHTML = '';
    REASONS.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = 'reason-card';
        div.innerHTML = `<p><strong>#${i + 1}</strong>: ${r}</p>`;
        cont.appendChild(div);
    });
}

function renderLetters() {
    const grid = document.getElementById('letters-grid');
    if (!grid) return;
    grid.innerHTML = '';
    LETTERS.forEach(l => {
        const div = document.createElement('div');
        div.className = 'letter-card';
        div.innerHTML = `<h3>Open when you're ${l.title}</h3><p>Click to read...</p>`;
        div.onclick = () => {
            document.getElementById('modal-title').textContent = `Open when you're ${l.title}`;
            document.getElementById('modal-body').innerHTML = `<p style="font-size:1.1rem; line-height:1.6;">${l.message}</p>`;
            openModal();
        };
        grid.appendChild(div);
    });
}

function setupEventListeners() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(l => {
        l.onclick = () => {
            links.forEach(link => link.classList.remove('active'));
            l.classList.add('active');
        };
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        };
    });

    const shuffleBtn = document.getElementById('shuffle-reason');
    if (shuffleBtn) {
        shuffleBtn.onclick = () => {
            const r = REASONS[Math.floor(Math.random() * REASONS.length)];
            document.getElementById('modal-title').textContent = "Random Reason I Love You";
            document.getElementById('modal-body').innerHTML = `<div style="text-align:center; padding:2rem;"><h2 style="color:var(--primary);">"${r}"</h2></div>`;
            openModal();
        };
    }

    const unlockBtn = document.getElementById('unlock-secret');
    if (unlockBtn) {
        unlockBtn.onclick = () => {
            const input = document.getElementById('passcode-input').value;
            if (input === PASSCODE || (DEBUG_MODE && input === "0000")) {
                document.getElementById('passcode-entry').classList.add('hidden');
                const content = document.getElementById('secret-content');
                if (content) {
                    content.classList.remove('hidden');
                    document.getElementById('secret-memory').textContent = `My favorite memory is just us being us — no filters, no pretense, just love...Naan senja ellathukkum romba romba sorry. Unna hurt panninathuku manasara mannippu ketkuren. I love you so much ❤️`;
                }
            } else { alert("Wrong password! Hint: The year it all started."); }
        };
    }

    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) closeBtn.onclick = closeModal;

    window.onclick = (e) => {
        if (e.target.id === 'modal-backdrop') closeModal();
        if (e.target.id === 'lightbox') closeLightbox();
    };

    window.onkeydown = (e) => { if (e.key === 'Escape') { closeModal(); closeLightbox(); } };

    const lbClose = document.getElementById('close-lightbox');
    if (lbClose) lbClose.onclick = closeLightbox;

    const finalBtn = document.getElementById('final-message-btn');
    if (finalBtn) {
        finalBtn.onclick = () => {
            document.getElementById('modal-title').textContent = "My Final Message";
            document.getElementById('modal-body').innerHTML = `<div style="line-height:1.6;"><p>Happy Birthday ${GIRL_NAME}!</p><br><p>I love you more than words can say.</p></div>`;
            openModal();
        };
    }
}

function setupNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.onscroll = () => {
        let current = "";
        sections.forEach(s => {
            const top = s.offsetTop - 100;
            if (window.pageYOffset >= top) current = s.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) link.classList.add('active');
        });
    };
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    if (menuToggle && navLinksContainer) {
        menuToggle.onclick = () => {
            menuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        };
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                menuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
            };
        });
    }
}

function showNameWow(e) {
    const msg = document.getElementById('wow-floating-msg');
    if (msg) return;
    const el = document.createElement('div');
    el.id = 'wow-floating-msg';
    el.className = 'wow-floating-msg';
    el.innerHTML = 'Yes, you. And you\'re amazing. 💖';
    document.body.appendChild(el);
    const rect = e.target.getBoundingClientRect();
    el.style.left = (rect.left + rect.width / 2) + 'px';
    el.style.top = (rect.top - 10) + 'px';
    el.style.transform = 'translate(-50%, -100%)';
    requestAnimationFrame(function () { el.classList.add('wow-floating-msg-visible'); });
    setTimeout(function () {
        el.classList.add('wow-floating-msg-out');
        setTimeout(function () { el.remove(); }, 500);
    }, 2800);
}

function showFirstVisitWelcome() {
    if (localStorage.getItem('wowWelcomeDone')) return;
    const hero = document.getElementById('hero');
    if (!hero) return;
    const wrap = document.createElement('div');
    wrap.id = 'wow-welcome-wrap';
    wrap.className = 'wow-welcome-wrap';
    wrap.innerHTML = '<p class="wow-welcome-text">Hey ' + GIRL_NAME + ' 💕</p><p class="wow-welcome-sub">This is just for you.</p><div class="wow-welcome-hearts" aria-hidden="true"></div>';
    hero.appendChild(wrap);
    for (let i = 0; i < 8; i++) {
        const h = document.createElement('span');
        h.className = 'wow-welcome-heart';
        h.textContent = '♥';
        h.style.left = (10 + Math.random() * 80) + '%';
        h.style.animationDelay = (Math.random() * 1.5) + 's';
        wrap.querySelector('.wow-welcome-hearts').appendChild(h);
    }
    requestAnimationFrame(function () { wrap.classList.add('wow-welcome-visible'); });
    setTimeout(function () {
        wrap.classList.add('wow-welcome-out');
        setTimeout(function () {
            wrap.remove();
            localStorage.setItem('wowWelcomeDone', '1');
        }, 800);
    }, 3800);
}

// --- Unexpected creative surprises (different & new) ---
function initUnexpectedSurprises() {
    startHeartTrail();
    startThinkingOfYouTimer();
    setupSecretSpot();
    setupScrollSurprise();
    setupShakeHearts();
}

var heartTrailLast = 0;
var heartTrailThrottle = 120;

function startHeartTrail() {
    var container = document.getElementById('heart-trail-container');
    if (!container) return;
    var maxHearts = 12;
    var hearts = [];

    function spawnHeart(x, y) {
        var now = Date.now();
        if (now - heartTrailLast < heartTrailThrottle) return;
        heartTrailLast = now;
        if (hearts.length >= maxHearts) return;
        var el = document.createElement('span');
        el.className = 'heart-trail-dot';
        el.textContent = ['♥', '💕', '💖'][Math.floor(Math.random() * 3)];
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        container.appendChild(el);
        hearts.push(el);
        setTimeout(function () {
            el.classList.add('heart-trail-dot-gone');
            setTimeout(function () {
                el.remove();
                var i = hearts.indexOf(el);
                if (i > -1) hearts.splice(i, 1);
            }, 800);
        }, 50);
    }

    document.addEventListener('mousemove', function (e) {
        if (document.getElementById('modal-backdrop') && !document.getElementById('modal-backdrop').classList.contains('hidden')) return;
        spawnHeart(e.clientX, e.clientY);
    }, { passive: true });
    document.addEventListener('touchmove', function (e) {
        if (e.touches.length === 0) return;
        if (document.getElementById('modal-backdrop') && !document.getElementById('modal-backdrop').classList.contains('hidden')) return;
        spawnHeart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
}

function startThinkingOfYouTimer() {
    if (sessionStorage.getItem('thinkingOfYouShown')) return;
    setTimeout(function () {
        if (sessionStorage.getItem('thinkingOfYouShown')) return;
        sessionStorage.setItem('thinkingOfYouShown', '1');
        var toast = document.createElement('div');
        toast.id = 'thinking-of-you-toast';
        toast.className = 'thinking-of-you-toast';
        toast.innerHTML = 'Just so you know — I\'m thinking of you right now. 💕';
        document.body.appendChild(toast);
        requestAnimationFrame(function () { toast.classList.add('thinking-of-you-toast-visible'); });
        setTimeout(function () {
            toast.classList.add('thinking-of-you-toast-out');
            setTimeout(function () { toast.remove(); }, 600);
        }, 4000);
    }, 88000);
}

function setupSecretSpot() {
    var footer = document.querySelector('.footer');
    if (!footer) return;
    var clicks = 0;
    var resetAt = 0;
    footer.addEventListener('click', function () {
        var now = Date.now();
        if (now - resetAt > 700) clicks = 0;
        clicks++;
        resetAt = now;
        if (clicks >= 3) {
            clicks = 0;
            showSecretReveal();
        }
    });
}

function showSecretReveal() {
    if (document.getElementById('secret-reveal-overlay')) return;
    var overlay = document.createElement('div');
    overlay.id = 'secret-reveal-overlay';
    overlay.className = 'secret-reveal-overlay';
    overlay.innerHTML = '<p class="secret-reveal-text">You found the secret.</p><p class="secret-reveal-sub">There\'s no end to how much I care about you. 💖</p>';
    overlay.addEventListener('click', function () {
        overlay.classList.add('secret-reveal-overlay-out');
        setTimeout(function () { overlay.remove(); }, 500);
    });
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('secret-reveal-overlay-visible'); });
}

function setupScrollSurprise() {
    if (sessionStorage.getItem('scrollSurpriseShown')) return;
    var target = document.getElementById('letters') || document.querySelector('.footer');
    if (!target) return;
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting || sessionStorage.getItem('scrollSurpriseShown')) return;
            sessionStorage.setItem('scrollSurpriseShown', '1');
            showScrollSurprise();
        });
    }, { threshold: 0.3, rootMargin: '0px' });
    observer.observe(target);
}

function showScrollSurprise() {
    if (document.getElementById('scroll-surprise-overlay')) return;
    var overlay = document.createElement('div');
    overlay.id = 'scroll-surprise-overlay';
    overlay.className = 'scroll-surprise-overlay';
    overlay.innerHTML = '<p class="scroll-surprise-text">You\'re reading every part.</p><p class="scroll-surprise-sub">I made every word for you. 💕</p>';
    overlay.addEventListener('click', function () {
        overlay.classList.add('scroll-surprise-overlay-out');
        setTimeout(function () { overlay.remove(); }, 500);
    });
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('scroll-surprise-overlay-visible'); });
}

function setupShakeHearts() {
    var lastShake = 0;
    var lastAcc = { x: 0, y: 0, z: 0 };
    function onMotion(e) {
        var a = e.accelerationIncludingGravity || e.acceleration;
        if (!a) return;
        var dx = Math.abs((a.x || 0) - lastAcc.x);
        var dy = Math.abs((a.y || 0) - lastAcc.y);
        var dz = Math.abs((a.z || 0) - lastAcc.z);
        lastAcc = { x: a.x || 0, y: a.y || 0, z: a.z || 0 };
        if (dx + dy + dz > 25 && Date.now() - lastShake > 2000) {
            lastShake = Date.now();
            burstHearts();
        }
    }
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        document.body.addEventListener('click', function requestPermissionOnce() {
            DeviceMotionEvent.requestPermission().then(function (p) {
                if (p === 'granted') window.addEventListener('devicemotion', onMotion, { passive: true });
            }).catch(function () {});
            document.body.removeEventListener('click', requestPermissionOnce);
        }, { once: true });
    } else {
        window.addEventListener('devicemotion', onMotion, { passive: true });
    }
}

function burstHearts() {
    var container = document.getElementById('heart-trail-container');
    if (!container) return;
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var symbols = ['♥', '💕', '💖', '💗'];
    for (var i = 0; i < 18; i++) {
        (function (j) {
            setTimeout(function () {
                var el = document.createElement('span');
                el.className = 'heart-burst-dot';
                el.textContent = symbols[j % symbols.length];
                el.style.left = centerX + 'px';
                el.style.top = centerY + 'px';
                var angle = (j / 18) * Math.PI * 2 + Math.random();
                var dist = 80 + Math.random() * 120;
                el.style.setProperty('--burst-x', Math.cos(angle) * dist + 'px');
                el.style.setProperty('--burst-y', Math.sin(angle) * dist + 'px');
                container.appendChild(el);
                setTimeout(function () {
                    el.classList.add('heart-burst-dot-gone');
                    setTimeout(function () { el.remove(); }, 700);
                }, 100);
            }, j * 40);
        })(i);
    }
}

function openModal() {
    const m = document.getElementById('modal-backdrop');
    if (m) { m.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
}
function closeModal() {
    if (day1CountdownInterval) {
        clearInterval(day1CountdownInterval);
        day1CountdownInterval = null;
    }
    const m = document.getElementById('modal-backdrop');
    if (m) { m.classList.add('hidden'); document.body.style.overflow = 'auto'; }

    const modal = document.getElementById('surprise-modal'); // Assuming 'surprise-modal' is the ID for the mega surprise modal
    if (modal) modal.style.display = 'none';

    // Stop mega surprise music if playing
    if (megaAudio) {
        megaAudio.pause();
        megaAudio = null;
    }

    // Stop music player audio if playing
    const musicAudio = document.getElementById('music-audio');
    if (musicAudio) {
        musicAudio.pause();
    }

    // Stop any quiz/game timers
}
function openLightbox(url, cap) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const text = document.getElementById('lightbox-caption');
    if (lb && img && text) {
        img.src = url;
        text.textContent = cap;
        lb.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}
function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) { lb.classList.add('hidden'); document.body.style.overflow = 'auto'; }
}

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            s: Math.random() * 6 + 2,
            v: Math.random() * 2 + 2,
            c: `hsl(${Math.random() * 360}, 70%, 60%)`,
            r: Math.random() * 360,
            rv: Math.random() * 10 - 5
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.r * Math.PI / 180);
            ctx.fillStyle = p.c;
            ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
            ctx.restore();
            p.y += p.v;
            p.r += p.rv;
            if (p.y > canvas.height) p.y = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

window.onload = init;


/*--------------------
Carousel Memory Wall Logic
--------------------*/
(function () {
    let progress = 50
    let startX = 0
    let active = 0
    let isDown = false

    const speedWheel = 0.02
    const speedDrag = -0.1

    const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

    const $items = document.querySelectorAll('.carousel-item')
    const $cursors = document.querySelectorAll('.cursor')

    if ($items.length === 0) return;

    const displayItems = (item, index, active) => {
        const zIndex = getZindex([...$items], active)[index]
        item.style.setProperty('--zIndex', zIndex)
        item.style.setProperty('--active', (index - active) / $items.length)
    }

    const animate = () => {
        progress = Math.max(0, Math.min(progress, 100))
        active = Math.floor(progress / 100 * ($items.length - 1))

        $items.forEach((item, index) => displayItems(item, index, active))
    }
    animate()

    $items.forEach((item, i) => {
        item.addEventListener('click', () => {
            progress = (i / $items.length) * 100 + 10
            animate()
        })
    })

    const handleWheel = e => {
        // Only handle wheel if cursor is over the gallery section
        const gallerySection = document.getElementById('gallery');
        if (gallerySection && gallerySection.contains(e.target)) {
            const wheelProgress = e.deltaY * speedWheel
            progress = progress + wheelProgress
            animate()
        }
    }

    const handleMouseMove = (e) => {
        if (e.type === 'mousemove') {
            const gallerySection = document.getElementById('gallery');
            const isOverGallery = gallerySection && gallerySection.contains(e.target);

            $cursors.forEach(($cursor) => {
                $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
                $cursor.style.display = isOverGallery ? 'block' : 'none'
            })
        }
        if (!isDown) return
        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
        const mouseProgress = (x - startX) * speedDrag
        progress = progress + mouseProgress
        startX = x
        animate()
    }

    const handleMouseDown = e => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection && gallerySection.contains(e.target)) {
            isDown = true
            startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
        }
    }

    const handleMouseUp = () => {
        isDown = false
    }

    document.addEventListener('mousewheel', handleWheel)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchstart', handleMouseDown)
    document.addEventListener('touchmove', handleMouseMove)
    document.addEventListener('touchend', handleMouseUp)
})();

// --- Mega Day 10 Surprise Logic ---

window.initMegaDay10 = (data) => {
    megaSurpriseData = data;
    currentMegaStage = 0;
    renderMegaProgress();
    renderMegaStage();
};

function renderMegaProgress() {
    const progress = document.getElementById('mega-progress');
    if (!progress) return;
    progress.innerHTML = megaSurpriseData.stages.map((_, i) => `
        <div class="progress-dot ${i <= currentMegaStage ? 'active' : ''}"></div>
    `).join('');
}

window.nextMegaStage = () => {
    if (currentMegaStage < megaSurpriseData.stages.length - 1) {
        currentMegaStage++;
        renderMegaProgress();
        renderMegaStage();
    } else {
        closeModal();
    }
};

window.prevMegaStage = () => {
    if (currentMegaStage > 0) {
        currentMegaStage--;
        renderMegaProgress();
        renderMegaStage();
    }
};

function renderMegaStage() {
    const contentArea = document.getElementById('mega-stage-content');
    const prevBtn = document.getElementById('mega-prev-btn');
    const nextBtn = document.getElementById('mega-next-btn');
    const stage = megaSurpriseData.stages[currentMegaStage];

    if (!contentArea) return;

    // Navigation buttons
    if (prevBtn) prevBtn.style.display = currentMegaStage === 0 ? 'none' : 'block';
    if (nextBtn) nextBtn.textContent = currentMegaStage === megaSurpriseData.stages.length - 1 ? 'Finish 💖' : 'Continue';

    let html = `
        <div class="mega-stage active">
            <h2 style="color:var(--primary); margin-bottom:1rem;">${stage.title}</h2>
            <p style="margin-bottom:1.5rem;">${stage.content}</p>
    `;

    if (stage.id === 'welcome') {
        html += `<div style="font-size:4rem; margin:2rem 0; animation: bounce 2s infinite;">🎵❤️</div>`;

        // Start background music
        if (!megaAudio) {
            megaAudio = new Audio('Pathu_Naatkal.mp3');
            megaAudio.loop = true;
            megaAudio.play().catch(err => console.log("Audio play blocked:", err));
        }
    } else if (stage.id === 'wheel') {
        html += `
            <div class="wheel-3d-container">
                <button class="wheel-nav-btn prev" onclick="moveWheel(-1)">▲</button>
                <div class="wheel-3d-wrapper" id="wheel-3d-wrapper">
                    <div class="wheel-3d-overlay"></div>
                    <div class="wheel-3d-selector"></div>
                    <div id="wheel-3d-drum" class="wheel-3d-drum"></div>
                </div>
                <button class="wheel-nav-btn next" onclick="moveWheel(1)">▼</button>
            </div>
            <div id="wheel-3d-result" class="wheel-result"></div>
        `;
        setTimeout(() => initWheel3D(), 100);
    } else if (stage.id === 'letter') {
        html += `<div id="mega-letter-text" class="letter-text"></div>`;
        setTimeout(() => startTypewriter('mega-letter-text', stage.letter), 500);
    } else if (stage.id === 'game') {
        html += `
            <div class="game-canvas-container" id="game-canvas">
                <div class="game-score">Hearts Caught: <span id="heart-score">0</span></div>
                <div id="game-start-msg" style="margin-top:5rem;">
                    <button class="action-btn" onclick="startHeartCatchGame()">Start Game!</button>
                </div>
            </div>
        `;
    } else if (stage.id === 'hug') {
        html += `
            <div class="hug-button-container">
                <div class="hug-btn" onclick="handleVirtualHug(this)">🫂</div>
                <div id="hug-result-msg" class="hug-message">Click for a hug!</div>
            </div>
        `;
    }

    html += `</div>`;
    contentArea.innerHTML = html;
}

window.startHeartCatchGame = () => {
    const canvas = document.getElementById('game-canvas');
    const startMsg = document.getElementById('game-start-msg');
    if (!canvas || !startMsg) return;

    startMsg.style.display = 'none';
    heartCatchScore = 0;
    document.getElementById('heart-score').textContent = '0';

    let timeLeft = 30;
    const timerDisplay = document.createElement('div');
    timerDisplay.style.cssText = "position:absolute; top:10px; right:20px; font-weight:bold; color:var(--secondary);";
    timerDisplay.id = "game-timer";
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    canvas.appendChild(timerDisplay);

    heartCatchTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(heartCatchTimer);
            endHeartCatchGame();
        }
        if (timeLeft % 1 === 0) spawnGameHeart();
    }, 1000);

    // Spawn initial hearts
    for (let i = 0; i < 3; i++) spawnGameHeart();
};

function spawnGameHeart() {
    const canvas = document.getElementById('game-canvas');
    if (!canvas || !heartCatchTimer) return;

    const heart = document.createElement('div');
    heart.className = 'game-heart';
    heart.innerHTML = ['❤️', '💖', '💝', '💗'][Math.floor(Math.random() * 4)];

    const x = Math.random() * (canvas.offsetWidth - 40);
    const y = Math.random() * (canvas.offsetHeight - 40);

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    heart.onclick = (e) => {
        e.stopPropagation();
        heartCatchScore++;
        document.getElementById('heart-score').textContent = heartCatchScore;
        heart.style.transform = 'scale(0)';
        setTimeout(() => heart.remove(), 100);
        spawnGameHeart(); // Spawn a new one when one is caught
    };

    canvas.appendChild(heart);

    // Remove heart after 3 seconds if not caught
    setTimeout(() => { if (heart.parentElement) heart.remove(); }, 3000);
}

function endHeartCatchGame() {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;

    // Remove all remaining hearts
    canvas.querySelectorAll('.game-heart').forEach(h => h.remove());

    const msg = document.createElement('div');
    msg.style.cssText = "position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(255,255,255,0.9); z-index:20; animation:fadeIn 0.5s;";
    msg.innerHTML = `
        <h3 style="color:var(--primary);">Time's Up!</h3>
        <p style="font-size:1.2rem;">You caught <strong>${heartCatchScore}</strong> hearts of my love!</p>
        <button class="action-btn" style="margin-top:1rem;" onclick="startHeartCatchGame()">Play Again</button>
    `;
    canvas.appendChild(msg);
    startConfetti();
}

window.handleVirtualHug = (btn) => {
    const msg = document.getElementById('hug-result-msg');
    if (msg) msg.textContent = megaSurpriseData.stages[currentMegaStage].hugMessage;

    // Particle explosion
    for (let i = 0; i < 30; i++) {
        spawnHeartParticle();
    }

    if (window.startLongConfetti) startLongConfetti();
    btn.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => btn.style.animation = '', 500);
};

function spawnHeartParticle() {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.innerHTML = ['❤️', '💖', '💝', '💗', '🫂'][Math.floor(Math.random() * 5)];

    const btn = document.querySelector('.hug-btn');
    const rect = btn.getBoundingClientRect();

    particle.style.left = (rect.left + rect.width / 2) + 'px';
    particle.style.top = (rect.top + rect.height / 2) + 'px';

    const tx = (Math.random() - 0.5) * 400;
    const ty = (Math.random() - 0.5) * 400;

    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

// --- Day 5: Music Player ---
let _musicData = null;
let _musicIdx = 0;
let _musicInterval = null;

window.initMusicPlayer = (data) => {
    _musicData = data;
    _musicIdx = 0;
    const audio = document.getElementById('music-audio');
    if (!audio) return;
    audio.addEventListener('ended', () => nextTrack());
    audio.addEventListener('timeupdate', () => {
        const fill = document.getElementById('music-progress-fill');
        if (fill && audio.duration) {
            fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
        }
    });
};

window.toggleMusicPlay = () => {
    const audio = document.getElementById('music-audio');
    const btn = document.getElementById('music-play-btn');
    const disc = document.getElementById('music-disc');
    if (!audio) return;
    if (audio.paused) {
        audio.play().catch(e => console.log(e));
        if (btn) btn.textContent = '⏸️';
        if (disc) disc.classList.add('spinning');
    } else {
        audio.pause();
        if (btn) btn.textContent = '▶️';
        if (disc) disc.classList.remove('spinning');
    }
};

window.selectTrack = (idx) => {
    if (!_musicData) return;
    _musicIdx = idx;
    const audio = document.getElementById('music-audio');
    if (!audio) return;
    audio.src = _musicData.tracks[idx].src;
    document.getElementById('music-track-title').textContent = _musicData.tracks[idx].title;
    document.getElementById('music-track-artist').textContent = _musicData.tracks[idx].artist;
    document.getElementById('music-note').textContent = _musicData.tracks[idx].note;
    document.querySelectorAll('.music-track-item').forEach((el, i) => {
        el.classList.toggle('active', i === idx);
    });
    audio.play().catch(e => console.log(e));
    const btn = document.getElementById('music-play-btn');
    const disc = document.getElementById('music-disc');
    if (btn) btn.textContent = '⏸️';
    if (disc) disc.classList.add('spinning');
};

window.nextTrack = () => {
    if (!_musicData) return;
    selectTrack((_musicIdx + 1) % _musicData.tracks.length);
};

window.prevTrack = () => {
    if (!_musicData) return;
    selectTrack((_musicIdx - 1 + _musicData.tracks.length) % _musicData.tracks.length);
};

// --- Day 4: Card Cascade ---
let _cardsFlipped = 0;

window.flipCard = (card) => {
    if (card.classList.contains('flipped')) return;
    card.classList.add('flipped');
    _cardsFlipped++;
    const counter = document.getElementById('cards-flipped');
    if (counter) counter.textContent = _cardsFlipped;

    // Confetti when all cards are flipped
    const total = document.querySelectorAll('.cascade-card').length;
    if (_cardsFlipped >= total && window.startConfetti) {
        startConfetti();
    }
};

// --- Day 3: Treasure Hunt ---
window.checkTreasureAnswer = () => {
    const input = document.getElementById('riddle-answer');
    const feedback = document.getElementById('riddle-feedback');
    if (!input || !feedback || !window._treasureData) return;

    const idx = window._treasureIdx;
    const riddle = window._treasureData.riddles[idx];
    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer.includes(riddle.answer.toLowerCase())) {
        // Correct!
        feedback.textContent = '✅ Correct!';
        feedback.style.color = '#065f46';
        feedback.style.background = '#d1fae5';
        feedback.classList.add('show');

        // Reveal clue
        const clueSlot = document.getElementById(`clue-slot-${idx}`);
        if (clueSlot) {
            clueSlot.textContent = riddle.clueReward;
            clueSlot.classList.add('revealed');
        }

        // Move to next riddle
        window._treasureIdx++;
        if (window._treasureIdx < window._treasureData.riddles.length) {
            setTimeout(() => {
                const nextRiddle = window._treasureData.riddles[window._treasureIdx];
                const riddleArea = document.getElementById('treasure-riddle');
                if (riddleArea) {
                    riddleArea.innerHTML = `
                        <div class="riddle-number">Riddle ${window._treasureIdx + 1} of ${window._treasureData.riddles.length}</div>
                        <p class="riddle-question">${nextRiddle.question}</p>
                        <p class="riddle-hint">💡 Hint: ${nextRiddle.hint}</p>
                        <div class="riddle-input-group">
                            <input type="text" id="riddle-answer" class="riddle-input" placeholder="Type your answer..." onkeydown="if(event.key==='Enter')checkTreasureAnswer()">
                            <button class="action-btn" onclick="checkTreasureAnswer()">Submit</button>
                        </div>
                        <div id="riddle-feedback" class="riddle-feedback"></div>
                    `;
                }
            }, 1200);
        } else {
            setTimeout(() => {
                const riddleArea = document.getElementById('treasure-riddle');
                if (riddleArea) {
                    riddleArea.innerHTML = `
                        <div style="font-size:3rem; margin-bottom:1rem;">🎉🎁</div>
                        <h3 style="color:var(--primary);">All Clues Unlocked!</h3>
                        <p style="margin-top:1rem;">You solved them all! Your birthday surprise is going to be amazing! 💖</p>
                    `;
                }
                if (window.startConfetti) startConfetti();
            }, 1200);
        }
    } else {
        feedback.textContent = '❌ Not quite... try again!';
        feedback.style.color = '#991b1b';
        feedback.style.background = '#fee2e2';
        feedback.classList.add('show');
        input.value = '';
        input.focus();
    }
};

// --- Day 2: Photo Story ---
window.storyNav = (dir) => {
    const newIdx = window._storyIdx + dir;
    if (newIdx < 0 || newIdx >= window._storyTotal) return;
    storyGo(newIdx);
};

window.storyGo = (idx) => {
    window._storyIdx = idx;
    const slides = document.querySelectorAll('.story-slide');
    const dots = document.querySelectorAll('.story-dot');
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => {
        d.classList.toggle('active', i === idx);
    });
};

// --- Day 1: One Night Before ---
function initDay1OneNightBefore(data) {
    if (!data) return;
    day1SurpriseData = data;
    currentDay1Stage = 1;
    const starsContainer = document.querySelector('.day1-stars');
    if (starsContainer) {
        for (let i = 0; i < 60; i++) {
            const star = document.createElement('div');
            star.className = 'day1-star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = (Math.random() * 2) + 's';
            star.style.opacity = 0.3 + Math.random() * 0.7;
            starsContainer.appendChild(star);
        }
    }
    renderDay1Stage(1);

    const btnCandle = document.getElementById('day1-btn-candle');
    const btnContinue = document.getElementById('day1-btn-continue');
    const btnMore = document.getElementById('day1-btn-more');
    const btnWhatsNext = document.getElementById('day1-btn-whats-next');
    const btnSeeYou = document.getElementById('day1-btn-see-you');

    if (btnCandle) btnCandle.onclick = day1CandleLightMoment;
    if (btnContinue) btnContinue.onclick = () => goDay1Stage(3);
    if (btnMore) btnMore.onclick = () => goDay1Stage(4);
    if (btnWhatsNext) btnWhatsNext.onclick = () => goDay1Stage(5);
    if (btnSeeYou) btnSeeYou.onclick = day1SeeYouTomorrow;
}

function renderDay1Stage(stageNum) {
    for (let i = 1; i <= 5; i++) {
        const el = document.getElementById('day1-stage-' + i);
        if (el) el.style.display = i === stageNum ? 'flex' : 'none';
    }
    if (stageNum === 2) {
        const wrap = document.getElementById('day1-candle-wrap');
        if (wrap) wrap.classList.add('day1-candle-lit');
        const line = document.getElementById('day1-candle-line');
        if (line) {
            line.style.visibility = 'visible';
            line.classList.add('day1-candle-line-visible');
        }
        day1TriggerSparkles();
    }
    if (stageNum === 3) {
        const letterBox = document.getElementById('day1-letter-box');
        if (letterBox) letterBox.classList.add('day1-letter-visible');
        const ps = document.getElementById('day1-letter-ps');
        if (ps) {
            ps.classList.remove('day1-letter-ps-visible');
            setTimeout(function () { if (ps) ps.classList.add('day1-letter-ps-visible'); }, 2500);
        }
    }
    if (stageNum === 4) startDay1Countdown();
    if (stageNum === 5) day1RenderJourneyDots();
}

function day1TriggerSparkles() {
    const container = document.getElementById('day1-candle-sparkles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 12; i++) {
        const s = document.createElement('div');
        s.className = 'day1-sparkle';
        s.style.left = (40 + Math.random() * 20) + '%';
        s.style.top = (20 + Math.random() * 30) + '%';
        s.style.animationDelay = (Math.random() * 0.6) + 's';
        container.appendChild(s);
    }
    setTimeout(function () { if (container) container.innerHTML = ''; }, 2000);
}

function day1RenderJourneyDots() {
    const container = document.getElementById('day1-dots-preview');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 29; i++) {
        const dot = document.createElement('div');
        dot.className = 'day1-journey-dot';
        dot.style.animationDelay = (i * 0.04) + 's';
        container.appendChild(dot);
    }
}

function day1CandleLightMoment() {
    const wrapper = document.getElementById('day1-wrapper');
    if (!wrapper) { goDay1Stage(2); return; }
    const glow = document.createElement('div');
    glow.id = 'day1-candle-glow';
    glow.className = 'day1-candle-glow';
    glow.setAttribute('aria-hidden', 'true');
    glow.innerHTML = '<p class="day1-glow-text">💛</p>';
    wrapper.appendChild(glow);
    requestAnimationFrame(function () { glow.classList.add('day1-candle-glow-on'); });
    setTimeout(function () {
        glow.classList.add('day1-candle-glow-out');
        setTimeout(function () {
            glow.remove();
            goDay1Stage(2);
        }, 600);
    }, 1400);
}

function goDay1Stage(next) {
    currentDay1Stage = next;
    renderDay1Stage(next);
}

function startDay1Countdown() {
    if (day1CountdownInterval) clearInterval(day1CountdownInterval);
    const el = document.getElementById('day1-countdown-time');
    if (!el) return;
    const target = new Date(BIRTHDAY_DATE + 'T00:00:00').getTime();

    function update() {
        const now = Date.now();
        const diff = target - now;
        if (diff <= 0) {
            el.textContent = "It's your birthday! 🎂";
            if (day1CountdownInterval) {
                clearInterval(day1CountdownInterval);
                day1CountdownInterval = null;
            }
            return;
        }
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        el.textContent = hours + ' hour' + (hours !== 1 ? 's' : '') + ' and ' + minutes + ' minute' + (minutes !== 1 ? 's' : '') + '.';
    }
    update();
    day1CountdownInterval = setInterval(update, 60000);
}

function day1SeeYouTomorrow() {
    if (day1CountdownInterval) {
        clearInterval(day1CountdownInterval);
        day1CountdownInterval = null;
    }
    if (typeof startConfetti === 'function') startConfetti();
    if (typeof startLongConfetti === 'function') startLongConfetti();
    setTimeout(closeModal, 1500);
}

// --- Mega Celestial Journey Logic (Day 5) ---

let currentCelestialStage = 0;
let celestialData = null;

window.initMegaCelestial = (data) => {
    celestialData = data;
    currentCelestialStage = 0;
    renderCelestialProgress();
    renderCelestialStage();
};

function renderCelestialProgress() {
    const progress = document.getElementById('celestial-progress');
    if (!progress) return;
    progress.innerHTML = celestialData.stages.map((_, i) => `
        <div class="progress-dot ${i <= currentCelestialStage ? 'active' : ''}"></div>
    `).join('');
}

window.nextCelestialStage = () => {
    if (currentCelestialStage < celestialData.stages.length - 1) {
        currentCelestialStage++;
        renderCelestialProgress();
        renderCelestialStage();
    } else {
        closeModal();
    }
};

window.prevCelestialStage = () => {
    if (currentCelestialStage > 0) {
        currentCelestialStage--;
        renderCelestialProgress();
        renderCelestialStage();
    }
};

function renderCelestialStage() {
    const area = document.getElementById('celestial-stage-content');
    const nextBtn = document.getElementById('celestial-next-btn');
    const prevBtn = document.getElementById('celestial-prev-btn');
    const stage = celestialData.stages[currentCelestialStage];

    if (!area) return;
    area.innerHTML = '';

    if (prevBtn) prevBtn.style.display = currentCelestialStage === 0 ? 'none' : 'block';
    if (nextBtn) {
        nextBtn.style.display = 'none'; // Will be revealed by stage logic
        nextBtn.textContent = currentCelestialStage === celestialData.stages.length - 1 ? 'Finish 💖' : 'Continue ✨';
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'constellation-wrapper';
    wrapper.style.height = '100%';
    area.appendChild(wrapper);

    if (stage.id === 'constellation') {
        renderConstellationStage(wrapper, stage);
    } else if (stage.id === 'blessings') {
        renderBlessingsStage(wrapper, stage);
    } else if (stage.id === 'lanterns') {
        renderLanternsStage(wrapper, stage);
    } else if (stage.id === 'moon') {
        renderMoonStage(wrapper, stage);
    } else if (stage.id === 'memories') {
        renderMemoriesStage(wrapper, stage);
    } else if (stage.id === 'cake') {
        renderCakeStage(wrapper, stage);
    }
}

function renderMemoriesStage(parent, stage) {
    parent.style.background = 'radial-gradient(circle at center, #000428 0%, #000 100%)';
    const sky = document.createElement('div');
    sky.className = 'star-sky';
    parent.appendChild(sky);

    const hint = document.createElement('div');
    hint.className = 'constellation-hint';
    hint.textContent = "Click your floating memories... Each one is a treasure.";
    parent.appendChild(hint);

    // Background random stars
    for (let i = 0; i < 30; i++) {
        const tStar = document.createElement('div');
        tStar.className = 'twinkle-star';
        tStar.style.width = (Math.random() * 2 + 1) + 'px';
        tStar.style.height = tStar.style.width;
        tStar.style.left = Math.random() * 100 + '%';
        tStar.style.top = Math.random() * 100 + '%';
        tStar.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
        tStar.style.setProperty('--o', Math.random() * 0.7 + 0.3);
        sky.appendChild(tStar);
    }

    stage.images.forEach((img, i) => {
        const bubble = document.createElement('div');
        bubble.className = 'memory-bubble';
        bubble.innerHTML = `<img src="${img}">`;

        // Random starting positions
        const startX = Math.random() * 80 + 10;
        const startY = Math.random() * 70 + 15;
        bubble.style.left = startX + '%';
        bubble.style.top = startY + '%';

        // Random floating variations
        const delay = Math.random() * 5;
        const dur = 10 + Math.random() * 10;
        bubble.style.animation = `floatBubble ${dur}s infinite alternate ease-in-out`;
        bubble.style.animationDelay = `-${delay}s`;

        bubble.onclick = () => openLightbox(img, "A Golden Memory ✨");

        parent.appendChild(bubble);
    });

    // Reveal finish button immediately for memories
    document.getElementById('celestial-next-btn').style.display = 'block';
}

function renderConstellationStage(parent, stage) {
    const sky = document.createElement('div');
    sky.className = 'star-sky';
    parent.appendChild(sky);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "constellation-svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    parent.appendChild(svg);

    const hint = document.createElement('div');
    hint.className = 'constellation-hint';
    hint.textContent = 'Connect the heart to begin the journey...';
    parent.appendChild(hint);

    // Background random stars
    for (let i = 0; i < 40; i++) {
        const tStar = document.createElement('div');
        tStar.className = 'twinkle-star';
        tStar.style.width = (Math.random() * 2 + 1) + 'px';
        tStar.style.height = tStar.style.width;
        tStar.style.left = Math.random() * 100 + '%';
        tStar.style.top = Math.random() * 100 + '%';
        tStar.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
        tStar.style.setProperty('--o', Math.random() * 0.7 + 0.3);
        sky.appendChild(tStar);
    }

    let currentIdx = 0;
    stage.points.forEach((pt, i) => {
        const star = document.createElement('div');
        star.className = 'constellation-star';
        if (i === 0) star.classList.add('active');
        star.style.left = pt.x + '%';
        star.style.top = pt.y + '%';

        const label = document.createElement('div');
        label.className = 'constellation-label';
        label.textContent = pt.label;
        label.style.left = (pt.x + 2) + '%';
        label.style.top = (pt.y - 2) + '%';

        star.onclick = () => {
            if (i === currentIdx) {
                star.classList.remove('active');
                star.classList.add('connected');
                if (currentIdx > 0) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", stage.points[currentIdx - 1].x);
                    line.setAttribute("y1", stage.points[currentIdx - 1].y);
                    line.setAttribute("x2", pt.x);
                    line.setAttribute("y2", pt.y);
                    svg.appendChild(line);
                }
                currentIdx++;
                if (currentIdx < stage.points.length) {
                    parent.querySelectorAll('.constellation-star')[currentIdx].classList.add('active');
                } else {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", stage.points[stage.points.length - 1].x);
                    line.setAttribute("y1", stage.points[stage.points.length - 1].y);
                    line.setAttribute("x2", stage.points[0].x);
                    line.setAttribute("y2", stage.points[0].y);
                    svg.appendChild(line);

                    hint.textContent = 'Our heart is connected! ❤️';
                    document.getElementById('celestial-next-btn').style.display = 'block';
                    if (window.startConfetti) startConfetti();
                }
                spawnHeartExplosion(pt.x, pt.y);
            }
        };
        sky.appendChild(star);
        sky.appendChild(label);
    });
}

function renderBlessingsStage(parent, stage) {
    parent.style.background = 'radial-gradient(circle at center, #1a0b2e 0%, #000 100%)';
    const sky = document.createElement('div');
    sky.className = 'star-sky';
    parent.appendChild(sky);

    const hint = document.createElement('div');
    hint.className = 'constellation-hint';
    hint.textContent = 'Tap the shooting stars to catch your blessings...';
    parent.appendChild(hint);

    let caught = 0;
    const total = stage.blessings.length;

    function spawnShootingStar() {
        if (caught >= total || celestialData.stages[currentCelestialStage].id !== 'blessings') return;

        const star = document.createElement('div');
        star.className = 'shooting-star-wrap';
        star.style.top = Math.random() * 60 + '%';
        star.style.left = '-50px';

        star.innerHTML = `
            <div class="shooting-star-head">✨</div>
            <div class="shooting-star-tail"></div>
        `;

        star.onclick = () => {
            if (star.dataset.caught) return;
            star.dataset.caught = 'true';
            caught++;

            const word = document.createElement('div');
            word.className = 'blessing-word';
            word.textContent = stage.blessings[caught - 1];
            word.style.left = star.style.left;
            word.style.top = star.style.top;
            parent.appendChild(word);

            star.style.opacity = '0';
            setTimeout(() => { star.remove(); word.remove(); }, 2000);

            if (caught === total) {
                hint.textContent = 'Every blessing is yours! 🌟';
                document.getElementById('celestial-next-btn').style.display = 'block';
                if (window.startConfetti) startConfetti();
            }
        };

        parent.appendChild(star);

        // Manual animation
        let posX = -120;
        const speed = 3 + Math.random() * 4; // Randomized speed
        const interval = setInterval(() => {
            posX += speed;
            star.style.left = posX + 'px';
            if (posX > parent.offsetWidth + 120) {
                clearInterval(interval);
                star.remove();
            }
        }, 20);
    }

    const startSpawner = setInterval(() => {
        if (caught >= total || celestialData.stages[currentCelestialStage].id !== 'blessings') {
            clearInterval(startSpawner);
            return;
        }
        spawnShootingStar();
    }, 600); // Increased frequency (was 1500)
}

function renderMoonStage(parent, stage) {
    parent.style.background = 'radial-gradient(circle at center, #0a1e2e 0%, #000 100%)';

    const moon = document.createElement('div');
    moon.className = 'celestial-moon';
    moon.innerHTML = '🌕';
    parent.appendChild(moon);

    const hint = document.createElement('div');
    hint.className = 'constellation-hint';
    hint.textContent = "Click the moon for my final promise...";
    parent.appendChild(hint);

    moon.onclick = () => {
        moon.style.transform = 'translate(-50%, -50%) scale(1.5)';
        moon.style.filter = 'brightness(1.5) drop-shadow(0 0 20px #fff)';

        const reveal = document.createElement('div');
        reveal.className = 'nebula-reveal';
        reveal.style.display = 'flex';
        reveal.innerHTML = `
            <div class="nebula-message">
                <h3>Moonlight Blessing</h3>
                <p>${stage.promise}</p>
            </div>
        `;
        parent.appendChild(reveal);
        hint.style.display = 'none';
        document.getElementById('celestial-next-btn').style.display = 'block';
        if (window.startLongConfetti) startLongConfetti();
    };
}

function spawnHeartExplosion(x, y) {
    const wrapper = document.querySelector('.constellation-wrapper');
    if (!wrapper) return;
    for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.className = 'heart-particle';
        p.innerHTML = '✨';
        p.style.position = 'absolute';
        p.style.left = x + '%';
        p.style.top = y + '%';
        p.style.color = '#fff';
        p.style.fontSize = '12px';
        p.style.pointerEvents = 'none';

        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        p.style.setProperty('--tx', `${tx}px`);
        p.style.setProperty('--ty', `${ty}px`);

        wrapper.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
}

// --- Mega Scrapbook Logic (Day 4) ---

let currentScrapbookStage = 0;
let scrapbookData = null;

window.initScrapbook = (data) => {
    scrapbookData = data;
    currentScrapbookStage = 0;
    renderScrapbookProgress();
    renderScrapbookStage();
};

function renderScrapbookProgress() {
    const progress = document.getElementById('scrapbook-progress');
    if (!progress) return;
    progress.innerHTML = scrapbookData.stages.map((_, i) => `
        <div class="progress-dot ${i <= currentScrapbookStage ? 'active' : ''}"></div>
    `).join('');
}

window.nextScrapbookStage = () => {
    if (currentScrapbookStage < scrapbookData.stages.length - 1) {
        currentScrapbookStage++;
        renderScrapbookProgress();
        renderScrapbookStage();
    } else {
        closeModal();
    }
};

window.prevScrapbookStage = () => {
    if (currentScrapbookStage > 0) {
        currentScrapbookStage--;
        renderScrapbookProgress();
        renderScrapbookStage();
    }
};

function renderScrapbookStage() {
    const area = document.getElementById('scrapbook-stage-content');
    const nextBtn = document.getElementById('scrapbook-next-btn');
    const prevBtn = document.getElementById('scrapbook-prev-btn');
    const stage = scrapbookData.stages[currentScrapbookStage];

    if (!area) return;
    area.innerHTML = '';

    if (prevBtn) prevBtn.style.display = currentScrapbookStage === 0 ? 'none' : 'block';
    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.textContent = currentScrapbookStage === scrapbookData.stages.length - 1 ? 'Finish 💖' : 'Continue ✨';
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'alchemy-wrapper';
    wrapper.style.height = '100%';
    area.appendChild(wrapper);

    if (stage.id === 'alchemy-ingredients') {
        renderAlchemyIngredients(wrapper, stage);
    } else if (stage.id === 'alchemy-brew') {
        renderAlchemyBrew(wrapper, stage);
    } else if (stage.id === 'alchemy-result') {
        renderAlchemyResult(wrapper, stage);
    }
}

let selectedIngredients = [];

function renderAlchemyIngredients(parent, stage) {
    selectedIngredients = [];

    const header = document.createElement('div');
    header.className = 'alchemy-header';
    header.innerHTML = `
        <h3 class="premium-glow">${stage.title}</h3>
        <p>${stage.description}</p>
        <div class="selection-counter">Captured Essences: <span id="ing-count">0</span> / 3</div>
    `;
    parent.appendChild(header);

    const shelf = document.createElement('div');
    shelf.className = 'alchemy-shelf elite-shelf';

    stage.ingredients.forEach(ing => {
        const bottleWrapper = document.createElement('div');
        bottleWrapper.className = 'bottle-wrapper';

        const bottle = document.createElement('div');
        bottle.className = 'alchemy-bottle';
        bottle.innerHTML = `
            <div class="bottle-liquid" style="background: ${ing.color}"></div>
            <div class="bottle-emoji">${ing.emoji}</div>
            <div class="bottle-label">${ing.label}</div>
            <div class="pouring-stream" style="background: ${ing.color}"></div>
        `;

        bottleWrapper.onclick = () => {
            if (selectedIngredients.find(i => i.id === ing.id)) {
                selectedIngredients = selectedIngredients.filter(i => i.id !== ing.id);
                bottle.classList.remove('selected', 'tilting');
            } else if (selectedIngredients.length < 3) {
                selectedIngredients.push(ing);
                bottle.classList.add('selected', 'tilting');

                // Audio or visual "glug" effect could go here
                if (window.startConfetti) startConfetti();
            }

            const countEl = document.getElementById('ing-count');
            if (countEl) countEl.textContent = selectedIngredients.length;

            const nextBtn = document.getElementById('scrapbook-next-btn');
            if (nextBtn) {
                if (selectedIngredients.length === 3) {
                    nextBtn.style.display = 'block';
                    nextBtn.textContent = "Prepare the Cauldron 🧪";
                } else {
                    nextBtn.style.display = 'none';
                }
            }
        };
        bottleWrapper.appendChild(bottle);
        shelf.appendChild(bottleWrapper);
    });

    parent.appendChild(shelf);
}

function renderAlchemyBrew(parent, stage) {
    const baseColor = selectedIngredients[0]?.color || '#9c27b0';

    parent.innerHTML = `
        <div class="alchemy-header">
            <h3 class="premium-glow">${stage.title}</h3>
            <p>${stage.description}</p>
        </div>
        <div class="cauldron-container" id="brew-area">
            <div class="cauldron-sparks" id="cauldron-sparks"></div>
            <div class="cauldron" id="cauldron">
                <div class="cauldron-liquid" style="background: linear-gradient(to top, #000, ${baseColor})"></div>
                <div class="cauldron-bubbles" id="cauldron-bubbles"></div>
            </div>
            <div class="stir-stick" id="stir-stick"></div>
            <div class="brew-progress-bar elite-bar">
                <div class="brew-progress-fill" id="brew-progress"></div>
                <div class="brew-progress-text" id="brew-percent">0% Potency</div>
            </div>
        </div>
        <div class="brew-hint">Vigorously stir in circles to fuse the souls...</div>
    `;

    const progressFill = parent.querySelector('#brew-progress');
    const progressText = parent.querySelector('#brew-percent');
    const bubblesContainer = parent.querySelector('#cauldron-bubbles');
    const sparksContainer = parent.querySelector('#cauldron-sparks');
    const stick = parent.querySelector('#stir-stick');
    const cauldronArea = parent.querySelector('#brew-area');

    let brewProgress = 0;
    let isStirring = false;
    let lastAngle = null;
    let totalRotation = 0;

    const getMouseAngle = (e) => {
        const rect = cauldronArea.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const dx = clientX - centerX;
        const dy = clientY - centerY;
        return {
            angle: Math.atan2(dy, dx) * 180 / Math.PI,
            dist: Math.sqrt(dx * dx + dy * dy)
        };
    };

    const startStir = (e) => {
        isStirring = true;
        const { angle } = getMouseAngle(e);
        lastAngle = angle;
    };

    const endStir = () => {
        isStirring = false;
        lastAngle = null;
    };

    const doStir = (e) => {
        if (!isStirring) return;

        const { angle, dist } = getMouseAngle(e);

        // Only stir if cursor is roughly within or near the cauldron area
        if (dist > 180) return;

        if (lastAngle !== null) {
            let delta = angle - lastAngle;

            // Handle wrap-around
            if (delta > 180) delta -= 360;
            if (delta < -180) delta += 360;

            totalRotation += Math.abs(delta);
            brewProgress += Math.abs(delta) * 0.05; // Progression based on rotation

            if (brewProgress > 100) brewProgress = 100;

            progressFill.style.width = brewProgress + '%';
            progressText.textContent = Math.floor(brewProgress) + '% Potency';

            // Visual feedback: stick tilt and orbit
            const rotateZ = angle + 90;
            const tiltX = Math.min(25, dist / 4); // Tilt more as you move further from center
            stick.style.transform = `translate(-50%, -50%) rotate(${rotateZ}deg) rotateX(${tiltX}deg) translate(0, -20px)`;

            // Spawn bubbles based on movement
            if (Math.random() > 0.8) {
                const b = document.createElement('div');
                b.className = 'cauldron-bubble';
                b.style.width = (Math.random() * 10 + 5) + 'px';
                b.style.height = b.style.width;
                b.style.left = (Math.random() * 60 + 20) + '%';
                b.style.background = baseColor;
                bubblesContainer.appendChild(b);
                setTimeout(() => b.remove(), 1200);
            }

            // Spawn magical sparks
            if (Math.random() > 0.9) {
                const s = document.createElement('div');
                s.className = 'alchemy-spark';
                s.textContent = ['⭐', '✨', '🌟'][Math.floor(Math.random() * 3)];
                s.style.left = (Math.random() * 80 + 10) + '%';
                s.style.setProperty('--x', (Math.random() * 80 - 40) + 'px');
                sparksContainer.appendChild(s);
                setTimeout(() => s.remove(), 1500);
            }

            // Spawn vapor compliments
            if (Math.random() > 0.99 && brewProgress < 98) {
                const v = document.createElement('div');
                v.className = 'alchemy-elite-vapor';
                v.textContent = scrapbookData.reasons[Math.floor(Math.random() * scrapbookData.reasons.length)];
                v.style.left = (Math.random() * 60 + 20) + '%';
                parent.appendChild(v);
                setTimeout(() => v.remove(), 6000);
            }

            if (brewProgress >= 100) {
                isStirring = false;
                const cauldronNode = document.getElementById('cauldron');
                if (cauldronNode) cauldronNode.classList.add('cauldron-glow-gold', 'shake-cauldron');

                const nextBtn = document.getElementById('scrapbook-next-btn');
                if (nextBtn) {
                    nextBtn.style.display = 'block';
                    nextBtn.textContent = "Behold the Result ✨";
                }
                parent.querySelector('.brew-hint').innerHTML = "<b style='color:#ffd700'>The Potion is Perfectly Fused!</b>";
                if (window.startLongConfetti) startLongConfetti();
            }
        }
        lastAngle = angle;
    };

    cauldronArea.addEventListener('mousedown', startStir);
    window.addEventListener('mouseup', endStir);
    window.addEventListener('mousemove', doStir);

    cauldronArea.addEventListener('touchstart', (e) => { e.preventDefault(); startStir(e); });
    window.addEventListener('touchend', endStir);
    window.addEventListener('touchmove', (e) => { if (isStirring) e.preventDefault(); doStir(e); }, { passive: false });
}

function renderAlchemyResult(parent, stage) {
    // Generate dynamic potion name
    const adjectives = ["Radiant", "Eternal", "Celestial", "Whispering", "Luminous"];
    const adjunct = adjectives[Math.floor(Math.random() * adjectives.length)];
    const coreIng = selectedIngredients[0]?.id || "Love";
    const potionTitle = `The ${adjunct} Essence of ${coreIng.charAt(0).toUpperCase() + coreIng.slice(1)}`;

    parent.innerHTML = `
        <div class="alchemy-result-container elite-result">
            <div class="result-header">
                <div class="magical-seal">💍</div>
                <h3 class="dynamic-potion-title">${potionTitle}</h3>
                <p class="potion-subtitle">Formulated specifically for the one and only Kasthu</p>
            </div>
            
            <div class="love-voucher-elite" id="love-voucher">
                <div class="elite-border"></div>
                <div class="voucher-inner">
                    <div class="voucher-stamp">AUTHENTIC</div>
                    <div class="voucher-title-gold">${scrapbookData.voucher.title}</div>
                    <div class="voucher-msg-cursive">"${scrapbookData.voucher.message}"</div>
                    <div class="voucher-security">
                        <span>SERIES 2026-K</span>
                        <span class="voucher-code-highlight">${scrapbookData.voucher.code}</span>
                    </div>
                </div>
            </div>

            <div class="alchemy-outcome-desc">
                Your choices revealed a soul of pure gold. These 30 reasons are just the beginning of why you are my everything.
            </div>

            <div class="mini-reasons-preview">
                 ${scrapbookData.reasons.slice(0, 4).map(r => `<div class="pill-reason">${r}</div>`).join('')}
                 <div class="pill-reason accent" onclick="viewAllReasons()">+ Infinite More</div>
            </div>
        </div>
    `;

    const nextBtn = document.getElementById('scrapbook-next-btn');
    if (nextBtn) {
        nextBtn.style.display = 'block';
        nextBtn.textContent = "Close Lab & Keep ❤️";
    }

    if (window.startConfetti) startConfetti();
}

window.viewAllReasons = () => {
    const reasonsHTML = scrapbookData.reasons.map((r, i) => `
        <div class="reason-card" style="animation-delay: ${i * 0.05}s">
            <p><strong>#${i + 1}</strong>: ${r}</p>
        </div>
    `).join('');

    document.getElementById('modal-title').textContent = "Why You Are My Everything ❤️";
    document.getElementById('modal-body').innerHTML = `
        <div class="all-reasons-scroll-area">
            ${reasonsHTML}
        </div>
    `;
    openModal();
};



function renderLanternsStage(parent, stage) {
    parent.style.background = 'radial-gradient(circle at bottom, #1a0b2e 0%, #000 100%)';
    const sky = document.createElement('div');
    sky.className = 'star-sky';
    parent.appendChild(sky);

    const hint = document.createElement('div');
    hint.className = 'constellation-hint';
    hint.style.zIndex = '100';
    hint.style.color = '#fff';
    hint.style.textShadow = '0 0 10px #ff7eb3';
    hint.textContent = 'Tap the rising lanterns to reveal your birthday wishes...';
    parent.appendChild(hint);

    let revealed = 0;
    const total = stage.wishes.length;

    function spawnLantern() {
        if (revealed >= total || celestialData.stages[currentCelestialStage].id !== 'lanterns') return;

        const lantern = document.createElement('div');
        lantern.className = 'celestial-lantern';
        lantern.innerHTML = `
            <div class="lantern-flame"></div>
            <div class="lantern-body">🏮</div>
        `;

        const startX = Math.random() * 80 + 10;
        lantern.style.left = startX + '%';
        lantern.style.bottom = '-10%';
        lantern.style.zIndex = '20';

        parent.appendChild(lantern);

        // Use a CSS-driven animation for reliability
        const dur = 15 + Math.random() * 5;
        lantern.style.animation = `lanternRise ${dur}s linear forwards`;

        lantern.onclick = () => {
            if (lantern.dataset.revealed) return;
            lantern.dataset.revealed = 'true';
            revealed++;

            const wish = document.createElement('div');
            wish.className = 'lantern-wish';
            wish.textContent = stage.wishes[revealed - 1];
            wish.style.left = lantern.style.left;
            wish.style.bottom = '40%';
            parent.appendChild(wish);

            lantern.style.opacity = '0.3';
            lantern.style.filter = 'grayscale(1) brightness(0.5)';

            if (revealed === total) {
                hint.textContent = 'All wishes set to the stars... ✨';
                const nextBtn = document.getElementById('celestial-next-btn');
                if (nextBtn) nextBtn.style.display = 'block';
                if (window.startConfetti) startConfetti();
            }
        };

        // Auto-cleanup and respawn if missed
        setTimeout(() => {
            if (lantern.parentElement) {
                lantern.remove();
                if (revealed < total) spawnLantern();
            }
        }, dur * 1000);
    }

    // Start spawning sequence
    for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnLantern(), i * 1500);
    }

    // Failsafe: if after 30 seconds not finished, show button anyway
    setTimeout(() => {
        const nextBtn = document.getElementById('celestial-next-btn');
        if (nextBtn && nextBtn.style.display === 'none') {
            nextBtn.style.display = 'block';
            hint.textContent = "The stars are waiting for you... ✨";
        }
    }, 25000);
}

function renderCakeStage(parent, stage) {
    parent.style.background = 'radial-gradient(circle at center, #000428 0%, #000 100%)';

    const cakeContainer = document.createElement('div');
    cakeContainer.className = 'celestial-cake-container';
    cakeContainer.innerHTML = `
        <div class="celestial-cake">
            <div class="cake-layer bottom"></div>
            <div class="cake-layer middle"></div>
            <div class="cake-layer top"></div>
            <div class="cake-candle" id="cake-candle">
                <div class="candle-stick"></div>
                <div class="candle-flame" id="candle-flame"></div>
            </div>
        </div>
        <div class="cake-glow"></div>
        <div class="cake-message">${stage.message}</div>
        <button class="action-btn" id="ignite-cake-btn" style="z-index: 100;">Light the Magic ✨</button>
    `;
    parent.appendChild(cakeContainer);

    const btn = cakeContainer.querySelector('#ignite-cake-btn');
    const flame = cakeContainer.querySelector('#candle-flame');
    const cake = cakeContainer.querySelector('.celestial-cake');

    btn.onclick = () => {
        btn.style.display = 'none';
        flame.classList.add('active');
        cake.classList.add('ignited');

        // Massive grand finale celebration
        startGrandCelestialFinale(parent);

        setTimeout(() => {
            const nextBtn = document.getElementById('celestial-next-btn');
            if (nextBtn) {
                nextBtn.style.display = 'block';
                nextBtn.textContent = 'Finish & Keep ❤️';
            }
        }, 3000);
    };
}

function startGrandCelestialFinale(parent) {
    if (window.startConfetti) startConfetti();
    if (window.startLongConfetti) startLongConfetti();

    // Create "fireworks" of stars
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'finale-star';
            star.innerHTML = ['⭐', '✨', '🌟', '💖', '🎂'][Math.floor(Math.random() * 5)];
            star.style.left = '50%';
            star.style.top = '50%';
            star.style.position = 'absolute';

            const tx = (Math.random() - 0.5) * 800;
            const ty = (Math.random() - 0.5) * 800;
            star.style.setProperty('--tx', `${tx}px`);
            star.style.setProperty('--ty', `${ty}px`);

            parent.appendChild(star);
            setTimeout(() => star.remove(), 2000);
        }, i * 50);
    }
}
