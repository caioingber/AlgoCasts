// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //split string into array, call reverse() method and rejoin array as string
  //solution #1
  //   return str.split("").reverse().join("");

  //solution #2
  //   let reverse = "";
  //   for (let char of str) {
  //     reverse = char + reverse;
  //   }
  //   return reverse;

  //solution #3
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

module.exports = reverse;
