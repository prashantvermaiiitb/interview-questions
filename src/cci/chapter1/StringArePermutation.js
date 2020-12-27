/**
 * checking if 2 strings are permutation of each other.
 */
function checkIfStringArePermutation(input1, input2, approach) {
  if (input1.length !== input2.length) {
    return false;
  }
  switch (approach) {
    case 1:
      //sort the 2 strings and check if they are equal
      let sortedInput1 = input1.split("").sort().join("");
      let sortedInput2 = input1.split("").sort().join("");
      return sortedInput1 == sortedInput2;
    case 2:
      let countMap = new Array(256).fill(0);
      for (let i = 0; i < input1.length; i++) {
        if (countMap[input1.charCodeAt(i)]) {
          countMap[input1.charCodeAt(i)] += 1;
        } else {
          countMap[input1.charCodeAt(i)] = 1;
        }
      }
      //   console.log(countMap);
      for (let i = 0; i < input2.length; i++) {
        if (countMap[input2.charCodeAt(i)] === 0) {
          return false;
        } else {
          countMap[input2.charCodeAt(i)] -= 1;
          if (countMap[i] < 0) {
            return false;
          }
        }
      }
      return true;
  }
}

let input1 = "prashant",
  input2 = "shantpra";

console.log(`Approach 1`, checkIfStringArePermutation(input1, input2, 1));
console.log(`Approach 2`, checkIfStringArePermutation(input1, input2, 2));
