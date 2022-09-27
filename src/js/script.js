// POPULAR
$(document).ready(function () {
    $(".popular__inner").slick({
        slidesToShow: 4,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        speed: 900,
        vertical: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        prevArrow: `<button type="button" class="slick-prev">
        <img src="../assets/img/icons/right.svg">
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="../assets/img/icons/left.svg"></button>`,
        // Правила работают от 0 до значения которе мы задали
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    vertical: true,
                },
            },
        ],
    });
});
// Discont
$(document).ready(function () {
    $(".discont__inner").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        vertical: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        prevArrow: `<button type="button" class="slick-prev">
        <img src="../assets/img/icons/right.svg">
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="../assets/img/icons/left.svg"></button>`,
        // Правила работают от 0 до значения которе мы задали
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    vertical: true,
                },
            },
        ],
    });
});

// Review;
$(document).ready(function () {
    $(".review__inner").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,

        // autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        asNavFor: ".review__inner-second",
        prevArrow: `<button type="button" class="slick-prev">
        <img src="../assets/img/icons/right.svg">
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="../assets/img/icons/left.svg"></button>`,
        // Правила работают от 0 до значения которе мы задали
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    vertical: true,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".review__inner-second").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        asNavFor: ".review__inner",
        prevArrow: `<button type="button" class="slick-prev">
        <img src="../assets/img/icons/right.svg">
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="../assets/img/icons/left.svg"></button>`,
        // Правила работают от 0 до значения которе мы задали
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    vertical: true,
                },
            },
        ],
    });
});

const humburger = document.querySelector(".humburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    menuOverlay = document.querySelector(".menu__overlay");

humburger.addEventListener("click", () => {
    menu.classList.add("active");
    menuOverlay.classList.add("hidden");
});

const closeModal = function () {
    menu.classList.remove("active");
    menuOverlay.classList.remove("hidden");
};

menuOverlay.addEventListener("click", closeModal);
closeElem.addEventListener("click", closeModal);
