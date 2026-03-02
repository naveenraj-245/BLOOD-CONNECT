/* ===================================================== */
/* ================= REGISTER VALIDATION =============== */
/* ===================================================== */

const registerForm = document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault(); // stop page refresh

        // Get values
        const name = document.getElementById("name").value.trim();
        const blood = document.getElementById("blood").value;
        const phone = document.getElementById("phone").value.trim();
        const location = document.getElementById("location").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const errorMsg = document.getElementById("error-msg");

        errorMsg.textContent = "";


        /* ===== VALIDATIONS ===== */

        // Name validation
        if (name.length < 3) {
            errorMsg.textContent = "Name must be at least 3 characters.";
            return;
        }

        // Blood group selected
        if (blood === "") {
            errorMsg.textContent = "Please select your blood group.";
            return;
        }

        // Phone validation (10 digits)
        if (!/^[0-9]{10}$/.test(phone)) {
            errorMsg.textContent = "Enter valid 10-digit phone number.";
            return;
        }

        // Location validation
        if (location.length < 2) {
            errorMsg.textContent = "Please enter your city.";
            return;
        }

        // Email validation
        if (!email.includes("@")) {
            errorMsg.textContent = "Invalid email address.";
            return;
        }

        // Password length
        if (password.length < 6) {
            errorMsg.textContent = "Password must be at least 6 characters.";
            return;
        }

        // Password match
        if (password !== confirmPassword) {
            errorMsg.textContent = "Passwords do not match.";
            return;
        }

        /* ===== SUCCESS ===== */

        alert("Registration Successful ✅");

        // Redirect to login
        window.location.href = "login.html";
    });
}


/* ===================================================== */
/* ================= LOGIN VALIDATION ================== */
/* ===================================================== */

const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault(); // stop refresh

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;
        const role = document.getElementById("login-role").value;

        const errorMsg = document.getElementById("login-error");

        errorMsg.textContent = "";


        /* ===== VALIDATIONS ===== */

        if (!email.includes("@")) {
            errorMsg.textContent = "Please enter a valid email.";
            return;
        }

        if (password.length < 6) {
            errorMsg.textContent = "Password must be at least 6 characters.";
            return;
        }

        if (role === "") {
            errorMsg.textContent = "Please select a role.";
            return;
        }


        /* ===== LOGIN SUCCESS (SIMULATION) ===== */

        // Get stored users
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user exists
        const foundUser = users.find(user =>
        user.email === email &&
        user.password === password
        );

        if (!foundUser) {
        errorMsg.textContent = "Invalid email or password.";
        return;
        }

        alert("Login Successful ✅");
        // Save logged-in user
        localStorage.setItem(
        "loggedInUser",
        JSON.stringify(foundUser)
        );

        // Role-based redirect
        if (role === "Donor") {
            window.location.href = "dashboard.html";
        }
        else if (role === "Hospital" || role === "Admin") {
            window.location.href = "admin.html";
        }
    });
}

/* ===================================================== */
/* ============ BLOOD REQUEST VALIDATION =============== */
/* ===================================================== */

const requestForm = document.getElementById("request-form");

if (requestForm) {

requestForm.addEventListener("submit", function(event){

event.preventDefault();

const patient =
document.getElementById("patient").value.trim();

const blood =
document.getElementById("reqBlood").value;

const units =
document.getElementById("units").value;

const hospital =
document.getElementById("hospital").value.trim();

const location =
document.getElementById("reqLocation").value.trim();

const phone =
document.getElementById("reqPhone").value.trim();

const urgency =
document.querySelector('input[name="urgency"]:checked');

const error =
document.getElementById("request-error");

error.textContent = "";


/* ===== VALIDATIONS ===== */

if(patient.length < 3){
error.textContent="Enter valid patient name";
return;
}

if(blood===""){
error.textContent="Select blood group";
return;
}

if(units <=0){
error.textContent="Units must be greater than 0";
return;
}

if(!/^[0-9]{10}$/.test(phone)){
error.textContent="Enter valid phone number";
return;
}

if(!urgency){
error.textContent="Select urgency level";
return;
}


/* ===== SUCCESS ===== */

// Create request object
const requestData = {
patient,
blood,
units,
hospital,
location,
phone,
urgency: urgency.value
};

// Get stored requests
let requests =
JSON.parse(localStorage.getItem("requests")) || [];

// Add new request
requests.push(requestData);

// Save back
localStorage.setItem("requests",
JSON.stringify(requests));

alert("Emergency Request Sent 🚑");

window.location.href="dashboard.html";

});
}

/* ============================= */
/* ===== DASHBOARD LOGIC ======= */
/* ============================= */

function logout() {
// Create user object
const user = {
name,
blood,
phone,
location,
email,
password
};

// Get existing users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Add new user
users.push(user);

// Save back to LocalStorage
localStorage.setItem("users", JSON.stringify(users));

alert("Registration Successful ✅");

window.location.href = "login.html";
}

const availabilityBtn =
document.getElementById("availability-btn");

if (availabilityBtn) {

availabilityBtn.addEventListener("click", function() {

if (availabilityBtn.textContent === "Available") {
availabilityBtn.textContent = "Not Available";
availabilityBtn.classList.remove("btn-primary");
availabilityBtn.classList.add("btn-outline");
}
else {
availabilityBtn.textContent = "Available";
availabilityBtn.classList.remove("btn-outline");
availabilityBtn.classList.add("btn-primary");
}

});
}

/* ============================= */
/* ===== ADMIN ACTIONS ========= */
/* ============================= */

document.querySelectorAll(".btn-primary").forEach(button => {

button.addEventListener("click", function(){

if(button.textContent.includes("Dispatch")){
alert("Donor Dispatched Successfully 🚑");
}

if(button.textContent.includes("Approve")){
alert("Donor Approved ✅");
}

});

});

/* ============================= */
/* ===== LOAD REQUESTS ========= */
/* ============================= */

const requestList =
document.getElementById("request-list");

if (requestList) {
const loggedUser =
JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedUser) {
window.location.href = "login.html";
}
const requests =
JSON.parse(localStorage.getItem("requests")) || [];

requests
.filter(req => req.blood === loggedUser.blood)
.forEach(req => {

const card = document.createElement("div");

card.className =
"request-card " +
(req.urgency === "High"
? "high"
: req.urgency === "Moderate"
? "moderate"
: "");

card.innerHTML = `
<h4>Patient: ${req.patient}</h4>
<p>Blood Group: ${req.blood}</p>
<p>Hospital: ${req.hospital}</p>
<p>Units: ${req.units}</p>
<p>Location: ${req.location}</p>

<span class="badge ${
req.urgency === "High"
? "high-badge"
: req.urgency === "Moderate"
? "moderate-badge"
: ""
}">
${req.urgency}
</span>

<button class="btn-primary">Accept</button>
`;

requestList.appendChild(card);

});
}
const userName =
document.getElementById("user-name");

if(userName && loggedUser){
userName.textContent =
`Hello, ${loggedUser.name} 👋`;
}