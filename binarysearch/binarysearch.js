export function binarySearch(searchFor, values, print = false) {
  if (print) {
    console.log(`Starting binary search for value=${searchFor}`);
    console.log("---------------------------");
  }

  let found = false;
  let iterations;
  let lowerIndex = 0;
  let upperIndex = values.length - 1;
  let middleIndex;

  for (iterations = 1; ; iterations++) {
    // Calculate middleIndex
    // Alternates between using floor and ceil to avoid endless loop
    middleIndex = (upperIndex + lowerIndex) / 2;
    if (iterations % 2) middleIndex = Math.floor(middleIndex);
    else middleIndex = Math.ceil(middleIndex);

    // Look up middle value
    let middleValue = values[middleIndex];

    if (print) {
      console.log(`Iteration no.: ${iterations}`);
      console.log(`Lower index: ${lowerIndex} value: ${values[lowerIndex]}`);
      console.log(`Upper index: ${upperIndex} value: ${values[upperIndex]}`);
      console.log(`Middle index: ${middleIndex} value: ${middleValue}`);
      console.log("---------------------------");
    }

    if (searchFor == middleValue) {
      found = true;
      break;
    }

    if (lowerIndex == upperIndex) {
      middleIndex = -1;
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
    console.log(`Finished search for value=${searchFor} with this result:`);
    console.log(returnObject);
  }

  return returnObject;
}
