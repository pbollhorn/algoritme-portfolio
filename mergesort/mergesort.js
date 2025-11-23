import merge from "./merge.js";

let iterations = 0;

export default function mergeSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  if (array.length <= 1) {
    return array;
  }

  // Split array into part A and part B
  const middleIndex = Math.floor(array.length / 2);
  let arrayA = array.slice(0, middleIndex);
  let arrayB = array.slice(middleIndex);

  arrayA = mergeSort(arrayA, print);
  arrayB = mergeSort(arrayB, print);

  return merge(arrayA, arrayB).array;
}
