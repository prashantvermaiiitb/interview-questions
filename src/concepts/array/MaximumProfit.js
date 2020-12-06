/**
 * Brute force approach
 * Recursive to find the proper solution the max profit at each step
 * @param {*} array 
 */
function calculateProfit_1(array, startIndex) {
    if (startIndex >= array.length) return 0;
    let max = 0;
    for (let i = startIndex; i < array.length; i++) {
        let maxProfit = 0;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let profit = calculateProfit_1(array, j + 1) + array[j] - array[i];
                if (maxProfit < profit) {
                    maxProfit = profit;
                }
            }
        }
        if (max < maxProfit) {
            max = maxProfit;
        }
    }
    return max;
}

/**
 * Considering the Peaks and Valley 
 * here we have to consider the valley and the immediate Peak after that
 * @param {*} array 
 */
function calculateProfit_2(array) {
    if (array.length === 0) return 0;
    let i = 0,
        maxProfit = 0,
        valley = array[0],
        peak = array[0];
    while (i < array.length - 1) { //because we are taking 1 more element in the condition
        while (i < array.length && array[i] >= array[i + 1]) { //heading towards valley
            i++;
        }
        valley = array[i];
        while (i < array.length && array[i] <= array[i + 1]) { //heading towards peak
            i++;
        }
        peak = array[i];
        maxProfit += peak - valley;
    }
    return maxProfit;
}

/**
 * Crawling over the slope to get the maximum profit
 * @param {*} array 
 */
function calculateProfit_3(array) {
    if (array.length === 0) return 0;
    let maxProfit = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            maxProfit += array[i] - array[i - 1];
        }
    }
    return maxProfit;
}

console.log('Profit earned 1...', calculateProfit_1([1, 7, 2, 3, 6, 7, 6, 7], 0));
console.log('Profit earned 2...', calculateProfit_2([1, 7, 2, 3, 6, 7, 6, 7]));
console.log('Profit earned 3...', calculateProfit_3([1, 7, 2, 3, 6, 7, 6, 7]));

console.log('Profit earned 1...', calculateProfit_2([7, 1, 5, 3, 6, 4], 0));
console.log('Profit earned 2...', calculateProfit_2([7, 1, 5, 3, 6, 4]));
console.log('Profit earned 3...', calculateProfit_3([7, 1, 5, 3, 6, 4]));