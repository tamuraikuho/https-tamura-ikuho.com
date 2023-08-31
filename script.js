$(function(){
  const cursor = $("#js-cursor");
  const mouse = $("#js-mouse");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      cursor.css({
          "opacity": "1",
          "transform": "translate(" + x + "px," + y + "px)",
      });
      setTimeout(function(){
          mouse.css({
              "opacity": "1",
              "transform": "translate(" + x + "px," + y + "px)",
          });
      },150);
  });
});

//マウスグラデ

$(function () {
  var num = Math.floor(5 * Math.random());
  $('#js-mouse').addClass('mousebg' + num);
});

//ホバーグラデ

$(function () {
  var num = Math.floor(5 * Math.random());
  $('.photo-caption').addClass('background' + num);
});

//時計

function showtime() {
  var today = new Date();
  $weekday = ['Su.', 'Mo.', 'Tu.', 'We.', 'Th.', 'Fr.', 'Sa.'];
  month = today.getMonth() + 1;
  $('#time').html(month + "." + today.getDate() + "." + $weekday[today.getDay()] + " " + today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2));
}
setInterval(showtime, 1000);

//ローディング

$(function () {
  $('#loading').addClass('loaded');
});