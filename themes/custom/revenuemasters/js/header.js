(function($){
  Drupal.behaviors.header_behaviors = {
    attach: function(context, settings) {
      $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll != 0 && !$('header#navbar').hasClass('scrolled')) {
          $('header#navbar').addClass('scrolled');
        } else if (scroll == 0 && $('header#navbar').hasClass('scrolled')) {
          $('header#navbar').removeClass('scrolled');
        }
      });
    }
  };
})(jQuery);