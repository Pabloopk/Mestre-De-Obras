$(document).ready(function(){
    $('.nav-bar').on('click', function(){
        $('.menu-lateral').toggleClass('active');
        $('.nav-bar i').toggleClass('fa-xmark fa-bars-staggered');
    });


    $('.videos .itens').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 2000,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
      });
});

