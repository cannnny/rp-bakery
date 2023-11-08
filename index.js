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
