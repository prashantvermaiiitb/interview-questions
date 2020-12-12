/**
 * will add the numbers to see if the sum is > 0
 * if it's then store the sum as the number 
 * if sum is less than 0 then make that as 0 
 * @param {*} nums 
 */
function maxSumOfSubArray(nums) {
    let max = -Infinity,
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (max < sum) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max;
}

console.log('maximum subarray sum is ', maxSumOfSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
console.log('maximum subarray sum is ', maxSumOfSubArray([-2147483647]));