// test.js
const add = require('./index.js');
const assert = require('assert'); // Built-in Node module for testing

// Test Case 1
const result = add(2, 3);

if (result === 5) {
  console.log("✅ Test Passed: 2 + 3 = 5");
} else {
  console.error("❌ Test Failed: Expected 5, got " + result);
  process.exit(1); // Exit with error code 1 so GitHub Actions knows it failed
}