// tags: [Array] [Binary Search]

// v.1 GFE solution, time -> O(log n), space -> O(1)
// const smallestInRotatedArray = (numbers) => {
//   const n = numbers.length;
//   // init boundary indices
//   let leftMost = 0;
//   let rightMost = n - 1;

//   // early return
//   if (n === 1 || numbers[leftMost] < numbers[rightMost]) {
//     return numbers[0];
//   }

//   let min = Number.MAX_SAFE_INTEGER;

//   // loop until ends MEET
//   while (leftMost <= rightMost) {
//     // find middle
//     const middle = Math.floor((leftMost + rightMost) / 2);

//     // check if left side is sorted half by comparing left-most and middle values
//     if (numbers[leftMost] <= numbers[middle]) {
//       // save sorted side min
//       min = Math.min(min, numbers[leftMost]);
//       // exclude sorted side from next search
//       leftMost = middle + 1;
//     } else {
//       min = Math.min(min, numbers[middle]);
//       rightMost = middle - 1;
//     }
//   }

//   return min;
// };

// v.2 Gemini AI solution (preferred), time -> O(log n), space -> O(1)
const smallestInRotatedArray = (numbers) => {
  const n = numbers.length;
  // init boundary indices
  let leftMost = 0;
  let rightMost = n - 1;

  // early return
  if (n === 1 || numbers[leftMost] < numbers[rightMost]) {
    return numbers[0];
  }

  // loop until ends CROSS
  while (leftMost < rightMost) {
    // find middle
    const middle = Math.floor((leftMost + rightMost) / 2);

    // if middle value is greater than right-most value, min is defo on the right side
    if (numbers[middle] > numbers[rightMost]) {
      // exclude left side from next search
      leftMost = middle + 1;
    } else {
      // else min is either mid, or on the left side
      rightMost = middle;
    }
  }

  return numbers[leftMost];
};

// Constraints
// 1 <= numbers.length <= 1000
// -10,000 <= numbers[i] <= 10,000
// `numbers` is rotated, but also sorted, and contains unique integers
// Develop an algorithm that runs in O(log n) time. -> no brute-force
// happy path
// console.log(smallestInRotatedArray([6, 7, 8, -5, -4, 2])); // -5
console.log(smallestInRotatedArray([-4, 2, 6, 7, 8, -5])); // -5
// console.log(smallestInRotatedArray([7, 8, -5, -4, 2, 6])); // -5
// edge case
console.log(smallestInRotatedArray([1, 2, 3, 4])); // 1
console.log(smallestInRotatedArray([2])); // 2
