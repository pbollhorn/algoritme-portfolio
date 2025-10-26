// Function that checks if an array is sorted
export function isArraySorted(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let current = values[i];
    let next = values[i + 1];
    if (current > next) return false;
  }

  return true;
}
