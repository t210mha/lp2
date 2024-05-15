// Slick
$('.voices__list').slick({
    autoplay: false, // 自動再生
    arrows: true, // 左右のナビゲーションを無効
    dots: true, // ドットを表示
    fade: false, // フェードで切り替え
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img src="/assets/image/voices_arrow_left_circle_01.svg" class="slide-arrow slick-prev">',
    nextArrow: '<img src="/assets/image/voices_arrow_right_circle_01.svg" class="slide-arrow slick-next">',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// アコーディオン
$('.faq__item-answer').hide(); // 初期表示を非表示に
$('.faq__item-question').on('click', function (e) {

    var content = $(e.target);

    if (content.hasClass('faq__item-question')) {
        content = content.next();
    }
    else {
        content = content.parent().next();
    }
    content.slideToggle();

    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    }
    else {
        $(this).addClass('open')
    }
});

// トップへ戻るボタン
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            // 200px以上スクロールしたらボタンをフェードイン
            $('.back-to-top__img').addClass('back-to-top__img--visible');
        } else {
            // 200px以下になったらボタンをフェードアウト
            $('.back-to-top__img').removeClass('back-to-top__img--visible');
        }
    });
});