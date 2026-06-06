// tags: [Array] [Prefix/Suffix]

// brute-force, time -> O(n^2), space -> O(n)
// const arrayProductExcludingCurrent = (numbers) => {
//   const n = numbers.length;
//   const zeros = numbers.filter((num) => num === 0);
//   let result = [];

//   // 1. if more than 1 zero, early return
//   if (zeros.length > 1) {
//     return Array.from({ length: n }, () => 0);
//   } else if (zeros.length === 1) {
//     // 2. if exactly 1 zero
//     // init indexOfZero
//     let indexOfZero = 0;
//     // init product
//     let product = 1;

//     // loop numbers
//     for (let i = 0; i < n; i++) {
//       const curr = numbers[i];

//       // if zero
//       if (curr === 0) {
//         // skip accumulation
//         // save its index
//         indexOfZero = i;
//       } else {
//         // else, accumulate
//         product *= curr;
//       }
//     }

//     // generate array
//     // position product at indexOfZero
//     result = Array.from({ length: n }, () => 0);
//     result[indexOfZero] = product;
//     return result;
//   }

//   // 3. no zeros
//   // track curr product
//   let currProduct = 1;

//   // loop numbers
//   for (let i = 0; i < n; i++) {
//     if (i !== 0) {
//       currProduct *= numbers[i - 1];
//     }

//     // track remainder product
//     let remainderProduct = 1;

//     // for each number loop the remainder of numbers array
//     for (let j = i + 1; j < n; j++) {
//       remainderProduct *= numbers[j];
//     }

//     // push curr * remainder product in result
//     result.push(currProduct * remainderProduct);
//   }

//   return result;
// };

// optimal (using prefix/suffix), time -> O(n), space -> O(1)
const arrayProductExcludingCurrent = (numbers) => {
  const n = numbers.length;

  // early return
  if (n === 2) {
    return [numbers[1], numbers[0]];
  }

  let zeroCount = 0;
  const result = Array.from({ length: n }, () => 1);
  let preProduct = 1;
  let sufProduct = 1;

  // loop
  for (let i = 0; i < n; i++) {
    // if 2 zeros, all products will be 0
    if (numbers[i] === 0) {
      zeroCount++;

      // early return
      if (zeroCount > 1) {
        return Array.from({ length: n }, () => 0);
      }
    }

    // accumulate left-right
    result[i] *= preProduct;
    preProduct *= numbers[i];
    // accumulate right-left
    result[n - 1 - i] *= sufProduct;
    sufProduct *= numbers[n - 1 - i];
  }

  return result;
};

// Constraints
// 2 <= numbers.length <= 1000
// -10 <= numbers[i] <= 10
// The product of any prefix or suffix of the numbers array is ensured to fit within a 32-bit integer
// Use of the division operator is prohibited
// happy path
console.log(arrayProductExcludingCurrent([1, 2, 3])); // [6, 3, 2]
console.log(arrayProductExcludingCurrent([1, 2, 3, 4])); // [24, 12, 8, 6]
// edge cases
console.log(arrayProductExcludingCurrent([2, 0, 3, 4, 5])); // [0, 120, 0, 0, 0]
console.log(arrayProductExcludingCurrent([0, 0, -1, 1])); // [0, 0, 0, 0]
