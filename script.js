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
    { day: 10, type: "wheel-3d", title: "Wheel of Love 💖", message: "Spin the drum to see what I love about you most today...", praises: PRAISES },
    { day: 5, type: "link", title: "Mood Song", message: "Listen to this...", link: "https://www.youtube.com/watch?v=juHpoMK3AuQ" },
    { day: 4, type: "text", title: "Why I Love You", message: "I love you because you make ordinary days feel extraordinary. Your smile is my daily motivation." },
    { day: 3, type: "clue", title: "A Little Hint", message: "Your birthday gift is something you can hold, something you can keep, and something that reminds you of us." },
    { day: 2, type: "image", title: "Favorite Memory", message: "I smile every time I look at this.", placeholder: "us/imp1.jpg" }, // Defaulting to imp1, user can change later
    { day: 1, type: "video", title: "Happy Birthday Eve!", message: "Almost there! One last wish before the big day.", placeholder: "video.mp4" } // Placeholder for now
];

// --- LOGIC ---

let openedSurprises = JSON.parse(localStorage.getItem('openedSurprises')) || [];
let currentJarCategory = 'REASONS';

function init() {
    console.log("Initializing UI components...");

    // Fill basic details
    document.querySelectorAll('.girl-name').forEach(el => el.textContent = GIRL_NAME);
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
    }

    body.innerHTML = content;
    openModal();

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
    const praises = data.praises;
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
    const count = data.praises.length;
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
    const count = data.praises.length;
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

// --- Standard UI Helpers ---

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

function openModal() {
    const m = document.getElementById('modal-backdrop');
    if (m) { m.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
}
function closeModal() {
    const m = document.getElementById('modal-backdrop');
    if (m) { m.classList.add('hidden'); document.body.style.overflow = 'auto'; }
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
