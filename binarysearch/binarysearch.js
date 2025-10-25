export function binarySearch(searchFor, values) {
  console.log("Vi starter binary search! :D");

  let upperIndex = values.length - 1;
  let lowerIndex = 0;
  let middleIndex;
  let found = false;

  while (found == false) {
    middleIndex = Math.floor((upperIndex - lowerIndex) / 2);

    console.log("upperIndex: " + upperIndex);
    console.log("lowerIndex: " + lowerIndex);
    console.log("middleIndex: " + middleIndex);

    let middleValue = values[middleIndex];
    console.log("middleValue: " + middleValue);

    if (searchFor == middleValue) {
      found = true;
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

  return { found, index: middleIndex, iterations: -1 };
}