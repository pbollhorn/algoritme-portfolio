export function linearSearch(searchFor, values) {
  for (let index = 0; index < values.length; index++) {
    if (values[index] == searchFor) {
      return { found: true, index, iterations: index + 1 };
    }
  }

  return { found: false, index: -1, iterations: values.length };
}
