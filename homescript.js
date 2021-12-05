
$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    $('.fadein').each(function(i) {
      $(this).animate({'opacity': '1'}, 2000);
    });

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.hideme').each(function(i){

          var object_threshold = ($(this).position().top + $(this).position().top + $(this).outerHeight()) / 2;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > object_threshold){

              $(this).animate({'opacity':'1'},1500);

          }

      });

  });

});
