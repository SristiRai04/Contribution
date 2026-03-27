
const lineContainer = document.querySelector(".line-container");
const menu = document.querySelector(".menu");

lineContainer.addEventListener("click", () => {
  lineContainer.classList.toggle("active");
  menu.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!lineContainer.contains(e.target) && !menu.contains(e.target)) {
    lineContainer.classList.remove("active");
    menu.classList.remove("active");
  }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lineContainer.classList.remove("active");
    menu.classList.remove("active");
  }
});
