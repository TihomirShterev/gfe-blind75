// tags: [Binary Search Tree] [Depth-First Search] [Recursion]

// boilerplate: for testing purposes, not needed for the in-browser IDE
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class MyBst {
  constructor() {
    this.root = null; // the top node
  }

  insert(val) {
    const myNodeInstance = new TreeNode(val, null, null);

    if (this.root === null) {
      this.root = myNodeInstance;
    } else {
      let temp = this.root;

      while (true) {
        // no duplicates and prevent infinite loop
        if (myNodeInstance.val === temp.val) {
          break;
        }

        if (myNodeInstance.val < temp.val) {
          if (temp.left === null) {
            temp.left = myNodeInstance;
          } else {
            temp = temp.left;
          }
        } else {
          if (temp.right === null) {
            temp.right = myNodeInstance;
          } else {
            temp = temp.right;
          }
        }
      }
    }
  }
}

const myBstInstance = new MyBst();
myBstInstance.insert(10);
myBstInstance.insert(5);
myBstInstance.insert(15);
myBstInstance.insert(2);
myBstInstance.insert(8);
myBstInstance.insert(12);
myBstInstance.insert(20);
myBstInstance.insert(3);
myBstInstance.insert(1);

// solution: depth-first search post-order, time -> O(n), space -> O(h)
const binaryTreeMaximumPathSum = (root) => {
  let result = -Infinity;

  const subtreeMaxSum = (node) => {
    // base case
    if (node === null) {
      return 0;
    }

    // dfs post-order, ignore negatives
    const leftSum = Math.max(subtreeMaxSum(node.left), 0);
    const rightSum = Math.max(subtreeMaxSum(node.right), 0);
    // save max
    result = Math.max(result, node.val + leftSum + rightSum);
    // return the greater path
    return node.val + Math.max(leftSum, rightSum);
  };

  subtreeMaxSum(root);
  return result;
};

// Constraints
// 1 <= Number of nodes <= 10,000
// -100 <= TreeNode.val <= 100
console.log(binaryTreeMaximumPathSum(myBstInstance.root)); // 58
// 8 + 5 + 10 + 15 + 20 = 58
