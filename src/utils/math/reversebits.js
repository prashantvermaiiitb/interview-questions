/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    // console.log(n);
    // console.log(convertToBinary(n));
    return parseInt(convertToBinary(n), 2);
};

function convertToBinary(x) {
    let count = new Array(32).fill(0),
        i = 0;
    while (x > 0) {
        count[i++] = (x % 2);
        x = Math.floor(x / 2);
    }
    return count.join("");
}