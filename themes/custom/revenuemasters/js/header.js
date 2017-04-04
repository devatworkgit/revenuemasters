(function($){
  
  Drupal.behaviors.header_behaviors = {
    attach: function(context, settings) {
      $(document).ready(function (event) {
        detect_dead_position();
      });
      $(window).scroll(function (event) {
        detect_dead_position();
      });
    }
  };
  
  function detect_dead_position() {
    var scroll = $(window).scrollTop();
    if (scroll != 0 && !$('header#navbar').hasClass('scrolled')) {
      $('header#navbar').addClass('scrolled');
    } else if (scroll == 0 && $('header#navbar').hasClass('scrolled')) {
      $('header#navbar').removeClass('scrolled');
    }
  }
  
})(jQuery);