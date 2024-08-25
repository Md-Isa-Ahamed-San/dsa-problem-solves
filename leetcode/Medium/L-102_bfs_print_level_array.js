var levelOrder = function (root) {
  if (root === null) return [];
  let curr = root;

  let queue = [root];

  let visited = [];
  while (queue.length > 0) {
    let currentLevel = queue; //taking value from main queue
    let currentLvlValQ = [];
    queue = []; //cleaning main queue to store next lvl elements

    while (currentLevel.length > 0) {
      let poppedNode = currentLevel.shift();
      currentLvlValQ.push(poppedNode.val);
      // queue.push(poppedNode.val)
      poppedNode.left && queue.push(poppedNode.left);
      poppedNode.right && queue.push(poppedNode.right);
    }
    visited.push(currentLvlValQ);
  }
  console.log(visited);
  return visited;
};
