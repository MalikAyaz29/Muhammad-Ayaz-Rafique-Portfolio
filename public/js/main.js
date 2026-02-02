// main.js — contact form + theme toggle logic

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CONTACT FORM LOGIC (UNCHANGED)
     =============================== */
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("❌ Please fill all fields");
        return;
      }

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (data.success) {
          alert("✅ Message sent successfully!");
          form.reset();
        } else {
          alert("❌ Failed to send message");
        }
      } catch (err) {
        alert("❌ Server error. Try again later.");
      }
    });
  }

  /* ===============================
     DARK / LIGHT MODE TOGGLE
     =============================== */
  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      const isDark = document.body.classList.contains("dark");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

});

