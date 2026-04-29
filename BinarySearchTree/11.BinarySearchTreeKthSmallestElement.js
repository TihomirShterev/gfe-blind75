// tags: [Array] [Binary Search Tree] [Depth-First Search] [Recursion]

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
myBstInstance.insert(7);
myBstInstance.insert(3);
myBstInstance.insert(10);
myBstInstance.insert(1);
myBstInstance.insert(5);
myBstInstance.insert(8);
myBstInstance.insert(12);
// console.log('myBstInstance: ', myBstInstance);

// solution: depth-first search in-order, time -> O(n), space -> O(n)
const dfsInOrder = (node, data) => {
  if (node) {
    // recursively keep searching, initially adding the left-most node
    dfsInOrder(node.left, data);
    data.push(node.val);
    dfsInOrder(node.right, data);
  }

  return data; // sorted asc
};

const kthSmallestElementInABst = (root, k) => {
  const result = dfsInOrder(root, []);
  return result[k - 1];
};

// Constraints
// 1 <= k <= Number of nodes <= 1000
// 1 <= TreeNode.val <= 1,000,000
console.log(kthSmallestElementInABst(myBstInstance.root, 2)); // 3
