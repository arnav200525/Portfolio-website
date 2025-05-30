window.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const clone = scrollContainer.innerHTML;
  scrollContainer.innerHTML += clone;
  scrollContainer.innerHTML += clone;
  scrollContainer.innerHTML += clone;
});

