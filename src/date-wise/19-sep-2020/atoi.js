var power = require("../../utils/math/power");
/**
 * Convert String in integer
 * split()
 */
function atoi(input) {
  let len = input.length;
  input = input.split("").reverse().join("");
  let result = 0;
  for (let i = 0; i < len; i++) {
    // result += parseInt(input.charAt(i)) * power(10, i);
    result += (input.charAt(i) - "0") * power(10, i);
  }
  return result;
}

console.log(`atoi...`, atoi("234"));
console.log(`atoi...`, typeof atoi("234"));
