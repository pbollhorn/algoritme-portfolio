import assert from "assert";
import shuntingYard from "./shuntingyard.js";
import rpnCalculator from "./rpncalculator.js";

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
    it("Øvelse 7", function () {
      const result = shuntingYard("3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3");
      assert.equal(result, "3 4 2 * 1 5 - 2 3 ^ ^ / +");
    });
  });

  describe("Other tests", function () {
    it("Test A", function () {
      const result = shuntingYard("2 + 3 * 4");
      assert.equal(result, "2 3 4 * +");
    });
    it("Test B", function () {
      const result = shuntingYard("2");
      assert.equal(result, "2");
    });
    it("Test C", function () {
      const result = shuntingYard("85.117 - 31.09");
      assert.equal(result, "85.117 31.09 -");
    });
  });
});

describe("Testing RPN Calculator", function () {
  describe("Tests from 'Regneøvelser med RPN'", function () {
    it("Øvelse 1", function () {
      const result = rpnCalculator("85 31 -");
      assert.equal(result, 54);
    });
    it("Øvelse 2", function () {
      const result = rpnCalculator("3 4 5 2 - * +");
      assert.equal(result, 15);
    });
    it("Øvelse 4", function () {
      const result = rpnCalculator("5 9 + 4 /");
      assert.equal(result, 3.5);
    });
    it("Øvelse 5", function () {
      const result = rpnCalculator("12 3 + 7 9 + *");
      assert.equal(result, 240);
    });
  });
});
