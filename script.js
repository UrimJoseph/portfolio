/* =========================================================================
   URIM JOSEPH — PORTFOLIO SCRIPT
   -------------------------------------------------------------------------
   To add a new SKILL, PROJECT, or SERVICE later, just add one object to the
   matching array below. Nothing else in the file needs to change — the
   cards are built and inserted into the page automatically.
   ========================================================================= */

/* ---------------------- 1. SKILLS ---------------------- */
/* icon: a Simple Icons slug (see https://simpleicons.org) rendered via a
   free CDN, so you never have to save an icon file yourself. */
const skills = [
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css", color: "1572B6" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
  // Example of how to add the next one:
  // { name: "Node.js", icon: "nodedotjs", color: "339933" },
];

/* ---------------------- 2. SERVICES ---------------------- */
const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, accessible interfaces with HTML, CSS and React.",
    icon: "layout",
  },
  {
    title: "Backend Development",
    desc: "Server-side logic, APIs and data handling to power full-stack applications.",
    icon: "server",
  },
  {
    title: "Full-Stack Applications",
    desc: "End-to-end web apps — from database and API to the interface users interact with.",
    icon: "layers",
  },
  {
    title: "Responsive & Mobile-Ready Design",
    desc: "Sites that look and work great on any screen, from a phone to a wide desktop monitor.",
    icon: "smartphone",
  },
  {
    title: "API Integration",
    desc: "Connecting apps to third-party services and building clean, reliable API layers.",
    icon: "plug",
  },
  {
    title: "Website Maintenance & Support",
    desc: "Fixes, updates and performance improvements to keep an existing site running well.",
    icon: "wrench",
  },
];

/* ---------------------- 3. PROJECTS ---------------------- */
/* Add a new project by copying this shape. Leave `link` as "#" until the
   project has a live URL or repo to point to. */
const projects = [
  {
    title: "More Projects Coming Soon",
    desc: "I'm actively building new full-stack projects with React and Next.js. Check back soon, or reach out to see what I'm currently working on.",
    tags: ["In progress"],
    link: "#contact",
    placeholder: true,
  },
  // Example of how to add a real project later:
  // {
  //   title: "Project Name",
  //   desc: "One or two sentences on what it does and the problem it solves.",
  //   tags: ["React", "Next.js"],
  //   link: "https://your-project-url.com",
  // },
];

/* ---------------------- ICON PATHS (feather-style, inline, no external files) ---------------------- */
const iconPaths = {
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
  server: '<rect x="2" y="3" width="20" height="8" rx="2"></rect><rect x="2" y="13" width="20" height="8" rx="2"></rect><line x1="6" y1="7" x2="6.01" y2="7"></line><line x1="6" y1="17" x2="6.01" y2="17"></line>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
  plug: '<path d="M22 9.5V5a1 1 0 0 0-1-1h-4"></path><path d="M2 14.5V19a1 1 0 0 0 1 1h4"></path><path d="M7 2v6"></path><path d="M17 16v6"></path><rect x="6" y="8" width="12" height="8" rx="2"></rect>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
};

/* ============================ RENDER FUNCTIONS ============================ */

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills
    .map(
      (s) => `
      <div class="skill-card">
        <img src="https://cdn.simpleicons.org/${s.icon}/${s.color}" alt="${s.name}" class="skill-icon" loading="lazy">
        <span class="skill-name">${s.name}</span>
      </div>`
    )
    .join("");
}

function renderServices() {
  const grid = document.getElementById("services-grid");
  grid.innerHTML = services
    .map(
      (s) => `
      <div class="service-card">
        <div class="service-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[s.icon] || iconPaths.folder}</svg>
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects
    .map((p) => {
      const tags = (p.tags || [])
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");
      return `
      <a href="${p.link || "#"}" class="project-card ${p.placeholder ? "border-dashed" : ""}">
        <div class="project-thumb">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${iconPaths.folder}</svg>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${tags}</div>
      </a>`;
    })
    .join("");
}

/* ============================ INTERACTIVITY ============================ */

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => menu.classList.add("hidden"));
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll(".section-fade");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}

function setupActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // No backend is connected yet, so this opens the visitor's email app with
    // the message pre-filled to urimuwem@gmail.com. To collect messages
    // directly on the site instead, connect a form service (e.g. Formspree)
    // and point this form's action at it.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:urimuwem@gmail.com?subject=${subject}&body=${body}`;

    status.textContent = "Opening your email app to send this message…";
    status.classList.remove("hidden");
  });
}

function setupNavbarBackground() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("shadow-lg", window.scrollY > 20);
  });
}

/* Types out the terminal card's existing lines character-by-character, as if
   someone were typing them live. The lines themselves still live in the HTML
   (each <p> in .terminal-body) — this just replays them, so editing the
   "profile.json" content only ever means editing index.html. */
function setupTerminalTyping() {
  const body = document.querySelector(".terminal-body");
  if (!body) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return; // keep the static content as-is, no animation

  const lines = Array.from(body.querySelectorAll(":scope > p"));
  if (!lines.length) return;

  const originals = lines.map((p) => p.cloneNode(true));
  lines.forEach((p) => (p.innerHTML = ""));

  const CHAR_SPEED = 12; // ms per character
  const LINE_PAUSE = 90; // ms pause between lines
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;
    const target = lines[lineIndex];
    const nodes = Array.from(originals[lineIndex].childNodes);
    let nodeIndex = 0;

    function typeNode() {
      if (nodeIndex >= nodes.length) {
        lineIndex++;
        setTimeout(typeLine, LINE_PAUSE);
        return;
      }
      const src = nodes[nodeIndex];
      const isElement = src.nodeType === Node.ELEMENT_NODE;
      const el = isElement ? document.createElement(src.tagName) : document.createTextNode("");
      if (isElement && src.className) el.className = src.className;
      target.appendChild(el);

      const text = src.textContent;
      let charIndex = 0;
      (function typeChar() {
        if (charIndex >= text.length) {
          nodeIndex++;
          typeNode();
          return;
        }
        charIndex++;
        if (isElement) el.textContent = text.slice(0, charIndex);
        else el.textContent = text.slice(0, charIndex);
        setTimeout(typeChar, CHAR_SPEED);
      })();
    }
    typeNode();
  }

  // Only start once the terminal actually scrolls into view.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeLine();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(body);
}

/* ============================ INIT ============================ */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderServices();
  renderProjects();
  setupMobileMenu();
  setupScrollReveal();
  setupActiveNav();
  setupContactForm();
  setupNavbarBackground();
  setupTerminalTyping();
  document.getElementById("year").textContent = new Date().getFullYear();
});
