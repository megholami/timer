
(function () {
  'use strict';

  var
  $min = $('.minute').html(),

  $sec = $('.second').html(),

  $btnstart = $('.btn-start'),

  $end = $('.endtime'),

  startTime = function() {
    console.log('startTime');

    $end.removeClass('active');

    var sec = $sec;
    $('.second').html($sec);
    var min = $min;
    $('.minute').html($min);

    var i = setInterval( function () {
      sec --;
      console.log(sec);
      $('.second').html(sec);

      if (sec == 0) {
        min --;
        console.log(min);
        $('.minute').html(min);

        if (min == 0 ) {
          clearInterval (i);
          endTime();
        }
        else {
          sec = 60;
          console.log(sec);
        }
      }
    },1000);
  },

  endTime = function () {
    console.log('endGame');
    $end.addClass('active');
  },

  start = function () {
    console.log('start');
    $btnstart.click(startTime);
  },

  main = function () {
    console.log('Timer, Init ;)');
    start ();
  }
  ;

  main();
})();
