export function binarySearch(searchFor, values, printOutput = false) {
  if (printOutput) {
    console.log("Starting binary search! :D");
    console.log("---------------------------");
  }

  let iterations;
  let found = false;
  let upperIndex = values.length - 1;
  let lowerIndex = 0;
  let middleIndex;

  for (iterations = 1; ;iterations++) {
    middleIndex = Math.floor((upperIndex + lowerIndex) / 2);
    let middleValue = values[middleIndex];

    if (printOutput) {
      console.log("iteration no.: " + iterations);
      console.log("upperIndex: " + upperIndex);
      console.log("lowerIndex: " + lowerIndex);
      console.log("middleIndex: " + middleIndex);
      console.log("middleValue: " + middleValue);
      console.log("---------------------------");
    }

    if (searchFor == middleValue) {
      found = true;
      break;
    }

    if(lowerIndex == upperIndex) {
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

  if (printOutput) {
    console.log(returnObject);
  }

  return returnObject;
}

// Function that checks if an array is sorted
export function isArraySorted(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let current = values[i];
    let next = values[i + 1];
    if (current > next) return false;
  }

  return true;
}
