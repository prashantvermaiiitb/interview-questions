// Given an array nums, there is a sliding window of size k which is moving from
// the very left of the array to the very right. You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. Your
// job is to output the median array for each window in the original array.

function remove(array, x) {
    let i = 0,
        len = array.length;
    //calculate the index till you reach end & x is greater than array[i]
    while (i < len && array[i] < x) {
        i++; //you will be on that index to be removed
    }
    console.log('element to be removed ', x, ' present @ index ', i);
    //move the elements from the end towards left with (length -1)
    //length -1 because last index will be copied in the previous one
    while (i < array.length - 1) {
        array[i] = array[i + 1];
        i++;
    }
    return array;
}

/**
 * Insertion sort to be applied on the almost sorted array
 * @param {*} array 
 * @param {*} x 
 */
function insert(array, x) {
    console.log('element to be inserted ', x);
    let i = array.length - 2; //1 element is being removed in the prior operation so overall length is decreased by 1
    while (i >= 0 && array[i] > x) {
        array[i + 1] = array[i];
        i--;
    }
    array[i + 1] = x;
    return array;
}

/**
 * find the median of each array 
 * @param {*} nums 
 * @param {*} k 
 */
function findMaxMedianSubArray(nums, k) {
    console.log('Input array', nums);
    let i = 0,
        j = 0,
        len = nums.length,
        result = [],
        leftMedian,
        rightMedian,
        sortedArray = [];
    //fill up the array
    for (j = 0; j < k; j++) {
        sortedArray.push(nums[j]);
    }
    // console.log('initial array ', sortedArray);
    sortedArray.sort((a, b) => a - b);
    // console.log('initial sorted array ', sortedArray);
    // console.log(Math.floor(k / 2))
    // console.log(Math.floor((k - 1) / 2))
    for (j = k; j <= len; j++) {

        leftMedian = sortedArray[Math.floor(k / 2)] * 0.5;
        rightMedian = sortedArray[Math.floor((k - 1) / 2)] * 0.5;
        result.push(leftMedian + rightMedian);
        // console.log('result ', result);
        if (j === len) break; //when windows are exhausted

        // console.log(sortedArray, result);
        console.log('result array...', result);
        sortedArray = remove(sortedArray, nums[j - k]); //remove the old number
        console.log(`updated sorted array after removal ..`, sortedArray);
        sortedArray = insert(sortedArray, nums[j]); //insert the next element
        console.log(`updated sorted array after insertion ..`, sortedArray);
        console.log('\n\n');

    }
    return result;
}

console.log(findMaxMedianSubArray([4, -9, 6, -8, 2, 10, 3], 3));