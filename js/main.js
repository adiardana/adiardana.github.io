'use strict';

(function($){
  var $w = $(window),
    $b = $('body'),
    header = $('header'),
    headerH = header.outerHeight(),
    scrollTop = 0;

  var site = {

  };

  // if ($b.hasClass('homepage')) {
  //   $(window).snowfall({round: true});
  // }

  $(document).pjax('a', '#main');

})(jQuery);