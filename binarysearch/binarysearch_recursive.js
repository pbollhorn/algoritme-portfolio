// To run the test for this function run: "npx mocha test_recursive.js"
export function binarySearchRecursive(
  searchFor,
  values,
  startIndex,
  endIndex,
  iterations
) {
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const middleValue = values[middleIndex];
  console.log(middleIndex);
  console.log(middleValue);

  if (startIndex > endIndex) {
    console.log("Failure");
    return -1;
  }

  if (middleValue === searchFor) {
    console.log("Success, middleIndex: " + middleIndex);
    return middleIndex;
  }

  if (middleValue > searchFor) {
    console.log("middleValue > searchFor");
    startIndex = startIndex;
    endIndex = middleIndex - 1;
  }

  if (middleValue < searchFor) {
    console.log("middleValue < searchFor");
    startIndex = middleIndex + 1;
    endIndex = endIndex;
  }

  return binarySearchRecursive(searchFor, values, startIndex, endIndex, 666);
}

// Testing with an array of 11 numbers in sorted order
const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

const result = binarySearchRecursive(24, values, 0, 10, 666);
console.log("THE RESULT IS: " + result);
