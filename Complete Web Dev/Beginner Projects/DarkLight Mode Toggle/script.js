const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️"; // Sun icon for light mode
}

// Toggle theme
toggleBtn.addEventListener("click", () => {

  // theme toggle
  body.classList.toggle("dark");

  // save theme
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
