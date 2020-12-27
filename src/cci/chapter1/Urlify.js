/**
 * idea is to replace the blank space with %20
 * input will string and actual string length
 */

function adjustArray(inputArray, spaceIndex, actualLength) {
  //validation
  for (let i = actualLength + 2; i > spaceIndex + 2; i--) {
    inputArray[i] = inputArray[i - 2];
  }
}
function insertSpaceCharacters(inputArray, spaceIndex) {
  inputArray[spaceIndex] = "%"; //replace
  inputArray[++spaceIndex] = "2"; //addition-1
  inputArray[++spaceIndex] = "S"; //addition-2
}
function urlify(input, actualLength, approach) {
  let inputArray = input.split(""); //getting array out of the input string

  switch (approach) {
    case 1:
      let spaceCount = 0;
      //   let inputArray = input.split(""); //getting array out of the input string

      for (let i = 0; i < actualLength; i++) {
        if (inputArray[i] === " ") {
          spaceCount++;
        }
      }
      //   console.log("number of spaces", spaceCount);
      let index = actualLength + 2 * spaceCount;
      //   console.log("index to start with ..", index);
      //marking the end of the array as \0
      for (let i = actualLength - 1; i >= 0; i--) {
        if (inputArray[i] == " ") {
          inputArray[index - 1] = "0";
          inputArray[index - 2] = "2";
          inputArray[index - 3] = "%";
          index = index - 3;
        } else {
          inputArray[index - 1] = inputArray[i];
          index--;
        }
      }
      return inputArray.join("");
      p;
    default:
      /**
       * get the length of the string
       * traverse the string till first space
       * get the index -> for the space
       * adjust the string by copying from last
       * insert the %2S
       * update the incrementor
       * continue;
       */
      //   let inputArray = input.split(""); //getting array out of the input string
      let len = inputArray.length;

      //validation of the input string
      /**
       * all blank space
       * there is no extra space for the %2S
       */
      if (input.trim().length === 0 || len === actualLength) return input;

      for (let i = 0; i < len; i++) {
        if (inputArray[i] === " ") {
          // no space for the putting space characters
          if (actualLength + 2 > len) {
            //@todo +2 can be configurable depending upon what to insert.
            return inputArray.join(""); //@todo ask what should I return in-case of failure.
          }
          adjustArray(inputArray, i, actualLength);
          insertSpaceCharacters(inputArray, i);
          actualLength += 2;
          i += 2;
          //   console.log("actual length ", actualLength);
        }
      }
      //   console.log(`actual length has become:`, actualLength);
      return inputArray.join("");
  }
}

let input = "mr john smith    ";
console.log("-------------------");
console.log(input);
console.log(urlify(input, 13));
console.log(urlify(input, 13, 1));
console.log("-------------------");

input = "       ";
console.log("-------------------");
console.log(input);
console.log(urlify(input, 0));
console.log(urlify(input, 0, 1));
console.log("-------------------");

input = " v  ";
console.log("-------------------");
console.log(input);
console.log(urlify(input, 1));
console.log(urlify(input, 1, 1));
console.log("-------------------");

input = " v   ";
console.log("-------------------");
console.log(input);
console.log(urlify(input, 1));
console.log(urlify(input, 1, 1));
console.log("-------------------");

input = "mr john smith  ";
console.log("-------------------");
console.log(input);
console.log(urlify(input, 13));
console.log(urlify(input, 13, 1));
console.log("-------------------");

input = "mr john smith";
console.log("-------------------");
console.log(input);
console.log(urlify(input, 13));
console.log(urlify(input, 13, 1));
console.log("-------------------");
