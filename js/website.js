(function() {
  $(document).ready(function() {
    var animate, item, items, mobile, _i, _len;
    $(".nav ul li a").click(function() {
      return $('html, body').animate({
        scrollTop: $("#" + ($(this).attr('class'))).offset().top
      }, 1500);
    });
    $(".chevron .down").click(function() {
      return $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 1500);
    });
  })
}).call(this);
