// tags: [Binary Tree] [Depth-First Search] [Recursion]

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

const myBstInstanceA = new MyBst();
myBstInstanceA.insert(10);
myBstInstanceA.insert(5);
myBstInstanceA.insert(15);
myBstInstanceA.insert(1);
myBstInstanceA.insert(8);
myBstInstanceA.insert(12);
myBstInstanceA.insert(20);
const myBstInstanceB = new MyBst();
myBstInstanceB.insert(10);
myBstInstanceB.insert(15);
myBstInstanceB.insert(5);
myBstInstanceB.insert(8);
myBstInstanceB.insert(12);
myBstInstanceB.insert(20);
myBstInstanceB.insert(1);

// solution: depth-first search pre-order, time -> O(n), space -> O(h)
const dfsPreOrder = (node, data) => {
  if (node) {
    data.push(node.val);
    dfsPreOrder(node.left, data);
    dfsPreOrder(node.right, data);
  }

  return data;
};

const binaryTreeEqual = (a, b) => {
  // early return
  if (a === null && b === null) {
    return true;
  } else if (a === null || b === null) {
    return false;
  }

  const dataA = dfsPreOrder(a, []);
  const dataB = dfsPreOrder(b, []);

  // compare lengths
  if (dataA.length !== dataB.length) {
    return false;
  }

  // while dataA.length
  while (dataA.length) {
    // shift and compare
    const currA = dataA.shift();
    const currB = dataB.shift();

    if (currA !== currB) {
      return false;
    }
  }

  return true;
};

// Constraints
// 0 <= Number of nodes <= 100
// -10,000 <= TreeNode.val <= 10,000
// happy path
console.log(binaryTreeEqual(myBstInstanceA.root, myBstInstanceB.root)); // true
