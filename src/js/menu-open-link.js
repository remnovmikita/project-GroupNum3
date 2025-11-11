(() => {
  const mobileMenu = document.querySelector("[data-mobile]");
  const anchors = mobileMenu.querySelectorAll('a[href*="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  });
})();