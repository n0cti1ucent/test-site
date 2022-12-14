$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
        {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
                slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1,//スライドを画面に1枚見せる
                slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
            }
        }
    ]
});

const audioElement = document.querySelector("audio");
const videoElement = document.querySelector("video");

/* modaal */
$(".gallery").modaal({
    overlay_close: true,//モーダル背景クリック時に閉じるか
    before_open: function () {// モーダルが開く前に行う動作
        $('html').css('overflow-y', 'scroll');/*縦スクロールバーを出さない*/
    },
    after_close: function () {// モーダルが閉じた後に行う動作
        $('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
        audioElement.pause();
        videoElement.pause();
    }
});



//スクロールした際の動きを関数でまとめる
/*function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 200) {//200pxスクロールしたら
        $('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
        $('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
    } else {//それ以外は
        if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名が既に付与されていたら
            $('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
            $('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
        }
    }

    var wH = window.innerHeight; //画面の高さを取得
    var footerPos = $('#footer').offset().top; //footerの位置を取得
    if (scroll + wH >= (footerPos + 10)) {
        var pos = (scroll + wH) - footerPos + 10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
        $('#page-top').css('bottom', pos);	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    } else {//それ以外は
        if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名がついていたら
            $('#page-top').css('bottom', '10px');// 下から10pxの位置にページリンクを指定
        }
    }
}*/

// 画面をスクロールをしたら動かしたい場合の記述
//$(window).scroll(function () {
//    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
//});

// ページが読み込まれたらすぐに動かしたい場合の記述
//$(window).on('load', function () {
//    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
//});

// #page-topをクリックした際の設定
//$('#page-top').click(function () {
//    $('body,html').animate({
//        scrollTop: 0//ページトップまでスクロール
//    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
//    return false;//リンク自体の無効化
//});