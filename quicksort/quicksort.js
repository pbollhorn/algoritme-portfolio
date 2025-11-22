export function quickSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Sets middle element to be pivot
  const middleIndex = Math.floor(array.length / 2);
  const pivot = array[middleIndex];

  // Split array into 3 subarrays:
  // - smaller than pivot
  // - larger than pivot
  // - equal to pivot
  const smaller = [];
  const larger = [];
  const equal = [];
  for (const element of array) {
    if (element < pivot) smaller.push(element);
    else if (element > pivot) larger.push(element);
    else equal.push(element);
  }

  // Sort subarrays using recursion
  const smallerSorted = quickSort(smaller, print);
  const largerSorted = quickSort(larger, print);

  // Return combined array
  return [...smallerSorted, ...equal, ...largerSorted];
}
