import '../scss/main.scss'



$(function () {
    uplineScroll();
});

//функция для скролла навигации
function uplineScroll() {
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.upline').addClass('active')
        }
        else if(st == 0)
        {
            $('.upline').removeClass('active')
        }
        else {

        }
        lastScrollTop = st;
    });
}









