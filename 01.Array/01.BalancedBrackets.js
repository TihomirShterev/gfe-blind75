// tags: [String] [Hashmap] [Array] [Stack]

// brute-force, time -> O(n^2), space -> O(1)
// const isBalancedBrackets = (str) => {
//   // early return
//   if (str.length % 2 === 1) {
//     return false;
//   }

//   // loop until no more pairs
//   while (str.includes('()') || str.includes('[]') || str.includes('{}')) {
//     // remove pairs starting most deeply nested pair
//     str = str.replace('()', '').replace('[]', '').replace('{}', '');
//   }

//   // if str is empty, brackets are balanced -> return true
//   // else -> return false
//   return str.length === 0;
// };

// optimal, time -> O(n), space -> O(n)
const isBalancedBrackets = (str) => {
  // early return
  if (str.length % 2 === 1) {
    return false;
  }

  // define bracket map
  const bracketMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  // lifo + going deeper -> stack
  const bracketStack = [];

  // iterate just once
  for (const char of str) {
    const charOpeningBracket = bracketMap[char];

    // if char is closing bracket, take the last opening bracket in of the stack
    if (charOpeningBracket) {
      const lastOpeningBracket = bracketStack.pop();

      // if it mismatches the corresponding opening bracket of the char
      // in the bracket map, return false
      if (lastOpeningBracket !== charOpeningBracket) {
        return false;
      }
    } else {
      // else push in stack
      bracketStack.push(char);
    }
  }

  // if stack is empty, brackets balanced -> return true
  // else return false
  return bracketStack.length === 0;
};

// constraints: 1 <= str.length && str.length <= 1000
// happy path
console.log(isBalancedBrackets('{{{[]}}}()')); // true
// sad path
console.log(isBalancedBrackets('{{{')); // false
console.log(isBalancedBrackets('{[}]')); // false
// edge case
console.log(isBalancedBrackets('()')); // true
