/**
 * Search in a Rotated Array
 *
 * Given a sorted and rotated array A of N distinct elements which is rotated at some point, and given an element K. The task is to find the index of the given element K in the array A.
 * Input:
 * The first line of the input contains an integer T, denoting the total number of test cases. Then T test cases follow. Each test case consists of three lines. First line of each test case contains an integer N denoting the size of the given array. Second line of each test case contains N space separated integers denoting the elements of the array A. Third line of each test case contains an integer K denoting the element to be searched in the array.
 *
 * Output:
 * Corresponding to each test case, output the index of the element found in the array.  If element is not present, then output -1.
 *
 * Constraints:
 * 1 ≤ T ≤ 100
 * 1 ≤ N ≤ 107
 * 0 ≤ Ai ≤ 108
 * 1 ≤ K ≤ 108
 *
 * Example:
 * Input:
 * 3
 * 9
 * 5 6 7 8 9 10 1 2 3
 * 10
 * 3
 * 3 1 2
 * 1
 * 4
 * 3 5 1 2
 * 6
 *
 * Output:
 * 5
 * 1
 * -1
 *
 * Explanation:
 * Testcase 1: 10 is found at index 5.
 * https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
 */

/**
 * 
 * Since it's a sorted array then we have to use the binary search for the optimised result.
 * using the binary search and finding the pivot first 
 * post that will be checking in which half this value will be present.

 * @param {*} array 
 * @param {*} lowerbound 
 * @param {*} upperbound 
 * @param {*} searchKey 
 */
function searchInRotatedArray(array, lowerbound, upperbound, searchKey) {
  /**
   * lowerbound is exceeding the upperbound return -1
   * searchKey is not present
   */
  if (lowerbound > upperbound) {
    return -1;
  }
  /**
   * check if the searchKey is the mid element of the resulting array
   * find the mid element
   */
  let mid = Math.floor((lowerbound + upperbound) / 2);
  if (array[mid] == searchKey) {
    return mid;
  }
  /**
   * Check whether lower half of the array is sorted.
   */
  if (array[lowerbound] <= array[mid]) {
    /* As this subarray is sorted, we can quickly check if key lies in half or other half */
    if (searchKey >= array[lowerbound] && searchKey <= array[mid]) {
      return searchInRotatedArray(array, lowerbound, mid - 1, searchKey);
    } else {
      return searchInRotatedArray(array, mid + 1, upperbound, searchKey);
    }
  } else {
    /**
     * check for the upper half sorted or not
     */
    if (searchKey >= array[mid] && searchKey <= array[upperbound]) {
      return searchInRotatedArray(array, mid + 1, upperbound, searchKey);
    } else {
      return searchInRotatedArray(array, lowerbound, mid - 1, searchKey);
    }
  }
}
let input = [4, 5, 6, 7, 0, 1, 2],
  lb = 0,
  ub = input.length - 1,
  searchKey = 3;
console.log(
  `Index of the input variable ... `,
  searchInRotatedArray(input, lb, ub, searchKey)
);

console.log(
  `Index of the input variable ... `,
  searchInRotatedArray(input, lb, ub, 7)
);
