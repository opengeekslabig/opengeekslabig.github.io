// Header Slider
const clientsSlider = new Swiper('.solid_slider', {
    allowTouchMove: false,
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },

    }
});
