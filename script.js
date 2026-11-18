
/* =================================
   DANIELLA'S PORTFOLIO
   JavaScript functionality
   ================================= */

console.log("Daniella's portfolio is loading...");

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu after selecting a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .science-card, " +
    ".expertise-card, .competencies-section, " +
    ".journey-content, .experience-card, " +
    ".experience-intro, .contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// DARK AND LIGHT MODE

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load previously saved theme
const savedTheme = localStorage.getItem("daniellaTheme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);

updateThemeIcon(savedTheme);

// Switch themes
themeToggle.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("daniellaTheme", newTheme);

    updateThemeIcon(newTheme);
});

// Update icon and accessibility label
function updateThemeIcon(theme) {
    if (theme === "dark") {
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}
