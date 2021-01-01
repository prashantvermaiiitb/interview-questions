/**
 * Checking whether the permutation of string is a palindrome or not.
 */
function isPermutationPalindrome(input, approach) {
  let frequencyTbl;
  switch (approach) {
    case 1:
      frequencyTbl = buildCharacterFrequencyTable(input);
      //   console.log(frequencyTbl);
      return checkMaxOneOdd(frequencyTbl);
    case 2:
      return checkIsPermutationPalindrome(input);
    case 3:
      let bitVector = checkIsPermutationPalindromeUsingBitVector(input);
      return bitVector === 0 || isOnly1BitSet(bitVector);
  }
}
function checkIsPermutationPalindromeUsingBitVector(input) {
  let bitVector = 0;
  for (let i = 0; i < input.length; i++) {
    let index = getCharacterNumber(input.charCodeAt(i));
    bitVector = toggleBitVector(bitVector, index);
  }
  return bitVector;
}
/**
 * Checking if only 1 bit is set
 * @param {*} bitVector
 */
function isOnly1BitSet(bitVector) {
  return (bitVector & (bitVector - 1)) === 0;
}
/**
 * updating the bitvector
 * @param {*} bitVector
 * @param {*} index
 */
function toggleBitVector(bitVector, index) {
  if (index < 0) return bitVector;

  let mask = 1 << index;
  if ((bitVector & mask) === 0) {
    bitVector |= mask; //5+2
  } else {
    bitVector &= ~mask; // 5-2
  }
  return bitVector;
}

/**
 * Merging all the functions in 1
 * @param {*} input
 */
function checkIsPermutationPalindrome(input) {
  let countOdd = 0,
    character;
  let frequencyTbl = new Array("z".charCodeAt(0) - "a".charCodeAt(0) + 1).fill(
    0
  );

  for (let i = 0; i < input.length; i++) {
    character = getCharacterNumber(input.charCodeAt(i));
    // console.log(character);
    if (character !== -1) {
      frequencyTbl[character]++;
      if (frequencyTbl[character] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }
  //   console.log(frequencyTbl, countOdd);
  return countOdd <= 1;
}

/**
 * Need to see the ASCII value for the character.
 * @param {*} character
 */
function getCharacterNumber(character) {
  let a = "a".charCodeAt(0);
  let z = "z".charCodeAt(0);
  if (a <= character && character <= z) {
    return character - a;
  }
  return -1;
}

/**
 * Building character array from the string.
 * @param {*} input
 */
function buildCharacterFrequencyTable(input) {
  let frequencyTbl = new Array("z".charCodeAt(0) - "a".charCodeAt(0) + 1).fill(
    0
  );
  for (let i = 0; i < input.length; i++) {
    let character = getCharacterNumber(input.charCodeAt(i));
    // console.log(`${character} for ${input.charCodeAt(i)}`);
    if (character !== -1) {
      frequencyTbl[character]++;
    }
  }
  return frequencyTbl;
}
/**
 * check whether there is only 1 element with odd count.
 * We are only bothered about the count of the odd number.
 * @param {*} frequencyTbl
 */
function checkMaxOneOdd(frequencyTbl) {
  let found = false;
  for (let i = 0; i < frequencyTbl.length; i++) {
    if (frequencyTbl[i] % 2 === 1) {
      if (found) {
        return false;
      }
      found = true;
    }
  }
  return true;
}

console.log(isPermutationPalindrome("tactcoapapa", 1));
console.log(isPermutationPalindrome("prashant", 1));
console.log(isPermutationPalindrome("aaebcc", 1));
console.log("-------------------------");
console.log(isPermutationPalindrome("tactcoapapa", 2));
console.log(isPermutationPalindrome("prashant", 2));
console.log(isPermutationPalindrome("aaebcc", 2));
console.log("-------------------------");
console.log(isPermutationPalindrome("tactcoapapa", 3));
console.log(isPermutationPalindrome("prashant", 3));
console.log(isPermutationPalindrome("aaebcc", 3));
