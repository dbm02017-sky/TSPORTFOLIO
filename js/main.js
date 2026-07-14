$(function(){
    // alert('안녕')
    // 스크롤하면 -> gotop 보여라
    $(window).scroll(function(){
        if($(window).scrollTop()>2000){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }
    })
    // gotop 누르면 스크롤탑 0
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html,body').animate({
            scrollTop : 0
        },1000)
    })
    $('.scene2 ul li').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
        let idx= $(this).index()
        let section = $('main section').eq(idx)
        let sectionc = section.offset().top-150
        $('html,body').animate({
            scrollTop : sectionc
        })
    })
})