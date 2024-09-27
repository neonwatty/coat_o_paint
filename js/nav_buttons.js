setTimeout(() => {
  function checkNavLinks() {
    const nav = document.querySelector("nav");
    const links = nav.querySelectorAll("a");
    console.log(links);
  }

  checkNavLinks();
}, 500);
