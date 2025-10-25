import { binarySearch, isArraySorted } from "./binarysearch.js";
import { linearSearch } from "./linearsearch.js";

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

// binarySearch(34, values, true);

// console.log(linearSearch(33, values));

console.log(isArraySorted([21, 22, 23, 22, 27, 28, 29, 31, 32, 34, 35]));
