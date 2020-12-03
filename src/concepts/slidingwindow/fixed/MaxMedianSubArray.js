// Given an array nums, there is a sliding window of size k which is moving from
// the very left of the array to the very right. You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. Your
// job is to output the median array for each window in the original array.

function InsertionSort(nums) {}

function remove(nums) {}

function findMaxMedianSubArray(nums, k) {
    let i = 0,
        j = 0,
        maxMedianArray = [],
        maxMedian = [];
    while (j < nums.length) {
        maxMedianArray.push(nums[j]);
        if (maxMedianArray.length === k) {
            maxMedianArray.sort((a, b) => a - b);
            maxMedian.push(maxMedianArray[Math.floor(k / 2)] * 0.5 + maxMedianArray[Math.floor(k - 1 / 2)] * 0.5);
            maxMedianArray.shift(); //remove the first
        }
        j++;
    }
    return maxMedian;
}

console.log(findMaxMedianSubArray([-9, 4, 6, 8, 2, 1, 0], 4))