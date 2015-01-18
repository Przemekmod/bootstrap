var stickyShowPoint = 247;

var bgRotator = $('.rotating-item').bgRotator({
    czasWyswietlenia: 3000,
    czasPrzejscia: 1000
});


 $('.nav > li').menuControl ({



    content: $('.content'),
    startPage: '#home',
    animation:true



});


$('.right-content').load('tpl/right.html');

var btnJumpToTop = $('.btn-jump-to-top');
var head = $('.head');


console.log(btnJumpToTop.offset().top)


btnJumpToTop.on('click', function()

    {
        TweenMax.to('body, html',.5, {scrollTop:0});

    });

$(window).scroll(function () {

    console.log('scroll', $(window).scrollTop());

    if ($(window).scrollTop() >= head.offset().top) {
        document.body.style.border = "";
    } else {
        document.body.style.border = "none";
    }


})


var isDesktop = Modernizr.mq('only all and (min-width: 1200px)');
console.log('is', isDeskTop);

$(window).scroll(function () {
    if ($(window).scrollTop() > stickyShowPoint) {
        btnJumpToTop.removeClass('hidden');
        if (isDesktop) {
            navbar.addClass('sticky');
            brand.removeClass('visible-xs');
        }
    } else {
        btnJumpToTop.addClass('hidden');
        if (isDesktop) {
            navbar.removeClass('sticky');
            brand.addClass('visible-xs');
        }
    }
});