var letterCombinations = function (digits) {
  if (digits === "") return [];
  let combination = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  let answers = [];
  let eachAns = [];
  function findAns(idx, digits, answers, eachAns, combination) {
    if (idx >= digits.length) {
      console.log(eachAns);
      answers.push(eachAns.join(""));
      return;
    }
    let num = parseInt(digits[idx]);
    let value = combination[num];

    for (let i = 0; i < value.length; i++) {
      eachAns.push(value[i]);
      findAns(idx + 1, digits, answers, eachAns, combination);
      eachAns.pop();
    }
  }
  findAns(0, digits, answers, eachAns, combination);
  //   console.log(answers)
  return answers;
};
letterCombinations("234");
