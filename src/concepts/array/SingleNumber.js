function SingleNumberWithHashTable(nums) {
    let myMap = new Map();
    for (i = 0; i < nums.length; i++) {
        myMap.set(nums[i], myMap.get(nums[i]) ? (myMap.get(nums[i]) + 1) : 1)
    }
    // console.log(myMap);
    for (let [key, value] of myMap) {
        if (value == 1) {
            return key;
        }
    }
    return -1;
}

function SingleNumber2(nums) {
    let a = 0;
    // console.log(nums.length)
    for (let i = 0; i < nums.length; i++) {
        // console.log(i);
        a ^= nums[i];
        // console.log(a);
    }
    return a;
}

function SingleNumber(nums) {
    let a = nums;
    a.sort();
    let count = 1,
        i = 0,
        tmp = a[i];
    for (i = 1; i < a.length; i++) {
        if (count == 2) {
            tmp = a[i];
            count = 1;
        } else if (tmp === a[i]) {
            count++;
        }
    }
    //console.log(a[i]);
    return tmp;
}

// console.log(SingleNumberWithHashTable([4, 1, 2, 1, 2]));
// console.log(SingleNumber([4, 1, 2, 1, 2]));
console.log(SingleNumber2([4, 1, 2, 1, 2]));

// console.log(SingleNumberWithHashTable([4]));
// console.log(SingleNumber([4]));
// console.log(SingleNumber2([4]))