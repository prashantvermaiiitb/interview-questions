/*
Given an array of distinct integers. The task is to count all the triplets such that sum 
of two elements equals the third element.

Input:
The first line of input contains an integer T denoting the number of test cases. 
Then T test cases follow. Each test case consists of two lines. First line of each test case contains an 
Integer N denoting size of array and the second line contains N space separated elements.

Output:
For each test case, print the count of all triplets, in new line. If no such triplets can form, print "-1".

Constraints:
1 <= T <= 100
3 <= N <= 105
1 <= A[i] <= 106

Example:
Input:
2
4
1 5 3 2
3
3 2 7
Output:
2
-1

Explanation:
Testcase 1: There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5
*/
/**
 * Approach is to sort() the array
 * Leave the first elements so outer loop will run len-2 times (i< len-2)
 * run using i , j , k as the 3 pointers
 * inner loop will run from till length (k<len)
 * @param {*} array
 */

function countTriplets(array) {
  var len = array.length,
    tripletCount = 0;

  array.sort((a, b) => a - b); //sorting the array in the ascending order
  console.log(array);

  for (var i = 0; i < len - 2; i++) {
    let j = i + 1,
      k = j + 1;
    while (k < len) {
      if (array[i] + array[j] == array[k]) {
        console.log("---------------------------------");
        console.log(
          `value: ${array[i]} @ index->${i} + value: ${array[j]} @ index->${j} = value ${array[k]} @ index->${k}`
        );
        console.log("---------------------------------");
        tripletCount++;
        j++;
      } else if (array[i] + array[j] < array[k]) {
        j++;
        k--;
      }
      k++;
    }
  }
  if (tripletCount == 0) {
    return -1;
  } else {
    return tripletCount;
  }
}
console.log(`Number of triplets...`, countTriplets([1, 5, 3, 2]));
// console.log(`Number of triplets...`, countTriplets([9, 0, 3, 6]));
// console.log(`Number of triplets...`, countTriplets([45, 24, 5, 9, 0, 3, 6]));

console.log(`Number of triplets...`, countTriplets([30, 4, 3, 29, 33]));
