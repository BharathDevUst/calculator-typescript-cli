"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    };
    Calculator.prototype.evaluateExpression = function (expression) {
        try {
            // Use eval to calculate the expression.
            var result = eval(expression);
            if (typeof result === 'number') {
                return result;
            }
            throw new Error('Invalid expression');
        }
        catch (error) {
            throw new Error('Invalid expression');
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
