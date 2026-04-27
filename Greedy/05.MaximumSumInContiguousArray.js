// tags: [Array] [Kadane's Algorithm] [Greedy]

// brute-force, time -> O(n^2), space -> O(1)
// const maxSumSubArray = (numbers) => {
//   const n = numbers.length;

//   // early return
//   if (n === 1) {
//     return numbers[0];
//   }

//   let result = Number.NEGATIVE_INFINITY;

//   // loop numbers
//   for (let i = 0; i < n; i++) {
//     // init max, reset for each iteration
//     let max = 0;

//     // nested loop for each number
//     for (let j = i; j < n; j++) {
//       // accumulate max
//       max += numbers[j];

//       // if max > result, result = max
//       if (max > result) {
//         result = max;
//       }
//     }
//   }

//   return result;
// };

// optimal (using Kadane's algorithm), time -> O(n), space -> O(1)
const maxSumSubArray = (numbers) => {
  const n = numbers.length;

  // early return
  if (n === 1) {
    return numbers[0];
  }

  let result = Number.NEGATIVE_INFINITY;
  let max = 0;

  // loop numbers
  for (const curr of numbers) {
    // update or start a new max
    max = Math.max(curr, curr + max);
    // if max > result, result = max
    result = Math.max(result, max);
  }

  return result;
};

// Constraints
// 1 <= numbers.length <= 10,000
// -10,000 <= numbers[i] <= 10,000
// happy path
console.log(maxSumSubArray([-1, 5, -3, 9, -11])); // 11
// edge case
console.log(maxSumSubArray([9])); // 9
