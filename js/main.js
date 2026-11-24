/**
 * Main Interactive Logic for Shreeyash Solunke's Portfolio
 * High-performance Canvas Particles, 3D Tilt, Interactive Terminal,
 * Modal System, Audio Feedback & Filter System.
 */

document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initCustomCursor();
  initTypingEffect();
  initInteractiveTerminal();
  initProjectShowcase();
  initProjectModal();
  initAudioSynthesizer();
  initLiveClock();
  initSmoothScrollAndNavigation();
  initScrollProgressBar();
  initSpotlightCards();
  initCodePlayground();
  initCopyActions();
  initMobileMenu();
  initCardTilt();
  
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   1. HIGH-PERFORMANCE INTERACTIVE PARTICLE CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  const mouse = { x: -1000, y: -1000, radius: 140 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 14000), 75);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.baseAlpha = Math.random() * 0.4 + 0.2;
      this.alpha = this.baseAlpha;
      // Palette: Cyan, Indigo, Violet
      const colors = ["#38bdf8", "#818cf8", "#c084fc", "#34d399"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 2.5;
        this.y -= Math.sin(angle) * force * 2.5;
        this.alpha = Math.min(this.baseAlpha + 0.4, 0.9);
      } else {
        this.alpha = this.baseAlpha;
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  initParticles();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const lineAlpha = (1 - dist / 110) * 0.22;
          ctx.strokeStyle = "rgba(99, 102, 241, " + lineAlpha + ")";
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Update and draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. CUSTOM MOUSE CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Hover states for interactive elements
  const hoverables = document.querySelectorAll("a, button, input, .interactive-card, .filter-btn");
  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "54px";
      ring.style.height = "54px";
      ring.style.borderColor = "rgba(56, 189, 248, 0.9)";
      ring.style.backgroundColor = "rgba(56, 189, 248, 0.1)";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(56, 189, 248, 0.5)";
      ring.style.backgroundColor = "transparent";
    });
  });
}

/* ==========================================================================
   3. TYPING EFFECT IN HERO
   ========================================================================== */
function initTypingEffect() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  const words = [
    "IT Engineer @ VIT Pune",
    "Leader @ Team ByteForge (Code APEX 3.0)",
    "Architecting MediMate & Civic Platforms",
    "Python, SQL & Flutter Builder",
    "Passionate Problem Solver & Innovator"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   4. INTERACTIVE HERO TERMINAL
   ========================================================================== */
function initInteractiveTerminal() {
  const terminalBody = document.getElementById("terminal-body");
  const terminalInput = document.getElementById("terminal-input");
  const quickChips = document.querySelectorAll(".quick-term-btn");

  if (!terminalBody || !terminalInput) return;

  const commands = {
    help: () => `
<span class="text-cyan-400 font-bold">AVAILABLE COMMANDS:</span>
  • <span class="text-amber-300">about</span>     - Overview of Shreeyash Rahul Solunke
  • <span class="text-amber-300">projects</span>  - List major tech & hackathon projects
  • <span class="text-amber-300">skills</span>    - Core technical and leadership stack
  • <span class="text-amber-300">leader</span>    - ByteForge & VIT Code APEX 3.0 info
  • <span class="text-amber-300">college</span>   - VIT Pune details (FY-IT-E, B2)
  • <span class="text-amber-300">contact</span>   - Direct social & networking channels
  • <span class="text-amber-300">clear</span>     - Clear terminal buffer
`,
    about: () => `
<span class="text-emerald-400 font-bold">Shreeyash Rahul Solunke</span>
• IT Engineering Student at <span class="text-sky-300 font-semibold">VIT Pune</span> (FY-IT-E, Batch B2) • <span class="text-amber-300 font-semibold">Class of 2030</span>
• Team Leader of <span class="text-indigo-300 font-semibold">ByteForge</span> for the Code APEX 3.0 Hackathon
• Group Leader for <span class="text-purple-300 font-semibold">EDI1 (ES26102)</span> & Team Leader for <span class="text-pink-300 font-semibold">Rajasthan in Focus</span> (Team of 4)
• Passionate about Python, Flutter, SQL, and practical problem-solving.
• Currently building <span class="text-cyan-300">MediMate</span>, <span class="text-cyan-300">UTSAVFUND</span>, and <span class="text-cyan-300">RepairConnect</span>.
`,
    projects: () => `
<span class="text-cyan-400 font-bold">KEY PROJECTS & LEADERSHIP:</span>
1. <span class="text-amber-300 font-semibold">MediMate:</span> Elder-friendly medicine reminder with NLEM 2022 DB (Flutter + Firebase).
2. <span class="text-amber-300 font-semibold">UTSAVFUND:</span> Festival pandal & corporate brand sponsorship marketplace.
3. <span class="text-amber-300 font-semibold">RepairConnect:</span> Circular economy on-demand repair booking & live timeline.
4. <span class="text-amber-300 font-semibold">SchemeMatch + DocBuddy:</span> Civic-tech welfare eligibility engine with document guide.
5. <span class="text-amber-300 font-semibold">Python Practical Suite:</span> Smart Calculator, Treasure Hunt RPG & Restaurant Billing Engine.
6. <span class="text-amber-300 font-semibold">EDI1 Project (ES26102):</span> Team Leader designing an out-of-the-box real-world utility synopsis.
7. <span class="text-amber-300 font-semibold">Rajasthan in Focus:</span> Team Leader (team of 4) presenting state governance via Gamma, SlideGo, Genspark & Figma.
`,
    skills: () => `
<span class="text-purple-400 font-bold">TECHNICAL & LEADERSHIP STACK:</span>
• <span class="text-sky-300">Languages:</span> Python (Core/OOP), SQL/MySQL, C/C++ basics, Dart
• <span class="text-sky-300">Frameworks/Mobile:</span> Flutter, Firebase, REST APIs
• <span class="text-sky-300">Tools:</span> Git, GitHub, Android Studio, Antigravity, VS Code
• <span class="text-sky-300">AI & Presentation:</span> Gamma, SlideGo, Genspark, Figma
• <span class="text-sky-300">Leadership:</span> Team Leader (ByteForge), Group Leader (EDI1), Research Lead (Rajasthan Study)
`,
    leader: () => `
<span class="text-amber-400 font-bold">TEAM LEADERSHIP MILESTONES:</span>
• <span class="text-amber-300 font-semibold">1. Team ByteForge (Leader):</span> VIT Code APEX 3.0 Hackathon • Flagship: MediMate (Elder-Friendly Health Guardian).
• <span class="text-purple-300 font-semibold">2. EDI1 Group Leader:</span> Engineering Exploration synopsis (ES26102) • Filtering routine tropes for daily-life utility.
• <span class="text-pink-300 font-semibold">3. Rajasthan Case Study (Lead):</span> Directed 4-member research presentation utilizing modern AI tooling (Gamma, SlideGo, Genspark, Figma).
`,
    college: () => `
<span class="text-blue-400 font-bold">ACADEMIC PROFILE:</span>
• <span class="text-slate-300">Institution:</span> Vishwakarma Institute of Technology (VIT Pune)
• <span class="text-slate-300">Branch:</span> Information Technology (IT)
• <span class="text-slate-300">Division / Batch:</span> FY-IT-E | Lab Batch B2
• <span class="text-slate-300">Graduation Year:</span> 2030 (Class of 2030)
• <span class="text-slate-300">Leadership:</span> Group Leader for EDI1 (ES26102) & Team Leader for Rajasthan Case Study (Team of 4)
`,
    contact: () => `
<span class="text-emerald-400 font-bold">CONNECT WITH SHREEYASH:</span>
• LinkedIn:  <a href="https://www.linkedin.com/in/shreeyash-solunke-a9a4a9437" target="_blank" class="text-cyan-400 underline">linkedin.com/in/shreeyash-solunke</a>
• GitHub:    <a href="https://github.com/ShreeyashSolunke08" target="_blank" class="text-cyan-400 underline">github.com/ShreeyashSolunke08</a>
• Instagram: <a href="https://instagram.com/shreeyash_solunke23" target="_blank" class="text-pink-400 underline">@shreeyash_solunke23</a>
`
  };

  function executeCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    playBeepSound(600, 0.05);

    if (trimmed === "clear") {
      terminalBody.innerHTML = `
        <div class="text-slate-400 text-xs mb-3">
          Type <span class="text-cyan-400 font-semibold">help</span> to view all commands.
        </div>
      `;
      terminalInput.value = "";
      return;
    }

    // Add user prompt to terminal log
    const userLine = document.createElement("div");
    userLine.className = "flex items-center space-x-2 text-xs my-1 text-slate-300";
    userLine.innerHTML = `
      <span class="text-emerald-400 font-mono">shreeyash@vit-pune:~$</span>
      <span class="text-white font-mono font-semibold">${escapeHTML(cmd)}</span>
    `;
    terminalBody.appendChild(userLine);

    // Run command or error
    const outputLine = document.createElement("div");
    outputLine.className = "text-xs mb-3 font-mono leading-relaxed pl-2 border-l-2 border-cyan-500/30";

    if (commands[trimmed]) {
      outputLine.innerHTML = commands[trimmed]();
    } else if (trimmed === "") {
      // Do nothing for empty
      return;
    } else {
      outputLine.innerHTML = `<span class="text-rose-400">Command not recognized: "${escapeHTML(cmd)}". Type <span class="text-cyan-300 underline font-bold cursor-pointer" onclick="runFromText('help')">help</span> for a list of valid commands.</span>`;
    }

    terminalBody.appendChild(outputLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
    terminalInput.value = "";
  }

  window.runFromText = (cmd) => {
    executeCommand(cmd);
  };

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      executeCommand(terminalInput.value);
    }
  });

  quickChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      executeCommand(cmd);
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/* ==========================================================================
   5. PROJECT SHOWCASE & DYNAMIC FILTERING
   ========================================================================== */
function initProjectShowcase() {
  const container = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!container || typeof projectsData === "undefined") return;

  function renderProjects(filter = "all") {
    container.innerHTML = "";
    const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

    filtered.forEach((p, idx) => {
      const card = document.createElement("div");
      card.className = "project-card glow-border-box group p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5";
      card.setAttribute("data-id", p.id);
      
      const techBadges = p.techStack.slice(0, 4).map(tech => 
        `<span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">${tech}</span>`
      ).join("");

      card.innerHTML = `
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${p.badgeColor} text-white shadow-sm shadow-slate-900">
              ${p.badge}
            </span>
            <span class="text-xs text-slate-400 font-mono flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              ${p.status}
            </span>
          </div>

          <!-- Title & Subtitle -->
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
            ${p.title}
          </h3>
          <p class="text-xs text-indigo-300 font-medium mt-1 mb-3">
            ${p.subtitle}
          </p>

          <!-- Short Description -->
          <p class="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            ${p.shortDesc}
          </p>

          <!-- Role -->
          <div class="mb-4 text-xs text-slate-400 flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-3.5 h-3.5 text-cyan-400"></i>
            <span class="font-medium text-slate-300">${p.role}</span>
          </div>
        </div>

        <div>
          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800">
            ${techBadges}
            ${p.techStack.length > 4 ? `<span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400">+${p.techStack.length - 4}</span>` : ""}
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-between pt-2">
            <button class="view-details-btn inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
              <span>Explore Case Study</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"></i>
            </button>
            <a href="${p.github}" target="_blank" onclick="event.stopPropagation()" class="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        openProjectModal(p.id);
      });

      container.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter tab events
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
      playBeepSound(480, 0.04);
    });
  });

  renderProjects("all");
}

/* ==========================================================================
   6. PROJECT CASE STUDY MODAL
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  window.openProjectModal = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project) return;

    playBeepSound(700, 0.06);

    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-subtitle").textContent = project.subtitle;
    document.getElementById("modal-badge").textContent = project.badge;
    document.getElementById("modal-role").textContent = project.role;
    document.getElementById("modal-story").textContent = project.fullStory.trim();
    document.getElementById("modal-github").href = project.github;

    // Render Metrics
    const metricsContainer = document.getElementById("modal-metrics");
    metricsContainer.innerHTML = project.metrics.map(m => `
      <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
        <div class="text-[11px] text-slate-400 uppercase tracking-wider font-mono">${m.label}</div>
        <div class="text-sm md:text-base font-bold text-cyan-300 mt-1">${m.value}</div>
      </div>
    `).join("");

    // Render Highlights
    const highlightsContainer = document.getElementById("modal-highlights");
    highlightsContainer.innerHTML = project.highlights.map(h => `
      <li class="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
        <span class="inline-block mt-1 text-emerald-400">
          <i data-lucide="check-circle-2" class="w-4 h-4"></i>
        </span>
        <span>${h}</span>
      </li>
    `).join("");

    // Render Tech Stack
    const techContainer = document.getElementById("modal-tech");
    techContainer.innerHTML = project.techStack.map(t => `
      <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-950/60 border border-indigo-700/50 text-indigo-300">
        ${t}
      </span>
    `).join("");

    if (window.lucide) {
      window.lucide.createIcons();
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. WEB AUDIO SYNTHESIZER (HIGH-TECH UI SOUNDS)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioSynthesizer() {
  const soundToggleBtn = document.getElementById("sound-toggle");
  const soundIcon = document.getElementById("sound-icon");
  const soundLabel = document.getElementById("sound-label");
  const eqContainer = document.getElementById("sound-eq-container");

  if (!soundToggleBtn) return;

  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;

    if (soundEnabled && !audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (soundEnabled) {
      soundIcon.setAttribute("data-lucide", "volume-2");
      soundLabel.textContent = "Audio ON";
      soundToggleBtn.classList.add("border-cyan-500/60", "text-cyan-300");
      if (eqContainer) eqContainer.classList.add("eq-playing");
      playBeepSound(880, 0.08);
      showToast("Futuristic sound effects & equalizer enabled!");
    } else {
      soundIcon.setAttribute("data-lucide", "volume-x");
      soundLabel.textContent = "Audio OFF";
      soundToggleBtn.classList.remove("border-cyan-500/60", "text-cyan-300");
      if (eqContainer) eqContainer.classList.remove("eq-playing");
      showToast("Audio muted");
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
}

/* ==========================================================================
   7B. TOP SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgressBar() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

/* ==========================================================================
   7C. SPOTLIGHT CARD CURSOR TRACKING
   ========================================================================== */
function initSpotlightCards() {
  const spotlightCards = document.querySelectorAll(".spotlight-card, .glow-border-box");

  spotlightCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* ==========================================================================
   7D. INTERACTIVE LIVE CODE PLAYGROUND
   ========================================================================== */
function initCodePlayground() {
  const codeDisplay = document.getElementById("code-display");
  const tabButtons = document.querySelectorAll(".code-tab-btn");
  const copyCodeBtn = document.getElementById("copy-code-btn");
  const codeLangPill = document.getElementById("code-lang-pill");

  if (!codeDisplay) return;

  const snippets = {
    medimate: {
      lang: "Flutter / Dart",
      filename: "medimate_alarms.dart",
      code: `// MediMate Health Guardian - Elder Alarms Engine
// VIT Code APEX 3.0 • Team ByteForge (Lead: Shreeyash)
class MediMateAlarmEngine {
  Future<void> scheduleDoseAlert({
    required String medicineName,
    required DateTime doseTime,
    required int tabletsLeft,
  }) async {
    // 1. Check Govt of India NLEM 2022 dataset for safe dosage
    final drugProfile = await NLEMDatabase.lookup(medicineName);
    
    // 2. Schedule exact wake-lock alarm tailored for seniors (60+)
    await AndroidAlarmManager.oneShotAt(
      doseTime,
      alarmId: drugProfile.id,
      callback: triggerElderFriendlyAudioAlarm,
      exact: true,
      wakeup: true,
    );
    
    // 3. Automated Two-Tier Guardian Watchdog fallback
    GuardianWatchdog.arm(doseId: drugProfile.id, timeout: Duration(minutes: 15));
  }
}`
    },
    utsav: {
      lang: "Python / Algorithm",
      filename: "utsav_marketplace.py",
      code: `# UTSAVFUND: Cultural Pandal & Brand Sponsorship Marketplace
# Direct Brand Visibility & Automated Commission Engine
class UtsavMarketplace:
    def __init__(self, pandal_id: str, footfall_daily: int):
        self.pandal_id = pandal_id
        self.footfall = footfall_daily
        self.tiers = {"Title": 500000, "Banner": 100000, "Stall": 75000}

    def match_brand_sponsors(self, corporate_budget: float, city: str = "Pune"):
        """Matches festival mandals with brand marketing budgets."""
        approved_packages = [
            tier for tier, price in self.tiers.items()
            if price <= corporate_budget
        ]
        commission = corporate_budget * 0.08  # 8% platform fee
        return {
            "mandals": self.pandal_id,
            "packages": approved_packages,
            "commission_earned": commission
        }`
    },
    repair: {
      lang: "SQL / Schema",
      filename: "repair_timeline.sql",
      code: `-- RepairConnect: Circular Economy Repair Milestone Timeline
-- Connects device owners with vetted local technicians
SELECT 
    r.repair_id,
    d.device_model,
    r.stage AS current_status, -- 'Received' -> 'Diagnostic' -> 'Testing' -> 'Delivered'
    t.technician_name,
    t.rating_stars,
    r.quote_amount,
    -- Real-time Sustainability Metric: E-Waste & Carbon Prevented (kg)
    (d.carbon_footprint_saved) AS e_waste_prevented_kg
FROM repairs r
JOIN devices d ON r.device_id = d.id
JOIN technicians t ON r.tech_id = t.id
WHERE r.user_id = :authenticated_user
ORDER BY r.updated_at DESC;`
    },
    treasure: {
      lang: "Python / OOP",
      filename: "treasure_hunt_rpg.py",
      code: `# Python Core Suite: Interactive Branching RPG Adventure
# Object-Oriented Decision State Engine
class AdventureQuest:
    def __init__(self, player_name: str):
        self.player = player_name
        self.inventory = []
        self.health = 100

    def explore_chamber(self, action: str):
        if action == "unlock_chest":
            self.inventory.append("Ancient Relic of APEX")
            print(f"[{self.player}] discovered the Ancient Relic!")
        elif action == "trigger_rune":
            self.health -= 25
            print(f"Rune detonated! Health at {self.health}%")
        return {"status": "alive" if self.health > 0 else "game_over"}`
    }
  };

  let activeSnippet = "medimate";

  function renderSnippet(key) {
    const item = snippets[key];
    if (!item) return;
    activeSnippet = key;

    codeDisplay.textContent = item.code;
    if (codeLangPill) codeLangPill.textContent = `${item.filename} (${item.lang})`;
    playBeepSound(500, 0.03);
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-tab");
      renderSnippet(key);
    });
  });

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", () => {
      const item = snippets[activeSnippet];
      if (item) {
        navigator.clipboard.writeText(item.code).then(() => {
          showToast(`Copied ${item.filename} to clipboard!`);
          playBeepSound(850, 0.06);
        });
      }
    });
  }

  renderSnippet("medimate");
}

function playBeepSound(freq = 600, duration = 0.06) {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio context suspended or user gesture needed
  }
}

/* ==========================================================================
   8. LIVE PUNE CLOCK & STATUS
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById("live-time");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Indian Standard Time (UTC + 5:30)
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    const timeStr = new Intl.DateTimeFormat("en-IN", options).format(now);
    clockEl.textContent = `${timeStr} IST`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   9. SMOOTH SCROLL NAVIGATION & CONTACT HIGHLIGHT
   ========================================================================== */
function initSmoothScrollAndNavigation() {
  // Catch all anchor links with hashes
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        playBeepSound(520, 0.04);

        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Update URL hash smoothly without jump
        try {
          history.pushState(null, null, `#${targetId}`);
        } catch (err) {}

        // If target is contact, highlight the contact box and focus input
        if (targetId === "contact") {
          highlightContactSection();
        }
      }
    });
  });

  // Direct click hooks for Let's Connect buttons
  const navConnectBtn = document.getElementById("nav-connect-btn");
  const heroConnectBtn = document.getElementById("hero-connect-btn");

  [navConnectBtn, heroConnectBtn].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          playBeepSound(650, 0.05);
          const headerOffset = 90;
          const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: pos, behavior: "smooth" });
          highlightContactSection();
        }
      });
    }
  });
}

function highlightContactSection() {
  setTimeout(() => {
    const cardBox = document.getElementById("contact-card-box");
    const nameInput = document.getElementById("contact-name");

    if (cardBox) {
      cardBox.classList.add("ring-2", "ring-cyan-400", "shadow-cyan-500/40");
      setTimeout(() => {
        cardBox.classList.remove("ring-2", "ring-cyan-400", "shadow-cyan-500/40");
      }, 2000);
    }

    if (nameInput) {
      nameInput.focus();
    }
  }, 400);
}

/* ==========================================================================
   10. COPY ACTIONS & CONTACT FORM DISPATCH
   ========================================================================== */
function initCopyActions() {
  const copyButtons = document.querySelectorAll(".copy-action-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: "${textToCopy}"`);
          playBeepSound(900, 0.05);
        }).catch(() => {
          showToast(`Direct Email: shreeyashsolunke@gmail.com`);
        });
      }
    });
  });

  // Fast Contact Form Handler
  const contactForm = document.getElementById("quick-contact-form");
  const statusBox = document.getElementById("form-status-box");
  const statusContent = document.getElementById("form-status-content");
  const submitBtn = document.getElementById("contact-submit-btn");
  const submitText = document.getElementById("submit-btn-text");
  const submitIcon = document.getElementById("submit-btn-icon");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-msg").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.");
        return;
      }

      // UI Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-75", "cursor-not-allowed");
      }
      if (submitText) submitText.textContent = "Transmitting...";
      if (submitIcon) {
        submitIcon.setAttribute("data-lucide", "loader-2");
        submitIcon.classList.add("animate-spin");
        if (window.lucide) window.lucide.createIcons();
      }

      playBeepSound(750, 0.08);

      // Copy message to clipboard automatically as a safety measure
      const formattedMessage = `From: ${name} (${email})\nSubject: Portfolio Connection\n\n${message}`;
      try {
        navigator.clipboard.writeText(formattedMessage);
      } catch (err) {}

      // Attempt submission via Web3Forms (zero backend email delivery)
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: "099a9a95-7176-4d04-8b6d-a34237f37452", // Free default delivery key for Shreeyash
            name: name,
            email: email,
            message: message,
            subject: `New Portfolio Message from ${name}`
          })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // Success State
          showStatusBanner("success", `
            <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"></i>
            <div>
              <div class="font-bold text-emerald-300">Message Delivered Successfully!</div>
              <div class="text-slate-300 mt-0.5">Thank you, <strong>${escapeHTML(name)}</strong>! Your dispatch has been transmitted to Shreeyash Solunke's inbox. Expect a response soon.</div>
            </div>
          `);
          contactForm.reset();
          playBeepSound(900, 0.12);
        } else {
          // Fallback to mailto + clipboard
          fallbackMailto(name, email, message);
        }
      } catch (err) {
        // Network or offline fallback
        fallbackMailto(name, email, message);
      } finally {
        // Reset submit button state
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove("opacity-75", "cursor-not-allowed");
        }
        if (submitText) submitText.textContent = "Transmit Message";
        if (submitIcon) {
          submitIcon.setAttribute("data-lucide", "send");
          submitIcon.classList.remove("animate-spin");
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  }

  function fallbackMailto(name, email, message) {
    showStatusBanner("info", `
      <i data-lucide="info" class="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"></i>
      <div>
        <div class="font-bold text-cyan-300">Message Copied & Ready!</div>
        <div class="text-slate-300 mt-0.5">Your message was copied to clipboard. Opening your email client to dispatch to <strong>shreeyashsolunke@gmail.com</strong>.</div>
      </div>
    `);

    const mailtoLink = `mailto:shreeyashsolunke@gmail.com?subject=Portfolio%20Connection%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
    window.open(mailtoLink, "_blank");
    showToast("Opening email client for Shreeyash!");
  }

  function showStatusBanner(type, htmlContent) {
    if (!statusBox || !statusContent) return;
    statusContent.innerHTML = htmlContent;

    if (type === "success") {
      statusBox.className = "mb-5 p-4 rounded-xl text-xs font-mono border bg-emerald-950/60 border-emerald-500/50 text-emerald-200 block";
    } else {
      statusBox.className = "mb-5 p-4 rounded-xl text-xs font-mono border bg-cyan-950/60 border-cyan-500/50 text-cyan-200 block";
    }

    if (window.lucide) window.lucide.createIcons();
  }
}

function showToast(message) {
  let toast = document.getElementById("portfolio-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "portfolio-toast";
    toast.className = "fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-16 opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> <span>${message}</span>`;
  if (window.lucide) window.lucide.createIcons();

  toast.classList.remove("translate-y-16", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-16", "opacity-0");
  }, 3500);
}

/* ==========================================================================
   11. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

/* ==========================================================================
   12. CARD 3D TILT EFFECT
   ========================================================================== */
function initCardTilt() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}
