export function quickSort(array, print = false) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const pivot = array[middleIndex];

  const smaller = [];
  const larger = [];
  const equal = [];
  

  // split array into 3 subarrays:
  // - smaller than pivot
  // - larger than pivot
  // - equal to pivot
  for (const element of array) {
    if (element < pivot) smaller.push(element);
    else if (element > pivot) larger.push(element);
    else equal.push(element);
  }

  const smallerSorted = quickSort(smaller);
  const largerSorted = quickSort(larger);

  // return combined array
  return [...smallerSorted, ...equal, ...largerSorted];
}
