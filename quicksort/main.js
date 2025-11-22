import { quickSort } from "./quicksort.js";

// const listA = [1, 3, 7, 8];
// const listB = [0, 2, 4, 5, 6, 9];
// const listC = merge(listA, listB);
// console.log(listC);

// const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

const list = [5, 8, 2, 1, 0, -1, 4, 3, 9, 7, 6, -17];
const result = quickSort(list, true);
console.log(result);
