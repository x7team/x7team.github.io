       $(document).ready(function() {
           $("#about").click(function() {
               $('html, body').animate({
                   scrollTop: $(".main").offset().top
               }, 1000);
           });

           $("#works").click(function() {
               $('html, body').animate({
                   scrollTop: $(".works").offset().top
               }, 1000);
           });

           $("#services").click(function() {
               $('html, body').animate({
                   scrollTop: $(".services").offset().top
               }, 1000);
           });

           $("#contact").click(function() {
               $('html, body').animate({
                   scrollTop: $(".contact").offset().top
               }, 1000);
           });

           $("#banner_scroll").click(function() {
               $('html, body').animate({
                   scrollTop: $(".main").offset().top
               }, 1000);
           });

           $(window).scroll(function() {
               var scroll = $(window).scrollTop();
               //console.log(scroll);
               if (scroll >= 50) {
                   //console.log('a');
                   $("header").addClass("change");
               } else {
                   //console.log('a');
                   $("header").removeClass("change");
               }
           });

           $('.toggleNav').on('click', function() {
               $('nav').toggleClass('open');
           });
       });