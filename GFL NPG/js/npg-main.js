(function() {
  var $why2off = $('.whytwotop');
  var $why2on = $('.whytwobot');
  var $why2text = $('.whytwohidden');
  var $how2gooff = $('.howtogotop');
  var $how2goon = $('.howtogobot');
  var $how2gotext = $('.howtogohidden');
  var $when2switchoff = $('.whentoswitchtop');
  var $when2switchon = $('.whentoswitchbot');
  var $when2switchtext = $('.whentoswitchhidden');
  var $pointersoff = $('.pointerstop');
  var $pointerson = $('.pointersbot');
  var $pointerstext = $('.pointershidden');
  var $whenshoulduseoff = $('.whatshouldusetop');
  var $whenshoulduseon = $('.whatshouldusebot');
  var $whenshouldusetext = $('.whatshouldusehidden');

  jQuery.fn.center = function(parent) {
      if (parent) {
          parent = this.parent();
      } else {
          parent = window;
      }
      this.css({
          "position": "absolute",
          "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
      });
  return this;
  }
  $('.centerhorizontal').center();
  //$('.centervertical').center();

  $(document).ready(function () {
    $('.whytwohidden,.howtogohidden,.whentoswitchhidden,.pointershidden,.whatshouldusehidden').css('display', 'none');
  });

  $('.whytwotop,.whytwobot').on('click', why2toggle);
  function why2toggle() {
    $why2off.toggle();
    $why2text.slideToggle(400);
  }


})();
