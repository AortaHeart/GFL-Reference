(function() {
  var $why2on = $('.js-why2on');
  var $why2off = $('.js-why2off');
  var $why2text = $('.js-why2text');
  var $why2bg = $('.js-why2bg');
  var $logistics = $('.js-logistics');
  var $body = $('.js-body');


  $(document).ready(function () {
    $why2bg.css('display', 'none');
    $logistics.css('height', 'auto');
    $body.css('padding-bottom', 200);
  });

  $why2off.on('click', why2toggle);
  $why2on.on('click', why2toggle);

  function why2toggle() {
    $why2off.toggle();
    $why2bg.slideToggle(400);
  }

  function why2hide() {
    $why2off.toggle();
    $why2text.css('top', 0);
  }
})();