const b1 = document.getElementById("btn1");
const box1 = document.getElementById("box1");
b1.onclick = function (e) {
  box1.classList.toggle("display");
};

const b2 = document.getElementById("btn2");
const box2 = document.getElementById("box2");
b2.onclick = function (e) {
  let colors = Math.floor(Math.random() * 16777215).toString(16);
  box2.style.backgroundColor = "#" + colors;
  console.log(colors);
};
