@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/burger.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')

$(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
            if(id == 'about' || id == 'contacts'){
                $('.header__burger, .header__social').addClass('color');
            }else{
                $('.header__burger, .header__social').removeClass('color');
            }
        }
    })
});
$(".menuscroll").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$(".dial").knob({
    readOnly:true,
    width: 100,
    height: 100,
    fgColor: '#01B29C',
    inputColor: '#01B29C',
    bgColor: '#0073B4',
    font: 'Montserrat',
    fontSize: '18px'
});

$('.project-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});