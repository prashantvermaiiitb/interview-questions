/**
 * brute force
 * @param {*} nums 
 * @param {*} k 
 */
var rotate = function (nums, k) {
    let i = 0,
        len = nums.length,
        j = len - 1;

    if (k == 0 || k < 0 || len === 0 || len === 1) return nums;
    for (i = 0; i < k; i++) {
        let tmp = nums[len - 1];
        for (j = len - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[j] = tmp;
    }
    console.log(nums);
}

/**
 * using extra array
 * @param {*} nums 
 * @param {*} k 
 */
function rotate2(nums, k) {
    let a = [];
    for (let i = 0; i < nums.length; i++) {
        a[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = a[i];
    }
    console.log(nums);
}

function rotate3(nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let currentIndex = start,
            currentValue = nums[start];
        do {
            let nextIndex = (currentIndex + k) % nums.length,
                nextValue = nums[nextIndex];

            nums[nextIndex] = currentValue; // copied 1 in-place of 4
            currentValue = nextValue; //stored 4 in temporary
            currentIndex = nextIndex; //also shared the next Index

            count++;
        } while (start !== currentIndex);
    }

    console.log(nums);


    // let len = nums.length;
    // if (k == 0 || k < 0 || len === 0 || len === 1) return nums;

    // let i = 0,
    //     j = len - k;

    // while (j < len) {
    //     [nums[i], nums[j]] = [nums[j], nums[i]];
    //     i++;
    //     j++;
    // }
    // console.log(nums);

}
/**
 * Using reversal of the array
 * @param {*} nums 
 * @param {*} k 
 */
function rotate4(nums, k) {
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1)
    console.log(nums);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate2([1, 2, 3, 4, 5, 6, 7], 3);
rotate3([1, 2, 3, 4, 5, 6, 7], 3);
rotate4([1, 2, 3, 4, 5, 6, 7], 3);