
var isValidBST = function (root) {
  let curr = root;
  
  if (!curr) return;
  if (curr.right && (curr.val < curr.right.val)) {
    isValidBST(curr.right);
  }
  
  if (curr.right && (curr.val > curr.left.val)) {
    isValidBST(curr.left);
  }
 
  console.log("true")
  return true
};
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
class binarySearchTree {
  constructor() {
    this.root = null;
    this.length = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.length === null) {
      this.root = newNode;
      this.length++;
      return this;
    } else {
      let current = this.root;
      //inserting at the left of the root
      // console.log(current.val)
      while (true) {
        if (current.val > val) {
          if (current.left == null) {
            current.left = newNode;
            this.length++;
            return this;
          } else {
            current = current.left;
          }
        } else if (current.val < val) {
          if (current.right === null) {
            current.right = newNode;
            this.length++;
            return this;
          } else {
            current = current.right;
          }
        } else if (current.val === val) {
          return undefined;
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    if (!this.root) {
      console.log("empty tree");
    }
    while (true) {
      if (current.val === val) {
        console.log("found");
        return current;
      } else if (current.val < val) {
        if (current.right) {
          current = current.right;
        } else {
          console.log("not found");
          return null;
        }
      } else if (current.val > val) {
        if (current.left) {
          current = current.left;
        } else {
          console.log("not found");
          return this;
        }
      }
    }
  }
}
let bst = new binarySearchTree();
bst.insert(9);
bst.insert(7);
bst.insert(6);
bst.insert(8);
bst.insert(18);
bst.insert(81);
bst.insert(11);
//   bst.find(811);

// bst.insert(1);
//   console.log(bst);
// searchBST(bst.root, 7);
isValidBST(bst.root);
