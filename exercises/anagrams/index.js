// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //String Solution
  //remove characters, lowercase, and resort string
  //   const reSort = (str) => {
  //     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  //   };
  //   return reSort(stringA) === reSort(stringB);

  //Object Solution
  //   convert str to object
  const strToObj = (str) => {
    const strMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      !strMap[char] ? (strMap[char] = 1) : strMap[char]++;
    }
    return strMap;
  };

  const objA = strToObj(stringA);
  const objB = strToObj(stringB);

  //compare 'length' of the objects
  if (Object.keys(stringA).length === Object.keys(stringB).length) {
    //iterate through the object
    for (let char in objA) {
      if (objA[char] !== objB[char]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = anagrams;
