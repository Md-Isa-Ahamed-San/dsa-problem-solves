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
  deleteNode(val) {
    let curr = this.root;
    while (true) {
      if (curr.val > val) {
        if (curr.left === null) {
          break;
        } else if (curr.left.val === val) {
          console.log("found. now deleting");
          return 0;
        } else {
          curr = curr.left;
        }
      } else if (curr.val < val) {
        if (curr.right === null) {
          break;
        }
      } else {
        return "Invalid Number";
      }
    }
    return "not found";
  }
  traverseBFS() {
    let queue = [];
    let visited = [];
    if (this.root === null) {
      return null;
    }
    queue.push(this.root);
    // console.log(queue)
    while (queue.length > 0) {
      let current = queue.shift();
      // console.log(current);
      visited.push(current.val);
      if (current?.left) {
        queue.push(current.left);
      }
      if (current?.right) {
        queue.push(current.right);
      }
      // console.log(queue)
    }
    console.log(visited);
    // return visited;
  }
  traverseDFS() {
    let current = this.root;
    let visited = [];
    let traversePreOrder = current => {
      visited.push(current.val);
      if (current?.left) {
        traversePreOrder(current.left);
      }
      if (current?.right) {
        traversePreOrder(current.right);
      }
    };
    traversePreOrder(current);
    console.log(visited);
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

bst.traverseDFS();

//      9
//   7      18
// 6   8  11   8
