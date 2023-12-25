let text = document.getElementById("timer");
let result = +text.textContent;

let timerId = setInterval(function () {
  text.textContent = result;
  if (result !== 0) {
    result -= 1;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  }

}, 1000)