// --- 1. Bilingual Copy & Constants ---
const CEREMONY_AT = Date.parse("2026-11-30T10:00:00Z");

const copy = {
  en: {
    tap: "Tap to open",
    married: "We're getting married",
    groomName: "Zayn",
    groomKin: "Son of Mr. & Mrs. Malik",
    groomStudy: "B.E., M.S.",
    groomRole: "Data Scientist",
    brideName: "Nora",
    brideKin: "Daughter of Mr. & Mrs. Nasser",
    brideStudy: "MBBS, M.D.",
    brideRole: "Pediatrician",
    welcome:
      "We are honored to welcome you to the wedding ceremony of Zayn & Nora as they begin their journey together in faith and love. We thank you for being part of this blessed occasion.",
    scratch: "Scratch to reveal",
    forever: "Our forever begins",
    invited: "You're invited",
    dateLine: "November 30, 2026",
    weekday: "Monday",
    time: "10:00 AM",
    save: "Save the date",
    saved: "Saved to your calendar",
    countdown: "Counting down to forever",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    arrived: "The day is here",
    program: "Program timeline",
    events: [
      { title: "Guest arrival", when: "Nov 30, 2026 — 10:00 AM", note: "We welcome you" },
      { title: "Wedding ceremony", when: "Nov 30, 2026 — 10:30 AM", note: "Your presence means a lot" },
      { title: "Reception", when: "Dec 2, 2026 — 7:30 PM", note: "An evening together" },
    ],
    venue: "Venue",
    hall: "Grand Palace Hall",
    city: "City Centre, London",
    maps: "View on Google Maps",
    dress: "Dress code",
    women: "Women",
    womenNote: "Elegant formal attire in pastel",
    men: "Men",
    menNote: "Suit or traditional formal wear",
    pre: "Pre-wedding events",
    mehendi: "Mehendi",
    mehendiWhen: "Nov 28, 2026 — 8:30 PM",
    mehendiWhere: "At the bride's house",
    haldi: "Haldi",
    haldiWhen: "Nov 28, 2026 — 8:00 PM",
    haldiWhere: "At the groom's house",
    transport: "Transportation",
    transportNote:
      "Shuttle service will be available from the city centre to the venue. Pickup point: Central Station at 3:30 PM.",
    stay: "Accommodation",
    stayNote:
      "Special rates at The Grand Palace Hotel, five minutes from the venue. Use code WEDDING2026 when booking.",
    code: "WEDDING2026",
    gifts: "Gifts",
    giftsNote:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    rsvp: "RSVP",
    name: "Your name",
    namePh: "Your full name",
    email: "Email",
    emailPh: "you@example.com",
    attending: "Will you be attending?",
    yes: "Joyfully, yes",
    no: "Regretfully, no",
    maybe: "Not sure yet",
    message: "Your message",
    messagePh: "A wish for the couple",
    send: "Send message",
    thanks: "Your note is with us",
    thanksBody: "Thank you. We cannot wait to celebrate with you.",
    another: "Write another note",
    lang: "عربي",
    needName: "Please add your name",
    needEmail: "Please add a valid email",
    scroll: "Scroll the invitation",
  },
  ar: {
    tap: "اضغط للفتح",
    married: "سنتزوج",
    groomName: "زين",
    groomKin: "نجل السيد والسيدة مالك",
    groomStudy: "بكالوريوس وماجستير هندسة",
    groomRole: "عالم بيانات",
    brideName: "نورا",
    brideKin: "كريمة السيد والسيدة ناصر",
    brideStudy: "بكالوريوس ودكتوراه في الطب",
    brideRole: "طبيبة أطفال",
    welcome:
      "يشرفنا الترحيب بكم في حفل زفاف زين ونورا حيث يبدآن رحلتهما معاً بالإيمان والمحبة. نشكركم لكونكم جزءاً من هذه المناسبة المباركة.",
    scratch: "امسح للكشف عن الموعد",
    forever: "تبدأ أبديتنا",
    invited: "أنتم مدعوون",
    dateLine: "٣٠ نوفمبر ٢٠٢٦",
    weekday: "الاثنين",
    time: "١٠:٠٠ صباحاً",
    save: "احفظ الموعد",
    saved: "تم الحفظ في التقويم",
    countdown: "العد التنازلي للأبدية",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني",
    arrived: "لقد حان اليوم المنتظر",
    program: "برنامج الحفل",
    events: [
      { title: "وصول الضيوف", when: "٣٠ نوفمبر ٢٠٢٦ — ١٠:٠٠ ص", note: "نرحب بكم" },
      { title: "مراسم الزفاف", when: "٣٠ نوفمبر ٢٠٢٦ — ١٠:٣٠ ص", note: "حضوركم يسعدنا" },
      { title: "حفل الاستقبال", when: "٢ ديسمبر ٢٠٢٦ — ٧:٣٠ م", note: "أمسية سعيدة معاً" },
    ],
    venue: "المكان",
    hall: "قاعة القصر الكبير",
    city: "وسط المدينة، لندن",
    maps: "عرض على خرائط جوجل",
    dress: "قواعد اللباس",
    women: "النساء",
    womenNote: "ملابس رسمية أنيقة بألوان الباستيل",
    men: "الرجال",
    menNote: "بدلة رسمية أو زي تقليدي",
    pre: "فعاليات ما قبل الزفاف",
    mehendi: "ليلة الحناء",
    mehendiWhen: "٢٨ نوفمبر ٢٠٢٦ — ٨:٣٠ م",
    mehendiWhere: "في منزل العروس",
    haldi: "حفل الهالدي",
    haldiWhen: "٢٨ نوفمبر ٢٠٢٦ — ٨:٠٠ م",
    haldiWhere: "في منزل العريس",
    transport: "المواصلات",
    transportNote:
      "ستتوفر خدمة النقل من وسط المدينة إلى القاعة. نقطة الانطلاق: المحطة المركزية الساعة ٣:٣٠ عصراً.",
    stay: "الإقامة",
    stayNote:
      "أسعار خاصة في فندق القصر الكبير، على بعد خمس دقائق من القاعة. استخدم الرمز WEDDING2026 عند الحجز.",
    code: "WEDDING2026",
    gifts: "الهدايا",
    giftsNote: "محبتكم ودعواتكم وحضوركم هي أجمل هدية يمكن أن نتمناها.",
    rsvp: "تأكيد الحضور",
    name: "الاسم",
    namePh: "الاسم الكامل",
    email: "البريد الإلكتروني",
    emailPh: "you@example.com",
    attending: "هل ستحضر؟",
    yes: "بكل سرور، نعم",
    no: "للأسف، لا",
    maybe: "لست متأكداً بعد",
    message: "رسالتك",
    messagePh: "أمنية للعروسين",
    send: "إرسال الرسالة",
    thanks: "وصلتنا رسالتك",
    thanksBody: "شكراً لك. لا يسعنا الانتظار للاحتفال معكم.",
    another: "كتابة رسالة أخرى",
    lang: "EN",
    needName: "يرجى إدخال الاسم",
    needEmail: "يرجى إدخال بريد إلكتروني صحيح",
    scroll: "مرر لأسفل",
  },
};

// --- 2. Web Audio Synthesizer (from src/lib/music.ts) ---
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
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key === "save" && isDateSaved) {
      el.textContent = dict.saved;
    } else if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
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
      "DTSTART:20261130T100000Z",
      "DTEND:20261130T140000Z",
      "SUMMARY:Zayn & Nora's Wedding",
      "DESCRIPTION:Wedding ceremony of Zayn & Nora at Grand Palace Hall, London.",
      "LOCATION:Grand Palace Hall, City Centre, London",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "zayn-and-nora-wedding.ics";
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

// --- 9. RSVP Form Handling ---
function initRSVP() {
  const form = document.getElementById("rsvp-form");
  const nameInput = document.getElementById("rsvp-name");
  const emailInput = document.getElementById("rsvp-email");
  const errorEl = document.getElementById("rsvp-error");
  const thanksEl = document.getElementById("rsvp-thanks");
  const resetBtn = document.getElementById("rsvp-reset");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = copy[currentLang];
    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();

    if (!nameVal) {
      errorEl.textContent = dict.needName;
      errorEl.style.display = "block";
      return;
    }
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      errorEl.textContent = dict.needEmail;
      errorEl.style.display = "block";
      return;
    }

    errorEl.style.display = "none";
    chime();
    form.style.display = "none";
    thanksEl.style.display = "block";
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    thanksEl.style.display = "none";
    form.style.display = "grid";
  });
}

// --- 10. Initialize All Controls ---
document.addEventListener("DOMContentLoaded", () => {
  renderCopy();
  initEnvelope();
  initScratchCard();
  initSaveDate();
  initCountdown();
  initRSVP();

  document.getElementById("music-btn").addEventListener("click", () => {
    if (playing) stopMusic();
    else startMusic();
  });

  document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    renderCopy();
  });
});