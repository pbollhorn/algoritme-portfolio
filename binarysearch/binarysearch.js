export function binarySearch(searchFor, values, print = false) {
  if (print) {
    console.log("Starting binary search! :D");
    console.log("---------------------------");
  }

  let iterations;
  let found = false;
  let upperIndex = values.length - 1;
  let lowerIndex = 0;
  let middleIndex;

  for (iterations = 1; ; iterations++) {
    middleIndex = Math.floor((upperIndex + lowerIndex) / 2);
    let middleValue = values[middleIndex];

    if (print) {
      console.log("Iteration no.: " + iterations);
      console.log(`Upper index: ${upperIndex} value: ${values[upperIndex]}`);
      console.log(`Lower index: ${lowerIndex} value: ${values[lowerIndex]}`);
      console.log(`Middle index: ${middleIndex} value: ${middleValue}`);
      console.log("---------------------------");
    }

    if (searchFor == middleValue) {
      found = true;
      break;
    }

    if (lowerIndex == upperIndex) {
      break;
    }

    if (searchFor < middleValue) {
      lowerIndex = lowerIndex;
      upperIndex = middleIndex;
    }

    if (searchFor > middleValue) {
      lowerIndex = middleIndex;
      upperIndex = upperIndex;
    }
  }

  const returnObject = { found, index: middleIndex, iterations };

  if (print) {
    console.log("Finished the search with this result:");
    console.log(returnObject);
  }

  return returnObject;
}
