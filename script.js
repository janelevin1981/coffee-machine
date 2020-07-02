"use strict"

let balance = document.querySelector(".balance");

let state ="waiting" //cooking, ready

function cookCoffee(price, name, elem) {
  if (state != "waiting") {
    return;
  }
  let buttonCup = elem.querySelector("img");
  let cupSrc = buttonCup.src;
  if(balance.value >= price) {
    balance.value -= price;
    balance.style.backgroundColor = ""; //вернуть белый фон
    changeDisplayText("Ваш" + name + "готовится");
    cup.changeCupImage(cupSrc);
    state = "cooking";
    startCooking();
  }else{
    changeDisplayText("Недостаточно средств");
    balance.style.backgroundColor = "rgb(244, 50,50)";
  }
} 
function startCooking(){
  cup.showCup();
  changeProgress(100, 5);
  setTimeout(function(){
    state = "ready";
    changeDisplayText("Ваш кофе готов");
    let cup = document.querySelector(".cup");
    cup.onclick = function(){
      takeCoffee();
    }
  }, 5000)
}
function takeCoffee(){
  if (state != "ready") {
    return;
  }
  state = "waiting";
  changeProgress(0);
  cup.hideCup();
  changeDisplayText("Выберите кофе!");
  cup.toggleActive()
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
let cup = {
  elem: document.querySelector(".cup"),

changeCupImage(src) {
  let cupImage = cup.elem.querySelector("img");
  cupImage.src = src;
},

showCup() {
  cup.elem.style.display = "block";
  cup.elem.style.transition = "opacity Ss";
  setTimeout(function() {
    cup.elem.style.opacity = "1";
  }, 10);
 },

hideCup(){
  cup.elem.style.display = "none";
  cup.elem.stely.opacity = "0";
},
toggleActive() {
  cup.elem.classList.toggle("pointer")
 }
};
function changeProgress(percent, sec = 0) {
  let progress = document.querySelector(".progress-bar");
  progress.style.width = percent + "%";
  progress.style.transition = 'width ${sec}s';
}
function changeDisplayText(text) {
  let displayText = document.querySelector(".display-text");
  if (text.length > 25) {
    displayText.inner = text.slince(0, 25) + "...";
  }else{
  displayText.innerHTML = text;
  }
}