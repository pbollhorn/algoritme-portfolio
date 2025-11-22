import { merge } from "./merge.js";

export function mergeSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  if (array.length <= 1) {
    const returnObject = {
      array: array,
      iterations: 0,
      sorted: true,
    };
    return returnObject;
  }

  const middleIndex = Math.floor(array.length / 2);
  let arrayA = array.slice(0, middleIndex);
  let arrayB = array.slice(middleIndex);

  arrayA = mergeSort(arrayA, print).array;
  arrayB = mergeSort(arrayB, print).array;
  const arrayC = merge(arrayA, arrayB);

  const returnObject = {
    array: arrayC,
    iterations: 0,
    sorted: true,
  };
  return returnObject;
}
