import Queue from "./queue.js";
import Stack from "./stack.js";

// Pseudo code for shunting yard algorithm:
// https://brilliant.org/wiki/shunting-yard-algorithm/

const precedence = {
  //   "^": 5,
  "*": 4,
  "/": 3,
  "+": 2,
  "-": 1,
};

export default function shunting(inputString) {
  const inputQueue = new Queue();
  const outputQueue = new Queue();
  const operatorStack = new Stack();

  //parseExpression læser en expression og putter den i inputQueue
  function parseExpression(expression) {
    const splitted = expression.split(" ");
    for (const element of splitted) {
      if (isNaN(element)) {
        // element er en operation
        inputQueue.enqueue(element);
      } else {
        // element er et tal
        inputQueue.enqueue(Number(element));
      }
    }
  }

  parseExpression(inputString);
  //   inputQueue.printQueue();

  while (inputQueue.size() > 0) {
    const token = inputQueue.dequeue();
    // console.log(token);
    // If token is a number add it to outputQueue
    if (typeof token === "number") {
      outputQueue.enqueue(token);
      continue;
    }
    // else token is an operator
    while (precedence[operatorStack.peek()] > precedence[token]) {
      const operator = operatorStack.pop();
      outputQueue.enqueue(operator);
    }
    operatorStack.push(token);
  }
  console.log("hello from middle");
  while (operatorStack.size() > 0) {
    const operator = operatorStack.pop();
    outputQueue.enqueue(operator);
  }
  console.log("hello from end");
  outputQueue.printQueue();

  // Loop over outputQueue and turn it into outputString
  let outputString = "";
  for (const token of outputQueue) {
    outputString += token + " ";
  }
  return outputString.trim();
}
