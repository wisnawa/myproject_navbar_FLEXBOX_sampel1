const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.getElementsByTagName("ul")[0];

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
