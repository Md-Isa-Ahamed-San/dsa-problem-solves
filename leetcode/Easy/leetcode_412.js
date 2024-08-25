var fizzBuzz = function (n) {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push("FizzBuzz");
    }
    else if(i % 3 === 0){
        newArr.push("Fizz");
    }
    else if(i % 5 === 0){
        newArr.push("Buzz")
    }
    else newArr.push(`${i}`)
  }
//   console.log(newArr)
  return newArr;
};
fizzBuzz(5);
// fizzBuzz(15);
