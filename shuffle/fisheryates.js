export function fisherYates(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.round(Math.random() * i);
    // swap array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
}