function twoSum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                return [i, j];
            }
        }
    }
}

function twoSumHashMap(array, sum) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (!map.has(sum - array[i])) {
            map.set(array[i], i); //value -> index
        } else {
            return [map.get(sum - array[i]), i];
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6))

console.log();


console.log('[2, 7, 11, 15] for sum of 9', twoSumHashMap([2, 7, 11, 15], 9));
console.log('[3, 3] for sum of 6', twoSumHashMap([3, 3], 6));
console.log('[3, 2, 4] for the sum of 6', twoSumHashMap([3, 2, 4], 6));
console.log('[3, 3] for the sum of 6', twoSumHashMap([3, 3], 6))