// tags: [Binary Search Tree]

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

      return temp;
    }
  }
}

const myBstInstance = new MyBst();
myBstInstance.insert(3);
myBstInstance.insert(1);
const treeNodeInstanceA = myBstInstance.insert(7);
myBstInstance.insert(null);
myBstInstance.insert(2);
const treeNodeInstanceB = myBstInstance.insert(6);
myBstInstance.insert(10);
// console.log('myBstInstance: ', myBstInstance);
// console.log('treeNodeInstanceA: ', treeNodeInstanceA);
// console.log('treeNodeInstanceB: ', treeNodeInstanceB);

// solution: time -> O(n), space -> O(1)
// KEY LOGIC: descendants are located on the left/right of their LCA, meaning: a <= LCA <= b
const BSTLowestCommonAncestor = (root, a, b) => {
  // make sure `b` is greater than `a`
  if (a.val > b.val) {
    [a, b] = [b, a];
  }

  // save the root to temp to be able to re-assign it
  let temp = root;
  let lcaFound = false;

  // navigate left/right until: a <= LCA <= b
  while (lcaFound === false) {
    if (a.val < temp.val && b.val < temp.val) {
      temp = temp.left;
    } else if (temp.val < a.val && temp.val < b.val) {
      temp = temp.right;
    } else {
      // a <= temp.val && temp.val <= b
      lcaFound = true;
    }
  }

  return temp;
};

// Constraints
// 1 <= Number of nodes <= 1000
// 1 <= TreeNode.val <= 1,000,000
// `a` and `b` are guaranteed to exist in the BST
// All TreeNode.val are unique within the tree
console.log(
  BSTLowestCommonAncestor(
    myBstInstance.root,
    treeNodeInstanceA,
    treeNodeInstanceB
  )
); // 7
