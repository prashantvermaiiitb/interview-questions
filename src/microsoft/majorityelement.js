/**
 * Majority Element
 * 
 * Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.

Input:  
The first line of the input contains T denoting the number of testcases. The first line of the test case will be the size of array and second line will be the elements of the array.

Output: 
For each test case the output will be the majority element of the array. Output "-1" if no majority element is there in the array.

Constraints:
1 <= T<= 100
1 <= N <= 107
0 <= Ai <= 106

Example:
Input:
2
5
3 1 3 3 2
3
1 2 3

Output:
3
-1

Explanation:
Testcase 1: Since, 3 is present more than N/2 times, so it is the majority element.
 * 
 */
/**
 * create a json or some DS for storing the occurrence of the numbers
 * side by side check for the count to be >= majority count
 * @param {*} array
 */
function approach1(array) {
  let result = {},
    len = array.length,
    majorityElement = -1,
    majorityCount = Math.floor(len / 2);
  for (var i = 0; i < array.length; i++) {
    if (result[array[i]]) {
      result[array[i]] += 1;
      if (result[array[i]] > majorityCount) {
        majorityElement = array[i];
        break;
      }
    } else {
      result[array[i]] = 1;
    }
  }
  console.log(`Approach-1 majority Element is .. ${majorityElement}`);
}

/**
 * in the array just iterate and try to get the number and it's count
 * @param {*} array
 */
function approach2(array) {
  let len = array.length,
    majorityElement = -1,
    majorityCount = Math.floor(len / 2),
    tmpCount = 1,
    tmpMajorityElement = array[0];
  array.sort();
  //   console.log(array);
  for (var i = 1; i < len; i++) {
    if (tmpMajorityElement == array[i]) {
      tmpCount += 1;
      if (tmpCount > majorityCount) break;
    } else {
      tmpMajorityElement = array[i];
      tmpCount = 1;
    }
  }
  console.log(
    `Approach-2 majority Element is .. ${
      tmpCount >= majorityCount ? tmpMajorityElement : -1
    }`
  );
}
/**
 * Here as per the constraint defining an array of 10^5 with 0 as the initial value
 * raise the flag and increment it as you go ahead traversing the array.
 * @param {*} array
 */
function approach3(array) {
  let len = array.length,
    flag = false,
    majorityCount = Math.floor(len / 2);
  let flagArray = new Array(1000001).fill(0);
  for (var i = 0; i < len; i++) {
    flagArray[array[i]]++;
    if (flagArray[array[i]] > majorityCount && flag == false) {
      console.log(`majority element is ..`, array[i]);
      flag = true;
      break;
    }
  }
  if (flag == false) {
    console.log("There is no majority element hence .. -1");
  }
}

console.log("----------------------------------");
approach1([3, 1, 3, 3, 2]);
approach1([3, 1, 7, 3, 2, 9, 8, 2, 4, 6, 7, 3]);
approach1([3, 1, 7, 3, 2, 3, 3, 2, 4, 3, 7, 3]);
console.log("----------------------------------");
approach2([3, 1, 3, 3, 2]);
approach2([3, 1, 7, 3, 2, 9, 8, 2, 4, 6, 7, 3]);
approach2([3, 1, 7, 3, 2, 3, 3, 2, 4, 3, 7, 3]);
console.log("----------------------------------");
approach3([3, 1, 3, 3, 2]);
approach3([3, 1, 7, 3, 2, 9, 8, 2, 4, 6, 7, 3]);
approach3([3, 1, 7, 3, 2, 3, 3, 2, 4, 3, 7, 3]);
