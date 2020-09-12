/**
 * Is Binary Number Multiple of 3
 * * Given a binary number, Find, if given binary number is a multiple of 3.
 * The given number can be big upto 2^10000. It is recommended to finish the task
 * using one traversal of input binary string.
 *
 * Example 1:
 *
 * Input: S = "011"
 * Output: 1
 * Explanation: "011" decimal equivalent
 * is 3, which is divisible by 3.
 * ​Example 2:
 *
 * Input: S = "100"
 * Output: 0
 * Explanation: "100" decimal equivalent
 * is 4, which is not divisible by 3.
 * Your Task:
 * You don't need to read input or print anything. Your task is to complete the
 * function isDivisible() which takes the string s as inputs and returns 1 if the given number
 * is divisible by 3 otherwise 0.
 *
 * Expected Time Complexity: O(|S|)
 * Expected Auxiliary Space: O(1)
 *
 * Constraints:
 * 1 ≤ |S| ≤ 105
 */
var power = require("../utils/math/power");
/**
 * Convert the binary in decimal
 * then check the divisibility by 3
 * Get the string
 * convert in array
 * reverse it
 * multiply the numbers based on index
 * reduce the array
 * divide it by 3
 */
function approach1(input) {
  let number = input
    .split("")
    .reverse()
    .map(function (value, index) {
      return value * power(2, index);
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });
  console.log(`number is..`, number);
  return number % 3 == 0;
}

/**
 * Take the input string
 * read it in reverse manner
 * in-case of 1 at the position we have to calculate the sum
 * Toggle the formation of x by 1 or 2 or 1 like that
 * if some of all the digit is divisible by 3
 * @param {*} input
 */
function approach2(input) {
  var sum = 0,
    x = 1;
  for (var i = input.length - 1; i >= 0; i--) {
    // if (input.charCodeAt(i) - 48 == 1) {
    if (input.charAt(i) == 1) {
      sum = (sum + x) % 3;
    }
    x = (x * 2) % 3;
  }

  if (sum == 0) return true;
  return false;
}
/**
 * if the difference of (sum of the odd bit set) and (sum of the even bit) is divisble by 3 number is divisble by 3
 * This is applicable to all the numbers say for 11 you can calculate the same
 */
function approach3(input) {
  let oddSum = 0,
    evenSum = 0;
  for (var i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
      evenSum += parseInt(input[i]); //input.charCodeAt(i);
    } else {
      oddSum += parseInt(input[i]); //input.charCodeAt(i);
    }
  }
  //   console.log(`evenSum .. ${evenSum}`);
  //   console.log(`oddSum .. ${oddSum}`);
  return (oddSum - evenSum) % 3 == 0;
}

console.log(`1- Is number divisible by 3 `, approach1("011"));
console.log(`2- Is number divisible by 3 `, approach2("011"));
console.log(`3- Is number divisible by 3 `, approach3("011"));

console.log(`1- Is number divisible by 3 `, approach1("11101111"));
console.log(`2- Is number divisible by 3 `, approach2("11101111"));
console.log(`3- Is number divisible by 3 `, approach3("11101111"));

// console.log(`Is number divisible by 3 `, approach1(10000));
// console.log(`Is number divisible by 3 `, approach1(1001));
// console.log(`Is number divisible by 3 `, approach1(100001));
