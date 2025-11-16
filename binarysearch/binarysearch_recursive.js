// This is the binarySearchRecursive function
// Command to run tests for this function: npx mocha test_recursive.js
export function binarySearchRecursive(
  searchFor,
  values,
  print = false,
  lowerIndex = 0,
  upperIndex = values.length - 1,
  iterations = 0
) {
  // Only log if print is true
  const log = print ? console.log : () => {};

  // Base case in case of failure
  if (lowerIndex > upperIndex) {
    const returnObject = { found: false, index: -1, iterations };
    log(`Finished search for value=${searchFor} with this result:`);
    log(returnObject);
    return returnObject;
  }

  iterations++;
  const middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
  const middleValue = values[middleIndex];
  log(`Iteration no.: ${iterations}`);
  log(`Lower index: ${lowerIndex} value: ${values[lowerIndex]}`);
  log(`Upper index: ${upperIndex} value: ${values[upperIndex]}`);
  log(`Middle index: ${middleIndex} value: ${middleValue}`);
  log("---------------------------");

  // Base case in case of success
  if (middleValue === searchFor) {
    const returnObject = { found: true, index: middleIndex, iterations };
    log(`Finished search for value=${searchFor} with this result:`);
    log(returnObject);
    return returnObject;
  }

  // Recursive case
  if (middleValue > searchFor) {
    return binarySearchRecursive(
      searchFor,
      values,
      print,
      lowerIndex,
      middleIndex - 1,
      iterations
    );
  }
  if (middleValue < searchFor) {
    return binarySearchRecursive(
      searchFor,
      values,
      print,
      middleIndex + 1,
      upperIndex,
      iterations
    );
  }
}
