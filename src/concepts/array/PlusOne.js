function plusOne(digits) {
    let len = digits.length;
    //isNaN check 
    let tmp = digits[len - 1];
    let sum = Number(tmp) + 1;

    if (sum === 10) {
        //need to loop through and update the remaining characters
        digits[len - 1] = 0; // last digit will be 0
        for (let i = len - 2; i >= 0; i--) {
            let tmp = digits[i] + 1;
            if (tmp === 10) {
                digits[i] = 0;
            } else {
                digits[i] = tmp;
                break;
            }
        }
        if (digits[0] === 0) { //we have got 0 at the most significant Bit
            digits.splice(0, 0, 1);
        }
    } else {
        digits[len - 1] = sum; // copy the sum in the last character
    }
    return digits;
}

console.log(plusOne([1, 2, 3, 4])); //1235
console.log(plusOne([1, 2])); //13
console.log(plusOne([0, 0])); //01
console.log(plusOne([0, 2])); //03
console.log(plusOne([1])); //2
console.log(plusOne([0])); //1

console.log()

console.log(plusOne([1, 2, 3, 9])); //1240
console.log(plusOne([1, 9])); //20
console.log(plusOne([0, 9])); //10
console.log(plusOne([9])); //0
console.log(plusOne([9, 9, 9, 9, 9])); //100000