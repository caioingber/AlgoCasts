// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// let vow = ["a", "e", "i", "o", "u"];
	// let count = 0;
	// const strArr = str.split("");
	// strArr.forEach(letter => {
	// 	if (vow.includes(letter.toLowerCase())) {
	// 		count++;
	// 	}
	// });
	// return count;
	// let counter = 0;
	// const check = "aeiou";
	// for (let char of str.toLowerCase()) {
	// 	if (check.includes(char)) {
	// 		counter++;
	// 	}
	// }
	// return counter;

	const matches = str.match(/[aeiou]/gi);

	return matches ? matches.length : 0;
}

module.exports = vowels;
