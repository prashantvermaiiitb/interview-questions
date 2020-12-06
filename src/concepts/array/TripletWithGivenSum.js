// Find a triplet that sum to a given value

function approach1(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === sum) {
                    console.log('triplet is from approach#1', array[i], array[j], array[k]);
                    return {
                        i,
                        j,
                        k
                    };
                }
            }
        }
    }
}
// console.log('brute force approach ', approach1([12, 3, 4, 1, 6, 9], 24));
// console.log('brute force approach ', approach1([1, 4, 45, 6, 10, 8], 22));
approach1([12, 3, 4, 1, 6, 9], 24);
approach1([1, 4, 45, 6, 10, 8], 22);

function approach2(array, sum) {
    let tempSum = 0,
        i = 0,
        j = i + 1,
        k = array.length - 1,
        flag = false;
    array.sort(); //sorted the array
    tempSum = array[i] + array[j] + array[k];
    for (let i = 0; i < array.length - 2; i++) {
        j = i + 1;
        k = array.length - 1;

        while (j < k) {
            tempSum = array[i] + array[j] + array[k];
            if (tempSum === sum) {
                // console.log(array);
                console.log('triplet is from approach#2', array[i], array[j], array[k]);
                flag = true;
                break;
            } else if (tempSum < sum) {
                //increment small pointer
                j++;
            } else {
                //decrement the big pointer
                k--;
            }
        }
        if (flag) {

            return {
                i,
                j,
                k
            }
        }
    }

    return {};
}

// console.log('approach #2', approach2([12, 3, 4, 1, 6, 9], 24));
// console.log('approach #2', approach2([1, 4, 45, 6, 10, 8], 22));
approach2([12, 3, 4, 1, 6, 9], 24);
approach2([1, 4, 45, 6, 10, 8], 22);


function approach3(array, sum) {
    let curr_sum, s = new Set();
    for (let i = 0; i < array.length; i++) {
        curr_sum = sum - array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (s.has(curr_sum - array[j])) {
                console.log('triplet is ', array[i], array[j], curr_sum - array[j]);
                return true;
            }
            s.add(array[j]);
        }
    }
}

approach3([12, 3, 4, 1, 6, 9], 24);
approach3([1, 4, 45, 6, 10, 8], 22);