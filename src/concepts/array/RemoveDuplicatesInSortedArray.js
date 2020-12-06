// Remove Duplicates from Sorted Array
//brute force
function approach1(array) {
    console.log('Initial array ...', array);
    let deleteCount = 0,
        j;
    for (let i = 0; i < array.length; i++) {
        deleteCount = 0;
        for (j = i + 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                break;
            }
            deleteCount++;
            flag = true;
        }
        // console.log('from ', i + 1, ' removing ', deleteCount);
        array.splice(i + 1, deleteCount);
    }
    // console.log(array);
    return array.length;
}

console.log(approach1([1, 1, 2]));
console.log(approach1([1, 1, 2, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 6]));
console.log(approach1([-1, -1, 0, 0, 0, 4, 4, 5, 6, 7, 8, 8, 8, 9, 10]));
console.log(approach1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * optimised solutions
 * Here fast pointer will move ahead and always try to get the cover the redundant number 
 * Here slow pointer will move only when new distinct character is being found 
 * @param {*} array 
 */
function approach2(array) {
    console.log('Initial array ...', array);
    let i = 0; //slow pointer
    for (let j = 1; j < array.length; j++) { //fast pointer
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}

console.log(approach2([1, 1, 2]));
console.log(approach2([1, 1, 2, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 6]));
console.log(approach2([-1, -1, 0, 0, 0, 4, 4, 5, 6, 7, 8, 8, 8, 9, 10]));
console.log(approach2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));