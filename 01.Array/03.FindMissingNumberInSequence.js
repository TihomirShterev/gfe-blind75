// tags: [Array] [Sorting]

// brute-force (using sorting), time -> O(n log n), space -> O(1)
// const findMissingNumberInSequence = (numbers) => {
//   // sort asc [3,0,4,2,1] -> [0,1,2,3,4]
//   numbers.sort((a, b) => a - b);
//   const n = numbers.length;

//   // early returns
//   if (numbers[0] !== 0) {
//     return 0;
//   } else if (numbers[n - 1] !== n) {
//     return n;
//   }

//   // loop numbers
//   for (let i = 1; i < n; i++) {
//     // if i !== curr, return curr
//     if (i !== numbers[i]) {
//       return i;
//     }
//   }

//   return n;
// };

// optimal v.1 (using math sum), time -> O(n), space -> O(1)
// const findMissingNumberInSequence = (numbers) => {
//   const n = numbers.length;

//   // early return
//   if (n === 1) {
//     return 0;
//   }

//   let actualSum = 0;
//   let expectedSum = n;

//   // loop numbers
//   for (let i = 0; i < n; i++) {
//     actualSum += numbers[i];
//     expectedSum += i;
//   }

//   return expectedSum - actualSum;
// };

// optimal v.2 (using math sum), time -> O(n), space -> O(1)
const findMissingNumberInSequence = (numbers) => {
  const n = numbers.length;

  // early return
  if (n === 1) {
    return 0;
  }

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
};

// constraints:
// // 1 <= n && n <= 10,000
// // 0 <= numbers[i] && numbers[i] <= n
// happy path
console.log(findMissingNumberInSequence([3, 0, 1])); // 2
// edge cases
console.log(findMissingNumberInSequence([3, 0, 4, 2, 1])); // 5
console.log(findMissingNumberInSequence([1])); // 0
