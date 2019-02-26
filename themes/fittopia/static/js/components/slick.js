let slides = $('.js-slider');
let carousels = $('.js-carousels');

let activeClass = 'slick-active',
    ariaAttribute = 'aria-hidden';

slides.each(function () {
    let slide = $(this);

    slide.slick({
        dots: true,
        arrows: false,
        fade: false,
        autoplay        : true,
        autoplaySpeed   : 3000,
        infinite        : true,
        appendDots: '.js-slider-dots',
    });

    $(this).on('afterChange', function(){
        bLazy.revalidate();
    });
});

carousels.each(function () {
    let carousels = $(this);

    carousels.slick({
        dots: true,
        arrows: false,
        fade: false,
        autoplay        : true,
        autoplaySpeed   : 3000,
        infinite        : true,
        appendDots: '.js-carousels-dots',
    });

    $(this).on('afterChange', function(){
        bLazy.revalidate();
    });
});

