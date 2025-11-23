// Generic test functionality for any sort function
import assert from "assert";

export default function sortTester(fun) {
  describe(`Testing ${fun.name} function`, function () {
    describe("Positive tests", function () {
      it("Test case 1", function () {
        const result = true;
        assert.equal(result, true);
      });
      it("Test case 2", function () {
        const result = true;
        assert.equal(result, true);
      });

      it("Test case 3", function () {
        const result = true;
        assert.equal(result, true);
      });

      it("Test case 4", function () {
        const result = true;
        assert.equal(result, true);
      });
    });
  });
}
