// Slickリファレンス
// https://kenwheeler.github.io/slick/

$('.voices__list').slick({
    autoplay: false, // 自動再生
    arrows: true, // 左右のナビゲーションを無効
    dots: true, // ドットを表示
    fade: false, // フェードで切り替え
    slidesToShow: 3,
    slidesToScroll: 3,
    // valiableWidth: true,
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
    const pageTop = $("#back-to-top");
    pageTop.hide(); // 最初はボタンを非表示にする
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            // 200px以上スクロールしたらボタンをフェードイン
            pageTop.fadeIn();
        } else {
            // 200px以下になったらボタンをフェードアウト
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $("body,html").animate(
            {
                scrollTop: 0, // 上から0pxの位置に戻る
            }, 0
        );
        return false;
    });
    // フッター手前でストップ
    $("#back-to-top").hide();
    $(window).on("scroll", function () {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight();
        if (scrollHeight - scrollPosition <= footHeight) {
            // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
            $("#back-to-top").css({
                position: "absolute",
                bottom: footHeight,
            });
        } else {
            $("#back-to-top").css({
                position: "fixed",
                bottom: "16px",
            });
        }
    });

});