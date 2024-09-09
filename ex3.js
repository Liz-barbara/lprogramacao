var num1 = 10;
var num2 = 5;
var operação = "-";

switch(operação){
    case "+":
    console.log(`resultado ${num1 + num2}`);
 break;
    case "-":
    console.log(`resultado ${num1 + num2}`)
 break;
    case "*":
    console.log(`resultado ${num1 * num2}`);
 break;
    case "/":
      if (num2 !== 0) {
    console.log(`resultado ${num1 / num2}`)
 } else {
    console.log(`erro: divisão por zero.`);
 }
 break;
    defacult:
    console.log("operador invalido");         
}