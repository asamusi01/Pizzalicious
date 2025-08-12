// Lightbox controls
document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.getAttribute("data-open"));
    if (target) target.setAttribute("aria-hidden", "false");
  });
});
document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    const lb = btn.closest(".lightbox");
    if (lb) lb.setAttribute("aria-hidden", "true");
  });
});
document.querySelectorAll(".lightbox").forEach(lb => {
  lb.addEventListener("click", (e) => {
    if (e.target === lb) lb.setAttribute("aria-hidden", "true");
  });
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();
