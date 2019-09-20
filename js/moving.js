// 滚动事件
var topVal=$(document).scrollTop();
function show(){
    var topVal=$(document).scrollTop();
    // 判断
    if(topVal>=600){
        $('.moving').fadeIn();
    }else{
        $('.moving').fadeOut();
    }
}
$(window).scroll(function(){
    show()
})


$('.moving li').click(function(){
    // 要知道出现那个模块，知道模块之后，计算出模块到顶部文档的距离，让页面卷起
    //获取li索引值
    var index=$(this).index();
    console.log(index, $('.boxx>.live1'))
    //根据索引找到对应的div还有距离
    var topZhi = $('.boxx>.live1').eq(index).offset().top;
    // console.log($('.boxx>live1').eq(index))
    //卷起距离
    $(document).scrollTop(topZhi)
})
