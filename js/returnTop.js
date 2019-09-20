$(function () {




    $('.returnTop').click(function(){
    $('html,body').animate({
        scrollTop:0
    })
})

    // 返回顶部，绑定gotop1图标和gotop2文字事件
    $("#gotop1,#gotop2").click(function (e) {
        TweenMax.to(window, 1.5, {
            scrollTo: 0,
            ease: Expo.easeInOut
        });
        var huojian = new TimelineLite();
        huojian.to("#gotop1", 1, {
                rotationY: 720,
                scale: 0.6,
                y: "+=40",
                ease: Power4.easeOut
            })
            .to("#gotop1", 1, {
                y: -1000,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.6)
            .to("#gotop1", 1, {
                y: 0,
                rotationY: 0,
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut,
                clearProps: "all"
            }, "1.4");
    });

});