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
myBstInstance.insert(1);
myBstInstance.insert(8);
myBstInstance.insert(12);
myBstInstance.insert(20);

// solution: depth-first search pre-order time -> O(n), space -> O(h)
const binaryTreeFlip = (root) => {
  // base case: if node is null, return null
  if (root === null) {
    return null;
  }

  // swap the left and right of current node
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  // recursively keep swapping
  binaryTreeFlip(root.left);
  binaryTreeFlip(root.right);
  return root;
};

// Constraints
// 1 <= Number of nodes <= 100
// -100 <= TreeNode.val <= 100
console.log(binaryTreeFlip(myBstInstance.root)); // output: inverted BST
