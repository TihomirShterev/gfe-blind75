// tags: [Array] [Sorting] [Set]

// brute-force, time -> O(n^2), space -> O(1)
// const findDuplicates = (numbers) => {
//   const n = numbers.length;

//    // early return
//    if (n === 1) {
//      return false;
//    }

//   // loop through numbers
//   for (let i = 0; i < n; i++) {
//     // for each number loop through the rest of the numbers
//     for (let j = i + 1; j < n; j++) {
//       // if match, return true
//       if (numbers[i] === numbers[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// optimal v.1 (using sorting), time -> O(n log n), space -> O(1)
// const findDuplicates = (numbers) => {
//    // early return
//    if (numbers.length === 1) {
//      return false;
//    }

//   // sort
//   numbers.sort((a, b) => a - b);

//   // loop through numbers
//   for (let i = 0; i < numbers.length - 1; i++) {
//     const curr = numbers[i];
//     const next = numbers[i + 1];
//     // if two consecutive numbers match, return true
//     if (curr === next) {
//       return true;
//     }
//   }

//   return false;
// };

// optimal v.2.1 (using Set), time -> O(n), space -> O(n)
// const findDuplicates = (numbers) => {
//   const n = numbers.length;

//   // early return
//   if (n === 1) {
//     return false;
//   }

//   // init Set
//   const seen = new Set();

//   for (const curr of numbers) {
//     // if Set has curr, return true
//     if (seen.has(curr)) {
//       return true;
//     }

//     // add curr in Set
//     seen.add(curr);
//   }

//   return false;
// };

// optimal v.2.2 (using Set), time -> O(1), space -> O(n)
const findDuplicates = (numbers) => new Set(numbers).size !== numbers.length;

// constraints: 
// // 1 <= numbers.length && numbers.length <= 10000
// // -1000000 <= numbers[i] && numbers[i] <= 1000000
// happy path
console.log(findDuplicates([10, 7, 0, 0, 9])); // true
// sad path
console.log(findDuplicates([10, 7, 0, 9])); // false
