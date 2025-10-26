import { binarySearch } from "./binarysearch.js";

// Testing with an array of 11 numbers in sorted order
const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
console.log(values);
binarySearch(27, values, true);

// Testing with an array of 11 numbers which is unsorted
const unsorted = [35, 22, 23, 25, 21, 28, 29, 31, 32, 34, 27];
console.log("\n\n", unsorted);
binarySearch(27, unsorted, true);

// Testing with an array of all numbers from 1 to 100 in sorted order
let data = [];
for (let i = 1; i <= 100; i++) {
  data[i - 1] = i;
}
console.log("\n\n", data);
binarySearch(25, data, true);
