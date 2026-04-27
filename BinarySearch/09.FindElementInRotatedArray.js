// tags: [Array] [Binary Search]

// KEY LOGIC:
// in a rotated array one of the sides is always sorted - check which
// // if the left-most element is less than or equals to the middle one, the left side is sorted
// // check if target is on the sorted side
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
  let leftMost = 0;
  let rightMost = n - 1;

  // loop
  while (leftMost <= rightMost) {
    // find middle index of array
    const middle = Math.floor((leftMost + rightMost) / 2);

    // check if target matches middle element
    if (target === numbers[middle]) {
      return middle;
    }

    if (numbers[leftMost] <= numbers[middle]) {
      // if target is located on the left, move the right boundary just before the middle
      if (numbers[leftMost] <= target && target <= numbers[middle]) {
        rightMost = middle - 1;
      } else {
        // else move the left boundary just after the middle
        leftMost = middle + 1;
      }
    } else {
      if (numbers[middle] <= target && target <= numbers[rightMost]) {
        leftMost = middle + 1;
      } else {
        rightMost = middle - 1;
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
