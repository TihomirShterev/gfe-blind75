// tags: [Array] [Binary Search]

// KEY LOGIC:
// in a rotated array one of the sides is always sorted - check which
// // by comparing the values of the low, middle, and high elements
// // check which side the target is located at
// // // by comparing it with the sorted side boundary elements
// // and exclude the other side from the search (decreasing time complexity)
// iterate until:
// // either target matches middle element, i.e. target is found
// // or array boundary indices meet, i.e. target is not found

// time -> O(log n), space -> O(1)
const findInRotatedArray = (numbers, target) => {
  const n = numbers.length;

  // early return
  if (n === 1) {
    numbers[0] === target ? 0 : -1;
  }

  // init array boundary indices
  let low = 0;
  let high = n - 1;

  // loop
  while (low <= high) {
    // find middle index of array
    const mid = Math.floor((low + high) / 2);

    // check if target matches middle element
    if (target === numbers[mid]) {
      return mid;
    }

    if (numbers[low] <= numbers[mid]) {
      // if target is located on the left, move the high boundary just before the middle
      if (numbers[low] <= target && target <= numbers[mid]) {
        high = mid - 1;
      } else {
        // else move the low boundary just after the middle
        low = mid + 1;
      }
    } else {
      if (numbers[mid] <= target && target <= numbers[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

// Constraints
// 1 <= numbers.length <= 1000
// -10,000 <= numbers[i] <= 10,000
// -10,000 <= target <= 10,000
// `numbers` is rotated, but also sorted, and contains unique integers
// Develop an algorithm that runs in O(log n) time. -> no brute-force
// happy path
console.log(findInRotatedArray([0, 1, 2, 3, 4], 2));
console.log(findInRotatedArray([2, 3, 4, 0, 1], 0));
// edge case
console.log(findInRotatedArray([2], 2));
// sad path
console.log(findInRotatedArray([4], 2));
