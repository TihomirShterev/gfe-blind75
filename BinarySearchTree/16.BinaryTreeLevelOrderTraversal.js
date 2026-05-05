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
myBstInstance.insert(null);
myBstInstance.insert(8);
myBstInstance.insert(12);
myBstInstance.insert(20);

// solution: depth-first search pre-order, time -> O(n), space -> O(h)
const binaryTreeLevelOrderTraversal = (root) => {
  const result = [];

  const traverseTree = (node, level) => {
    // base case
    if (node === null) {
      return;
    }

    // init level
    if (result.length === level) {
      result.push([]);
    }

    // add node value to corresponding level
    result[level].push(node.val);
    // recursively keep traversing and incrementing the level
    traverseTree(node.left, level + 1);
    traverseTree(node.right, level + 1);
  };

  traverseTree(root, 0);
  return result;
};

// Constraints
// 1 <= Number of nodes <= 10,000
// -100 <= TreeNode.val <= 100
console.log(binaryTreeLevelOrderTraversal(myBstInstance.root)); // [Array(1), Array(2), Array(4)]
