// Given a string, find the length of the longest substring T that contains at
// most k distinct characters.

// AAAAAEEHBIC => 8 

/**
 * here we are using the {} for storing the data
 * @param {*} input 
 * @param {*} k 
 */
function LongestCharacterSequence(input, k) {
    let i = 0,
        j = 0,
        storage = new Map(),
        maxLen = 0,
        len = input.length;
    for (j = 0; j < len; j++) {
        storage.set(input[j], j); //put the character in the map
        //condition breach
        if (storage.size > k) {
            while (i < j && storage.get(input[i]) !== i) {
                i++; //incremented the left bound till you reach j
            }
            storage.delete(input[i++]);
        }

        maxLen = Math.max(maxLen, j - i + 1);
    }
    return maxLen;
}

console.log(LongestCharacterSequence('AAAAAEEHBIC', 2))