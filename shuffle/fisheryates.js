export function fisheryates(array) {
  console.log(array);
  for (let i = 1; i < array.length; i++) {
    const j = random(i);
    // swap(array[i], array[j]);
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
}

function random(max) {
  return Math.floor(Math.random() * max);
}

// TODO: Why does this not work
function swap(a, b) {
  const c = a;
  a = b;
  b = c;
}

fisheryates([1, 2, 3, 9999, 3333]);

const a = 5;
const b = 7;
swap(a, b);
console.log(a);
console.log(b);

console.log("Random: " + Math.random() * 10);
