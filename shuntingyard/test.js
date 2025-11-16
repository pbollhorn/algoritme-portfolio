import assert from "assert";
import shuntingyard from "./shuntingyard.js";

describe("Shunting yard algorithm", function () {
  describe("testing the algorithm", function () {
    it("Test case 0", function () {
      const result = shuntingyard("2 + 3 * 4");
      assert.equal(result, "2 3 4 * +");
    });
    it("Test case 1", function () {
      const result = shuntingyard("85 - 31");
      assert.equal(result, "85 31 -");
    });
    it("Test case 2", function () {
      const result = shuntingyard("3 + 4 * ( 5 - 2 )");
      assert.equal(result, "3 4 5 2 - * +");
    });
    it("Test case 4", function () {
      const result = shuntingyard("( 5 + 9 ) / 4");
      assert.equal(result, "5 9 + 4 /");
    });
    it("Test case 5", function () {
      const result = shuntingyard("( 12 + 3 ) * ( 7 + 9 )");
      assert.equal(result, "12 3 + 7 9 + *");
    });
  });
});
