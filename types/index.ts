export class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
    evaluateExpression(expression: string): number {
        try {
          // Use eval to calculate the expression.
          const result = eval(expression);
          if (typeof result === 'number') {
            return result;
          }
          throw new Error('Invalid expression');
        } catch (error) {
          throw new Error('Invalid expression');
        }
      }
  }