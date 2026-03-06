const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

const promptBtn = document.getElementById("prompt-btn");
const promptOutput = document.getElementById("prompt-output");

if (promptBtn && promptOutput) {
  promptBtn.addEventListener("click", function () {
    promptOutput.textContent =
      "Sample Prompt: Summarize this construction-related AI article, identify three key takeaways, explain its impact on the construction industry, and describe one real-world application for project managers, facility teams, or construction professionals.";
  });
}