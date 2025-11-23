import assert from "assert";
import shuntingYard from "./shuntingyard.js";

describe("Testing Shunting Yard algorithm", function () {
  describe("Tests from 'Regneøvelser med RPN'", function () {
    it("Øvelse 1", function () {
      const result = shuntingYard("85 - 31");
      assert.equal(result, "85 31 -");
    });
    it("Øvelse 2", function () {
      const result = shuntingYard("3 + 4 * ( 5 - 2 )");
      assert.equal(result, "3 4 5 2 - * +");
    });
    it("Øvelse 4", function () {
      const result = shuntingYard("( 5 + 9 ) / 4");
      assert.equal(result, "5 9 + 4 /");
    });
    it("Øvelse 5", function () {
      const result = shuntingYard("( 12 + 3 ) * ( 7 + 9 )");
      assert.equal(result, "12 3 + 7 9 + *");
    });
    it("Øvelse 6", function () {
      const result = shuntingYard("23 ^ 2 - ( 13 * 9 ) + 5 / 7");
      assert.equal(result, "23 2 ^ 13 9 * - 5 7 / +");
    });
  });

  describe("Other tests", function () {
    it("Test A", function () {
      const result = shuntingYard("2 + 3 * 4");
      assert.equal(result, "2 3 4 * +");
    });
  });
});
