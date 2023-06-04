(function($) {
  "use strict";
  var astrology = {
      initialised: false,
      version: 1.0,
      mobile: false,
      init: function() {
          if (!this.initialised) {
              this.initialised = true;
          } else {
              return;
          }
          /*-------------- Design Functions Calling ---------------------------------------------------
          ------------------------------------------------------------------------------------------------*/
          this.loader();
          this.toggle();
          this.toggleSubmenu();
          this.quantity();
          this.testimonial();
          this.Shop();
      },
      // loader
      loader: function () {
        jQuery(window).on('load', function () {
          $(".as_loader").delay(500).fadeOut("hide");
          $(".as_spinner").delay(500).fadeOut("hide");
        });
      },

      // 
      toggle: function() {
        $(".as_toggle").click(function(){
          $('body').toggleClass("menuOpen");
        });
      },
      // 
      toggleSubmenu: function() {
        $('.as_menu ul li a').click(function(e) {
            $(this).siblings('ul.as_submenu ').toggleClass('openSub_menu');
            $('ul.as_submenu ').not($(this).siblings()).removeClass('openSub_menu');
            e.stopPropagation();
          });
        $('body').click(function() {
          $('ul.as_submenu').removeClass('openSub_menu');
        });
      },


      // quantity
      quantity: function() {
        $('.quantity .plus').on('click', function(){
          var num = parseInt($('.quantity').find('input').val())+1; 
          $(this).closest('.quantity').find('input').val(num);
        }) 
        $('.quantity .minus').on('click', function(){
          var num = parseInt($('.quantity').find('input').val())-1; 
          $(this).closest('.quantity').find('input').val(num);
        }) 
      },
      // 
      testimonial: function() {
        var swiper = new Swiper(".as_testimonialSlider", {
          spaceBetween: 30,
          slidesPerView: 2,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
           320: {
              slidesPerView:1,
              spaceBetween: 20,
            },
            380: {
              slidesPerView:1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView:1,
              spaceBetween: 20,
            },
            580: {
              slidesPerView:1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }
        });

      },
      // 
      Shop: function() {
        var swiper = new Swiper(".mySwiper", {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });
      }


    };
    astrology.init();

}(jQuery));






















