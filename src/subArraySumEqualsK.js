// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let len = nums.length,
    sum = k,
    delta,
    subArrayCount = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] > sum) {
      continue;
    }
    delta = sum - nums[i]; // remaining sum
    if (delta === 0) {
      subArrayCount++;
      continue;
    }else if(delta )
    // console.log(sum,delta);
    for (let j = i + 1; j < len; j++) {
      // console.log('delta before-',delta,nums[j]);
      // console.log(delta < nums[j]);
      if (delta < nums[j]) continue;
      delta = delta - nums[j];
      // console.log(7823823);
      // console.log(delta);
      if (delta === 0) {
        subArrayCount++;
        // break;
      }
    }
  }
  return subArrayCount;
};
console.log(subarraySum([1, 1, 1], 2)); //2
console.log(subarraySum([1, 2, 3], 3)); //2
console.log(subarraySum([1, -1, 0], 0)); //3
console.log(subarraySum([100, 1, 2, 3, 100, 1, 2, 3, 4], 3)); //4
