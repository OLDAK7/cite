$(document).ready(function() {
    $('.slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // fade: true,
        cssEase: 'linear',
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ],
    });
});

