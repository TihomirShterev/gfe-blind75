// tags: [Binary Tree] [Depth-First Search] [Recursion]

// KEY LOGIC:
// // take the first element from the preorder array; this is the root.
// // find the index of the root in the inorder array.
// // elements to the left of this index in inorder form the left subtree;
// // elements to the right form the right subtree.
// // recursively repeat for both subtrees.

// depth-first search pre-order, time -> O(n), space -> O(n)
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const binaryTreeRebuildingFromTraversals = (preorder, inorder) => {
  let preorderIndex = 0;
  // Map for lookups, because of its O(1) time complexity, while findIndex() is O(n)
  // that is crucial when recursively searching
  const inorderMap = new Map();
  inorder.forEach((val, i) => inorderMap.set(val, i));

  const buildTree = (left, right) => {
    // base case
    if (left > right) {
      return null;
    }

    // find node value
    // inc preorder index to get "root" node of next subtree for next recursive call
    const nodeVal = preorder[preorderIndex++];
    // generate node
    const node = new TreeNode(nodeVal);
    // find inorder index to split node's left and right subtrees
    const inorderIndex = inorderMap.get(nodeVal);
    node.left = buildTree(left, inorderIndex - 1);
    node.right = buildTree(inorderIndex + 1, right);
    return node;
  };

  return buildTree(0, inorder.length - 1);
};

// Constraints
// 1 <= Number of nodes <= 1000
// 1 <= TreeNode.val <= 1,000,000
// preorder and inorder contain unique values
console.log(
  'BST: ',
  binaryTreeRebuildingFromTraversals([3, 1, 2, 6, 5, 9], [1, 2, 3, 5, 6, 9])
); // BST:  TreeNode {val: 3, left: TreeNode, right: TreeNode}
