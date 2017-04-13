(function($){
  
  Drupal.behaviors.animations = {
    attach: function(context, settings) {
      element = $('.animate .animated-object');
      loaded = false;
      $(document).ready(function (event) {
        rm_animate(element, 300);
      });
      $(window).scroll(function (event) {
        rm_animate(element, 300);
        loaded = true;
      });
    }
  };
  
  function rm_animate(element, time) {
    delay = 0;
    element.each(function( index ) {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() && !$(this).hasClass('active')) {
        $(this).delay(time * index).queue(function(next){
          $(this).addClass("active");
          next();
        });
      }
    });
  }

})(jQuery);