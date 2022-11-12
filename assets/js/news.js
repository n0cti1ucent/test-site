//bxslider
//$('.slider').bxSlider({
//    touchEnabled: false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
//    mode: 'vertical',
//    controls: false,
//    auto: 'true',
//    pager: false
//});


$('.slider').slick({
    autoplay: true,
    infinite: true,
    fade: false,
    arrows: false,
    speed: 1000,
    pauseOnFocus: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    slidesToShow: 1,
    SlidesToScroll: 1
});

$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
})