import { merge } from "./merge.js";

export function mergeSort(array, print = false, iterations = 0) {
  const log = print ? console.log : () => {}; // Only log if print is true

  iterations++;

  if (array.length <= 1) {
    return {
      array: array,
      iterations: 1,
      sorted: true,
    };
  }

  const middleIndex = Math.floor(array.length / 2);
  let arrayA = array.slice(0, middleIndex);
  let arrayB = array.slice(middleIndex);

  const outputA = mergeSort(arrayA, print, iterations);

  const outputB = mergeSort(arrayB, print, iterations);

  iterations = outputA.iterations + outputB.iterations;

  const arrayC = merge(outputA.array, outputB.array);

  return {
    array: arrayC,
    iterations: iterations,
    sorted: true,
  };
}
