(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#client-testimonial");
    owl.owlCarousel({
      navigation: true,
      pagination: false,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      addClassActive: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [480,1],
      itemsMobile : [479,1],
    });   
    $('#client-testimonial').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('#client-testimonial').find('.owl-next').html('<i class="lni-chevron-right"></i>');


    /* showcase Slider
    =============================*/
     var owl = $(".showcase-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        margin:10,
        stopOnHover: true,
        autoPlay: true,
        items: 5,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });



  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        var mobile = window.matchMedia("(max-width: 480px)")
        if ($(window).scrollTop() > 100 && !mobile.matches) {
            console.log("kkkkk")
            $('.header-top-area').addClass('menu-bg');
            $('.fixed-top').addClass('menu-bg');
            $('.navbar .tes img').attr('src','./img/Icon/Icons-04bb.png');
        } else {
            console.log("clclcl")
            $('.fixed-top').removeClass('menu-bg');
            $('.header-top-area').removeClass('menu-bg');
            $('.navbar .tes img').attr('src','./img/Icon/Icons-03-Recovered.png');
        }
    });

    $(window).on('load', function() {
      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });
   });


    
// $(function () { 
//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 1000) { 
//           $('.navbar .navbar-expand-md img').attr('src','./img/Icon/Icons-03-Recovered.png');
//       }
//       if ($(this).scrollTop() < 1000) { 
//           $('.navbar .navbar-expand-md img').attr('src','./img/Icon/Icons-04.png');
//       }
//   })
// });

  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation
   ========================================================================== */



    // $(document).ready(function(){
    //   $(".btn").click(function(){
    //     $("#business-plan").toggle(400,"swing");
    //   });
    // });

    $('#toggle').click(function() {
      $('#business-plan').toggle('1000');
      $("i", this).toggleClass("lni-chevron-up lni-chevron-down");
  });
  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

}(jQuery));

