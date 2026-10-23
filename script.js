// --- 1. Bilingual Copy (English & Urdu) & Constants ---
// Set to Nov 13, 2026 at 1:00 PM PKT (+05:00)
const CEREMONY_AT = Date.parse("2026-11-13T13:00:00+05:00");

const copy = {
  en: {
    tap: "Tap to open",
    Bismilah: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ",
    married: "We're getting married",
    groomName: "Awais Sohail",
    groomKin: "Son of Mr & Mrs.Sohail Nadeem (Late)",
    groomStudy: "",
    groomRole: "",
    brideName: "",
    brideKin: "Daughter of Mr. & Mrs. Abid",
    brideStudy: "",
    brideRole: "",
    welcome:
      "We are honored to welcome you to the wedding ceremony of our son as the begin of their journey together in faith and love. We thank you for being part of this blessed occasion.",
    scratch: "Scratch to reveal",
    forever: "Our forever begins",
    invited: "You're invited",
    dateLine: "November 13, 2026",
    weekday: "Friday",
    time: "1:00 PM",
    save: "Save the date",
    saved: "Saved to your calendar",
    countdown: "Counting down to forever",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    arrived: "The day is here",
    program: "Wedding Events",
    events: [
      { title: "Mehndi", when: "Nov 12, 2026", note: " At Home 6:00 PM to 10:00 PM" },
      { title: "Barat", when: "Nov 13, 2026 — Sehra Bandi 12:00 PM", note: "Your presence means a lot" },
      { title: "Walima", when: "Nov 14, 2026 — 7:00 PM", note: "Umer Marriage Hall, Mandi Bahauddin" },
    ],
    venue: "Venue",
    hall: "Umer Marriage Hall",
    city: "Mandi Bahauddin",
    maps: "View on Google Maps",
    dress: "Dress code",
    women: "Women",
    womenNote: "Elegant formal attire in pastel",
    men: "Men",
    menNote: "Suit or traditional formal wear",
    lang: "اردو",
    scroll: "Scroll the invitation",
  },
  ur: {
    tap: "کھولنے کے لیے کلک کریں",
    married: "ہماری شادی خانہ آبادی",
    groomName: "",
    groomKin: "فرزند مسٹر اینڈ مسز ملک",
    groomStudy: "بی ای، ایم ایس",
    groomRole: "ڈیٹا سائنٹسٹ",
    brideName: "نورا",
    brideKin: "دختر مسٹر اینڈ مسز ناصر",
    brideStudy: "ایم بی بی ایس، ایم ڈی",
    brideRole: "ماہرِ امراضِ اطفال",
    welcome:
      "ہم زین اور نورا کی تقریبِ شادی کے اس پرمسرت اور بابرکت موقع پر آپ کو دل کی اتھاہ گہرائیوں سے خوش آمدید کہتے ہیں۔ آپ کی شرکت اور دعائیں ہمارے لیے باعثِ مسرت ہیں۔",
    scratch: "تاریخ دیکھنے کے لیے اسکریچ کریں",
    forever: "ہمارے نئے سفر کا آغاز",
    invited: "آپ مدعو ہیں",
    dateLine: "13 نومبر 2026",
    weekday: "جمعہ",
    time: "دوپہر 1:00 بجے",
    save: "تاریخ محفوظ کریں",
    saved: "کیلنڈر میں محفوظ ہو گیا",
    countdown: "شادی میں باقی وقت",
    days: "دن",
    hours: "گھنٹے",
    minutes: "منٹ",
    seconds: "سیکنڈ",
    arrived: "خوشیوں کا دن آ گیا ہے",
    program: "تقریبات کی تفصیل",
    events: [
      { title: "مہندی", when: "12 نومبر 2026", note: "شام کی تقریب" },
      { title: "بارات", when: "13 نومبر 2026 — روانگی دوپہر 1:00 بجے", note: "آپ کی شرکت ہمارے لیے باعثِ مسرت ہے" },
      { title: "ولیمہ", when: "14 نومبر 2026 — شام 7:00 بجے", note: "عمر میرج ہال، منڈی بہاؤالدین" },
    ],
    venue: "بمقام",
    hall: "عمر میرج ہال",
    city: "منڈی بہاؤالدین",
    maps: "گوگل میپس پر دیکھیں",
    dress: "لباس",
    women: "خواتین",
    womenNote: "نفیس اور روایتی لباس",
    men: "حضرات",
    menNote: "فارمل سوٹ یا روایتی لباس",
    lang: "EN",
    scroll: "نیچے اسکرول کریں",
  },
};

// --- 2. Web Audio Synthesizer ---
let ctx = null;
let master = null;
let timer = null;
let step = 0;
let playing = false;

const MELODY = [293.66, 329.63, 369.99, 440, 493.88, 440, 369.99, 329.63, 293.66, 246.94];

function ensureAudio() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0.05;
  master.connect(ctx.destination);
  return ctx;
}

function pluck(freq, when, dur, level = 1) {
  if (!ctx || !master) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = "triangle";
  osc.frequency.value = freq;
  filter.type = "lowpass";
  filter.frequency.value = 1600;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.exponentialRampToValueAtTime(0.22 * level, when + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(master);
  osc.start(when);
  osc.stop(when + dur + 0.05);
}

function loopMusic() {
  if (!playing || !ctx) return;
  const now = ctx.currentTime;
  const note = MELODY[step % MELODY.length];
  pluck(note, now, step % 4 === 0 ? 1.5 : 1.05, 0.85);
  if (step % 4 === 0) pluck(146.83, now, 2.1, 0.45);
  step += 1;
  timer = setTimeout(loopMusic, 820);
}

function startMusic() {
  const audio = ensureAudio();
  if (audio.state === "suspended") void audio.resume();
  if (playing) return;
  playing = true;
  loopMusic();
  updateMusicUI();
}

function stopMusic() {
  playing = false;
  if (timer) clearTimeout(timer);
  timer = null;
  if (ctx && master) {
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
    const m = master;
    window.setTimeout(() => {
      if (!playing && ctx) {
        m.gain.setValueAtTime(0.05, ctx.currentTime);
      }
    }, 300);
  }
  updateMusicUI();
}

function chime() {
  const audio = ensureAudio();
  if (audio.state === "suspended") void audio.resume();
  const now = audio.currentTime;
  [523.25, 659.25, 783.99].forEach((freq, i) => pluck(freq, now + i * 0.12, 1.1, 0.7));
}

function updateMusicUI() {
  const iconOn = document.getElementById("music-icon-on");
  const iconOff = document.getElementById("music-icon-off");
  if (iconOn && iconOff) {
    iconOn.style.display = playing ? "block" : "none";
    iconOff.style.display = playing ? "none" : "block";
  }
}

// --- 3. Application State & DOM Interactions ---
let currentLang = "en";
let isDateSaved = false;

function renderCopy() {
  const dict = copy[currentLang];
  const phone = document.getElementById("phone");
  phone.setAttribute("data-lang", currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ur" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key === "save" && isDateSaved) {
      el.textContent = dict.saved;
    } else if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const timelineList = document.getElementById("timeline-list");
  if (timelineList) {
    timelineList.innerHTML = dict.events
      .map(
        (ev) => `
      <li>
        <p class="event-title">${ev.title}</p>
        <p class="event-when">${ev.when}</p>
        <p class="event-note">${ev.note}</p>
      </li>
    `
      )
      .join("");
  }
}

// --- 4. Envelope & Curtains Opening ---
function initEnvelope() {
  const sealBtn = document.getElementById("seal-btn");
  const envelope = document.getElementById("envelope");
  const curtains = document.getElementById("curtains");
  const scrollContainer = document.getElementById("scroll-container");
  const heroCopy = document.getElementById("hero-copy");

  sealBtn.addEventListener("click", () => {
    chime();
    startMusic();
    envelope.classList.add("is-parted");

    setTimeout(() => {
      curtains.classList.add("is-parted");
      scrollContainer.classList.remove("is-locked");
      heroCopy.classList.add("is-shown");
    }, 350);
  });
}

// --- 5. Scratch Card Canvas ---
function initScratchCard() {
  const canvas = document.getElementById("scratch-canvas");
  if (!canvas) return;
  const ctx2d = canvas.getContext("2d");
  let isDrawing = false;
  let revealed = false;

  function fillScratchFoil() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx2d.scale(window.devicePixelRatio, window.devicePixelRatio);

    const grad = ctx2d.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#a68545");
    grad.addColorStop(0.5, "#f0e2b8");
    grad.addColorStop(1, "#8d6b34");
    ctx2d.fillStyle = grad;
    ctx2d.fillRect(0, 0, rect.width, rect.height);
  }

  fillScratchFoil();

  function scratch(x, y) {
    ctx2d.globalCompositeOperation = "destination-out";
    ctx2d.beginPath();
    ctx2d.arc(x, y, 22, 0, Math.PI * 2);
    ctx2d.fill();
  }

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function onDown(e) {
    isDrawing = true;
    const { x, y } = getCoords(e);
    scratch(x, y);
  }

  function onMove(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoords(e);
    scratch(x, y);
    if (!revealed) {
      revealed = true;
      spawnPetals();
    }
  }

  function onUp() {
    isDrawing = false;
  }

  canvas.addEventListener("mousedown", onDown);
  canvas.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);

  canvas.addEventListener("touchstart", onDown, { passive: true });
  canvas.addEventListener("touchmove", onMove, { passive: false });
  window.addEventListener("touchend", onUp);
}

// --- 6. Falling Petals Effect ---
function spawnPetals() {
  const foreverSection = document.getElementById("forever-section");
  if (!foreverSection) return;

  for (let i = 0; i < 16; i++) {
    const petal = document.createElement("span");
    petal.className = `petal tone-${i % 3}`;
    petal.style.left = `${Math.random() * 92 + 4}%`;
    petal.style.animationDuration = `${2.2 + Math.random() * 1.8}s`;
    petal.style.animationDelay = `${Math.random() * 0.6}s`;
    foreverSection.appendChild(petal);
    setTimeout(() => petal.remove(), 4500);
  }
}

// --- 7. Save the Date (.ics Calendar Download) ---
function initSaveDate() {
  const saveBtn = document.getElementById("save-date-btn");
  const saveLabel = document.getElementById("save-date-label");

  saveBtn.addEventListener("click", () => {
    chime();
    spawnPetals();
    isDateSaved = true;
    saveLabel.textContent = copy[currentLang].saved;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:20261113T080000Z",
      "DTEND:20261114T180000Z",
      "SUMMARY:Zayn & Nora's Wedding (Mehndi, Barat & Walima)",
      "DESCRIPTION:Mehndi: Nov 12 | Barat: Nov 13 (Departure 1:00 PM) | Walima: 7:00 PM at Umer Marriage Hall, Mandi Bahauddin.",
      "LOCATION:Umer Marriage Hall, Mandi Bahauddin",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "wedding-invitation.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// --- 8. Countdown Timer ---
function initCountdown() {
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");
  const gridEl = document.getElementById("countdown-grid");
  const arrivedEl = document.getElementById("cd-arrived");

  function tick() {
    const diff = CEREMONY_AT - Date.now();
    if (diff <= 0) {
      gridEl.style.display = "none";
      arrivedEl.style.display = "block";
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minutesEl.textContent = String(m).padStart(2, "0");
    secondsEl.textContent = String(s).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

// --- 9. Initialize All Controls ---
document.addEventListener("DOMContentLoaded", () => {
  renderCopy();
  initEnvelope();
  initScratchCard();
  initSaveDate();
  initCountdown();

  document.getElementById("music-btn").addEventListener("click", () => {
    if (playing) stopMusic();
    else startMusic();
  });

  document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ur" : "en";
    renderCopy();
  });
});
