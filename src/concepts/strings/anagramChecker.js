/**
 * sorting the strings and then compare them as needed
 * @param {*} s 
 * @param {*} t 
 */
function anagramChecker(s, t) {
    if (s.length !== t.length) return false;
    s = s.split('').sort().join('').toLowerCase();
    console.log(s);
    t = t.split('').sort().join('').toLowerCase();
    console.log(t);
    return s == t;
}

/**
 * using the character array for the resolution
 * @param {*} s 
 * @param {*} t 
 */
function anagramChecker2(s, t) {
    // console.log(s, t);
    let counter = new Array(26).fill(0);
    if (s.length !== t.length) return false;
    let sindex, tindex;
    for (let i = 0; i < s.length; i++) {
        sindex = s.charCodeAt(i) - 97;
        counter[sindex] += 1;
        // console.log(sindex, '  ', counter);

        tindex = t.charCodeAt(i) - 97;
        counter[tindex] -= 1;
        // console.log(tindex, '  ', counter);
    }
    // console.log(counter);
    for (let i in counter) {
        if (counter[i] != 0) {
            return false;
        }
    }
    return true;
}

/**
 * Using hash map for storing the occurrences for the characters in the string
 * @param {*} s 
 * @param {*} t 
 */
function anagramChecker1(s, t) {

}

console.log(anagramChecker('anagram', 'nagaram'));
console.log(anagramChecker2('anagram', 'nagaram'));

console.log(anagramChecker('rat', 'car'));
console.log(anagramChecker2('rat', 'car'));