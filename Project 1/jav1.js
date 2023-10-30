const input = document.querySelector("#data-con");

let res = 0;
let inputdata = "";
let typeddata = 0;
let operator = "";

// inputdata = 123
// +-/*% if res == 0 --> res = inputdata, res = 123, inputdata=0
// inputdata = 54
// equals --> func -> res + inputdata, input.value
// +-/*% if res = 0 , inputdata -> res + inputdata
// +-/*% if res = 4 +  inputdata
// +-/*% if res = 4 , inputdata, res=0

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  typeddata = e.target.value;
});

let arryOfButtons = document.querySelectorAll(".grid-item");
console.log(arryOfButtons);

arryOfButtons.forEach((eachElement) => {
  eachElement.addEventListener("click", (e) => {
    console.log("Grid item is clicked");
    // console.log(eachElement.classList[1])
    if (eachElement.classList[1] == "equals") {
      input.value = calculate(res, parseInt(inputdata), operator);
      inputdata = "";
      operator=""
    }
    figureOutClick(eachElement.classList[1]);
  });
});

const naam = (a, b) => {
  return a + b;
};

function afterOperatorClicked() {
  if (res == 0) {
    res = parseInt(inputdata);
  }
  inputdata = "";
  input.value = "";

  console.log("res=", res, "inputdata=", inputdata);
}

function makeResZero(){
  if(operator=="" && res!=0){
    res=0;
  }
}

function figureOutClick(value) {
  switch (value) {
    case "one":
      makeResZero()
      inputdata = inputdata + "1";
      break;
    case "two":
      makeResZero()
      inputdata = inputdata + "2";
      break;
    case "three":
      makeResZero()
      inputdata = inputdata + "3";
      break;
    case "four":
      makeResZero()
      inputdata = inputdata + "4";
      break;
    case "five":
      makeResZero()
      inputdata = inputdata + "5";
      break;
    case "six":
      makeResZero()
      inputdata = inputdata + "6";
      break;
    case "seven":
      makeResZero()
      inputdata = inputdata + "7";
      break;
    case "eight":
      makeResZero()
      inputdata = inputdata + "8";
      break;
    case "nine":
      makeResZero()
      inputdata = inputdata + "9";
      break;
    case "zero":
      makeResZero()
      inputdata = inputdata + "0";
      break;
    case "modules":
      operator = "%";
      afterOperatorClicked();
      break;
    case "plus":
      operator = "+";
      afterOperatorClicked();
      break;
    case "minus":
      operator = "-";
      afterOperatorClicked();
      break;
    case "multiply":
      operator = "*";
      afterOperatorClicked();
      break;
    case "divide":
      operator = "/";
      afterOperatorClicked();
      break;
    default:
      console.log(value);
  }

  console.log(inputdata, operator);
  input.value = parseInt(inputdata);
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      res = a + b;
      break;
    case "-":
      console.log(a - b);
      res = a - b;
      break;
    case "/":
      console.log(a / b);
      res = a / b;
      break;
    case "*":
      console.log(a * b);
      res = a * b;
      break;
    case "%":
      console.log(a % b);
      res = a % b;
      break;
    default:
      console.log("wrong operator");
  }
  return res
}