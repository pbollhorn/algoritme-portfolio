// import merge from "./merge.js";

let iterations = 0;

export default function mergeSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  if (array.length <= 1) {
    return array;
  }

  // Split array into arrayA and arrayB
  const middleIndex = Math.floor(array.length / 2);
  let arrayA = array.slice(0, middleIndex);
  let arrayB = array.slice(middleIndex);

  // Sort arrayA and arrayB using recursion
  arrayA = mergeSort(arrayA, print);
  arrayB = mergeSort(arrayB, print);

  return merge(arrayA, arrayB);
}

function merge(arrayA, arrayB) {
  const arrayC = [];

  // Loop until either arrayA or arrayB is empty
  while (arrayA.length > 0 && arrayB.length > 0) {
    iterations++;
    if (arrayA[0] < arrayB[0]) {
      arrayC.push(arrayA.shift());
    } else {
      arrayC.push(arrayB.shift());
    }
  }

  // Loop until arrayA is empty
  while (arrayA.length > 0) {
    iterations++;
    arrayC.push(arrayA.shift());
  }

  // Loop until arrayB is empty
  while (arrayB.length > 0) {
    iterations++;
    arrayC.push(arrayB.shift());
  }

  return arrayC;
}
