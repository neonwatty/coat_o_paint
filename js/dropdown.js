document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const mobileMenuButton = document.querySelector("#menu-button");
    const menuButtonHidden = document.querySelector("#menu-button-hidden");
    const menuButtonOpen = document.querySelector("#menu-button-open");
    const mobileMenu = document.querySelector("#mobile-menu");

    function showMenu() {
      console.log("hamburger menu clicked");
      menuButtonOpen.classList.toggle("hidden");
      menuButtonHidden.classList.toggle("hidden");
      mobileMenu.classList.toggle("hidden");
    }
    mobileMenuButton.addEventListener("click", showMenu);
  }, 500);
});
