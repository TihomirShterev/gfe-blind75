// tags: [Array] [Dynamic Programming]

// time -> O(n*t), space -> O(t), `t` stands for "target"
const minimumCoinsForChange = (coins, target) => {
  // early return
  if (target === 0) {
    return 0;
  }

  // init dp array with value greater than `target` (e.g. Infinity) for each index
  const dp = Array(target + 1).fill(Infinity);
  // base case: no coins for reaching `0`
  dp[0] = 0;

  // loop through all possible amounts from 1 to target
  for (let i = 1; i <= target; i++) {
    // loop coins
    for (const coin of coins) {
      // if curr coin can contribute to curr amount `i`,
      if (i - coin >= 0) {
        // update dp[i] with min of its curr value or `dp[i - coin] + 1`
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); // `+ 1` increments the min coin count
      }
    }
  }

  // if last dp value wasn't overwritten (it's still Infinity), target in not reachable
  // else, return last dp value
  return dp[target] === Infinity ? -1 : dp[target];
};

// Constraints
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 1,000,000
// 0 <= target <= 10,000
// happy path
console.log(minimumCoinsForChange([3, 7, 4], 14)); // 2
// sad path
console.log(minimumCoinsForChange([2, 2], 3)); // -1
// edge case
console.log(minimumCoinsForChange([1], 0)); // 0
