function searchDuplicates1(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j])
                return true;
        }
    }
    return false;
}

function searchDuplicates2(a) {
    a.sort();
    // console.log(a);
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] == a[i + 1]) return true;
    }
    return false;
}

function searchDuplicates(nums) {
    //create a map for the count 

    //create a set and see value getting added or not
    let mySet = new Set(),
        flag = false;
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            flag = true;
            break;
        }
        mySet.add(nums[i]);
    }
    return flag;
}

console.log(searchDuplicates([1, 2, 3, 1]));
console.log(searchDuplicates([1, 2, 3, 4]));
console.log(searchDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));


console.log(searchDuplicates1([1, 2, 3, 1]));
console.log(searchDuplicates1([1, 2, 3, 4]));
console.log(searchDuplicates1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log(searchDuplicates2([1, 2, 3, 1]));
console.log(searchDuplicates2([1, 2, 3, 4]));
console.log(searchDuplicates2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));