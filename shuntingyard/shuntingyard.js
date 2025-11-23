import Queue from "./queue.js";
import Stack from "./stack.js";

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

// parse an inputString to an inputQueue
function parseExpression(inputString) {
  const inputQueue = new Queue();
  for (const token of inputString.split(" ")) {
    if (isNaN(token)) {
      // token is an operation
      inputQueue.enqueue(token);
    } else {
      // token is a number
      inputQueue.enqueue(Number(token));
    }
  }
  return inputQueue;
}

export default function shuntingYard(inputString) {
  const inputQueue = parseExpression(inputString);
  const outputQueue = new Queue();
  const operatorStack = new Stack();

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

    // If token is a left parenthesis
    if (token === "(") {
      operatorStack.push(token);
    }

    // If token is a right parenthesis
    if (token === ")") {
      while (operatorStack.peek() !== "(") {
        outputQueue.enqueue(operatorStack.pop());
      }
      // pop left parenthesis from stack and discard it
      operatorStack.pop();
    }
  }

  // While there are operators on the stack, pop them to the queue
  while (operatorStack.size() > 0) {
    outputQueue.enqueue(operatorStack.pop());
  }

  let outputString = [...outputQueue].join(" ");
  return outputString;
}
