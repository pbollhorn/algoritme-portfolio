export function quickSort(array, print = false) {
  if (array.length <= 1) {
    return array;
  }

//   if (array.length === 2) {
//     if (array[0] > array[1]) {
//       const temp = array[0];
//       array[0] = array[1];
//       array[1] = temp;
//     }
//     return array;
//   }

  // array.length > 2
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
