/** 
Question : Given an unsorted array A of size N of non-negative integers, 
find a continuous sub-array which adds to a given number S.

Input:
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow.
Each test case consists of two lines. The first line of each test case is N and S, 
where N is the size of array and S is the sum. 
The second line of each test case contains N space separated integers denoting the array elements.

Output:
For each testcase, in a new line, print the starting and ending positions(1 indexing) of 
first such occuring subarray from the left if sum equals to subarray, else print -1.

Constraints:
1 <= T <= 100
1 <= N <= 107
1 <= Ai <= 1010

Example:
Input:
2
5 12
1 2 3 7 5
10 15
1 2 3 4 5 6 7 8 9 10
Output:
2 4
1 5

Explanation :
Testcase1: sum of elements from 2nd position to 4th position is 12
Testcase2: sum of elements from 1st position to 5th position is 15
* 
*/

var printDesiredSequence = function (a, i, j) {
  var str = [];
  while (i <= j) {
    str.push(a[i]);
    i++;
  }
  return str.join(" ");
};
/**
 * 2 Loops are there outer / inner 
 * check for the delta = (expected sum - actual sum)
 * update the sum 
 * then check again for the sum again
 * @param {*} expectedSum 
 * @param {*} a 
 */
var subArraySum = function (expectedSum, a) {
  for (i = 0; i < a.length; i++) {
    var sum = 0,
      j = i;
    while (j < a.length) {
      //   console.log(`Current Sum is ... ${sum}`);
      //   console.log(`Current Delta is ... ${expectedSum - sum}`);
      //   console.log(`Current Element to be added in ... ${a[j]}`);
      if (expectedSum - sum >= a[j]) {
        sum = sum + a[j];
        // console.log(`Updated Sum is ... ${sum}`);
        if (expectedSum == sum) {
          console.log(
            `------------------------------------------------------------------------------------------`
          );
          console.log(
            `******** For expected Sum of (${expectedSum}), desired sequence [${printDesiredSequence(
              a,
              i,
              j
            )}] with startIndex (${i}) & endIndex (${j})*********`
          );
          //   console.log(`Restart triggered....`);
          console.log(
            `------------------------------------------------------------------------------------------`
          );
          break;
        }
      } else {
        // console.log(
        //   `Current Delta ${expectedSum - sum} is less than next element ${
        //     a[j]
        //   } and limit crossed so terminating here...`
        // );
        // console.log(`Restart triggered....`);
        // console.log(
        //   `------------------------------------------------------------------------------------------`
        // );
        break;
      }
      j++;
      if (j == a.length) {
        // console.log(
        //   `No Desired sequence found @ startIndex ${i} and endIndex ${j}`
        // );
      }
      //   console.log(
      //     `------------------------------------------------------------------------------------------`
      //   );
    }
  }
};
/**
 * Iterate over the array with n elements
 * user inner loop to iterate over n elements from 1 to n
 * check for the delta if that's greater than the next element
 * will add this to the sum 
 * @param {*} expectedSum 
 * @param {*} array 
 */

function subArraySum2(expectedSum, array) {
  for (var i = 0; i < array.length; i++) {
    let sum = array[i];
    // console.log(`Starting with ${sum}..`);
    for (var j = i + 1; j < array.length; j++) {
      sum += array[j];
      // console.log(`Added ${array[j]} in the current sum ... ${sum}..`);
      if (expectedSum - sum >= array[j]) {
        // console.log(`Delta that remains ... ${expectedSum - sum}`);
        continue;
      } else if (expectedSum == sum) {
        console.log(`start .. ${i}, end...${j}`);
        break;
      }
    }
  }
}

subArraySum(12, [1, 2, 3, 7, 5]);
subArraySum2(12, [1, 2, 3, 7, 5]);

subArraySum(6, [1, 2, 3, 7, 5]);
subArraySum2(6, [1, 2, 3, 7, 5]);

subArraySum(14, [1, 2, 31, 7, 5, 2]);
subArraySum2(14, [1, 2, 31, 7, 5, 2]);

subArraySum(15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
subArraySum2(15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
