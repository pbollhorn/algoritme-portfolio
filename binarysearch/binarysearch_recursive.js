// This is the binarySearchRecursive function
// Command to run tests for this function: npx mocha test_recursive.js
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

  if (startIndex > endIndex) {
    // returnObject in case of failure
    const returnObject = { found: false, index: -1, iterations };
    log(`Finished search for value=${searchFor} with this result:`);
    log(returnObject);
    return returnObject;
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const middleValue = values[middleIndex];
  iterations++;

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
    startIndex = startIndex;
    endIndex = middleIndex - 1;
  }

  if (middleValue < searchFor) {
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
