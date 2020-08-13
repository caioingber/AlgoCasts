// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  debugger;
  let max = 0;
  let maxChar = "";
  const chars = {};
  // mapping string into object
  for (let char of str) {
    !chars[char] ? (chars[char] = 1) : chars[char]++;
  }
  // iterate through object to determine max value
  for (let prop in chars) {
    if (chars[prop] > max) {
      max = chars[prop];
      maxChar = prop;
    }
  }
  return maxChar;
}

module.exports = maxChar;
