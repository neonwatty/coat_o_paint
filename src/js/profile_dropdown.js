setTimeout(() => {
  const profileDiv = document.querySelector("#profile-div");
  const profileMenu = document.querySelector("#profile-menu");
  let ignoreFirstOutsideClick = true;

  function profileMenuActions(e) {
    if (!ignoreFirstOutsideClick) {
      if (!profileMenu.classList.contains("hidden")) {
        if (!profileMenu.contains(e.target)) {
          console.log("clicking outside of profile menu");
          toggler();
        } else {
          console.log("clicking in profile menu");
        }
      }
    }
    ignoreFirstOutsideClick = false;
  }

  function toggler() {
    profileMenu.classList.toggle("hidden");
  }

  function toggleProfileMenu(e) {
    toggler();
    if (!profileMenu.classList.contains("hidden")) {
      ignoreFirstOutsideClick = true;
      document.addEventListener("click", profileMenuActions);
    } else {
      document.removeEventListener("click", profileMenuActions);
    }
  }

  profileDiv.addEventListener("click", toggleProfileMenu);
}, 500);
