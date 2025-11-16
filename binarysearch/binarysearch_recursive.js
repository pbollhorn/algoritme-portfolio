// To run the test for this function run: "npx mocha test_recursive.js"
export function binarySearchRecursive(
  searchFor,
  values,
  print = false,
  startIndex = 0,
  endIndex = values.length - 1,
  iterations = 0
) {
  // Only log if print is true
  const log = print ? console.log : () => {};

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const middleValue = values[middleIndex];
  log(middleIndex);
  log(middleValue);

  iterations++;

  if (startIndex > endIndex) {
    log("Failure");
    return -1;
  }

  if (middleValue === searchFor) {
    // console.log("Success, middleIndex: " + middleIndex);
    // return middleIndex;
    // returnObject in case of success
    const returnObject = { found: true, index: middleIndex, iterations };
    log(`Finished search for value=${searchFor} with this result:`);
    log(returnObject);
    return returnObject;
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

  return binarySearchRecursive(
    searchFor,
    values,
    print,
    startIndex,
    endIndex,
    iterations
  );
}

// Testing with an array of 11 numbers in sorted order
const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

const result = binarySearchRecursive(27, values, true);
