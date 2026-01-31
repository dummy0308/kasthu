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

const LETTERS = [
    { type: "sad", title: "sad", message: "My love, I'm sorry you're feeling down. Take a deep breath. You are so much stronger than you feel right now. I'm always here with a shoulder to lean on. ❤️" },
    { type: "miss", title: "miss me", message: "I'm probably missing you even more right now. Close your eyes and remember our last hug. I'll be back in your arms before you know it." },
    { type: "motivation", title: "need motivation", message: "You are a rockstar! Don't let a temporary setback stop you. You've achieved so much already, and I believe in you 100%!" },
    { type: "stressed", title: "stressed", message: "Everything will be okay. Put your phone away for 10 minutes, drink some water, and remember that you've handled everything life has thrown at you. I'm proud of you." }
];

const SURPRISES = [
    {
        day: 30, type: "text", title: "The Beginning", message: `Innum 30 naal irukku... This countdown is just a small way to say how much you mean to me. Get ready for a surprise every 5 days!
        Innum 30 naal irukku, Aanaal indha naal enakku special… Un sirippu nenachale Indha naalum festival pola feel aagudhu.

Birthday oru naal thaan varum, Aanaal nee irukkura ella naalum En life-la celebration thaan.

Cake illa, candle illa, Aanaal un ninaivu mattum podhum Indha 30 naalum happy-aa irukka.

Un birthday vara varaikkum illa… Un sirippu irukkura varaikkum En manasula sandhosham mudiyadhu.

Advance-aa solren illa… Late-aa kooda illa… Simply heart-la irundhu solren — Nee irukkura naal ellame Enakku best days thaan 💖` },
    { day: 25, type: "image", title: "Throwback", message: "Remember these? Truly some of my favorites.", images: ["us/imp1.jpg", "us/imp2.jpg", "us/imp3.jpg"] },
    { day: 20, type: "quiz", title: "Fun Fact", message: "A silly question for you...", quiz: { question: "When will our fights be over?", options: ["Never", "Tomorrow", "After Marriage"], correct: 0 } },
    { day: 15, type: "audio", title: "Voice Note", message: "A little message from me to you.", placeholder: "voice.m4a" },
    { day: 10, type: "coupon", title: "Choose Your Treat", message: "Redeem this for one of the following:", options: ["Movie Date 🎬", "Relaxing Massage 💆‍♀️", "Weekend Trip 🚗", "Favorite Food 🍕"] },
    { day: 5, type: "link", title: "Mood Song", message: "Listen to this...", link: "https://www.youtube.com/watch?v=juHpoMK3AuQ" },
    { day: 4, type: "text", title: "Why I Love You", message: "I love you because you make ordinary days feel extraordinary. Your smile is my daily motivation." },
    { day: 3, type: "clue", title: "A Little Hint", message: "Your birthday gift is something you can hold, something you can keep, and something that reminds you of us." },
    { day: 2, type: "image", title: "Favorite Memory", message: "I smile every time I look at this.", placeholder: "us/imp1.jpg" }, // Defaulting to imp1, user can change later
    { day: 1, type: "video", title: "Happy Birthday Eve!", message: "Almost there! One last wish before the big day.", placeholder: "video.mp4" } // Placeholder for now
];

// --- LOGIC ---

let openedSurprises = JSON.parse(localStorage.getItem('openedSurprises')) || [];

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

        // ... existing timer logic ...
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
        // Simple YouTube Embed
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
    } else if (data.type === 'quiz') {
        content += `<div class="quiz-options"><p><strong>${data.quiz.question}</strong></p>`;
        data.quiz.options.forEach((opt, i) => {
            content += `<button class="quiz-btn" onclick="checkQuiz(this, ${i === data.quiz.correct})">${opt}</button>`;
        });
        content += `</div>`;
    }

    body.innerHTML = content;
    openModal();

    if (!openedSurprises.includes(data.day)) {
        openedSurprises.push(data.day);
        localStorage.setItem('openedSurprises', JSON.stringify(openedSurprises));
        renderSurprises();
    }
}

window.checkQuiz = (btn, isCorrect) => {
    if (isCorrect) {
        btn.classList.add('correct');
        alert("Correct! ❤️");
    } else {
        btn.classList.add('wrong');
        alert("Try again! You can do it.");
    }
};

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
    // Nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(l => {
        l.onclick = () => {
            links.forEach(link => link.classList.remove('active'));
            l.classList.add('active');
        };
    });

    // Gallery Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        };
    });

    // Shuffle Reason
    const shuffleBtn = document.getElementById('shuffle-reason');
    if (shuffleBtn) {
        shuffleBtn.onclick = () => {
            const r = REASONS[Math.floor(Math.random() * REASONS.length)];
            document.getElementById('modal-title').textContent = "Random Reason I Love You";
            document.getElementById('modal-body').innerHTML = `<div style="text-align:center; padding:2rem;"><h2 style="color:var(--primary);">"${r}"</h2></div>`;
            openModal();
        };
    }

    // Secret Page
    const unlockBtn = document.getElementById('unlock-secret');
    if (unlockBtn) {
        unlockBtn.onclick = () => {
            const input = document.getElementById('passcode-input').value;
            if (input === PASSCODE || (DEBUG_MODE && input === "0000")) {
                document.getElementById('passcode-entry').classList.add('hidden');
                const content = document.getElementById('secret-content');
                if (content) {
                    content.classList.remove('hidden');
                    document.getElementById('secret-memory').textContent = `My favorite memory is just us being us — no filters, no pretense, just love.
We’ve shared so much love together. Romba struggles, misunderstandings ellam vandhalum, athellam thaandi innum namma rendu perum orutharai oruthar choose panninom, together iruka decide panninom.

Naan senja ellathukkum romba romba sorry. Unna hurt panninathuku manasara mannippu ketkuren. Please forgive me… naan romba sincerely, deeply beg pannuren.

I love you so much, chellameee ❤️`;
                }
            } else {
                alert("Wrong password! Hint: The year it all started.");
            }
        };
    }

    // Modal Close
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) closeBtn.onclick = closeModal;

    window.onclick = (e) => {
        if (e.target.id === 'modal-backdrop') closeModal();
        if (e.target.id === 'lightbox') closeLightbox();
    };

    window.onkeydown = (e) => {
        if (e.key === 'Escape') { closeModal(); closeLightbox(); }
    };

    // Lightbox Close
    const lbClose = document.getElementById('close-lightbox');
    if (lbClose) lbClose.onclick = closeLightbox;

    // Final Message
    const finalBtn = document.getElementById('final-message-btn');
    if (finalBtn) {
        finalBtn.onclick = () => {
            document.getElementById('modal-title').textContent = "My Final Message";
            document.getElementById('modal-body').innerHTML = `<div style="line-height:1.6;"><p>Happy Birthday ${GIRL_NAME}!</p><br><p>This month was just a small way to show you how much you mean to me. I love you more than words can say.</p></div>`;
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

    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.onclick = () => {
            menuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        };

        // Close menu when a link is clicked
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.onclick = (e) => {
                // Keep original active state logic
                navLinksContainer.querySelectorAll('a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Toggle off menu
                menuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
            };
        });
    }
}

function openModal() {
    const m = document.getElementById('modal-backdrop');
    if (m) {
        m.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}
function closeModal() {
    const m = document.getElementById('modal-backdrop');
    if (m) {
        m.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
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
    if (lb) {
        lb.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
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
