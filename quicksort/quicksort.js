// My implementation of Quick Sort
// The iterations variable counts number of times the quickSort function is called
let iterations = 0;

export default function quickSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  iterations++;

  log(`Iteration no.: ${iterations}`);
  log(`${array}`);
  log("---------------------------");

  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Set pivot to be middle element
  const middleIndex = Math.floor(array.length / 2);
  const pivot = array[middleIndex];

  // Split array into 3 subarrays:
  // - smaller than pivot
  // - equal to pivot
  // - larger than pivot
  let smaller = [];
  let equal = [];
  let larger = [];
  for (const element of array) {
    if (element < pivot) smaller.push(element);
    else if (element === pivot) equal.push(element);
    else if (element > pivot) larger.push(element);
  }

  // Sort subarrays using recursion
  smaller = quickSort(smaller, print);
  larger = quickSort(larger, print);

  return [...smaller, ...equal, ...larger];
}
