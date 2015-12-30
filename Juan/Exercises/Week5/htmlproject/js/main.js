var hasClass = function (className, element) {
  var cList = element.classList,
      leng = cList.length,
      i;
  for (i = 0; i < leng; i++) {
    if (cList[i] === className) {
      return(true);
    }
  }
  return(false);
};

var animateBounce = function (event) {
  var ball = document.getElementById('ball-holder');
  if (!hasClass('bounce', ball)) {
    ball.classList.add('bounce');
  } else {
    ball.classList.remove('bounce');
  }
};

var animateRoll = function (event) {
  var ball = document.getElementById('ball');
  if (!hasClass('roll', ball)) {
    ball.classList.add('roll');
  } else {
    ball.classList.remove('roll');
  }
};

(function(){
  var bounce = document.getElementById('nav1'),
      roll = document.getElementById('nav2');
  bounce.addEventListener('click', animateBounce, false);
  roll.addEventListener('click', animateRoll, false);
}());
