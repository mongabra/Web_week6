// =========================
// Part 1: Variables & Conditionals
// =========================
let isLoggedIn = true;
const user = "Johnte Fresh";

if (isLoggedIn) {
  console.log(user + " is viewing the site.");
} else {
  console.log("Guest mode active.");
}

// =========================
// Part 2: Custom Functions
// =========================

// Function to toggle About section text
function toggleAboutText() {
  const about = document.getElementById("aboutText");
  const btn = document.getElementById("toggleAbout");
  if (btn.textContent === "Show More") {
    about.textContent =
      "I am a web developer who loves building interactive experiences. I specialize in JavaScript, CSS, and HTML, and enjoy learning new frameworks.";
    btn.textContent = "Show Less";
  } else {
    about.textContent =
      "I am a web developer who loves building interactive experiences.";
    btn.textContent = "Show More";
  }
}

// Function to validate the contact form
function validateForm(name, email, message) {
  let errors = [];

  if (name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (message.trim().length < 5) {
    errors.push("Message must be at least 5 characters.");
  }

  return errors;
}

// =========================
// Part 3: Loops
// =========================
// Example loop: log all projects
const projects = document.querySelectorAll("#projectList li");
for (let i = 0; i < projects.length; i++) {
  console.log("Project:", projects[i].textContent);
}

// Another loop: display filter button names
document.querySelectorAll("#projects button").forEach((btn) =>
  console.log("Filter option:", btn.textContent)
);

// =========================
// Part 4: DOM Interactions
// =========================

// 1. Toggle About text on button click
document
  .getElementById("toggleAbout")
  .addEventListener("click", toggleAboutText);

// 2. Filter projects by category
document.querySelectorAll("#projects button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    projects.forEach((proj) => {
      if (filter === "all" || proj.dataset.type === filter) {
        proj.style.display = "list-item";
      } else {
        proj.style.display = "none";
      }
    });
  });
});

// 3. Form validation on submit
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const messagesDiv = document.getElementById("formMessages");

    const errors = validateForm(name, email, message);
    if (errors.length > 0) {
      messagesDiv.innerHTML = errors.join("<br>");
      messagesDiv.className = "error";
    } else {
      messagesDiv.textContent = "Form submitted successfully!";
      messagesDiv.className = "success";
      document.getElementById("contactForm").reset();
    }
  });
