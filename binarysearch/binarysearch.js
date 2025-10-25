function binarySearch(searchFor, values) {
  console.log("Vi starter binary search! :D");

  let upperIndex = values.length - 1;
  let lowerIndex = 0;
  let middleIndex;

  let found = false;

  console.log("upperIndex: " + upperIndex);
  console.log("lowerIndex: " + lowerIndex);

  while (found == false) {
    
    middleIndex = Math.floor((upperIndex - lowerIndex) / 2);
    let middleValue = values[middleIndex];
    console.log("middleValue: " + middleValue);

    if (middleValue == searchFor) {
      found = true;
    }

    if (middleValue > searchFor) {
      upperIndex = upperIndex;
      lowerIndex = middleIndex;
    }


  }

  return middleIndex;
}

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

console.log("Found index: " + binarySearch(28, values));
