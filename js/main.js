$(document).ready(function() {
   
    // slider 
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

    //modal 
    $('a.contacts_modal').click(function (event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function () {
            $('#myModal')
                .css('display', 'block')
                .animate({ opacity: 1 }, 198);
        });
    });
    $('#myModal__close, #myOverlay').click(function () {
        $('#myModal').animate({ opacity: 0 }, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
            });
    });
});

