/**
 * checking whether string has unique character
 */
function checkUniqueCharacters(input, approach) {
  switch (approach) {
    case 1:
      //brute force approach
      for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
          if (input[i] === input[j]) {
            return false;
          }
        }
      }
      break;
    case 2:
      //sorting and sliding window
      let sortedInput = input.split("").sort();
      let i = 0,
        j = i + 1;
      while (j < sortedInput.length) {
        if (sortedInput[i] === sortedInput[j]) {
          return false;
        }
        i++;
        j++;
      }
      break;
    case 3:
      //extra [] with flag to be set and checked
      let flagSet = new Array(256).fill(false);
      for (let i = 0; i < input.length; i++) {
        let char = input.charCodeAt(i);
        if (flagSet[char]) {
          return false;
        }
        flagSet[char] = true;
      }
      break;
    case 4:
      //hashTable usage
      let map = {};
      for (let i = 0; i < input.length; i++) {
        if (map[input.charAt(i)]) {
          return false;
        }
        map[input.charAt(i)] = true;
      }
      break;
    case 5:
      //bitwise operator
      //@todo assuming only lower-case characters in the string
      let checker = 0;
      for (let i = 0; i < input.length; i++) {
        let val = input.charCodeAt(i) - 97;
        if ((checker & (1 << val)) > 0) {
          return false;
        }
        checker |= 1 << val;
      }
      break;
  }
  return true;
}

let input = "prashant";
console.log("Approach 1", checkUniqueCharacters(input, 1));
console.log("Approach 2", checkUniqueCharacters(input, 3));
console.log("Approach 3", checkUniqueCharacters(input, 3));
console.log("Approach 4", checkUniqueCharacters(input, 4));
console.log("Approach 5", checkUniqueCharacters(input, 5));
input = "brasil";
console.log("Approach 1", checkUniqueCharacters(input, 1));
console.log("Approach 2", checkUniqueCharacters(input, 3));
console.log("Approach 3", checkUniqueCharacters(input, 3));
console.log("Approach 4", checkUniqueCharacters(input, 4));
console.log("Approach 5", checkUniqueCharacters(input, 5));
