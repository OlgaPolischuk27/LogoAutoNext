var menuBtn = document.querySelector('.menu_btn');
var mobileMenu = document.querySelector('.header');
var notScroll = document.querySelector('body');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active'),
    mobileMenu.classList.toggle('active'),
    notScroll.classList.toggle('overflow-hidden') 
})

$(function() {
    $('.rev_slider').slick({
        arrows: false,
        dots: true
    }) 
})

$(function() {
  $('.auto_slider').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      variableWidth:true,
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            variableWidth:true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth:true
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth:true
          }
        }
      ]
  }) 
})
$(function() {
  $('.winner_slider').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      variableWidth:true,
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            variableWidth:true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth:true
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth:true
          }
        }
      ]
  }) 
})
