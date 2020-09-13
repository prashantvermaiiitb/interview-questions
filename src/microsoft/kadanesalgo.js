/** 
 * Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

Input:
The first line of input contains an integer T denoting the number of test cases. 
The description of T test cases follows. The first line of each test case contains 
a single integer N denoting the size of array. The second line contains N space-separated 
integers A1, A2, ..., AN denoting the elements of the array.

Output:
Print the maximum sum of the contiguous sub-array in a separate line for each test case.

Constraints:
1 ≤ T ≤ 110
1 ≤ N ≤ 106
-107 ≤ A[i] <= 107

Example:
Input
2
5
1 2 3 -2 5
4
-1 -2 -3 -4
Output
9
-1

Explanation:
Testcase 1: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.

** For More Input/Output Examples Use 'Expected Output' option 
**/
function kandaneAlgo(array) {
  let sum = 0,
    max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

console.log(`maximum sub-array sum is ..${kandaneAlgo([1, 2, 3, -2, 5])}`);
console.log(`maximum sub-array sum is ..${kandaneAlgo([-1, -2, -3, -4])}`);
console.log(
  `maximum sub-array sum is ..${kandaneAlgo([
    1,
    2,
    3,
    -2,
    5,
    12,
    26,
    22,
    -22,
    27,
  ])}`
);
console.log(`maximum sub-array sum is ..${kandaneAlgo([-91, -2, 223, -2, 5])}`);
console.log(
  `maximum sub-array sum is ..${kandaneAlgo([-921, -23, 39, -27, 58])}`
);
