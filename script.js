/*左から順番にふわっと表示*/
$(function () {
  $('.fuwari').hide();
  $('.fuwari').each(function (i) {
    $(this).delay(500 * i).fadeIn(1000);
  });
});
