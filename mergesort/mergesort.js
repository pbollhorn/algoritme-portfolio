import { merge } from "./merge.js";

export function mergeSort(array, print = false, iterations = 0) {
  const log = print ? console.log : () => {}; // Only log if print is true

  if (array.length <= 1) {
    return {
      array: array,
      iterations: 1,
      sorted: true,
    };
  }

  const middleIndex = Math.floor(array.length / 2);
  const arrayA = array.slice(0, middleIndex);
  const arrayB = array.slice(middleIndex);

  const outputA = mergeSort(arrayA, print, iterations);
  const outputB = mergeSort(arrayB, print, iterations);
  const outputC = merge(outputA.array, outputB.array, iterations);

  return {
    array: outputC.array,
    iterations: outputA.iterations + outputB.iterations + outputC.iterations,
    sorted: true,
  };
}
