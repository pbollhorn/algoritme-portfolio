export function quickSort(array, print = false, iterations = 0) {
  const log = print ? console.log : () => {}; // Only log if print is true

  log(`Iteration no.: ${iterations}`);
  log(`${array}`);
  log("---------------------------");

  iterations++;

  // Base case
  if (array.length <= 1) {
    return { array, iterations, sorted: true };
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
  const smallerSorted = quickSort(smaller, print, iterations).array;
  const largerSorted = quickSort(larger, print, iterations).array;

  // Combine back into one array
  const combined = [...smallerSorted, ...equal, ...largerSorted];

  return { array: combined, iterations, sorted: true };
}
