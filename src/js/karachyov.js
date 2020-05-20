@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/burger.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')

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