const num1 = parseInt(prompt("First Number:"));
const operator = prompt("Operand:");
const num2 = parseInt(prompt("Second Number:"));

let calculator = function () {
  if (operator == "+") alert(num1 + num2);
  else if (operator == "-") alert(num1 - num2);
  else if (operator == "*") alert(num1 * num2);
  else if (operator == "/") alert(num1 / num2);
};

calculator();
