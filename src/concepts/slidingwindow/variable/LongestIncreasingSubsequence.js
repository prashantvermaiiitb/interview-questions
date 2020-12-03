/**
 * Easy
 * [1,3,5,4,7] is find the length of the longest increasing subsequence -> 3
 * [2,2,2,2,2] is 1
 */

/**
 * find the longest increasing subsequence in the array
 * @param {*} array
 */
function longestSubSequence(array) {
  let anchor = 0,
    result = 0;
  for (let j = 0; j < array.length; j++) {
    //array index out of bound errors.
    if (j != 0 && array[j - 1] >= array[j]) {
      anchor = j;
    }
    // console.log(`result `, result, " j ", j, " anchor ", anchor);
    result = Math.max(result, j - anchor + 1);
    // console.log(result);
  }
  return result;
}

console.log(longestSubSequence([1, 3, 5, 4, 7]));
console.log(longestSubSequence([2, 2, 2, 2, 2]));
console.log(longestSubSequence([-1, 0, 1, 2, -1, 2, 3, 4, 5]));
