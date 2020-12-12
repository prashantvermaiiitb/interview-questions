/**
 * Number can not be divisble greater than >n/2 
 * @param {*} n 
 */
function isPrime(n) {
    let start = 2,
        limit = Math.floor(n / 2),
        flag = true;
    for (let i = start; i <= limit; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * for each of the number that are less than n
 * @param {*} n 
 */
function countPrime(n) {
    if (n <= 1) return 0;
    let primeCount = 0,
        primeArray = [];
    n--;
    while (n > 1) {
        if (isPrime(n)) {
            primeArray.push(n)
            primeCount++;
        }
        n--;
    }
    return primeCount;
}

/**
 * here we will be marking the multiples of 2 then 3 then 4 like that.
 * Also will be maintaining an array O(n)
 * if a number is divisible by any number greater than its SQRT(n) then it will be 
 * divisible by number smaller than it.
 */
function countPrime2(n) {
    let primeCount = new Array(n).fill(true);

    for (let i = 2; i * i < n; i++) {
        if (!primeCount[i]) continue;
        for (let j = i * i; j < n; j += i) { //multiples of i to be marked non-prime
            primeCount[j] = false;
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primeCount[i]) {
            count++;
        }
    }
    return count;

}

console.log(countPrime2(10));
console.log(countPrime2(20));
console.log(countPrime2(499979));

console.log();

console.log(countPrime(10));
console.log(countPrime(20));
console.log(countPrime(499979));