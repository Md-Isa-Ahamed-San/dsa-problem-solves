
var minimumTimeToInitialState = function (word, k) {
  let theWord = "";
  let tempWord = word;
  let num = k;
  let count = 0;
  if (word.length < k) {
    return 0;
  }
  //   while (theWord !== word) {
  for (let i = 0; i < 100; i++) {
    //for 1 character is same

    if (
      tempWord.slice(0, k) ===
      tempWord.slice(tempWord.length - k, tempWord.length)
    ) {
      console.log("first :", tempWord.slice(0, k));
      console.log(
        "last :",
        tempWord.slice(tempWord.length - k, tempWord.length)
      );
    }
    if (tempWord[0] === tempWord[tempWord.length - 1]) {
      const addPart = tempWord.slice(1, k + 1);
      tempWord = tempWord.substring(k).concat(addPart);

      //   console.log("same last:", tempWord.substring(k).concat(addPart));
        ++count;
      //   console.log("theWord in same last:", tempWord);
    } else {
      const addPart = tempWord.slice(0, k);
      tempWord = tempWord.substring(k).concat(addPart);
      //   console.log("not same last:", tempWord.substring(k).concat(addPart));
        ++count;
      //   console.log("theWord in not same last:", tempWord);
    }
    if (tempWord === word) {
      break;
    }
  }

  //   }
  console.log("count is ", count);
};
minimumTimeToInitialState("abacaba", 4);

// abcdefgh

// defghabc
// ghabcdef
// bcdefgha
// efghabcd
// habcdefg
// cdefghab
// fghabcde
// abcdefgh

// defgh   abcde
// gh      ab

