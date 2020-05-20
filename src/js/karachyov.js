@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/burger.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')

$(document).scroll(function (event) {
    var scroll = $(window).scrollTop(),
        about = $('.about'),
        aboutTop = about.offset().top,
        aboutBottom = aboutTop + about.outerHeight(),
        contacts = $('.contacts'),
        contactsTop = contacts.offset().top,
        contactsBottom = contactsTop + contacts.outerHeight();

    if(scroll >= aboutTop && scroll < aboutBottom || scroll >= contactsTop && scroll < contactsBottom){
        $('.header__burger, .header__social').addClass('color');
    }else{
        $('.header__burger, .header__social').removeClass('color');
    }
});

$(".menuscroll").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('.menuscroll a').removeClass('active');
    $(this).addClass('active');
    $('.header, .header__burger, .header__menu, .header__logo').removeClass('active');
    $('body,html').animate({scrollTop: top}, 1500);
});

$(".dial").knob({
    readOnly:true,
    width: 160,
    height: 160,
    fgColor: '#01B29C',
    inputColor: '#01B29C',
    bgColor: '#0073B4'
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