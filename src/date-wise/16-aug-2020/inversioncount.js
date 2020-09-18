/**
 * Given an array of positive integers. The task is to find inversion count of array.

Inversion Count : For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then inversion count is 0. If array is sorted in reverse order that inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

Input:
The first line of input contains an integer T denoting the number of test cases. The first line of each test case is N, the size of array. The second line of each test case contains N elements.

Output:
Print the inversion count of array.

Constraints:
1 ≤ T ≤ 100
1 ≤ N ≤ 107
1 ≤ C ≤ 1018

Example:
Input:
1
5
2 4 1 3 5

Output:
3

Explanation:
Testcase 1: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
 */

function inversionCount(array) {
  let len = array.length,
    count = 0;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (array[i] > array[j] && i < j) {
        console.log(
          `Got a inversion at ...${i} and ${j} which is(${array[i]},${array[j]})`
        );
        count++;
      }
    }
  }
  return count;
}

console.log(`Inversion count ... `, inversionCount([2, 4, 1, 3, 5]));
console.log(
  `Inversion count ... `,
  inversionCount([12, 20, 23, 13, 32, 17, 90, 91, 222])
);
