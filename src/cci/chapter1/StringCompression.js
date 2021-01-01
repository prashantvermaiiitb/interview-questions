/**
 * String compression to be done
 * aabcccccaaa => a2b1c5a3
 */
function compressString(input) {
  let consecutiveCount = 0,
    output = "";
  for (let i = 0; i < input.length; i++) {
    consecutiveCount++;
    if (i + 1 > input.length || input.charAt(i) !== input.charAt(i + 1)) {
      output += input.charAt(i) + consecutiveCount;
      consecutiveCount = 0;
    }
  }
  console.log(`output ${output}`);
  return output.length < input.length ? output : input;
}

/**
 * there is a separate operation that can be done to calculate the length
 * of the StringBuffer by the same method so that output string size can
 * be made fixed.
 */

console.log(compressString("aabcccccaaa"));
console.log(compressString("aeaabycccwwweerrryyy"));
console.log(compressString("aarryyyeeetttttnnn"));
