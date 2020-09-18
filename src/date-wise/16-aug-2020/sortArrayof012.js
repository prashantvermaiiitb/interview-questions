/**
 * Sort an array of 0s, 1s and 2s 
 * Given an array A of size N containing 0s, 1s, and 2s; you need to sort the array in ascending order.

Input:
The first line contains an integer 'T' denoting the total number of test cases. Then T testcases follow. Each testcases contains two lines of input. The first line denotes the size of the array N. The second lines contains the elements of the array A separated by spaces.

Output: 
For each testcase, print the sorted array.

Constraints:
1 <= T <= 500
1 <= N <= 106
0 <= Ai <= 2

Example:
Input :
2
5
0 2 1 2 0
3
0 1 0

Output:
0 0 1 2 2
0 0 1

Explanation:
Testcase 1: After segragating the 0s, 1s and 2s, we have 0 0 1 2 2 which shown in the output.

** For More Input/Output Examples Use 'Expected Output' option **
 * 
 * O(N) is the complexity of this algorithim.
 */

function sort(a, lowval = 0, midval = 1, highval = 2) {
  let low = 0,
    mid = 0,
    high = a.length - 1,
    temp;

  while (mid <= high) {
    if (a[mid] == lowval) {
      // if (a[low] != a[mid]) {
      temp = a[mid];
      a[mid] = a[low];
      a[low] = temp;
      // }
      low++;
      mid++;
    } else if (a[mid] == midval) {
      mid++;
    } else {
      // if (a[mid] != highval) {
      temp = a[high];
      a[high] = a[mid];
      a[mid] = temp;
      // }
      high--;
    }
  }
  return a;
}

console.log(`sorted array...`, sort([0, 2, 1, 2, 0]));
console.log(`sorted array...`, sort([0, 4, 2, 4, 0], 0, 2, 4));
console.log(
  `sorted array...`,
  sort([1, 5, 3, 5, 1, 5, 3, 1, 1, 3, 5], 1, 3, 5)
);
