const loader = document.getElementById("loader");
const backToTop = document.getElementById("backToTop");

window.addEventListener("load", () => {
  // Keep the intro screen visible for approximately three seconds.
  window.setTimeout(() => loader.classList.add("hide"), 3000);
});

function updateBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > 350);
}
window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
