// tags: [Array] [Dynamic Programming]

// time -> O(n*t), space -> O(t), `t` stands for "target"
const combinationTargetSum = (numbers, target) => {
  // early return
  if (target === 0) {
    return 1;
  } else if (numbers.length === 1 && numbers[0] > target) {
    return 0;
  }

  // init dp arr, filled with combo counters for each index
  const dp = Array(target + 1).fill(0);
  // base case: just one combo for reaching a sum of `0`
  dp[0] = 1;

  // build up (loop) from min sum `1` to target
  for (let combSum = 1; combSum <= target; combSum++) {
    // consider (loop) all numbers
    for (const num of numbers) {
      // if num can contribute, add the combos for the remaining sum
      // to the current sum's combos
      if (combSum - num >= 0) {
        dp[combSum] += dp[combSum - num];
      }
    }
  }

  // return last dp value
  return dp[target];
};

// Constraints
// 1 <= numbers.length <= 12
// 1 <= numbers[i] <= 1,000,000
// 0 <= target <= 10,000
// numbers are unique
// happy path
console.log(combinationTargetSum([1, 2, 3], 4)); // 7
// (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (1, 3), (2, 1, 1), (2, 2), (3, 1)
// sad path
console.log(combinationTargetSum([7], 2)); // 0
// edge case
console.log(combinationTargetSum([1, 1, 2], 0)); // 1
