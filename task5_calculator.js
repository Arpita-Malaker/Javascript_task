function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator.";
    }
  }

  console.log(calculate(5, '+', 3)); 
console.log(calculate(10, '-', 4));
console.log(calculate(6, '*', 5)); 
console.log(calculate(15, '/', 3));
