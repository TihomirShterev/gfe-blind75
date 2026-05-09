// tags: [Binary Tree] [Depth-First Search] [Recursion]

// boilerplate: for testing purposes, not needed for the in-browser IDE
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// notes:
// generating BST will fail the program
// tree must be unsorted
const myTreeNodeA = new TreeNode(12, null, null);
myTreeNodeA.left = new TreeNode(8, null, null);
myTreeNodeA.left.left = new TreeNode(3, null, null);
myTreeNodeA.left.right = new TreeNode(5, null, null);
myTreeNodeA.right = new TreeNode(6, null, null);
const myTreeNodeB = new TreeNode(8, null, null);
myTreeNodeB.left = new TreeNode(3, null, null);
myTreeNodeB.right = new TreeNode(5, null, null);

// solution: depth-first search pre-order, time -> O(n.m), space -> O(h)
const checkTreesMatch = (nodeA, nodeB) => {
  // base case: no more descendents
  if (nodeA === null || nodeB === null) {
    return nodeA === null && nodeB === null;
  }

  return (
    nodeA.val === nodeB.val &&
    checkTreesMatch(nodeA.left, nodeB.left) &&
    checkTreesMatch(nodeA.right, nodeB.right)
  );
};

const binaryTreeSubtree = (root, subRoot) => {
  // base case
  if (root === null) {
    return false;
  }

  if (checkTreesMatch(root, subRoot)) {
    return true;
  }

  // recursively compare subtrees against subRoot
  // if either subtree matches subRoot, return true
  return (
    binaryTreeSubtree(root.left, subRoot) ||
    binaryTreeSubtree(root.right, subRoot)
  );
};

// Constraints
// 0 <= Number of nodes <= 100
// -10,000 <= TreeNode.val <= 10,000
// happy path
console.log(binaryTreeSubtree(myTreeNodeA, myTreeNodeB)); // true
