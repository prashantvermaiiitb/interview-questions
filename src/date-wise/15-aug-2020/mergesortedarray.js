/*
SHELL SORT...

Given two sorted arrays arr1[] and arr2[] in non-decreasing order with size n and m. 
The task is to merge the two sorted arrays into one sorted array (in non-decreasing order).

Note: Expected time complexity is O((n+m) log(n+m)). DO NOT use extra space.  
We need to modify existing arrays as following.

Input: arr1[] = {10};
       arr2[] = {2, 3};
Output: arr1[] = {2}
        arr2[] = {3, 10}  

Input: arr1[] = {1, 5, 9, 10, 15, 20};
       arr2[] = {2, 3, 8, 13};
Output: arr1[] = {1, 2, 3, 5, 8, 9}
        arr2[] = {10, 13, 15, 20} 
Input:
First line contains an integer T, denoting the number of test cases. 
First line of each test case contains two space separated integers X and Y, 
denoting the size of the two sorted arrays. Second line of each test case contains X space separated integers,
denoting the first sorted array P. Third line of each test case contains Y space separated integers,
denoting the second array Q.

Output:
For each test case, print (X + Y) space separated integer representing the merged array.

Constraints:
1 <= T <= 100
1 <= X, Y <= 5*104
0 <= arr1i, arr2i <= 109

Example:
Input:
2
4 5
1 3 5 7
0 2 6 8 9
2 3
10 12
5 18 20

Output:
0 1 2 3 5 6 7 8 9
5 10 12 18 20

Explanation:
Testcase 1: After merging two non-decreasing arrays, we have, 0 1 2 3 5 6 7 8 9.

*/

function nextGap(gap) {
  if (gap <= 1) return 0; //at this step both the array are being sorted now
  return Math.floor(gap / 2) + (gap % 2); //interval defining
}

function merge(array1, array2, n, m) {
  let i,
    j,
    gap = n + m,
    tmp;
  console.log(`Before start gap is `, gap);
  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
    console.log(`After start gap is `, gap);
    /**
     * Do the shell sort in the array-1
     */
    for (i = 0; i + gap < n; i++) {
      if (array1[i] > array1[i + gap]) {
        tmp = array1[i];
        array1[i] = array1[i + gap];
        array1[i + gap] = tmp;
      }
    }
    /**
     * Perform shell sort on the array -1 and array -2 combined
     * gap-n assumes value of j to be on the element present in array2.
     * 0 means gap as covered all the elements in the array1.
     */
    for (j = gap > n ? gap - n : 0; i < n && j < m; i++, j++) {
      if (array1[i] > array2[j]) {
        tmp = array1[i];
        array1[i] = array2[j];
        array2[j] = tmp;
      }
    }
    /**
     * Do the shell sort in array-2
     * provided J has not reached the limit because of previous operation.
     */
    if (j < m) {
      for (j = 0; j + gap < m; j++) {
        if (array2[j] > array2[j + gap]) {
          tmp = array2[j];
          array2[j] = array2[j + gap];
          array2[j + gap] = tmp;
        }
      }
    }
  }
}

let array1 = [1, 3, 5, 7];
let array2 = [0, 2, 6, 8, 9];
merge(array1, array2, array1.length, array2.length);

console.log(array1);
console.log(array2);

console.log(array1.concat(array2));
