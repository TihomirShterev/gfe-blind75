// tags: [Array] [Greedy]

// straight to optimal, because in this case, brute-force is over-complicated
// time -> O(n), space -> O(1)
const arrayReachableEnd = (numbers) => {
  const n = numbers.length;

  // early return
  if (n === 1) {
    return true;
  }

  // init current max jump
  let max = 0;

  // loop
  for (let i = 0; i < n; i++) {
    // if current position `i` is not reachable, return false
    if (max < i) {
      return false;
    }

    // calculate potential jump
    const potential = i + numbers[i];

    // if potential jump is greater than current max, assign it to max
    if (max < potential) {
      max = potential;
    }

    // if last position is reachable, return false
    if (n - 1 <= max) {
      return true;
    }
  }
};

// Constraints
// 1 <= numbers.length <= 10,000
// 0 <= numbers[i] <= 100,000
// happy path
console.log(arrayReachableEnd([4, 1, 0, 0, 2, 3])); // true
console.log(arrayReachableEnd([2, 3, 1, 1, 4])); // true
// edge case
console.log(arrayReachableEnd([0])); // true
// sad path
console.log(arrayReachableEnd([1, 0, 0, 0])); // false
console.log(arrayReachableEnd([4, 1, 0, 0, 2, 0, 0, 0])); // false
