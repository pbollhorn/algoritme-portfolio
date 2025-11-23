// A tester of sort functions, to be used with any sort function "fun"
import assert from "assert";

export default function sortTester(fun) {
  describe(`Testing ${fun.name} function`, function () {
    it("Test case 1: Array with 10 elements", function () {
      const result = fun([5, 8, 2, 1, 0, 4, 3, 9, 7, 6]);
      assert.deepStrictEqual(result, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("Test case 2: Array with 2 elements", function () {
      const result = fun([-117, -119]);
      assert.deepStrictEqual(result, [-119, -117]);
    });

    it("Test case 3: Array with 1 elements", function () {
      const result = fun([42]);
      assert.deepStrictEqual(result, [42]);
    });
    it("Test case 3: Empty array", function () {
      const result = fun([]);
      assert.deepStrictEqual(result, []);
    });
    it("Test case 4: Array that is already sorted", function () {
      const result = fun([1, 2, 3]);
      assert.deepStrictEqual(result, [1, 2, 3]);
    });
    it("Test case 5: Array with duplicate elements", function () {
      const result = fun([3, 1, 2, 3, 4, 3, 5]);
      assert.deepStrictEqual(result, [1, 2, 3, 3, 3, 4, 5]);
    });
    it("Test case 7: Array with all elements the same", function () {
      const result = fun([7, 7, 7, 7, 7]);
      assert.deepStrictEqual(result, [7, 7, 7, 7, 7]);
    });
  });
}
