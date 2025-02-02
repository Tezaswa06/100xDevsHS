/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function stringMatching(str) {
  let arr = new Array(26).fill(0); // Create an array of size 26, initialized to 0.

  for (const char of str) {
    arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  return arr;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false; // If lengths are different, they can't be anagrams.
  }

  let arr1 = stringMatching(str1);
  let arr2 = stringMatching(str2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
