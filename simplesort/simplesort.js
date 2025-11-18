export function simpleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let current = array[i];
    let next = array[i + 1];
    if (current > next) {
      swap(i, i+1);
    }
  }

  function swap(i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const values = [1, 8, 9, 4, 6, 7, 2, 5, 3];
simpleSort(values);
console.log(values);
