// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   Linear runtime Solution i.e. iterative solution
//   let fibNum = [0];
//   for (let i = 0; i < n; i++) {
//     if (i < 1) {
//       fibNum.push(1);
//     } else {
//       fibNum.push(fibNum[i] + fibNum[i - 1]);
//     }
//   }
//   return fibNum[n];
//Recursive Solution --> exponential runtime
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);

// }

// Memoized Solution --> improved runtime on recursive solution

function memoize(fn) {
  //store all results into a 'cache' object
  const cache = {};
  return (...args) => {
    //has the function with this arg been called before? if so, just return the function with that arg
    if (cache[args]) {
      return cache[args];
    }
    //otherwise  take value from slowFib function and store it in cache object
    const res = fn.apply(this, args);
    cache[args] = res;

    return res;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
