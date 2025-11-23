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

//parseExpression læser en inputString og returnerer en inputQueue
function parseExpression(inputString) {
  const inputQueue = new Queue();
  for (const element of inputString.split(" ")) {
    if (isNaN(element)) {
      // element er en operation
      inputQueue.enqueue(element);
    } else {
      // element er et tal
      inputQueue.enqueue(Number(element));
    }
  }
  return inputQueue;
}

export default function shunting(inputString) {
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
        // TODO: Does this really have to look so complicated?
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

  let outputString = [...outputQueue].join(" ");
  return outputString;
}
