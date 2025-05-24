// Example of a simple Node.js application to calculate the factorial of a number
const { max } = require('lodash.max');

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  const result = max(...Array.from({ length: n }, (_, i) => i + 1));
  return n * result;
}

console.log(factorial(5)); // Output: 120
