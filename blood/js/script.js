// BloodConnect v2 - script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("BloodConnect v2 is alive!");

  // 🔹 Homepage CTA Buttons
  const ctaButtons = document.querySelectorAll(".cta-btn, .cta-outline");
  if (ctaButtons.length) {
    ctaButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(`Homepage button clicked: ${e.target.textContent}`);
        // Optional: window.location.href = btn.getAttribute("href");
      });
    });
  }

  // 🔹 Dashboard Action Buttons
  const dashboardButtons = document.querySelectorAll(".btn-dashboard");
  if (dashboardButtons.length) {
    dashboardButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(`Dashboard button clicked: ${btn.textContent}`);
        // Optional: open modal or redirect
      });
    });
  }

  // 🔍 Search Page Logic
  const searchForm = document.getElementById("donorSearchForm");
  const resultsSection = document.getElementById("resultsSection");

  if (searchForm && resultsSection) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const blood = document.getElementById("bloodGroup").value.trim();
      const location = document.getElementById("location").value.trim();

      if (blood && location) {
        resultsSection.innerHTML = `
          <h2>Results</h2>
          <div class="result-card">
            <p><strong>Name:</strong> Ravi Kumar</p>
            <p><strong>Blood Group:</strong> ${blood}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Contact:</strong> +91 98765 43210</p>
          </div>
          <div class="result-card">
            <p><strong>Name:</strong> Meena Sharma</p>
            <p><strong>Blood Group:</strong> ${blood}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Contact:</strong> +91 91234 56789</p>
          </div>
        `;
      } else {
        resultsSection.innerHTML = `
          <h2>Results</h2>
          <div class="result-card">
            ⚠️ Please select a blood group and enter a location.
          </div>
        `;
      }
    });
  }

  // 👤 Edit Profile Logic
  const profileForm = document.getElementById("editProfileForm");

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const blood = document.getElementById("bloodGroup").value.trim();
      const city = document.getElementById("city").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirm = document.getElementById("confirmPassword").value.trim();

      if (!name || !email || !blood || !city || !password || !confirm) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      if (password !== confirm) {
        alert("⚠️ Passwords do not match.");
        return;
      }

      // Simulate update success
      alert("✅ Profile updated successfully!");
      console.log("Updated Profile:", { name, email, blood, city });
    });
  }

  // ⏳ Future Enhancements
  // - Donor filtering with real data
  // - Form error highlights
  // - Saving profile to local storage or backend
});