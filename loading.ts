document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".progress");
  const loaderContainer = document.getElementById("loader");

  // Simulate progress
  let width = 0;
  const loadingInterval = setInterval(() => {
    if (width >= 100) {
      clearInterval(loadingInterval);
      loaderContainer.classList.add("hidden"); // Hide loader after completion
      document.body.style.overflow = "auto"; // Allow scrolling on main content
    } else {
      width += 1; // Increase progress
      progress.style.width = width + "%"; // Update progress width
    }
  }, 30); // Adjust speed as needed
});
