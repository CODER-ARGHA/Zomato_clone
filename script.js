// Fade-in animation for main content
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  main.style.opacity = 0;
  main.style.transition = "opacity 1s ease-in-out";
  setTimeout(() => {
    main.style.opacity = 1;
  }, 100);

  // Animate search input on focus
  const searchInput = document.querySelector("input[type='text']");
  searchInput.addEventListener("focus", () => {
    searchInput.style.transform = "scale(1.05)";
  });
  searchInput.addEventListener("blur", () => {
    searchInput.style.transform = "scale(1)";
  });
});

// Example search action (just log to console)
const searchInput = document.querySelector("input[type='text']");
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // Here you can redirect or process the search further
    }
  }
});
