export function quickSort(array, print = false) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const pivot = array[middleIndex];

  const smaller = [];
  const equal = [];
  const larger = [];

  for (const element of array) {
    if (element < pivot) smaller.push(element);
    else if (element > pivot) larger.push(element);
    else equal.push(element);
  }

  return [...quickSort(smaller), ...equal, ...quickSort(larger)];
}
