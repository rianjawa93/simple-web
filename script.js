const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navOverlay = document.getElementById("nav-overlay");
const contactForm = document.getElementById("contact-form");
const header = document.querySelector(".header");

const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";

function setMenuOpen(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.classList.toggle("active", open);
  navOverlay.classList.toggle("visible", open);
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  navOverlay.setAttribute("aria-hidden", String(!open));
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
});

menuToggle.addEventListener("click", () => {
  setMenuOpen(!navLinks.classList.contains("open"));
});

navOverlay.addEventListener("click", () => setMenuOpen(false));

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) setMenuOpen(false);
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  alert(`Terima kasih, ${name} dari ${company}! Tim kami akan menghubungi Anda dalam 1×24 jam kerja.`);
  contactForm.reset();
});

window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 10 ? "var(--shadow)" : "none";
});

function animateCounter(el, target, duration = 2000) {
  const isDecimal = String(target).includes(".");
  const end = parseFloat(target);
  const start = 0;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * eased;

    el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isDecimal ? end.toFixed(2) : end;
  }

  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-number").forEach((el) => {
          animateCounter(el, el.dataset.target);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const statsSection = document.querySelector(".stats");
if (statsSection) statsObserver.observe(statsSection);
