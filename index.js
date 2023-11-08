// sp-menu開閉
const headerButton = document.getElementById("header__button");
const menuButton = document.getElementById("sp-menu__button__close");
const spMenu = document.getElementById("sp-menu");

headerButton.addEventListener("click", function () {
  spMenu.classList.toggle("active");
  spMenu.classList.remove("inactive");
});

menuButton.addEventListener("click", function () {
  spMenu.classList.toggle("active");
  spMenu.classList.add("inactive");
});

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// pageScrollToTop
const element = document.getElementById("header");
const pageScrollToTop = () => {
  element.scrollIntoView({ behavior: "smooth" });
};
