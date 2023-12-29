const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let count = 0;

function cookieClicker() {
  cookie.onclick = function () {
    count++;
    clickerCounter.innerHTML = count;

    if (count % 2 !== 0) {
      cookie.style.width = '220px';
    } else {
      cookie.style.width = '200px';
    }
  }
}

cookieClicker();