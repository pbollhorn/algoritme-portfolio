// Function that merges two sorted arrays into a single sorted array
// Input:
// - arrayA (assumed to be sorted)
// - arrayB (assumed to be sorted)
// - iterations (An optional iterations counter)
// Output:
// - arrayC
// - iterations
export function merge(arrayA, arrayB, iterations = 0) {
  const arrayC = [];

  // Loop until either arrayA or arrayB is empty
  while (arrayA.length > 0 && arrayB.length > 0) {
    iterations++;
    if (arrayA[0] < arrayB[0]) {
      arrayC.push(arrayA.shift());
    } else {
      arrayC.push(arrayB.shift());
    }
  }

  // Loop until arrayA is empty
  while (arrayA.length > 0) {
    iterations++;
    arrayC.push(arrayA.shift());
  }

  // Loop until arrayB is empty
  while (arrayB.length > 0) {
    iterations++;
    arrayC.push(arrayB.shift());
  }

  return { array: arrayC, iterations };
}
