(function($){
  var $w = $(window),
    $b = $('body'),
    windowH = $w.outerHeight();

  // resize
  $w.on('resize', function(event) {
    windowH = $w.outerHeight();
  });

  // header home
  if ( $('.home-hero-wrapper').length > 0 ) {
    $b.on('click', '#scroll-header', function(event) {
      event.preventDefault();
      $b.stop().animate({ scrollTop: windowH }, 500);
    });
  }

})(jQuery);