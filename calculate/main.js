let value1 = document.querySelector(".value1");
let value2 = document.querySelector(".value2");
let result = document.querySelector("#result");
let addition = document.querySelector(".addition");
let substract = document.querySelector(".substract");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");
let reset = document.querySelector(".reset");

let bool = false;
addition.addEventListener("click", function () {
  if (value1.value == "" || value2.value == "") {
    alert("valua are not null!");
  } else {
    let sum = +value1.value + +value2.value;
    result.innerText = sum;
  }
});

substract.addEventListener("click", function () {
  if (value1.value == "" || value2.value == "") {
    alert("valua are not null!");
  } else {
    let substr = +value1.value - +value2.value;
    result.innerText = substr;
  }
});

multiply.addEventListener("click", function () {
  if (value1.value == "" || value2.value == "") {
    alert("valua are not null!");
  } else {
    let multi = +value1.value * +value2.value;
    result.innerText = multi;
  }
});

division.addEventListener("click", function () {
  if (value1.value == "" || value2.value == "") {
    alert("valua are not null!");
  } else {
    let divi = +value1.value / +value2.value;
    result.innerText = divi;
  }
});

reset.addEventListener("click", function () {
  value1.value = "";
  value2.value = "";
  result.innerText = 0;
});
