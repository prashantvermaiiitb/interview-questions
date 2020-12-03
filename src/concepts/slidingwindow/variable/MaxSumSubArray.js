// Given an array of n positive integers and a positive integer s, find the
// minimal length of a contiguous subarray of which the sum ≥ s. If there isn’t
// one, return 0 instead.

// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0

/**
 * Returning the pairs that has the sum = k
 * @param {*} nums
 * @param {*} expectedSum
 */
function maxSumSubArrayPairs(nums, expectedSum) {
  let i = 0,
    minSize = Infinity,
    maxSize = -Infinity,
    j = 0,
    currentSum = 0,
    result = []; //will store the pair for the starting / ending index

  currentSum += nums[0]; //take the initial sum

  while (j < nums.length) {
    // console.log("current sum...", currentSum, "j =", j, "nums[j]=", nums[j]);
    if (currentSum < expectedSum) {
      //expand the window
      //   console.log("expanding the window...");
      j++;
      //   console.log("adding ... ", nums[j]);
      currentSum += nums[j];
      //   console.log("current sum...", currentSum);
    } else if (currentSum > expectedSum) {
      //   console.log("shrinking the window...");
      //shrink the window
      currentSum = nums[i] < 0 ? currentSum + nums[i] : currentSum - nums[i];
      //   console.log("current sum..", currentSum, i, nums[j]);
      i++;
    } else {
      //condition match
      result.push({ si: i, spos: i + 1, ei: j, endpos: j + 1 });
      minSize = Math.min(minSize, j - i + 1);
      maxSize = Math.max(maxSize, j - i + 1);
      currentSum = currentSum - nums[i];
      i++; //do better by shrinking the window
    }
  }
  console.log(result, minSize, maxSize);
}

maxSumSubArrayPairs([1, 2, 3, 7, 5, 12], 12);
// maxSumSubArrayPairs([1, 2, 3, 7, 5, 12], 10);
//maxSumSubArrayPairs([-1, 0, 1, 8, -2, 3, 6], 6);
maxSumSubArrayPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
