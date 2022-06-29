var btn_new = document.getElementById("new");
var btn_hint = document.getElementById("hint");
var all_icon = document.getElementsByTagName('i');
var icons = [...all_icon];
var fronts = document.querySelectorAll('.front');
var cards = document.querySelectorAll('.card');
var main = document.getElementsByTagName('main')[0];
var s = [];
var d = [];

//add front cover for all cards
fronts.forEach(function (front) {
  front.style.background = "URL(./images/zcover.jpg) center/cover";
})

//shuffle cards randomly
cards.forEach(function (img) {
  window.addEventListener('load', function () {
    var random = Math.floor(Math.random() * cards.length);
    img.style.order = random;
  })
})

//new game button
btn_new.addEventListener('click', function () {
  window.location.reload();
})

//hint button
btn_hint.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.classList.add('flip');
    setTimeout(function () {
      card.classList.remove('flip')
    }, 1000);
  })
  var remove_icon = icons.shift();
  remove_icon.style.visibility = "hidden";
  if (icons.length == 0) {
    btn_hint.disabled = true;
  }
})

//playing game
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.add('flip');
    s.push(this);
    console.log(s)
    if (s.length == 2) {
      if (s[0] === s[1]) {
        s[0].classList.remove('flip');
        s = [];
      } else if (s[0].innerHTML === s[1].innerHTML) {
        s[0].style.visibility = "hidden";
        s[1].style.visibility = "hidden";
        d = d.concat(s);
        s = [];
      } else {
        setTimeout(function () {
          s[0].classList.remove('flip');
          s[1].classList.remove('flip');
          s = [];
        }, 700);
      }
    }
    if (d.length == cards.length) {
      setTimeout(function () {
        main.style.background = "URL(./images/won.png) no-repeat center";
      }, 1200);
    }
  })
})