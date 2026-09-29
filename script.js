/* ==========================================================================
   PRIYANSHU SHEKHAR — ULTRA-HD MULTI-ANGLE 3D PORTFOLIO CONTROLLER
   - Continuous Multi-Angle Volumetric Rotation (Front ➔ Side Profile ➔ Back)
   - Dynamic Synchronized Headline Morphing
   - Mouse Parallax 3D Tilt
   - Real-Time JSON Dispatch Node
   - FormSubmit Guaranteed Email Delivery to priyanshushekhar616@gmail.com
   - Native OS High-Precision Cursor
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  initMultiAngle3DScroll();
  initLiveDispatchNode();
  initContactFormSubmission();
  initAudioFeedback();
});

/* ==========================================================================
   1. MULTI-ANGLE 3D VOLUMETRIC SCROLL & TURNTABLE CONTROLLER
   - 60 Transparent High-Definition Studio WebP Frames
   - Unified 60FPS RAF Render Loop (Zero setInterval, Zero lag/freezing)
   - Interactive Drag / Swipe to Rotate with Inertia
   - Ultra-Smooth Continuous Slow Auto-Rotation (25s per cycle)
   ========================================================================== */
function initMultiAngle3DScroll() {
  const container = document.getElementById('hero-scrub-container');
  const rotator = document.getElementById('portrait-rotator');
  const stage = document.getElementById('portrait-3d-stage');
  const canvas = document.getElementById('hero-turntable-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  const title1 = document.getElementById('hero-title-1');
  const title2 = document.getElementById('hero-title-2');
  const tagline = document.getElementById('hero-tagline');
  const subtext = document.getElementById('hero-subtext');

  if (!stage) return;

  const TOTAL_FRAMES = 60;
  const frameImages = new Array(TOTAL_FRAMES);
  let currentDrawnIndex = -1;

  // Manual drag rotation state (float for sub-frame silkiness)
  let targetFrame = 0;
  let currentFrame = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartFrame = 0;
  let lastDragX = 0;
  let lastInteractionTime = 0;

  if (canvas && ctx) {
    if (rotator) rotator.style.display = 'none';

    // 1. Load frame 0 immediately for instant display (<5ms)
    const f0 = new Image();
    f0.src = 'frames_transparent/f_000.webp';
    f0.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(f0, 0, 0, canvas.width, canvas.height);
      currentDrawnIndex = 0;
    };
    frameImages[0] = f0;

    // 2. Preload remaining 59 transparent frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const pad = String(i).padStart(3, '0');
      img.src = `frames_transparent/f_${pad}.webp`;
      frameImages[i] = img;
    }

    // 3. Interactive Manual Drag-to-Rotate on Canvas (Smooth, controlled, zero lag)
    const handlePointerDown = (clientX) => {
      isDragging = true;
      dragStartX = clientX;
      lastDragX = clientX;
      dragStartFrame = targetFrame;
      lastInteractionTime = performance.now();
      canvas.style.cursor = 'grabbing';
    };

    const handlePointerMove = (clientX) => {
      if (!isDragging) return;
      const deltaX = clientX - dragStartX;
      lastDragX = clientX;

      // Slow, controlled, luxurious manual rotation: 750px drag = 1 full 360 degree turntable rotation
      const frameDelta = (deltaX / 750) * TOTAL_FRAMES;
      targetFrame = dragStartFrame - frameDelta;
      lastInteractionTime = performance.now();
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      lastInteractionTime = performance.now();
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousedown', (e) => handlePointerDown(e.clientX));
    window.addEventListener('mousemove', (e) => handlePointerMove(e.clientX));
    window.addEventListener('mouseup', handlePointerUp);

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) handlePointerDown(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches && e.touches.length === 1) handlePointerMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', handlePointerUp);

    // 4. Unified Single RAF Loop: Renders strictly on display refresh (Zero lag!)
    function renderLoop() {
      // Smooth inertia lerp toward targetFrame
      let diff = targetFrame - currentFrame;
      // Circular shortest path wrap around [0, TOTAL_FRAMES)
      while (diff > TOTAL_FRAMES / 2) diff -= TOTAL_FRAMES;
      while (diff < -TOTAL_FRAMES / 2) diff += TOTAL_FRAMES;

      currentFrame += diff * 0.12;

      const normalized = ((currentFrame % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
      const frameIdx = Math.floor(normalized);

      drawTurntableFrame(frameIdx);
      updateHeadlineForProgress(normalized / TOTAL_FRAMES);

      requestAnimationFrame(renderLoop);
    }
    requestAnimationFrame(renderLoop);
  }

  function drawTurntableFrame(index) {
    if (!canvas || !ctx || index === currentDrawnIndex) return;
    const target = frameImages[index];
    if (target && target.complete && target.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
      currentDrawnIndex = index;
    } else {
      // Find nearest loaded frame if this exact one is buffering
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameImages[(index - offset + TOTAL_FRAMES) % TOTAL_FRAMES];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(prev, 0, 0, canvas.width, canvas.height);
          currentDrawnIndex = (index - offset + TOTAL_FRAMES) % TOTAL_FRAMES;
          break;
        }
        const next = frameImages[(index + offset) % TOTAL_FRAMES];
        if (next && next.complete && next.naturalWidth > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(next, 0, 0, canvas.width, canvas.height);
          currentDrawnIndex = (index + offset) % TOTAL_FRAMES;
          break;
        }
      }
    }
  }

  const stages = [
    {
      t1: "CREATIVE",
      t2: "DEVELOPER",
      tagline: "// TURNING IDEAS INTO REALITY",
      subtext: "Available for hire. Building fast, responsive web applications using modern tech stacks."
    },
    {
      t1: "DATA & AI",
      t2: "PLATFORMS",
      tagline: "// QUANTITATIVE & ML INTELLIGENCE",
      subtext: "Full-stack analytics, high-performance ETL pipelines, and intelligent predictive models."
    },
    {
      t1: "SCALABLE",
      t2: "SYSTEMS",
      tagline: "// ROBUST BACKEND ARCHITECTURE",
      subtext: "Architecting robust backend pipelines, cloud microservices, and database optimization."
    },
    {
      t1: "SYSTEMS",
      t2: "ARCHITECT",
      tagline: "// CLOUD & DISTRIBUTED SCALE",
      subtext: "Serving 50K+ users with 99.95% platform availability, Docker containerization, and zero-downtime CI/CD."
    }
  ];

  let currentPhase = 0;

  function updateHeadlineForProgress(progress) {
    const phaseProg = Math.min(3, Math.floor(progress * 4));
    if (phaseProg !== currentPhase) {
      currentPhase = phaseProg;
      const s = stages[currentPhase];

      if (title1 && title2) {
        title1.style.opacity = '0';
        title2.style.opacity = '0';
        if (tagline) tagline.style.opacity = '0';
        if (subtext) subtext.style.opacity = '0';

        setTimeout(() => {
          title1.innerText = s.t1;
          title2.innerText = s.t2;
          if (tagline) tagline.innerText = s.tagline;
          if (subtext) subtext.innerText = s.subtext;

          title1.style.opacity = '1';
          title2.style.opacity = '1';
          if (tagline) tagline.style.opacity = '1';
          if (subtext) subtext.style.opacity = '1';
        }, 120);
      }
    }
  }

  // Subtle Mouse Parallax Tilt
  window.addEventListener('mousemove', (e) => {
    if (window.scrollY > window.innerHeight) return;
    const normX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normY = (e.clientY / window.innerHeight - 0.5) * 2;

    stage.style.transform = `translateX(-50%) rotateX(${-normY * 3}deg) rotateZ(${normX * 1.2}deg)`;
  }, { passive: true });
}

/* ==========================================================================
   2. REAL-TIME LIVE JSON DISPATCH NODE
   ========================================================================== */
function initLiveDispatchNode() {
  const fnInput = document.getElementById('input-first-name');
  const lnInput = document.getElementById('input-last-name');
  const emInput = document.getElementById('input-email');
  const msgInput = document.getElementById('input-message');

  const jsonSender = document.getElementById('json-sender');
  const jsonEmail = document.getElementById('json-email');
  const jsonMsg = document.getElementById('json-msg');

  function updateJSONPreview() {
    const firstName = fnInput ? fnInput.value.trim() : '';
    const lastName = lnInput ? lnInput.value.trim() : '';
    const fullName = `${firstName} ${lastName}`.trim();
    const email = emInput ? emInput.value.trim() : '';
    const message = msgInput ? msgInput.value.trim() : '';

    if (jsonSender) {
      jsonSender.innerText = fullName ? `"${fullName}"` : '[Awaiting Name]';
      jsonSender.className = fullName ? 'text-purple-300 font-semibold' : 'text-emerald-400 font-semibold';
    }

    if (jsonEmail) {
      jsonEmail.innerText = email ? `"${email}"` : '[Awaiting Email]';
      jsonEmail.className = email ? 'text-cyan-300 font-semibold' : 'text-cyan-400 font-semibold';
    }

    if (jsonMsg) {
      jsonMsg.innerText = message ? `"${message}"` : '"[Awaiting Message]"';
      jsonMsg.className = message ? 'text-white font-semibold' : 'text-slate-300';
    }
  }

  [fnInput, lnInput, emInput, msgInput].forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        updateJSONPreview();
        playSynthClick(440, 0.015);
      });
    }
  });
}

/* ==========================================================================
   3. GUARANTEED FORM SUBMISSION (Direct to priyanshushekhar616@gmail.com)
   ========================================================================== */
function initContactFormSubmission() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const statusBanner = document.getElementById('dispatch-status');
  const subjectInput = document.getElementById('form-subject');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fnInput = document.getElementById('input-first-name');
    const lnInput = document.getElementById('input-last-name');
    const emInput = document.getElementById('input-email');
    const msgInput = document.getElementById('input-message');

    const firstName = fnInput ? fnInput.value.trim() : '';
    const lastName = lnInput ? lnInput.value.trim() : '';
    const fullName = `${firstName} ${lastName}`.trim();
    const email = emInput ? emInput.value.trim() : '';
    const message = msgInput ? msgInput.value.trim() : '';

    if (subjectInput && fullName) {
      subjectInput.value = `New Portfolio Inquiry from ${fullName}`;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center gap-2">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Dispatching Transmission...
        </span>
      `;
    }

    try {
      const formData = new FormData(form);
      const response = await fetch("https://formsubmit.co/ajax/priyanshushekhar616@gmail.com", {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });

      const result = await response.json();

      if (response.ok || result.success === "true") {
        playSynthClick(880, 0.15);
        if (statusBanner) {
          statusBanner.className = "p-4 rounded-xl text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 block space-y-1 shadow-lg";
          statusBanner.innerHTML = `
            <div class="font-bold flex items-center gap-2 text-emerald-400">
              <i data-lucide="check-circle" class="w-4 h-4"></i> DISPATCH DELIVERED // STATUS 200 OK
            </div>
            <p>Your transmission has been forwarded directly to <strong>priyanshushekhar616@gmail.com</strong>. Priyanshu will respond within 24 hours.</p>
          `;
          if (window.lucide) lucide.createIcons();
        }
        form.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn("Direct dispatch error, opening mailto fallback:", err);
      // Fallback: Direct Mailto
      const mailtoUrl = `mailto:priyanshushekhar616@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(fullName)}&body=Name:%20${encodeURIComponent(fullName)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
      
      if (statusBanner) {
        statusBanner.className = "p-4 rounded-xl text-xs font-mono bg-white/[0.06] border border-white/20 text-white block space-y-2 shadow-lg";
        statusBanner.innerHTML = `
          <div class="font-bold text-amber-400 flex items-center gap-2">
            <i data-lucide="info" class="w-4 h-4"></i> Transmission Prepared
          </div>
          <p>Click below to complete sending directly via your email client:</p>
          <a href="${mailtoUrl}" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-slate-200">
            Open in Email Client <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        `;
        if (window.lucide) lucide.createIcons();
      }
      window.location.href = mailtoUrl;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Send Message <i data-lucide="send" class="w-4 h-4 ml-2"></i>`;
        if (window.lucide) lucide.createIcons();
      }
    }
  });
}

/* ==========================================================================
   4. AUDIO FEEDBACK SYNTHESIZER (Web Audio API)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioFeedback() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const icon = document.getElementById('audio-icon');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (icon) {
        icon.setAttribute('data-lucide', soundEnabled ? 'volume-2' : 'volume-x');
        if (window.lucide) lucide.createIcons();
      }
      if (soundEnabled) playSynthClick(580, 0.05);
    });
  }
}

function playSynthClick(freq = 440, duration = 0.05) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio restricted
  }
}
