function changeBackground(color) {
  let focusBG = document.getElementById("focusBG");
  focusBG.style.backgroundColor = color;
};


let ourfocusButton2 = document.getElementById("button2");
ourfocusButton2.addEventListener("click", function () {
  changeBackground("#0d143a");
});

let ourfocusButton1 = document.getElementById("button1");
ourfocusButton1.addEventListener("click", function () {
  changeBackground("#e3b815");
});