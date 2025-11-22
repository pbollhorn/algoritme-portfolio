export function quickSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Sets pivot to be middle element
  const middleIndex = Math.floor(array.length / 2);
  const pivot = array[middleIndex];

  // Split array into 3 subarrays:
  // - smaller than pivot
  // - equal to pivot
  // - larger than pivot
  const smaller = [];
  const equal = [];
  const larger = [];
  for (const element of array) {
    if (element < pivot) smaller.push(element);
    else if (element === pivot) equal.push(element);
    else if (element > pivot) larger.push(element);
  }

  // Sort subarrays using recursion
  const smallerSorted = quickSort(smaller, print);
  const largerSorted = quickSort(larger, print);

  // Return combined array
  return [...smallerSorted, ...equal, ...largerSorted];
}
