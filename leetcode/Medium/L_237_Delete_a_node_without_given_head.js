var deleteNode = function(node) {
    let current = node;
    current.val = current.next.val;
    current.next = current.next.next
};
// Given that we cannot directly remove the target node by changing its previous node's
//  next pointer (because we don't have access to it), we can use a clever trick: copy the
//   value from the next node into the target node, and then remove the next node instead.
//    This effectively overwrites the target node's value with its successor's value, and 
//    then deleting the successor (which we have access to) achieves the goal of removing 
//    the target node's value from the list. The key realization here is that we're not
//     actually deleting the given node, but rather, we're making it a clone of the next
//      node in terms of value, then skipping over the next node, effectively removing its
//       presence from the list.