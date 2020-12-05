//abbc - input
//cbabadcbbabbcbabaabccbabc
function formObject(array) {
    let tmpMap = {};
    for (let i = 0; i < array.length; i++) {
        if (!tmpMap[array[i]]) {
            tmpMap[array[i]] = 1;
        } else {
            tmpMap[array[i]] = tmpMap[array[i]] + 1;
        }
    }
    return tmpMap;
}

function compareObject(x, y) {
    let flag = true;
    for (var i in x) {
        if (!y[i] || y[i] !== x[i]) {
            flag = false;
            break;
        }
    }
    console.log(flag ? 'we got a match' : 'no match');
    return flag;
}

function searchAnagramInString(input, searchString) {
    const windowSize = searchString.length;
    const inputLength = input.length;
    let result = [],
        queue = [],
        anchor = 0,
        pointer = 0;
    let anagramMap = formObject(searchString);
    while (pointer < inputLength) {
        queue.push(input[pointer]);
        console.log('queue formed till now .. ', queue);
        if (pointer - anchor + 1 === windowSize) {
            console.log()
            console.log('window size reached ...');
            if (compareObject(anagramMap, formObject(queue))) {
                result.push({
                    si: anchor,
                    ei: pointer
                });
            }
            queue.shift();
            anchor++;
        }
        pointer++;
    }
    return result;
}

console.log(searchAnagramInString('cbabadcbbabbcbabaabccbabc', 'abbc'));
console.log(searchAnagramInString('eidbaooo', 'ab'));
console.log(searchAnagramInString('eidboaoo', 'ab'));