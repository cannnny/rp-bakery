// sp-menu開閉,スクロール制御
const headerButton = document.getElementById("js-header-button");
const menuButton = document.getElementById("js-button-close");
const spMenu = document.getElementById("js-sp-menu");

const noscroll = (e) => {
  e.preventDefault();
};

headerButton.addEventListener("click", function () {
  spMenu.classList.toggle("active");
  spMenu.classList.remove("inactive");
  headerButton.classList.toggle("active");
  headerButton.classList.remove("inactive");

  document.addEventListener("touchmove", noscroll, { passive: false });
  document.addEventListener("wheel", noscroll, { passive: false });
});

menuButton.addEventListener("click", function () {
  spMenu.classList.toggle("active");
  spMenu.classList.add("inactive");
  headerButton.classList.toggle("active");
  headerButton.classList.add("inactive");

  document.removeEventListener("touchmove", noscroll);
  document.removeEventListener("wheel", noscroll);
});

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    740: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

// pageScrollToTop
const element = document.getElementById("header");
const pageScrollToTop = () => {
  element.scrollIntoView({ behavior: "smooth" });
};
