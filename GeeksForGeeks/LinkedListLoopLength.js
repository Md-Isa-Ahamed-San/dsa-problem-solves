countNodesinLoop(head);
{
  let count = 1;
  let current = head;
  let map = new Map();
  let prev = null;
  if (head.next && head.next === head) return 1;
  while (current) {
    if (map.has(current)) {
      let ans = map.get(prev) - map.get(current) + 1;
      return ans;
    }
    map.set(current, count);
    count++;
    prev = current;
    current = current.next;
  }
  return 0;
}
