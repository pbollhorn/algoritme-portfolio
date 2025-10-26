export function binarySearch(searchFor, values, print = false) {
  if (print) {
    console.log(`Starting binary search for value=${searchFor}`);
    console.log("---------------------------");
  }

  let found = false;
  let iterations = 0;
  let lowerIndex = 0;
  let upperIndex = values.length - 1;
  let middleIndex;

  while (lowerIndex <= upperIndex) {
    iterations++;

    middleIndex = Math.floor(upperIndex + lowerIndex) / 2;
    let middleValue = values[middleIndex];

    if (print) {
      console.log(`Iteration no.: ${iterations}`);
      console.log(`Lower index: ${lowerIndex} value: ${values[lowerIndex]}`);
      console.log(`Upper index: ${upperIndex} value: ${values[upperIndex]}`);
      console.log(`Middle index: ${middleIndex} value: ${middleValue}`);
      console.log("---------------------------");
    }

    if (middleValue == searchFor) {
      const returnObject = { found, index: middleIndex, iterations };
      if (print) {
        console.log(`Finished search for value=${searchFor} with this result:`);
        console.log(returnObject);
      }
      return returnObject;
    }

    if (middleValue > searchFor) {
      lowerIndex = lowerIndex;
      upperIndex = middleIndex - 1;
    }

    if (middleValue < searchFor) {
      lowerIndex = middleIndex + 1;
      upperIndex = upperIndex;
    }
  }

  const returnObject = { found, index: -1, iterations };
  if (print) {
    console.log(`Finished search for value=${searchFor} with this result:`);
    console.log(returnObject);
  }
  return returnObject;
}
