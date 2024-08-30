function insertAtRightPosition(value, stk) {
  if (stk.length === 0 || value > stk[stk.length - 1]) {
    stk.push(value);
  } else {
    let topElement = stk.pop();
    insertAtRightPosition(value, stk);
    stk.push(topElement);
  }
}
const sortStackRecursion = (stk) => {
  function sortt(stk) {
    if (stk.length === 0) return 0;
    let poppedValue = stk.pop();
    console.log("🚀 ~ sortt ~ poppedValue:", poppedValue);
    sortt(stk);
    insertAtRightPosition(poppedValue, stk);
  }
  sortt(stk);
//   console.log(stk)
  return stk;
};
sortStackRecursion([11, 2, 32, 3, 41]);
