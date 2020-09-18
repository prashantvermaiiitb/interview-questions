/**
 * Given an array Arr of N positive integers and another number X.
 * Determine whether or not there exist two elements in Arr whose sum is exactly X.
 * Example 1:
 *
 * Input:
 * N = 6, X = 16
 * Arr[] = {1, 4, 45, 6, 10, 8}
 * Output: Yes
 * Explanation: Arr[3] + Arr[4] = 6 + 10 = 16
 * Example 2:
 *
 * Input:
 * N = 5, X = 10
 * Arr[] = {1, 2, 4, 3, 6}
 * Output: Yes
 * Explanation: Arr[2] + Arr[4] = 4 + 6 = 10
 * Your Task:
 * You don't need to read input or print anything.
 * Your task is to complete the function hasArrayTwoCandidates() which takes
 * the array of integers arr, n and x as parameters and returns boolean denoting the answer.
 *
 * Expected Time Complexity: O(N*logN)
 * Expected Auxiliary Space: O(1)
 *
 * Constraints:
 * 1 ≤ N ≤ 105
 * 1 ≤ Arr[i] ≤ 105
 *
 */

var Mergesort = require("../utils/sorting/MergeSort");

function approach2(array, sum) {
  /**
   * first sort this array using mergesort  N(logN)
   * then use double pointers to have O(N) check
   * N + NlogN => 2NlogN => NlogN
   * This will also sort out the array as well so the index will also change 
   * so only retuning true will suffice here.
   */
  let mergeSort = new Mergesort(array);

  mergeSort.recursiveMergeSort();

  let lb = 0,
    ub = array.length - 1;
  while (lb < ub) {
    if (array[lb] + array[ub] == sum) {
      console.log(
        `Two indices are (${lb},${ub}) with value - (${array[lb]},${array[ub]}).`
      );
      return true;
    } else if (array[lb] + array[ub] < sum) {
      // means we have to raise the lower limit
      lb++;
    } else {
      //we have added too large item
      ub--;
    }
  }
}

/**
 * this is having O(N*2) as the complexity
 * @param {*} array
 * @param {*} sum
 */
function approach1(array, sum) {
  let delta,
    found = false;
  for (var i = 0; i < array.length; i++) {
    delta = sum - array[i];
    for (var j = i + 1; j < array.length; j++) {
      if (delta == array[j]) {
        found = true;
        break;
      }
    }
    if (found) {
      console.log(
        `Two indices are (${i},${j}) with value - (${array[i]},${array[j]}).`
      );
      found = false; //making flag false for the next search
    }
  }
}

approach1([1, 4, 45, 6, 10, 8, 8], 16);
approach2([1, 4, 45, 6, 10, 8, 8], 16);
