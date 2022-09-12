//studies slider
const clientsSlider = new Swiper('.studies_slider', {
    allowTouchMove: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.studies_arrow_right',
        prevEl: '.studies_arrow_left',
    },
});

