import assert from "assert";
import shunting from "./shunting.js";

describe("Shunting yard algorithm", function () {
  describe("testing the algorithm", function () {
    it("2 + 3 * 4", function () {
      const result = shunting("2 + 3 * 4");
      assert.equal(result, "2 3 4 * +");
    });
    it("85 - 31", function () {
      const result = shunting("85 - 31");
      assert.equal(result, "85 31 -");
    });
  });
});
