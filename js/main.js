(function() {
  'use strict';
  function getAge() {
    var birthday = document.getElementById('birthday').value;
    var d1 = new Date(birthday);
    var d2 = new Date();
    var diff = d2.getTime() - d1.getTime();
    var dayPast = Math.floor(diff / (1000 * 60 * 60 * 24));
    alert(dayPast + "日経過！");
  }
})();
