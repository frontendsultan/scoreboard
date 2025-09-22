let scoreHome = document.getElementById("score-home");
let scoreH = 0;

let scoreGuest = document.getElementById("score-guest");
let scoreG = 0

function incrementHome(n) {
  scoreH += n;
  scoreHome.textContent = scoreH;
}

function incrementGuest(n) {
  scoreG += n;
  scoreGuest.textContent = scoreG;
}