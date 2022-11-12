//bxslider
//$('.slider').bxSlider({
//    touchEnabled: false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
//    mode: 'vertical',
//    controls: false,
//    auto: 'true',
//    pager: false
//});

$('.sticker').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: false,
    speed: 1000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    SlidesToScroll: 1,
});