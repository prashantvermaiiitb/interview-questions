/**
 * Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on...

Note: O(1) extra space is allowed. Also, try to modify the input array as required.

Input:
First line of input conatins number of test cases T. First line of test case contain an integer denoting the array size N and second line of test case contain N space separated integers denoting the array elements.

Output:
Output the modified array with alternated elements.

Constraints:
1 <=T<= 100
1 <=N<= 107
1 <=arr[i]<= 107

Example:
Input:
2
6
1 2 3 4 5 6
11 
10 20 30 40 50 60 70 80 90 100 110

Output:
6 1 5 2 4 3
110 10 100 20 90 30 80 40 70 50 60

Explanation:
Testcase 1: Max element = 6, min = 1, second max = 5, second min = 2, and so on... Modified array is : 6 1 5 2 4 3.
 */

function arrayShift(array, limit, startPos, startValue) {
  //   console.log(`start...`, array);
  for (var j = limit; j > startPos; j--) {
    array[j] = array[j - 1];
  }
  array[j] = startValue;
  //   console.log(`end arrangement ...`, array);
}
function arrangeArrayAlternatively(a) {
  let len = a.length,
    startPos = 0,
    loopLimit = Math.floor(len / 2);

  //startPos < number of elements;
  //   for (var i = 0; i < loopLimit; i++) {
  //     arrayShift(a, len - 1, startPos, a[len - 1]);
  //     startPos += 2;
  //   }

  while (startPos <= len) {
    arrayShift(a, len - 1, startPos, a[len - 1]);
    startPos += 2;
  }
}

// let a = [1, 2, 3, 4, 5, 6];
let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
console.log(`Array before arrangement ...`, a);
arrangeArrayAlternatively(a);
console.log(`Array after arrangement ...`, a);

let b = [12, 14, 20, 23, 89];
console.log(`Array before arrangement ...`, b);
arrangeArrayAlternatively(b);
console.log(`Array after arrangement ...`, b);
