function uniqueNonRepeatingCharacter(s) {
    if (s.length === 0) return -1;
    // if (s.length == 1) return 0;
    let input = s;
    let i = 0,
        len = input.length,
        repeatingCharacter = [],
        isNonRepeatingFlag;
    for (i = 0; i <= len - 1; i++) {
        isNonRepeatingFlag = true;
        if (repeatingCharacter.includes(input.charAt(i))) {
            isNonRepeatingFlag = false;
            continue;
        }
        for (j = i + 1; j < len; j++) {
            // console.log(input.charAt(i), '  ', input.charAt(j));
            // console.log(input.charAt(i) !== input.charAt(j));
            if (input.charAt(i) !== input.charAt(j)) {
                continue;
            }
            // console.log('here after teh condition match', isNonRepeatingFlag);
            isNonRepeatingFlag = false;
            repeatingCharacter.push(input.charAt(j));
            // console.log('here after teh condition match', isNonRepeatingFlag);
            break;
        }
        // console.log('here outside teh condition match', isNonRepeatingFlag);
        if (isNonRepeatingFlag) {
            return i;
        }
    }
    return -1;
}

/**
 * implementing using hash table to have the linear time complexity
 * @param {*} s 
 */
function approach2(s) {
    let map = new Map();
    let count;
    for (let i = 0; i < s.length; i++) {
        count = 0;
        if (map.has(s.charAt(i))) {
            count = map.get(s.charAt(i));
        }
        count++;
        map.set(s.charAt(i), count);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i)) == 1) {
            return i;
        }
    }
    return -1;

}

console.log(uniqueNonRepeatingCharacter("leetcode"));
console.log(uniqueNonRepeatingCharacter("loveleetcode"));
console.log(uniqueNonRepeatingCharacter("cc"));
console.log(uniqueNonRepeatingCharacter('"aadadaad"'));

console.log();

console.log(approach2("leetcode"));
console.log(approach2("loveleetcode"));
console.log(approach2("cc"));
console.log(approach2('aadadaad'));