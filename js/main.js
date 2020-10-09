$(document).ready(function () {
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

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  console.log(modalButton);
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  // console.log('Вы кликнули по кнопке с атрибутом data-toggle="modal" ');
  function openModal() {
    // console.log($(this).attr('data-href'));
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Your name",
          minlength: "At least 4 characters required!",
        },
        email: {
          required: "Your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Your phone to contact you",
          minlength: "11 characters required!",
        },
      },
    });
	});
	AOS.init();
});
