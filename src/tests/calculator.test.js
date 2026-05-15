/**
 * Unit tests for src/calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   - add      (+)
 *   - subtract (-)
 *   - multiply (×)
 *   - divide   (÷)
 *
 * Base examples taken from calc-basic-operations.png:
 *   2 + 3 = 5  |  10 - 4 = 6  |  45 * 2 = 90  |  20 / 5 = 4
 */

const { add, subtract, multiply, divide } = require("../calculator");

// ---------------------------------------------------------------------------
// Addition (+)
// ---------------------------------------------------------------------------
describe("add", () => {
  // Base example from image
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));

  test("adds two positive numbers", () => expect(add(10, 7)).toBe(17));
  test("adds a positive and a negative number", () => expect(add(10, -4)).toBe(6));
  test("adds two negative numbers", () => expect(add(-5, -3)).toBe(-8));
  test("adding zero returns the same number", () => expect(add(42, 0)).toBe(42));
  test("adds two zeros", () => expect(add(0, 0)).toBe(0));
  test("adds decimal numbers", () => expect(add(1.5, 2.5)).toBeCloseTo(4));
  test("adds large numbers", () => expect(add(1_000_000, 2_000_000)).toBe(3_000_000));
});

// ---------------------------------------------------------------------------
// Subtraction (-)
// ---------------------------------------------------------------------------
describe("subtract", () => {
  // Base example from image
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));

  test("subtracts two positive numbers", () => expect(subtract(9, 3)).toBe(6));
  test("result is negative when b > a", () => expect(subtract(3, 9)).toBe(-6));
  test("subtracts a negative number (adds)", () => expect(subtract(5, -3)).toBe(8));
  test("subtracts two negative numbers", () => expect(subtract(-4, -2)).toBe(-2));
  test("subtracting zero returns the same number", () => expect(subtract(7, 0)).toBe(7));
  test("subtracts decimals", () => expect(subtract(5.5, 2.5)).toBeCloseTo(3));
  test("same number minus itself equals zero", () => expect(subtract(99, 99)).toBe(0));
});

// ---------------------------------------------------------------------------
// Multiplication (×)
// ---------------------------------------------------------------------------
describe("multiply", () => {
  // Base example from image
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));

  test("multiplies two positive numbers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies positive and negative numbers", () => expect(multiply(5, -3)).toBe(-15));
  test("multiplies two negative numbers gives positive", () => expect(multiply(-4, -3)).toBe(12));
  test("multiplying by zero gives zero", () => expect(multiply(999, 0)).toBe(0));
  test("multiplying by one returns the same number", () => expect(multiply(8, 1)).toBe(8));
  test("multiplies decimals", () => expect(multiply(2.5, 4)).toBeCloseTo(10));
  test("multiplies large numbers", () => expect(multiply(1000, 1000)).toBe(1_000_000));
});

// ---------------------------------------------------------------------------
// Division (÷)
// ---------------------------------------------------------------------------
describe("divide", () => {
  // Base example from image
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));

  test("divides two positive numbers", () => expect(divide(15, 3)).toBe(5));
  test("divides resulting in a decimal", () => expect(divide(10, 4)).toBeCloseTo(2.5));
  test("divides a negative number by a positive", () => expect(divide(-12, 4)).toBe(-3));
  test("divides two negative numbers gives positive", () => expect(divide(-20, -4)).toBe(5));
  test("divides zero by a number gives zero", () => expect(divide(0, 5)).toBe(0));
  test("divides by one returns the same number", () => expect(divide(7, 1)).toBe(7));

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
  test("throws an error when dividing negative number by zero", () => {
    expect(() => divide(-5, 0)).toThrow("Division by zero is not allowed.");
  });
});
