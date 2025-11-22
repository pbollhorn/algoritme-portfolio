import { mergeSort } from "./mergesort.js";
import { merge } from "./merge.js";

// const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
// const result = mergeSort(list, true);
// console.log(result);

const listA = [1, 3, 7, 8];
const listB = [0, 2, 4, 5, 6, 9];
const listC = merge(listA, listB);

console.log(listC);
