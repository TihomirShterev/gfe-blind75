// tags: [Array] [Hashmap] [Sorting] [Bucket Sort]

// brute-force, time -> O(n lon n), space -> O(1)
// const mostCommonElements = (numbers, k) => {
//   const n = numbers.length;

//   // early return
//   if (n === 1) {
//     return [numbers[0]];
//   } else if (n === k) {
//     return numbers;
//   }

//   // count each number occurences
//   // init hashmap
//   const countMap = {};

//   // loop
//   for (const curr of numbers) {
//     // if curr in countMap, count++
//     if (curr in countMap) {
//       countMap[curr]++;
//     } else {
//       // else countMap[curr] = 1
//       countMap[curr] = 1;
//     }
//   }

//   // find the `k` most freq nums
//   // sort hashmap by value count desc
//   // slice the first `k` elements
//   // return their keys
//   Object.entries(countMap)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map(([key]) => Number(key));

//   return result;
// };

// optimal (using bucket sort (Array indices)), time -> O(n), space -> O(n)
const mostCommonElements = (numbers, k) => {
  const n = numbers.length;

  // early return
  if (n === 1) {
    return [numbers[0]];
  } else if (n === k) {
    return numbers;
  }

  // count each number occurences
  // init hashmap
  const countMap = {};

  // loop numbers
  for (const curr of numbers) {
    // if curr in countMap, count++
    if (curr in countMap) {
      countMap[curr]++;
    } else {
      // else countMap[curr] = 1
      countMap[curr] = 1;
    }
  }

  // init 'buckets' (the higher the index, the more frequent the number)
  const buckets = Array.from({ length: n + 1 }, () => []);

  // loop countMap
  for (const key in countMap) {
    // take count and use it as bucket index
    const countIndex = countMap[key];
    // fill 'bucket' at countIndex
    buckets[countIndex].push(Number(key));
  }

  // the top k elements are the last k elements in the flattened buckets
  return buckets
    .filter((b) => b.length > 0)
    .slice(-k)
    .flat();
};

// Constraints
// // 1 <= numbers.length <= 1000
// // -10,000 <= numbers[i] <= 10,000
// // 1 <= k <= Number of unique elements in numbers
// // The solution is guaranteed to have a unique result
// // The order of the result does not matter
// happy path
console.log(mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2)); // [4, 5]
console.log(mostCommonElements([7, 7, 7, 8, 8, 9, 9, 9], 3)); // [7, 9, 8] or [8, 7, 9]
// edge cases
console.log(mostCommonElements([10, 10, 10, 10, 10], 1)); // [10]
console.log(mostCommonElements([10], 1)); // [10]
console.log(mostCommonElements([2, 1, 3, 4], 4)); // [2, 1, 3, 4]
