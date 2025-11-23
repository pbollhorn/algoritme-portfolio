import assert from "assert";
import { isArraySorted } from "./isarraysorted.js";

describe("Testing isArraySorted function", function () {
  describe("Positive tests", function () {
    it("Test case 1", function () {
      const result = isArraySorted([1, 2, 3, 4]);
      assert.equal(result, true);
    });
    it("Test case 2", function () {
      const result = isArraySorted([1, 2]);
      assert.equal(result, true);
    });

    it("Test case 3", function () {
      const result = isArraySorted([1]);
      assert.equal(result, true);
    });

    it("Test case 4", function () {
      const result = isArraySorted([]);
      assert.equal(result, true);
    });
  });

  describe("Negative tests", function () {
    it("Test case 5", function () {
      const result = isArraySorted([8, 7]);
      assert.equal(result, false);
    });

    it("Test case 6", function () {
      const result = isArraySorted([1, 3, 2]);
      assert.equal(result, false);
    });

    it("Test case 7", function () {
      const result = isArraySorted([1, 2, 3, 4, 100, 5, 6, 7]);
      assert.equal(result, false);
    });
  });
});
