// Function that merges two sorted arrays into a single sorted array
// Input:
// - arrayA (assumed to be sorted)
// - arrayB (assumed to be sorted)
// Output:
// - arrayC
export function merge(arrayA, arrayB) {
  const arrayC = [];

  // Loop until either arrayA or arrayB is empty
  while (arrayA.length > 0 && arrayB.length > 0) {
    const A = arrayA.shift();
    const B = arrayB.shift();

    if (A < B) {
      arrayC.push(A);
      arrayC.push(B);
    } else {
      arrayC.push(B);
      arrayC.push(A);
    }
  }

  // Loop until arrayA is empty
  while (arrayA.length > 0) {
    const A = arrayA.shift();
    arrayC.push(A);
  }

  // Loop until arrayB is empty
  while (arrayB.length > 0) {
    const B = arrayB.shift();
    arrayC.push(B);
  }

  return arrayC;
}
