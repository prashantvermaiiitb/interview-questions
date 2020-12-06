function findIntersection(smallArray, largeArray, result) {
    // console.log('smaller array', smallArray);
    // console.log('largers array', largeArray);
    for (let i = 0; i < smallArray.length; i++) {
        let index = largeArray.indexOf(smallArray[i]);
        // console.log('index ', index);
        if (index !== -1) {
            result.push(smallArray[i]);
            // console.log('value at index ', i, 'in large array before replacement', largeArray[i]);
            largeArray[index] = -Infinity;
        }
        // console.log(lar∂geArray);
    }
}

function intersection(array1, array2) {
    let result = [];
    if (array2.length <= array1.length) {
        findIntersection(array2, array1, result);
    } else {
        findIntersection(array1, array2, result);
    }
    return result;
}


function intersection2(array1, array2) {
    array1.sort((a, b) => a - b);
    // console.log(array1);
    array2.sort((a, b) => a - b);
    // console.log(array2);
    let result = [];
    let aDex = 0,
        bDex = 0,
        cDex = 0,
        alen = array1.length,
        blen = array2.length;
    while (aDex < alen && bDex < blen) {
        if (array1[aDex] < array2[bDex]) {
            aDex++;
        } else if (array1[aDex] > array2[bDex]) {
            bDex++;
        } else {
            result[cDex++] = array1[aDex];
            aDex++;
            bDex++;
        }
    }
    return result;
}


console.log(intersection2([1, 2, 2, 1], [2, 2]));
console.log(intersection2([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection2([2, 1], [1, 1]));

console.log();


console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([2, 1], [1, 1]));