var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  /*  pagination: { */
  /*    el: '.swiper-pagination', */
  /*  }, */

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  // effect: "coverflow",
  // And if we need scrollbar
  /* scrollbar: { */
  /*   el: '.swiper-scrollbar', */
  /* }, */
});

var reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  // effect: "coverflow",
});
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom_visible");
});
