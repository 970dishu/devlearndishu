const input = document.querySelector("#data-con");

let res = 0;
let inputdata = 0

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    inputdata = parseInt(e.target.value)
});

let arryOfButtons = document.querySelectorAll(".grid-items");
console.log(arryOfButtons);

const naam = (a,b) =>{
            return a+b
}

function calculate(a,b,operator){
    switch (operator){
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
            console.log(wrong_operator);

    }

}