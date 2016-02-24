$(document).ready(function() {

  $('.buttons').on('click', function(e) {

    var click = e.target.textContent
    var answer = document.getElementById("screen").textContent;
    var outPut;

    if (click === "x") {
      $('#screen').append('*');
    } else if (click == '\xF7') {
      $('#screen').append("/");
    } else {
      $("#screen").append(click);
    }
    if (click === 'C') {
      $("#screen").empty();
    }
    if (click === "=") {
      outPut = eval(answer);
      $('#screen').text(outPut)
    }
  })
});
