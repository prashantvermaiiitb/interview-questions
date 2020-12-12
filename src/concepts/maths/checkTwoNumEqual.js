/**
 * check if 2 numbers in different bases are equal or not
 */
function areTwoNumberEqual(num1, num2) {
    // console.log(convertToDecimal('0100', 2));
    // console.log(convertToDecimal('63F', 16));
    let a = convertToDecimal(num1, 2);
    console.log(`num1 : ${num1} is ${a}`);
    let b = convertToDecimal(num2, 16);
    console.log(`num2 : ${num2} is ${b}`);
    return a === b;
}

/**
 * convert the binary or hexadecimal to Decimal number
 * @param {*} nums 
 * @param {*} base 
 */
function convertToDecimal(nums, base) {
    if (base < 2 || (base > 10 && base !== 16)) {
        return -1;
    }
    let value = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let digit = parseInt(nums.charAt(i), base);
        if (digit < 0 || digit >= base) return -1;
        let exp = (nums.length - 1) - i;
        // console.log(digit, exp);
        value += digit * Math.pow(base, exp);
        // console.log(value);
    }
    return value;
}

function charToDigit(char, base) {
    if (char === null || (base < 2 || (base > 10 && base !== 16))) {
        return -1;
    }
    if (isNaN(char)) { //A to F
        let val = {
            'A': 10,
            'B': 11,
            'C': 12,
            'D': 13,
            'E': 14,
            'F': 15
        }
        return val[char] ? val[char] : -1; //char.toUpperCase().charCodeAt(0) - 65;
    } else {
        return char.toUpperCase().charCodeAt(0) - 48;
    }

}

console.log(areTwoNumberEqual('001', '63F'));
console.log(areTwoNumberEqual('10000', '10'));
console.log(areTwoNumberEqual('1000', '8'));