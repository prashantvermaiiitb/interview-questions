/**
 * Minimum element address
 * @param {*} array 
 */
function findMinIndex(array) {
    let minIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
/**
 * Maximum element address
 * @param {*} array 
 */
function findMaxIndex(array) {
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

/**
 * finding minimum and maximum in the array
 * @param {*} nums 
 */
function swapMinMaxArray(nums) {
    let minIndex = findMinIndex(nums);
    let maxIndex = findMaxIndex(nums);
    // console.log(`before swapping @minIndex ${minIndex} : ${nums[minIndex]},
    // @maxIndex ${maxIndex} : ${nums[maxIndex]}`); [nums[minIndex],
    // nums[maxIndex]] = [nums[maxIndex], nums[minIndex]];
    return nums;
}

let input = [3, 41, 6, 7, 8, 9, -9];
console.log(input);
swapMinMaxArray(input);
console.log(input);