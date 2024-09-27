setTimeout(() => {
  const verticalMenu = document.querySelector("#vertical-menu");
  const horizontalMenu = document.querySelector("#horizontal-menu");

  function setActive(activeLinkId) {
    console.log(`link ${activeLinkId}`);
    const links = document.querySelectorAll(
      "#vertical-menu a, #horizontal-menu a"
    );
    console.log(links);
    links.forEach((link) => {
      if (
        activeLinkId !== null &&
        link.id !== null &&
        link.id === activeLinkId
      ) {
        link.classList.add("bg-gray-700"); // Active color
        link.classList.remove("bg-gray-900"); // Remove default color
      } else {
        link.classList.remove("bg-gray-700"); // Reset active color
        link.classList.add("bg-gray-900"); // Default color
      }
    });
  }

  // Add click event listeners to all links in one line
  document
    .querySelectorAll("#vertical-menu a, #horizontal-menu a")
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        setActive(link.id);
      });
    });
}, 500);
