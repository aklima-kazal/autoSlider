const container = document.querySelector(".container");

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 1700,
  freeMoode: true,
  allowTouchMove: false,

  autoplay: {
    delay: 0,
  },
});

function stopAutoplay() {
  // const swiperTranslate = swiper.getTranslate;
  // swiper.setTranslate(swiperTranslate);

  swiper.autoplay.stop();
}
function startAutoplay() {
  swiper.slideTo(swiper.activeIndex, 5000, false);
  swiper.autoplay.start();
}

container.addEventListener("mouseover", () => stopAutoplay());
container.addEventListener("mouseleave", () => startAutoplay());
