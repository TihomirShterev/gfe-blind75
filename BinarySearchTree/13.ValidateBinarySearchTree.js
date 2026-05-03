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
// console.log('myBstInstance: ', myBstInstance);

// solution v.1: depth-first search pre-order, time -> O(n), space -> O(h)
const checkNodeInRange = (node, min, max) => {
  // recursion base case, null is considered a valid bst
  if (node === null) {
    return true;
  }

  // if node is out of range, tree is not valid
  if (node.val < min || max < node.val) {
    return false;
  }

  // go down and left until no more nodes
  const isLeftValid = checkNodeInRange(node.left, min, node.val);
  // go up, down and right until no more nodes
  const isRightValid = checkNodeInRange(node.right, node.val, max);
  return isLeftValid && isRightValid;
};

// solution v.2: depth-first search in-order, time -> O(n), space -> O(h)
const checkInOrder = (node, prev) => {
  // recursion base case, null is considered a valid bst
  if (node === null) {
    return true;
  }

  // search left subtree
  // if the left side is already invalid, stop and return false immediately
  if (checkInOrder(node.left, prev) === false) {
    return false;
  }

  // if current node value is not greater than previous, tree is not valid
  if (node.val <= prev) {
    return false;
  }

  prev = node.val;
  // search right subtree
  return checkInOrder(node.right, prev);
};

const binarySearchTreeValidate = (root) => {
  // early return
  if (root.left === null && root.right === null) {
    return true;
  }

  return checkNodeInRange(root, -Infinity, Infinity);
  // return checkInOrder(root, -Infinity);
};

// Constraints
// 1 <= Number of nodes <= 1000
// -1,000,000 <= TreeNode.val <= 1,000,000
// happy path
console.log(binarySearchTreeValidate(myBstInstance.root)); // true
