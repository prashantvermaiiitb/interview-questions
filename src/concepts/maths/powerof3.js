var isPowerOfThree = function (n) {
    let i = 3;
    while (true) {
        if (n == i || n == 1) return true;
        if (n < i) return false;
        i = i * 3;
    }
};

function powerofthree(n) {
    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
}

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(0));


console.log(powerofthree(1));
console.log(powerofthree(27));
console.log(powerofthree(45));
console.log(powerofthree(9));
console.log(powerofthree(0));