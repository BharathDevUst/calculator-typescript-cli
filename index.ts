import inquirer from 'inquirer';
import { Calculator } from './types';

async function main() {
  const calculator = new Calculator();

  const { operation } = await inquirer.prompt([
    {
      type: 'list',
      name: 'operation',
      message: 'Choose an operation:',
      choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Evaluate Expression', 'Exit'],
    },
  ]);

  if (operation === 'Exit') {
    console.log('Goodbye!');
    return;
  }

  if (operation === 'Evaluate Expression') {
    const { expression } = await inquirer.prompt([
      {
        type: 'input',
        name: 'expression',
        message: 'Enter the expression (e.g., 2 + 3 * 5):',
        validate: (value) => {
          try {
            eval(value); // Test if it's a valid expression
            return true;
          } catch {
            return 'Please enter a valid expression.';
          }
        },
      },
    ]);

    try {
      const result = calculator.evaluateExpression(expression);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
    }
  } else {
    const { firstNumber, secondNumber } = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstNumber',
        message: 'Enter the first number:',
        validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number.',
      },
      {
        type: 'input',
        name: 'secondNumber',
        message: 'Enter the second number:',
        validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number.',
      },
    ]);

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result: number;

    try {
      switch (operation) {
        case 'Add':
          result = calculator.add(num1, num2);
          break;
        case 'Subtract':
          result = calculator.subtract(num1, num2);
          break;
        case 'Multiply':
          result = calculator.multiply(num1, num2);
          break;
        case 'Divide':
          result = calculator.divide(num1, num2);
          break;
        default:
          throw new Error('Invalid operation');
      }
      console.log(`Result: ${result}`);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
    }
  }

  // Repeat the process
  await main();
}

main();
