/**
 * Extra space is there in this solution
 * @param {*} nums 
 */
function moveZero(nums) {
    let result = [],
        count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else {
            result.push(nums[i]);
        }
    }
    while (count > 0) {
        result.push(0);
        count--;
    }
    return result;
}

/**
 * swapping the element.
 * @param {*} nums 
 */
function moveZero1(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            continue; //continue till we get the first 0
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                break;
            }
        }
    }
    console.log(nums);
}

/**
 * Moving the non-zero to the beginning of the array 
 * then fill up with the array
 * @param {*} nums 
 */
function moveZero3(nums) {
    let lastNonZeroFound = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFound++] = nums[i];
        }
    }

    for (let i = lastNonZeroFound; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums);

}

/**
 * swapping the elements
 * @param {*} nums 
 */
function moveZero3(nums) {
    let lastNonZeroFound = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFound], nums[i]] = [nums[i], nums[lastNonZeroFound]];
            lastNonZeroFound++;
        }
    }
    console.log(nums);

}


console.log(moveZero([0, 1, 0, 3, 12]))
moveZero1([0, 1, 0, 3, 12]);
moveZero3([0, 1, 0, 3, 12]);