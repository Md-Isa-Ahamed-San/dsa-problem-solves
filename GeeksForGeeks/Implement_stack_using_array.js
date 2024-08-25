"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(string => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_line = readLine().split(" ");
    let Q = parseInt(input_line[0]);
    let s = "";
    input_line = readLine().split(" ");
    let st = new MyStack();
    let i = 0;
    while (Q > 0) {
      let QueryType = parseInt(input_line[i++]);
      if (QueryType == 1) {
        st.push(parseInt(input_line[i++]));
      } else {
        s += st.pop();
        s += " ";
      }
      Q--;
    }

    console.log(s);
  }
}
class MyStack {
  constructor() {
    this.arr = new Array(1000);
    this.top = -1;
  }
  push(x) {}
  pop() {}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} x
 */
//Function to push an integer into the stack.
MyStack.prototype.push = function (x) {
    if (this.top === 999) {
        return -1;
      }
      this.arr[++this.top] = x;
};

/**
 * @returns {number}
 */

MyStack.prototype.pop = function () {
    if (this.top === -1) {
      
        return -1; 
      }
      let topElement = this.arr[this.top--];
      return topElement;

};

