// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3 Output: [3,3,5,5,6,7]

// Input: nums = [1], k = 1 Output: [1] Example 3:

// Input: nums = [1,-1], k = 1 Output: [1,-1] Example 4:

// Input: nums = [9,11], k = 2 Output: [11] Example 5:

// Input: nums = [4,-2], k = 2 Output: [4]

function MaxNumberInSubArray(nums, k) {
    let i = 0,
        j = 0,
        result = [],
        temp = [],
        len = nums.length;
    while (j < len) {
        temp.push(nums[j]);
        if (temp.length === k) {
            //condition met
            //get the max element
            result.push(temp.sort((a, b) => a - b)[k - 1]);
            temp.shift();
        }
        j++;
    }
    return result;
}

console.log(MaxNumberInSubArray([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(MaxNumberInSubArray([1], 1));
console.log(MaxNumberInSubArray([1, -1], 1));
console.log(MaxNumberInSubArray([9, 11], 2));
console.log(MaxNumberInSubArray([4, -2], 2));