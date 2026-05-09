// tags: [Binary Tree] [Depth-First Search] [Recursion]

// solution part 1: define `TreeNode`
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// boilerplate: for testing purposes, not needed for the in-browser IDE
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

// solution part 2: depth-first search pre-order, time -> O(n), space -> O(n)
const serializeImpl = (node, str) => {
  // base case: if node is null, add "null," to the string
  if (node === null) {
    str += 'null,';
  } else {
    str += node.val + ',';
    str = serializeImpl(node.left, str);
    str = serializeImpl(node.right, str);
  }

  return str;
};

const serializeBinaryTree = (root) => {
  return serializeImpl(root, '');
};

const deserializeImpl = (dataList) => {
  // base case
  if (dataList[0] === 'null') {
    dataList.shift(); // move to next val for next recursive call
    return null;
  }

  // init node
  const node = new TreeNode(Number(dataList[0]));
  dataList.shift(); // move to next val for next recursive call
  node.left = deserializeImpl(dataList);
  node.right = deserializeImpl(dataList);
  return node;
};

const deserializeBinaryTree = (data) => {
  return deserializeImpl(data.split(','));
};

// Constraints
// 1 <= Number of nodes <= 10,000
// 1 <= TreeNode.val <= 1,000,000
console.log(serializeBinaryTree(myBstInstance.root));
// 10,5,2,1,null,null,3,null,null,8,null,null,15,12,null,null,20,null,null,

console.log(
  deserializeBinaryTree(
    '10,5,2,1,null,null,3,null,null,8,null,null,15,12,null,null,20,null,null,'
  )
); // TreeNode {val: 10, left: TreeNode, right: TreeNode}
