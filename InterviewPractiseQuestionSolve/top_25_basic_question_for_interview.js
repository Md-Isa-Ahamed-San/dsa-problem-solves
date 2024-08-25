// *1 reverse a sentence
function reverseWord(sentence) {
  let ans = sentence.split("").reverse().join("");
  // or

  console.log(ans);
}
// reverseWord("My name is Shan")
// *2 check if a element is array or not
let isArray = element => {
  console.log(Array.isArray(element));
};
// isArray([2,3,5,2])
// *3 make a array empty without reassign empty array
let emptyArr = arr => {
  arr.length = 0;
  console.log(arr);
};
// emptyArr([2, 4, 2, 21]);
// *4 check if a number is integer or not;
let checkIntOrNot = element => {
  // method 1
  console.log(Number.isInteger(element));
  // method 2
  let integers = element % 1;
  integers === 0 ? console.log("Integer") : console.log("Not integer");
};
// checkIntOrNot(44);

//*5 make a array double [1,2,3] --> [1,2,3,1,2,3]
let makeItDouble = arr => {
  let newArr = [...arr, ...arr];
  let newArr2 = arr.concat(arr);

  console.log(newArr, newArr2);
};
// makeItDouble([1,2,3])

//*6 make the number reverse
let reverseNumber = n => {
  let ans = Number(n.toString().split("").reverse().join(""));
  console.log(ans);
  //method 2
  let reverseNumber = 0;
  while (n > 0) {
    reverseNumber = reverseNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(reverseNumber);
};
// reverseNumber(12345);

let checkPalindrome = str => {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      console.log("NOT palindrome");
      return;
    }
    start++;
    end--;
  }
  console.log("Palindrome");
};
// checkPalindrome('abga')

// * 7 make capital first letter of the word;

let makeItCapital = word => {
  let firstLetter = word.slice(0, 1);
  let ans = firstLetter.toUpperCase() + word.slice(1);
  console.log(ans);
};
// makeItCapital('isa')

//*8 return a word with alphabetical order

let makeAlphabeticalOrder = str => {
  // let arr = str.split("")
  let arrWithascii = [];
  let sortedStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122) {
      arrWithascii.push(str.charCodeAt(i));
    }
  }
  arrWithascii.sort((a, b) => a - b);

  for (let i = 0; i < str.length; i++) {
    sortedStr += String.fromCharCode(arrWithascii[i]);
  }
  console.log(sortedStr);
};
// makeAlphabeticalOrder('my name is isa');

//*9 make capital of each word

let makeCapitalOfEachWord = sentence => {
  let wordArr = sentence.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].slice(0, 1).toUpperCase() + wordArr[i].slice(1);
  }
  console.log(wordArr.join(" "));
  //method 2
  let wordArr2 = sentence.split(" ").map(item => {
    return item.charAt(0).toUpperCase() + item.substring(1);
  });
  console.log("wordArr2:", wordArr2.join(" "));
};
// makeCapitalOfEachWord("my name is isa");

//*10 write a js function to get the number of occurrences of each letter in specified string
let occurrencesOfLetter = str => {
  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    //not counting spaces
    if (str[i] !== " ") {
      strObj[str[i]] = (strObj[str[i]] | 0) + 1;
    }
  }
  console.log(strObj);
  let strObj2 = {};
  str.split("").forEach(item => {
    //not counting spaces
    if (item !== " ") {
      strObj2[item] = (strObj2[item] | 0) + 1;
    }
  });
  console.log(strObj2);
};

// occurrencesOfLetter("my name is shan");
//loop
//* 11 loop through an array and get sum

let sumOfArr = arr => {
  // sum = 0;
  let sum = arr.reduce((acc, curr) => {
    if (typeof curr === "number") {
      acc += curr;
    }
    return acc;
  }, 0);

  console.log("🚀 ~ sum=arr.reduce ~ sum:", sum);
};

// Example usage
// sumOfArr([1, 2, '3', 4, '5', 'abc']);

// sumOfArr([1, 2, 3, 4]);

//* 12 loop an array of objects and remove all objects which don't have gender's value male
let sampleObj = [
  {
    name: "isa",
    gender: "male",
  },
  {
    name: "silvee",
    gender: "female",
  },
  {
    name: "shahana",
    gender: "female",
  },
  {
    name: "sumaiya",
    gender: "female",
  },
  {
    name: "sara",
    gender: "female",
  },
];
//! here in this method a copy of array is regenerating

let removeGender = type => {
  let gg = sampleObj.filter(item => item.gender !== type);
  console.log(gg);
};

//! alternate method where space complexity is O(1)

let removeGenderMethod2 = type => {
  let count = 0;
  sampleObj.forEach(item => {
    if (item.gender === type) {
      count++;
    }
  });
  for (let i = 1; i <= count; i++) {
    for (let j = 0; j < sampleObj.length; j++) {
      if (sampleObj[j].gender === type) {
        sampleObj.splice(j, 1);
        break;
      }
    }
  }

  console.log(sampleObj);
};
// removeGenderMethod2("male");

//* 13 write a function and return the exact type of the element . it can be anything
//* number, string, undefined,function,object etc

let checkExactType = element => {
  if (Number.isInteger(element)) {
    console.log("Integer");
    return;
  }
  if (typeof element === "number") {
    console.log("Float");
    return;
  }
  if (Array.isArray(element)) {
    console.log("Array");
    return;
  }
  console.log(typeof element);
};
// checkExactType({})
// checkExactType([])
// checkExactType(function (){})
// checkExactType(12)
// checkExactType(12.5)
// checkExactType("asdf")
// checkExactType(undefined)

//* most frequent element of the array

let mostFreq = arr => {
  let keyOfMaxVal = 0;
  let maxVal = 0;
  let theObj = {};
  arr.forEach(item => {
    theObj[item] = (theObj[item] || 0) + 1;
  });
  //method 1;
  for (let key in theObj) {
    if (theObj[key] > maxVal) {
      maxVal = theObj[key];
      keyOfMaxVal = key;
    }
  }

  //method 2
  let ans = Object.keys(theObj).reduce((acc, val) => {
    console.log(acc, val);
    return theObj[acc] < theObj[val] ? val : acc;
  });

  console.log(ans);
  // console.log(`${keyOfMaxVal}`, maxVal);
};
// mostFreq([2, 3, 4, 2, 2, 1, 2, 7, 8, 3, 2, 2, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7]);

//* union of two arrays
let unionOfTwoArr = (arr1,arr2)=>{
  console.log([...new Set(arr1.concat(...arr2))])
}
// unionOfTwoArr([2,4,6],[6,7,8,3,2])