// tags: [Array] [Dynamic Programming] [Prefix/Suffix]

// brute-force, time -> O(n^2), space -> O(1)
// const maxProductSubArray = (numbers) => {
//   const n = numbers.length;

//   // early return
//   if (n === 1) {
//     return numbers[0];
//   }

//   let result = numbers[0];

//   for (let i = 0; i < n; i++) {
//     let acc = 1;

//     for (let j = i; j < n; j++) {
//       acc *= numbers[j];

//       if (acc > result) {
//         result = acc;
//       }
//     }
//   }

//   return result;
// };

// optimal v.1 (using DP), time -> O(n), space -> O(1)
// const maxProductSubArray = (numbers) => {
//   const n = numbers.length;

//   // early return
//   if (n === 1) {
//     return numbers[0];
//   }

//   // track max/min
//   let max = numbers[0];
//   let min = numbers[0];
//   let result = numbers[0];

//   // skip first index
//   for (let i = 1; i < n; i++) {
//     const curr = numbers[i];
//     const comparison = [curr, curr * max, curr * min];
//     // init temp, in order to use original max in Max.min
//     let tempMax = Math.max(...comparison);
//     min = Math.min(...comparison);
//     max = tempMax;

//     if (max > result) {
//       result = max;
//     }
//   }

//   return result;
// };

// optimal v.2 (using prefix/suffix), time -> O(n), space -> O(1)
const maxProductSubArray = (numbers) => {
  const n = numbers.length;

  // early return
  if (n === 1) {
    return numbers[0];
  }

  // init pre/suff product
  let preProduct = 1;
  let suffProduct = 1;
  // init result from the least possible number
  let result = Number.NEGATIVE_INFINITY; // or -Infinity

  for (let i = 0; i < n; i++) {
    // if 0 encountered, reset the product
    preProduct = (preProduct || 1) * numbers[i]; // left-to-right
    suffProduct = (suffProduct || 1) * numbers[n - 1 - i]; // vice versa
    result = Math.max(result, preProduct, suffProduct);
  }

  return result;
};

// Constraints:
// // 1 <= numbers.length && numbers.length <= 1000
// // -10 <= numbers[i] && numbers[i] <= 10
// happy path
console.log(maxProductSubArray([1, 2, -3, 5, 1])); // 5
console.log(maxProductSubArray([1, 2, -3, 0, 1])); // 2
// edge case
console.log(maxProductSubArray([2])); // 2
