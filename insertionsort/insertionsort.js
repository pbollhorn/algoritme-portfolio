export function insertionSort(array) {
  let i = 1;
  while (i < array.length) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      console.log("Starting inner loop");
      // swap A[j] and A[j-1]
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      // decrement j
      j = j - 1;
    }

    //increment i
    i = i + 1;
  }

  let iterations = 0;
  let sorted = false;

  return { array, iterations, sorted };
}
