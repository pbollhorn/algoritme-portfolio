import assert from "assert";
import { isArraySorted } from "./isarraysorted.js";

describe("isArraySorted", function () {
  describe("xxxxxxx", function () {
    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([1, 2, 3, 4]);
        assert.equal(result, true);
      });
    });

    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([1, 2]);
        assert.equal(result, true);
      });
    });

    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([1]);
        assert.equal(result, true);
      });
    });

    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([]);
        assert.equal(result, true);
      });
    });

    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([8, 7]);
        assert.equal(result, false);
      });
    });

    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([1, 3, 2]);
        assert.equal(result, false);
      });
    });

    describe("yyyyyyyy", function () {
      it("zzzzzzz", function () {
        const result = isArraySorted([1, 2, 3, 4, 100, 5, 6, 7]);
        assert.equal(result, false);
      });
    });
  });
});
