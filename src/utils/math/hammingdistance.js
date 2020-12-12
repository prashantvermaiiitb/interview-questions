/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let tmp = x ^ y;

    //converting in binary and counting number of 1
    // return getHammingDistance(tmp);
    let setBit = 0;
    while (tmp > 0) {
        setBit += tmp & 1;
        tmp >>= 1;
    }

    return setBit;


};
/**
 * converting binary and count the number of the set bits
 * @param {*} x 
 */
function getHammingDistance(x) {
    let count = 0;
    while (x > 0) {
        if (x % 2 == 1) {
            count++;
        }
        x = Math.floor(x / 2);
    }
    return count;
}