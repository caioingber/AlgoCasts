// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //   let chunk = [];
  //   let inner = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (inner.length < size) {
  //       inner.push(array[i]);
  //     }
  //     if (inner.length === size || i === array.length - 1) {
  //       chunk.push(inner);
  //       if (i !== array.length - 1) {
  //         inner = [];
  //       }
  //     }
  //   }
  //   return chunk;

  //solution #2
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
