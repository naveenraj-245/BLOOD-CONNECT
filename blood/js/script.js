// BloodConnect v2 - script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("BloodConnect v2 is alive!");

  // 🔹 Homepage CTA Buttons
  const ctaButtons = document.querySelectorAll(".cta-btn, .cta-outline");
  if (ctaButtons.length) {
    ctaButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(`Homepage button clicked: ${e.target.textContent}`);
        // Optional redirect
        // window.location.href = btn.getAttribute("href");
      });
    });
  }

  // 🔹 Dashboard Action Buttons
  const dashboardButtons = document.querySelectorAll(".btn-dashboard");
  if (dashboardButtons.length) {
    dashboardButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(`Dashboard button clicked: ${btn.textContent}`);
        // Optional modal or navigation
      });
    });
  }

  // 🔍 Donor Search Logic
  const searchForm = document.getElementById("donorSearchForm");
  const resultsSection = document.getElementById("resultsSection");

  if (searchForm && resultsSection) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const bloodInput = document.getElementById("bloodGroup");
      const locationInput = document.getElementById("location");

      const blood = bloodInput?.value.trim() || "";
      const location = locationInput?.value.trim() || "";

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

  // 👤 Edit Profile Validation
  const profileForm = document.getElementById("editProfileForm");

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const blood = document.getElementById("bloodGroup")?.value.trim() || "";
      const city = document.getElementById("city")?.value.trim() || "";
      const password = document.getElementById("password")?.value.trim() || "";
      const confirm = document.getElementById("confirmPassword")?.value.trim() || "";

      if (!name || !email || !blood || !city || !password || !confirm) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      if (password !== confirm) {
        alert("⚠️ Passwords do not match.");
        return;
      }

      alert("✅ Profile updated successfully!");
      console.log("Updated Profile:", { name, email, blood, city });
    });
  }

  // 🩸 Donation Submission Logic
  const donationForm = document.getElementById("donationForm");

  if (donationForm) {
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const date = document.getElementById("date")?.value.trim() || "";
      const location = document.getElementById("location")?.value.trim() || "";
      const recipient = document.getElementById("recipient")?.value.trim() || "";

      if (!date || !location || !recipient) {
        const warning = document.createElement("div");
        warning.textContent = "⚠️ Please fill in all required fields.";
        warning.style.cssText = `
          background: #ffebee;
          color: #c62828;
          padding: 1rem;
          margin-top: 1rem;
          border-radius: 10px;
          text-align: center;
          font-weight: bold;
        `;
        donationForm.appendChild(warning);
        setTimeout(() => warning.remove(), 3000);
        return;
      }

      const confirmation = document.createElement("div");
      confirmation.textContent = "🩸 Thank you! Donation recorded.";
      confirmation.style.cssText = `
        background: #dcedc8;
        color: #2e7d32;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
      `;
      donationForm.appendChild(confirmation);
      setTimeout(() => confirmation.remove(), 3000);
      console.log("Donation submitted:", { date, location, recipient });
      donationForm.reset();
    });
  }

  // 📝 Registration Form Logic
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const bloodGroup = document.getElementById("bloodGroup")?.value.trim() || "";
      const city = document.getElementById("city")?.value.trim() || "";
      const password = document.getElementById("password")?.value.trim() || "";
      const confirmPassword = document.getElementById("confirmPassword")?.value.trim() || "";

      if (!fullName || !email || !bloodGroup || !city || !password || !confirmPassword) {
        const warning = document.createElement("div");
        warning.textContent = "⚠️ Please fill in all required fields.";
        warning.style.cssText = `
          background: #ffebee;
          color: #c62828;
          padding: 1rem;
          margin-top: 1rem;
          border-radius: 10px;
          text-align: center;
          font-weight: bold;
        `;
        registerForm.appendChild(warning);
        setTimeout(() => warning.remove(), 3000);
        return;
      }

      if (password !== confirmPassword) {
        const mismatch = document.createElement("div");
        mismatch.textContent = "⚠️ Passwords do not match.";
        mismatch.style.cssText = `
          background: #ffebee;
          color: #c62828;
          padding: 1rem;
          margin-top: 1rem;
          border-radius: 10px;
          text-align: center;
          font-weight: bold;
        `;
        registerForm.appendChild(mismatch);
        setTimeout(() => mismatch.remove(), 3000);
        return;
      }

      const success = document.createElement("div");
      success.textContent = "✅ Registration successful! Welcome aboard.";
      success.style.cssText = `
        background: #dcedc8;
        color: #2e7d32;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
      `;
      registerForm.appendChild(success);
      setTimeout(() => success.remove(), 3000);

      console.log("New Donor Registered:", { fullName, email, bloodGroup, city });
      registerForm.reset();
    });
  }

  // ⏳ Future Enhancements
  // - Store donations using localStorage
  // - Add navbar interactions
  // - Render dynamic donation history on dashboard
});
