/**
 * Equilibrium point
 * Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs 
 * in the array. Equilibrium position in an array is a position such that the sum of elements before it is 
 * equal to the sum of elements after it.

Input:
The first line of input contains an integer T, denoting the number of test cases. Then T test cases follow. 
First line of each test case contains an integer N denoting the size of the array. Then in the next line are 
N space separated values of the array A.

Output:
For each test case in a new  line print the position at which the elements are at equilibrium if no equilibrium 
point exists print -1.

Constraints:
1 <= T <= 100
1 <= N <= 106
1 <= Ai <= 108

Example:
Input:
2
1
1
5
1 3 5 2 2

Output:
1
3

Explanation:
Testcase 1: Since its the only element hence its the only equilibrium point.
Testcase 2: For second test case equilibrium point is at position 3 as elements below it (1+3) = elements after it (2+2).
 
SINGLE LOOP
 */

 /**
  * single element = 0th index is the ans
  * take the sum of all the elements 
  * iterate again reduce the sum & compare with the leftsum which will be incremented as we go ahead.
  * @param {*} array 
  */
function equilibrium(array) {
  if (array.length == 1) return 0;
  let leftsum = 0,
    sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for (var j = 0; j < array.length; j++) {
    sum -= array[j];
    if (leftsum == sum) {
      return j;
    }
    leftsum += array[j];
  }
  return -1;
}

/**
 * sum the lower half
 * @param {*} array
 * @param {*} lowPtr
 */
function sumUp(array, lowPtr) {
  let sum = 0;
  for (var i = 0; i < lowPtr; i++) {
    sum += array[i];
  }
  return sum;
}

/**
 * sum the upper half
 * @param {*} array
 * @param {*} highPtr
 */
function sumLow(array, highPtr) {
  let sum = 0;
  for (var i = array.length - 1; i > highPtr; i--) {
    sum += array[i];
  }
  return sum;
}
/**
 * Sum the elements before and after the index
 * @param {*} array
 */
function approach2(array) {
  if (array.length == 1) {
    return 0;
  }
  for (var i = 1; i < array.length; i++) {
    if (sumUp(array, i) == sumLow(array, i)) {
      console.log(
        `Got a match for the some at index ... ${i} and value ${array[i]}`
      );
    }
  }
}

let array = [0, 1, 1, 1, 2, 3],
  index = equilibrium(array);
console.log(`Equilibrium index is at ... ${index} at value .. ${array[index]}`);
array = [0, 3, 1, 5, 2, 2];
index = equilibrium(array);
console.log(`Equilibrium index is at ... ${index} at value .. ${array[index]}`);

index = approach2(array);
// console.log(`Equilibrium index is at ... ${index} at value .. ${array[index]}`);
