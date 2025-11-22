// Swap based version of insertion sort
export function insertionSort(array, print = false) {
  const log = print ? console.log : () => {}; // Only log if print is true

  let iterations = 0;

  log("Starting insertion sort on this array:");
  log(array);
  log("---------------------------");

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      iterations++;

      // swap array[j] and array[j-1]
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      log(`Iteration no.: ${iterations}`);
      log(`i: ${i}, j: ${j}`);
      log(array);
      log("---------------------------");
    }
  }

  return { array, iterations, sorted: true };
}
