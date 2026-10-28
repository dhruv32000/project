// EduSpark interactions: mobile navigation, demo form feedback, and current year.
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("click", (event) => {
    if (!primaryNav.contains(event.target) && !menuToggle.contains(event.target)) {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

const signupForm = document.querySelector("#signup-form");
const formMessage = document.querySelector("#form-message");

if (signupForm && formMessage) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = signupForm.querySelector('input[type="email"]');
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }
    // Demo only: no email is sent or stored. Connect a backend to collect signups.
    formMessage.textContent = `Thanks! ${emailInput.value.trim()} is ready for the EduSpark demo list.`;
    signupForm.reset();
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
