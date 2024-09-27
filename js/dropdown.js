document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const mobileMenu = document.querySelector("#menu-button");
    const menuButtonHidden = document.querySelector("#menu-button-hidden");
    const menuButtonOpen = document.querySelector("#menu-button-open");

    function showMenu() {
      console.log("hamburger menu clicked");
      menuButtonOpen.classList.toggle("hidden");
      menuButtonHidden.classList.toggle("hidden");
    }
    mobileMenu.addEventListener("click", showMenu);
  }, 500);
});
