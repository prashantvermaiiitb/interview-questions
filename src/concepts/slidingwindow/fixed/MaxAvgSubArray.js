// Given an array consisting of n integers, find the contiguous subarray of
// given length k that has the maximum average value. And you need to output the
// maximum average value.

function MaxAvgSubArray(nums, k) {
    let i = 0,
        j = 0,
        len = nums.length,
        sum = 0,
        maxAvg = -Infinity;
    while (j < len) {
        sum += nums[j];
        if (j - i + 1 === k) {
            maxAvg = Math.max(maxAvg, sum);
            sum -= nums[i++];
        }
        j++;
    }
    return maxAvg / k;
}

console.log(MaxAvgSubArray([1, 2, 3, 4, 5], 3));
console.log(MaxAvgSubArray([-1, 9, 1, 10, 3, 42, 5], 3));