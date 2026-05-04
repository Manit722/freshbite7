const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toast.style.display = "block";
  contactForm.reset();

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
});
