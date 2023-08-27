const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    if (b == 0){
        return "Error: Cannot divide by 0";
    }
    return a / b;
}

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (num2) => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      let result;
      switch (operator) {
        case '+':
          result = add(number1, number2);
          break;
        case '-':
          result = subtract(number1, number2);
          break;
        case '*':
          result = multiply(number1, number2);
          break;
        case '/':
          result = divide(number1, number2);
          break;
        default:
          console.log('Invalid operator');
          rl.close();
          return;
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
