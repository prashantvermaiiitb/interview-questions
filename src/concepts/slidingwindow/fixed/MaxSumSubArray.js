/**
 * finding out the maximum sum sub-array from the given array
 */

function maxSumSubArrayOfFixedSize(array, k) {
  let len = array.length,
    i = 0,
    j = 0,
    sum = 0,
    max = -Infinity;
  while (j < len) {
    sum += array[j];
    if (j - i + 1 == k) {
      //window size is being hit

      max = Math.max(max, sum); //getting maximum out of both
      sum -= array[i]; // removing old element
      i++; // moving the window
    }
    j++;
  }
  return max;
}

//k is the size so index will be k-1
function maxSumSubArray(array, k) {
  let max = -Infinity,
    sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    //window reached
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= array[i - (k - 1)];
    }
  }
  return max;
}

console.log("result is ", maxSumSubArrayOfFixedSize([1, 3, 5, -3, 7, 8], 3));
console.log(
  "result is ",
  maxSumSubArrayOfFixedSize([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3)
);

console.log("result is ", maxSumSubArray([1, 3, 5, -3, 7, 8], 3));
console.log("result is ", maxSumSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));
