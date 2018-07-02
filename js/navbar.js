 $( document ).ready(function() {
  if ($(window).width() < 678) {
          $('.toggle').show();
          $('.search-container').hide();
       } else if($(window).width() < 769) {
          $('.toggle').show();
            $('.search-container').show();
       }
       else
       {
          $('.toggle').hide();
          $('.search-container').show();
       }
   $(".toggle").click(function() {
       $('.toggleclass').slideToggle();
    });

    $(window).resize(function() {
      if ($(window).width() < 678) {
          $('.toggle').show();
          $('.search-container').hide();
       } else if($(window).width() < 769) {
          $('.toggle').show();
            $('.search-container').show();
       }
       else
       {
          $('.toggle').hide();
          $('.search-container').show();
       }
    });
  });
  