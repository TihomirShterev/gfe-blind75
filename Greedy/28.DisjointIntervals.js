// tags: [Array] [Sorting] [Greedy]

// time -> O(n log n), space -> O(1)
const disjointIntervals = (intervals) => {
  const n = intervals.length;

  // early return
  if (n <= 1) {
    return 0;
  }

  // sort by earliest end for min overlapping count
  intervals.sort((a, b) => a[1] - b[1]);
  let overlappingCount = 0;
  // track last non-overlapping end
  let lastNonOverlappingEnd = 0;

  // loop intervals
  for (const [start, end] of intervals) {
    if (lastNonOverlappingEnd <= start) {
      lastNonOverlappingEnd = end;
    } else {
      overlappingCount++;
    }
  }

  return overlappingCount;
};

// Constraints
// 0 <= intervals.length <= 100
// intervals[i].length == 2
// 0 <= start <= end <= 10,000
// happy path
console.log(
  disjointIntervals([
    [1, 5],
    [2, 3],
    [3, 4],
    [4, 6],
  ])
); // 1
console.log(
  disjointIntervals([
    [1, 15],
    [3, 5],
    [6, 8],
    [8, 10],
    [9, 11],
  ])
); // 2
// sad path
console.log(
  disjointIntervals([
    [1, 4],
    [4, 8],
  ])
); // 0
