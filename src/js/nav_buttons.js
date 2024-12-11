setTimeout(() => {
  const verticalMenu = document.querySelector("#vertical-menu");
  const horizontalMenu = document.querySelector("#horizontal-menu");

  function setActive(activeLinkId) {
    const links = document.querySelectorAll(
      "#vertical-menu a, #horizontal-menu a"
    );
    links.forEach((link) => {
      if (
        activeLinkId !== null &&
        link.id !== null &&
        link.id === activeLinkId
      ) {
        link.classList.add("bg-gray-700"); // Active color
      } else {
        link.classList.remove("bg-gray-700"); // Reset active color
      }
    });
  }

  const currentPath = window.location.pathname;
  const lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  const lastPartWithoutExtension = lastPart.split(".")[0]; // Remove extension
  switch (lastPartWithoutExtension) {
    case "index":
      setActive("home-h");
      break;
    case "search":
      setActive("search-h");
      break;
    case "new_upload":
      setActive("new-upload-h");
      break;
    case "all_uploads":
      setActive("all-uploads-h");
      break;
    case null:
      setActive("default-h"); // Add your default case here
  }
}, 300);
