#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition (+): adds two numbers together
 *   subtract   - Subtraction (-): subtracts the second number from the first
 *   multiply   - Multiplication (×): multiplies two numbers together
 *   divide     - Division (÷): divides the first number by the second
 *   modulo     - Modulo (%): returns the remainder of dividing the first by the second
 *   power      - Exponentiation (^): raises the first number to the power of the second
 *   squareRoot - Square Root (√): returns the square root of the first number
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3           → 8
 *   node calculator.js subtract 9 4      → 5
 *   node calculator.js multiply 3 7      → 21
 *   node calculator.js divide 10 2       → 5
 *   node calculator.js modulo 10 3       → 1
 *   node calculator.js power 2 8         → 256
 *   node calculator.js squareRoot 25     → 5
 */

// Addition (+): returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction (-): returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication (×): returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division (÷): returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Modulo (%): returns the remainder of a divided by b
// Throws an error if b is zero to prevent division by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation (^): returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root (√): returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Map of supported operation names to their functions
const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

// --- CLI entry point (only runs when executed directly, not when required) ---
if (require.main === module) {
  const [, , operation, num1Str, num2Str] = process.argv;
  const singleArgOps = new Set(["squareRoot"]);
  const supportedOps = "add, subtract, multiply, divide, modulo, power, squareRoot";

  if (!operation || num1Str === undefined) {
    console.error(`Usage: node calculator.js <${supportedOps}> <num1> [num2]`);
    process.exit(1);
  }

  if (!operations[operation]) {
    console.error(`Unknown operation "${operation}". Supported: ${supportedOps}`);
    process.exit(1);
  }

  if (!singleArgOps.has(operation) && num2Str === undefined) {
    console.error(`Operation "${operation}" requires two arguments.`);
    process.exit(1);
  }

  const a = parseFloat(num1Str);
  const b = num2Str !== undefined ? parseFloat(num2Str) : undefined;

  if (isNaN(a) || (b !== undefined && isNaN(b))) {
    console.error("Arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = singleArgOps.has(operation) ? operations[operation](a) : operations[operation](a, b);
    const expr = singleArgOps.has(operation) ? `${operation}(${a})` : `${a} ${operation} ${b}`;
    console.log(`${expr} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
