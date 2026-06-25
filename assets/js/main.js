(function () {
  const button = document.getElementById("scroll-top");

  if (!button) {
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
})();
