let a = 5
let b = 10

let operator = "+"


const input = document.querySelector("#data-con"); 
console.log(input);

input.addEventListener("input" , (e) => {
    console.log(e.value);
});
input.addEventListener("click",(e)=>{})

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "%":
        console.log(a % b);
        break;
    default:
        console.log("wrong operator");
}

let a = 5
let b = 10 
let c = a+b
console.log(c);