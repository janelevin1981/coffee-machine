"use strict"

let balance = document.querySelector(".balance");

function cookCoffee(price, name) {
  if(balance.value >= price) {
    balance.value -= price;
    balance.style.backgroundColor = ""; //вернуть белый фон
    changeDisplayText("Ваш" + name + "готовится");
    startCooking();
  }else{
    changeDisplayText("Недостаточно средств");
    balance.style.backgroundColor = "rgb(244, 50,50)";
  }
} 
function startCooking(){
  changeProgress(100);
  setTimeout(function(){
    changeDisplayText("Ваш кофе готов");
  }, 5000)
}
//планирование
/*let timeout = setTimeout(function(){
  changeDisplayText("Передумали заказывать?");
}, 3000); //отработает только один раз
let interval = setInterval(function() {
  changeDisplayText("кофе" + Date.now());
}, 4000)//отрабатывает пока не отключим (каждый определенный промежуток времени)
setTimeout(function() {
  clearTimeout(timeout);//очищаем таймаут (больше не отработает)
  clearInterval(interval);//очищаем интервал(больше не отработает)
  console.log("Timeout and interval cleaned")
}, 1000);*/

function changeProgress(percent) {
  let progress = document.querySelector(".progress-bar");
  progress.style.width = percent + "%";
  progress.style.transition = "width Ss";
}
function changeDisplayText(text) {
  let displayText = document.querySelector(".display-text");
  if (text.length > 25) {
    displayText.inner = text.slince(0, 25) + "...";
  }else{
  displayText.innerHTML = text;
  }
}