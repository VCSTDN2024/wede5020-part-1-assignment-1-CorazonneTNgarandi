// js/script.js
// Part 3 functionality: dynamic year, contact form validation, clear-on-focus

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic footer year
  const yearSpan = document.querySelector(".current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Contact form validation
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name.value.trim()) {
        alert("Please enter your name.");
        event.preventDefault();
        name.focus();
        return;
      }

      if (!email.value.trim()) {
        alert("Please enter your email address.");
        event.preventDefault();
        email.focus();
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        email.focus();
        return;
      }

      if (!message.value.trim()) {
        alert("Please enter a message.");
        event.preventDefault();
        message.focus();
        return;
      }

      alert("Your message has been submitted successfully!");
      // Note: mailto: will open user's email client; the site does not send email directly.
    });
  }

  // Clear default values on first focus for usability
  const inputs = document.querySelectorAll("input[type='text'], input[type='email'], textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      if (input.dataset.cleared !== "true") {
        input.value = "";
        input.dataset.cleared = "true";
      }
    });
  });
});
