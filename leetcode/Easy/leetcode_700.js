var searchBST = function (root, val) {
  let current = root;
  if (!current) {
    console.log("empty tree");
    return false;
  }
  while (current) {
    if (current.val === val) {
      console.log("found");
      return current;
    } else if (current.val < val) {
      current = current.right;
    } else if (current.val > val) {
      current = current.left;
    }
  }
  return null;
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
searchBST(bst.root, 7);
