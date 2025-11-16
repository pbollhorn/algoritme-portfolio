import Queue from "./queue.js";
import Stack from "./stack.js";

// Pseudo code for shunting yard algorithm:
// https://brilliant.org/wiki/shunting-yard-algorithm/

// Online converter: https://jsfiddle.net/7jh9f/2/

const precedence = {
  "^": 4,
  "*": 3,
  "/": 3,
  "+": 2,
  "-": 2,
};

const isLeftAssociative = {
  "^": false,
  "*": true,
  "/": true,
  "+": true,
  "-": true,
};

console.log("hello");
console.log(isLeftAssociative["^"]);
console.log(isLeftAssociative["*"]);

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

  // While there are tokens to be read
  while (inputQueue.size() > 0) {
    // Read a token
    const token = inputQueue.dequeue();

    // If token is a number add it to outputQueue
    if (typeof token === "number") {
      outputQueue.enqueue(token);
    }

    // If token is an operator
    if (
      token === "+" ||
      token === "-" ||
      token === "*" ||
      token === "/" ||
      token === "^"
    ) {
      while (
        operatorStack.size() > 0 &&
        operatorStack.peek() !== "(" &&
        (precedence[operatorStack.peek()] > precedence[token] ||
          (precedence[operatorStack.peek()] === precedence[token] &&
            isLeftAssociative[token]))
      ) {
        outputQueue.enqueue(operatorStack.pop());
      }
      operatorStack.push(token);
    }

    // If token is a left bracket
    if (token === "(") {
      operatorStack.push(token);
    }

    // If token is a right bracket
    if (token === ")") {
      while (operatorStack.peek() !== "(") {
        outputQueue.enqueue(operatorStack.pop());
      }
      // pop left bracket from stack and discard it
      operatorStack.pop();
    }
  }

  // While there are operators on the stack, pop them to the queue
  while (operatorStack.size() > 0) {
    outputQueue.enqueue(operatorStack.pop());
  }

  // Loop over outputQueue and turn it into outputString
  let outputString = "";
  for (const token of outputQueue) {
    outputString += token + " ";
  }
  return outputString.trim();
}
