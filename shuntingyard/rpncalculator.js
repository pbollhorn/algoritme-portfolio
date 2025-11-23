import Stack from "./stack.js";
import { parseExpression } from "./shuntingyard.js";

// RPN Calculator which works with +, -, *, / and ^
export default function rpnCalculator(inputString) {
  const inputQueue = parseExpression(inputString);
  const resultStack = new Stack();

  // Nested function: Go through queue and find numbers and operators
  function goThroughQueue() {
    // While there are tokens to be read
    while (inputQueue.size() > 0) {
      // Read a token
      const token = inputQueue.dequeue();

      // If token is a number:
      //      add it to resultStack
      // else it is an operator:
      //      call performOperation
      if (typeof token === "number") {
        resultStack.push(token);
      } else {
        performOperation(token);
      }
    }
  }

  // Nested function: Perform operation
  function performOperation(operation) {
    const B = resultStack.pop();
    const A = resultStack.pop();
    switch (operation) {
      case "+":
        resultStack.push(A + B);
        break;
      case "-":
        resultStack.push(A - B);
        break;
      case "*":
        resultStack.push(A * B);
        break;
      case "/":
        resultStack.push(A / B);
        break;
      case "^":
        resultStack.push(A ** B);
        break;
    }
  }

  goThroughQueue();
  return resultStack.pop();
}
