import assert from "assert";
import shunting from "./shunting.js";

describe("Shunting yard algorithm", function () {
  describe("testing the algorithm", function () {
    it("Test case 0", function () {
      const result = shunting("2 + 3 * 4");
      assert.equal(result, "2 3 4 * +");
    });
    it("Test case 1", function () {
      const result = shunting("85 - 31");
      assert.equal(result, "85 31 -");
    });
    it("Test case 2", function () {
      const result = shunting("3 + 4 * ( 5 - 2 )");
      assert.equal(result, "3 4 5 2 - * +");
    });
  });
});
