$(function(){

  $('.menu__btn').on('click', function() {
    $(this).toggleClass('menu__list--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  // убрать чтобы появилась прокрутка,стоп, паузы
  // $('[data-fancybox]').fancybox({
  //   youtube : {
  //       controls : 0,
  //       showinfo : 0
  //   }
  // });

  $('.herous__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.herous__slider-text',
    prevArrow:'<button class="slick-btn slick-prev"><img src="./images/arrow-left.png" alt=""></button>',
    nextArrow:'<button class="slick-btn slick-next"><img src="./images/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots:true,
          autoplay: true
        }
      }
    ]
  });
  $('.herous__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.herous__slider-img',
    arrows: false
  });
});