const menuOpener = document.querySelector(".menu-opener");
const menu = document.querySelector(".nav-links-container");

const toggleMenu = () => {
  menu.classList.toggle("opened");
};

menuOpener.addEventListener("click", toggleMenu);
