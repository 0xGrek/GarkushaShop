$(document).ready(function () {
    $(".popular__inner").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
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
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});

$(document).ready(function () {
    $(".review__inner").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
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
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
$(document).ready(function () {
    $(".discont__inner").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
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
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
