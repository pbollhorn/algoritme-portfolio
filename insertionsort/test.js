import sortTester from "../sorttester/sorttester.js";
import insertionSort from "./insertionsort.js";

const InsertionSort = (arr) => insertionSort(arr).array;
sortTester(InsertionSort);




