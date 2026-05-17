/**
 * Unit tests for src/calculator.js
 *
 * Covers all seven operations:
 *   - add        (+)
 *   - subtract   (-)
 *   - multiply   (×)
 *   - divide     (÷)
 *   - modulo     (%)
 *   - power      (^)
 *   - squareRoot (√)
 *
 * Base examples taken from calc-basic-operations.png:
 *   2 + 3 = 5  |  10 - 4 = 6  |  45 * 2 = 90  |  20 / 5 = 4
 *
 * Extended examples taken from calc-extended-operations.png:
 *   5 % 2 = 1  |  2 ^ 3 = 8  |  √16 = 4
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

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

// ---------------------------------------------------------------------------
// Modulo (%)
// ---------------------------------------------------------------------------
describe("modulo", () => {
  // Base example from image
  test("5 % 2 = 1", () => expect(modulo(5, 2)).toBe(1));

  test("10 % 3 = 1", () => expect(modulo(10, 3)).toBe(1));
  test("returns zero when a is exactly divisible by b", () => expect(modulo(12, 4)).toBe(0));
  test("modulo with negative dividend", () => expect(modulo(-7, 3)).toBe(-1));
  test("modulo with negative divisor", () => expect(modulo(7, -3)).toBe(1));
  test("modulo of zero by a number gives zero", () => expect(modulo(0, 5)).toBe(0));
  test("modulo with decimal numbers", () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test("throws an error when divisor is zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
  test("throws an error when both are zero", () => {
    expect(() => modulo(0, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// ---------------------------------------------------------------------------
// Power / Exponentiation (^)
// ---------------------------------------------------------------------------
describe("power", () => {
  // Base example from image
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));

  test("2 ^ 8 = 256", () => expect(power(2, 8)).toBe(256));
  test("any number to the power of 1 is itself", () => expect(power(7, 1)).toBe(7));
  test("any number to the power of 0 is 1", () => expect(power(99, 0)).toBe(1));
  test("0 to the power of any positive number is 0", () => expect(power(0, 5)).toBe(0));
  test("negative base with even exponent gives positive", () => expect(power(-3, 2)).toBe(9));
  test("negative base with odd exponent gives negative", () => expect(power(-2, 3)).toBe(-8));
  test("fractional exponent (square root via power)", () => expect(power(9, 0.5)).toBeCloseTo(3));
  test("handles large exponents", () => expect(power(10, 6)).toBe(1_000_000));
});

// ---------------------------------------------------------------------------
// Square Root (√)
// ---------------------------------------------------------------------------
describe("squareRoot", () => {
  // Base example from image
  test("√16 = 4", () => expect(squareRoot(16)).toBe(4));

  test("√25 = 5", () => expect(squareRoot(25)).toBe(5));
  test("√0 = 0", () => expect(squareRoot(0)).toBe(0));
  test("√1 = 1", () => expect(squareRoot(1)).toBe(1));
  test("√2 is approximately 1.414", () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));
  test("√100 = 10", () => expect(squareRoot(100)).toBe(10));
  test("result squared equals original", () => expect(Math.pow(squareRoot(49), 2)).toBeCloseTo(49));

  // Edge cases
  test("throws an error for negative numbers", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });
  test("throws an error for large negative numbers", () => {
    expect(() => squareRoot(-100)).toThrow("Square root of a negative number is not allowed.");
  });
});
