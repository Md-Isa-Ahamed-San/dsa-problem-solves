// @ts-nocheck

firstName = "nasrin";
secondName = "akther";

firstName === "nasrin"
  ? secondName === "akther"
    ? console.log("yes")
    : console.log("sec_no")
  : console.log("no");



if (firstName === "nasrin"){
    console.log(firstName)
    if (secondName==="akther"){
        console.log(secondName)
    }
    else{
        console.log("not akther")
    }

}
else{
    console.log("error")
}



//Falsy values
false
0
-0
""
null
undefined
NaN

//Truthy values

"0"          // non-empty string
"false"      // non-empty string
[]           // empty array
{}           // empty object
function(){} // any function

console.log(typeof (Infinity))
// -Infinity
n=null
if (false){
    console.log("abc")
}
else{
    console.log("abc")

}

name="nasrin"
if (name=== "nasrin"){  --> true=== true --> true
    console.log("abc")
}
else{
    console.log("not abc")
}


















