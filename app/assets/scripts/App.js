global.jQuery = $ = require("jquery");
var owlCarousel = require('../../../node_modules/owl.carousel/dist/owl.carousel.min');
var Person = require('./modules/Person');

const carouselSettings = {
  margin:20,
  stagePadding: 50,
  lazyLoad:true,
  loop: true,
  responsive:{
     0:{
         items:1
     },
     480:{
         items:2
     },
     768:{
         items:3
     },
     1000:{
       items: 4
     }
 },
 smartSpeed :500,
  //  nav: true,
  //  navText : [
  //    "<i class='fa fa-chevron-left'></i>",
  //    "<i class='fa fa-chevron-right'></i>"
  //  ]
};

$(document).ready(function() {
  var testimonialCarousel = $("#owl-carousel-testimonial");
  var eventsCarousel      = $("#owl-carousel-events");
  var locationsCarousel   = $("#owl-carousel-locations");
  var citiesCarousel      = $("#owl-carousel-cities");
  testimonialCarousel.owlCarousel(carouselSettings);
  eventsCarousel.owlCarousel(carouselSettings);
  locationsCarousel.owlCarousel(carouselSettings);
  citiesCarousel.owlCarousel(carouselSettings);

  $( window ).resize(function() {
    // Get the width of the images and make them all the same height
    // var images = $(".announcement__item img");
    // var width = $(".announcement .owl-item").first().width();
    // $(".announcement__item-img").height(width * .75);

  });

  // var $menuBtn = $("#menuBtn i");
  // var $menu = $(".site-header__nav");
  // $menuBtn.click(function() {
  //   if($menuBtn.hasClass("fa-bars")) {
  //     $menuBtn.removeClass("fa-bars");
  //     $menuBtn.addClass("fa-close");
  //     $menu.show();
  //   } else {
  //     $menuBtn.removeClass("fa-close");
  //     $menuBtn.addClass("fa-bars");
  //     $menu.hide()
  //   }
  // });
});
