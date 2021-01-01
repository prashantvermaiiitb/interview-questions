/**
 * There are 2 strings
 * - 1 character is being added [ aple | apple]
 * - 1 character is being replaced [apple | apxle]
 * - 1 character is being removed [apple | aple]
 */
function checkStringIsOneEditAway(string1, string2, approach) {
  switch (approach) {
    case 1:
      if (string1.length === string2.length) {
        // console.log("Use-case-1");
        return isOneCharacterReplaced(string1, string2);
      } else if (string1.length - 1 === string2.length) {
        // console.log("Use-case-2");
        return isCharacterRemovedOrAdded(string2, string1);
      } else if (string1.length + 1 === string2.length) {
        // console.log("Use-case-3");
        return isCharacterRemovedOrAdded(string1, string2);
      }
      break;
    case 2:
      return oneEditAway(string1, string2);
  }
}
/**
 * Checking that only 1 character should be removed from the strings
 * @param {*} shortString
 * @param {*} longString
 */
function isCharacterRemovedOrAdded(shortString, longString) {
  let index1 = 0,
    index2 = 0;
  while (index1 < shortString.length && index2 < longString.length) {
    if (shortString.charAt(index1) !== longString.charAt(index2)) {
      if (index1 !== index2) {
        //more than 1 non-matching character is found so return false
        return false;
      }
      //increment only when 1 character is replaced.
      index2++;
    } else {
      //increment both till you have the same character.
      index1++;
      index2++;
    }
  }
  return true;
}

/**
 * Checking whether only 1 character is replaced with some other one
 * - (apple)
 * - (apxle)
 * @param {*} string1
 * @param {*} string2
 */
function isOneCharacterReplaced(string1, string2) {
  let foundMatch = false;
  for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      if (foundMatch) {
        return false; // found more than 1 match for non-matching character
      }
      foundMatch = true;
    }
  }
  return foundMatch;
}

/**
 * Single function to check the status of the 2 strings
 */
function oneEditAway(first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false;
  }
  let shortString = first.length > second.length ? second : first;
  let longString = first.length > second.length ? first : second;

  let index1 = 0,
    index2 = 0,
    foundDifference = false;
  while (index1 < shortString.length && index2 < longString) {
    if (shortString.charAt(index1) !== longString.charAt(index2)) {
      if (foundDifference) return false;
      foundDifference = true;

      if (shortString.length === longString.length) {
        index1++;
      }
    } else {
      index1++; //increment the index for the short string
    }
    index2++; // always increment the larger string
  }
  return true;
}

console.log(
  `Is character removed in second string ("apxle", "aple") ... `,
  checkStringIsOneEditAway("apxle", "aple", 1)
);
console.log(
  `Is character replaced ("apxle", "apple") ...`,
  checkStringIsOneEditAway("apxle", "apple", 1)
);
console.log(
  `Is character removed in first string ("aple", "apple") ... `,
  checkStringIsOneEditAway("aple", "apple", 1)
);
console.log("----------------------------");

console.log(
  `Is character removed in second string ("apxle", "aple") ... `,
  checkStringIsOneEditAway("apxle", "aple", 2)
);
console.log(
  `Is character replaced ("apxle", "apple") ...`,
  checkStringIsOneEditAway("apxle", "apple", 2)
);
console.log(
  `Is character removed in first string ("aple", "apple") ... `,
  checkStringIsOneEditAway("aple", "apple", 2)
);
