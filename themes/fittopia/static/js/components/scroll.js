
$('.js-btn').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.gallery').eq(0).offset().top
    }, 1000 );
});

